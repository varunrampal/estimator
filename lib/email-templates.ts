type EmailDetail = { label: string; value: string };

type ContactRequest = {
  name: string;
  company: string;
  email: string;
  message: string;
};

type EstimateRequest = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectName: string;
  projectLocation: string;
  projectType: string;
  closingDate: string;
  services: string[];
  notes: string;
  attachments: string[];
};

const htmlEscapes: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => htmlEscapes[character] || character);
}

function detailRows(details: EmailDetail[]) {
  return details.map(({ label, value }, index) => `
    <tr>
      <td style="padding:11px 14px;${index ? "border-top:1px solid #e8ece7;" : ""}color:#68736c;font-size:13px;vertical-align:top;width:36%;">${escapeHtml(label)}</td>
      <td style="padding:11px 14px;${index ? "border-top:1px solid #e8ece7;" : ""}color:#202824;font-size:13px;font-weight:600;vertical-align:top;">${escapeHtml(value || "Not provided")}</td>
    </tr>`).join("");
}

function emailLayout(title: string, intro: string, content: string) {
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f3ef;font-family:Arial,Helvetica,sans-serif;color:#202824;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(intro)}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f1f3ef;padding:30px 12px;">
    <tr><td align="center">
      <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="width:100%;max-width:640px;background:#ffffff;border:1px solid #e1e6df;">
        <tr><td style="padding:23px 30px;background:#203a30;border-bottom:3px solid #b99a60;">
          <div style="color:#f6f5ef;font-family:Georgia,'Times New Roman',serif;font-size:21px;letter-spacing:.2px;">Plant Estimators</div>
          <div style="margin-top:5px;color:#c9d4ca;font-size:9px;letter-spacing:1.7px;text-transform:uppercase;">Plant estimating &middot; sourcing &middot; procurement</div>
        </td></tr>
        <tr><td style="padding:30px 30px 12px;">
          <div style="color:#54715e;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Website notification</div>
          <h1 style="margin:9px 0 7px;color:#202824;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:400;line-height:1.2;">${escapeHtml(title)}</h1>
          <p style="margin:0;color:#68736c;font-size:14px;line-height:1.6;">${escapeHtml(intro)}</p>
        </td></tr>
        <tr><td style="padding:10px 30px 30px;">${content}</td></tr>
        <tr><td style="padding:17px 30px;background:#f6f7f4;border-top:1px solid #e5e9e3;color:#768078;font-size:11px;line-height:1.6;">
          This notification was sent from the Plant Estimators website. Reply directly to this email to respond to the sender.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function section(title: string, body: string) {
  return `<div style="margin-top:22px;">
    <h2 style="margin:0 0 9px;color:#54715e;font-size:10px;font-weight:700;letter-spacing:1.3px;text-transform:uppercase;">${escapeHtml(title)}</h2>
    ${body}
  </div>`;
}

function detailTable(details: EmailDetail[]) {
  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #e5e9e3;border-collapse:collapse;">${detailRows(details)}</table>`;
}

export function buildContactEmail(request: ContactRequest) {
  const text = [
    "New Plant Estimators website message",
    "",
    "Contact",
    `Name: ${request.name}`,
    `Company: ${request.company || "Not provided"}`,
    `Email: ${request.email}`,
    "",
    "Message",
    request.message,
  ].join("\n");

  const content = [
    section("Contact details", detailTable([
      { label: "Name", value: request.name },
      { label: "Company", value: request.company },
      { label: "Email", value: request.email },
    ])),
    section("Message", `<div style="padding:15px 17px;border-left:3px solid #b99a60;background:#f6f7f4;color:#303a33;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(request.message)}</div>`),
  ].join("");

  return { text, html: emailLayout("New website message", `A message from ${request.name} has arrived.`, content) };
}

export function buildEstimateEmail(request: EstimateRequest) {
  const text = [
    "New Plant Estimators estimate request",
    "",
    "Contact",
    `Name: ${request.fullName}`,
    `Company: ${request.company}`,
    `Email: ${request.email}`,
    `Phone: ${request.phone || "Not provided"}`,
    "",
    "Project",
    `Name: ${request.projectName}`,
    `Location: ${request.projectLocation}`,
    `Type: ${request.projectType}`,
    `Tender closing: ${request.closingDate || "Not provided"}`,
    "",
    "Services requested",
    ...(request.services.length ? request.services.map((service) => `- ${service}`) : ["None selected"]),
    "",
    "Project notes",
    request.notes || "None provided",
    "",
    "Attached documents",
    ...(request.attachments.length ? request.attachments.map((file) => `- ${file}`) : ["None"]),
  ].join("\n");

  const serviceList = request.services.length
    ? `<ul style="margin:0;padding:0 0 0 19px;color:#303a33;font-size:13px;line-height:1.8;">${request.services.map((service) => `<li style="padding-left:3px;">${escapeHtml(service)}</li>`).join("")}</ul>`
    : `<p style="margin:0;color:#68736c;font-size:13px;">None selected</p>`;
  const attachmentList = request.attachments.length
    ? `<ul style="margin:0;padding:0 0 0 19px;color:#303a33;font-size:13px;line-height:1.8;">${request.attachments.map((file) => `<li style="padding-left:3px;">${escapeHtml(file)}</li>`).join("")}</ul>`
    : `<p style="margin:0;color:#68736c;font-size:13px;">No documents attached</p>`;
  const noteBlock = request.notes
    ? `<div style="padding:15px 17px;border-left:3px solid #b99a60;background:#f6f7f4;color:#303a33;font-size:13px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(request.notes)}</div>`
    : `<p style="margin:0;color:#68736c;font-size:13px;">No project notes provided.</p>`;

  const content = [
    `<div style="padding:15px 17px;background:#f2f5f1;border:1px solid #e3e9e1;">
      <div style="color:#68736c;font-size:10px;letter-spacing:1px;text-transform:uppercase;">Project</div>
      <div style="margin-top:5px;color:#203a30;font-family:Georgia,'Times New Roman',serif;font-size:20px;">${escapeHtml(request.projectName)}</div>
    </div>`,
    section("Contact", detailTable([
      { label: "Name", value: request.fullName },
      { label: "Company", value: request.company },
      { label: "Email", value: request.email },
      { label: "Phone", value: request.phone },
    ])),
    section("Project details", detailTable([
      { label: "Location", value: request.projectLocation },
      { label: "Project type", value: request.projectType },
      { label: "Tender closing", value: request.closingDate },
    ])),
    section("Services requested", serviceList),
    section("Project notes", noteBlock),
    section("Attached documents", attachmentList),
  ].join("");

  return { text, html: emailLayout("New estimate request", `A new estimate request was submitted for ${request.projectName}.`, content) };
}
