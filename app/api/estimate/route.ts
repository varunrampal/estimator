import { NextResponse } from "next/server";
import { sendPlantBidEmail } from "@/lib/resend";

const acceptedTypes: Record<string, string[]> = {
  pdf: ["application/pdf", "application/octet-stream"],
  xls: ["application/vnd.ms-excel", "application/octet-stream"],
  xlsx: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/octet-stream"],
  csv: ["text/csv", "application/vnd.ms-excel", "text/plain", "application/octet-stream"],
  doc: ["application/msword", "application/octet-stream"],
  docx: ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/octet-stream"],
};
const validProjectTypes = new Set(["Landscape", "Restoration", "Municipal", "Civil", "Commercial", "Residential Development", "Environmental", "Other"]);
const validServices = new Set(["Plant Takeoff", "Plant Pricing", "Plant Sourcing", "Procurement Support", "Substitution Review", "Freight / Delivery Planning", "Complete Plant Estimate"]);
const maxFileBytes = 10 * 1024 * 1024;
const maxTotalBytes = 20 * 1024 * 1024;
const maxBodyBytes = 22 * 1024 * 1024;

function textValue(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === "string" ? value.replace(/[\u0000-\u001f\u007f]/g, "").trim() : "";
}

function invalid(message: string, status = 400) {
  return NextResponse.json({ message }, { status });
}

function safeFilename(filename: string) {
  return filename.replace(/[\\/]/g, "_").replace(/[^a-zA-Z0-9._-]/g, "_").replace(/^\.+/, "").slice(0, 120) || "project-document";
}

function hasExpectedSignature(content: Buffer, extension: string) {
  if (extension === "pdf") return content.subarray(0, 5).toString("ascii") === "%PDF-";
  if (extension === "xls" || extension === "doc") return content.subarray(0, 8).equals(Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]));
  if (extension === "xlsx" || extension === "docx") return content.subarray(0, 4).equals(Buffer.from([0x50, 0x4b, 0x03, 0x04]));
  return true;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > maxBodyBytes) return invalid("The request is larger than the 20 MB upload limit.", 413);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return invalid("The request could not be read. Please check the form fields and documents.");
  }

  const fullName = textValue(form, "fullName");
  const company = textValue(form, "company");
  const email = textValue(form, "email");
  const phone = textValue(form, "phone");
  const projectName = textValue(form, "projectName");
  const projectLocation = textValue(form, "projectLocation");
  const projectType = textValue(form, "projectType");
  const closingDate = textValue(form, "closingDate");
  const services = form.getAll("servicesNeeded").filter((value): value is string => typeof value === "string");

  if (!fullName || !company || !projectName || !projectLocation || !projectType || !email) return invalid("Complete all required contact and project fields.");
  if (fullName.length > 120 || company.length > 160 || projectName.length > 160 || projectLocation.length > 160 || phone.length > 40 || email.length > 254 || textValue(form, "projectNotes").length > 5000) return invalid("One or more fields exceed the allowed length.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return invalid("Enter a valid email address.");
  if (!validProjectTypes.has(projectType)) return invalid("Select a valid project type.");
  if (services.length === 0 || services.some((service) => !validServices.has(service))) return invalid("Select at least one valid service.");
  if (form.get("acknowledge") !== "on") return invalid("Confirm the request and document-submission notice.");
  if (closingDate) {
    const parsedDate = new Date(`${closingDate}T00:00:00.000Z`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(closingDate) || Number.isNaN(parsedDate.valueOf()) || parsedDate.toISOString().slice(0, 10) !== closingDate) return invalid("Enter a valid tender closing date.");
  }

  const uploads = form.getAll("documents").filter((value): value is File => typeof value !== "string");
  if (uploads.length > 10) return invalid("Choose no more than 10 documents.");
  let totalBytes = 0;
  const attachments = [];
  for (const file of uploads) {
    const extension = file.name.split(".").pop()?.toLowerCase() || "";
    const mimeTypes = acceptedTypes[extension];
    if (!mimeTypes || (file.type && !mimeTypes.includes(file.type))) return invalid(`The file type for ${file.name} is not accepted.`);
    if (file.size === 0 || file.size > maxFileBytes) return invalid(`${file.name} is empty or exceeds the 10 MB per-file limit.`);
    totalBytes += file.size;
    const content = Buffer.from(await file.arrayBuffer());
    if (!hasExpectedSignature(content, extension)) return invalid(`${file.name} does not match its file extension.`);
    const contentType = file.type && file.type !== "application/octet-stream" ? file.type : mimeTypes.find((type) => type !== "application/octet-stream") || "application/octet-stream";
    attachments.push({ filename: safeFilename(file.name), content, contentType });
  }
  if (totalBytes > maxTotalBytes) return invalid("The combined document size exceeds 20 MB.");

  const notes = textValue(form, "projectNotes");
  const emailText = [
    "New PlantBid estimate request",
    "",
    "Contact",
    `Name: ${fullName}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    "",
    "Project",
    `Name: ${projectName}`,
    `Location: ${projectLocation}`,
    `Type: ${projectType}`,
    `Tender closing: ${closingDate || "Not provided"}`,
    "",
    "Services requested",
    ...services.map((service) => `- ${service}`),
    "",
    "Project notes",
    notes || "None provided",
    "",
    "Attached documents",
    ...(uploads.length ? uploads.map((file) => `- ${safeFilename(file.name)}`) : ["None"]),
  ].join("\n");

  const result = await sendPlantBidEmail({
    subject: `[PlantBid] Estimate request: ${projectName}`,
    text: emailText,
    replyTo: email,
    attachments,
  });

  if (result.status === "unconfigured") return invalid("The estimate email service is not configured. Nothing was sent. Please email hello@plantbid.ca to continue.", 503);
  if (result.status === "failed") return invalid("We could not confirm that your request email was sent. Please email hello@plantbid.ca before retrying.", 502);

  return NextResponse.json({ message: "Your estimate request has been emailed to PlantBid. We will follow up using the contact details you provided." });
}