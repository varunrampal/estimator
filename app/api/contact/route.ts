import { NextResponse } from "next/server";
import { sendPlantEstimatorsEmail } from "@/lib/email";
import { buildContactEmail } from "@/lib/email-templates";

function textValue(form: FormData, key: string) {
  const value = form.get(key);
  return typeof value === "string" ? value.replace(/[\u0000-\u001f\u007f]/g, "").trim() : "";
}

function invalid(message: string, status = 400) {
  return NextResponse.json({ message }, { status });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 16 * 1024) return invalid("The message is larger than the allowed limit.", 413);

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return invalid("The message could not be read. Please check the form fields.");
  }

  const name = textValue(form, "name");
  const company = textValue(form, "company");
  const email = textValue(form, "email");
  const message = textValue(form, "message");

  if (!name || !email || !message) return invalid("Complete the required contact fields.");
  if (name.length > 120 || company.length > 160 || email.length > 254 || message.length > 5000) return invalid("One or more fields exceed the allowed length.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return invalid("Enter a valid email address.");

  const body = buildContactEmail({ name, company, email, message });
  const result = await sendPlantEstimatorsEmail({
    subject: `[Plant Estimators] Website message from ${name}`,
    ...body,
    replyTo: email,
  });

  if (result.status === "unconfigured") return invalid("The contact email service is not configured. Nothing was sent. Please email info@plantestimators.ca to continue.", 503);
  if (result.status === "failed") return invalid("We could not confirm that your message was sent. Please email info@plantestimators.ca before retrying.", 502);

  return NextResponse.json({ message: "Your message has been emailed to Plant Estimators. We will follow up using the contact details you provided." });
}
