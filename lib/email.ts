import nodemailer, { type SendMailOptions } from "nodemailer";

type PlantEstimatorsEmail = {
  subject: string;
  text: string;
  replyTo: string;
  attachments?: NonNullable<SendMailOptions["attachments"]>;
};

type SendResult = { status: "sent" } | { status: "unconfigured" } | { status: "failed" };

export async function sendPlantEstimatorsEmail(email: PlantEstimatorsEmail): Promise<SendResult> {
  const host = process.env.IONOS_SMTP_HOST?.trim() || "smtp.ionos.com";
  const port = Number(process.env.IONOS_SMTP_PORT?.trim() || "465");
  const secureSetting = process.env.IONOS_SMTP_SECURE?.trim().toLowerCase();
  const secure = secureSetting ? secureSetting === "true" : port === 465;
  const user = process.env.IONOS_SMTP_USER?.trim();
  const password = process.env.IONOS_SMTP_PASSWORD;
  const fromName = process.env.IONOS_SMTP_FROM_NAME?.trim() || "Plant Estimators";
  const to = process.env.CONTACT_EMAIL?.trim();

  if (!host || !Number.isInteger(port) || port < 1 || port > 65535 || !user || !password || !to) {
    return { status: "unconfigured" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      requireTLS: !secure,
      auth: { user, pass: password },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 30_000,
    });

    await transporter.sendMail({
      from: { name: fromName, address: user },
      to,
      replyTo: email.replyTo,
      subject: email.subject,
      text: email.text,
      attachments: email.attachments,
    });

    return { status: "sent" };
  } catch (error) {
    console.error("Plant Estimators IONOS SMTP notification failed", {
      name: error instanceof Error ? error.name : "UnknownError",
    });
    return { status: "failed" };
  }
}
