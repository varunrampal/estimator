import { Resend, type Attachment } from "resend";

type PlantBidEmail = {
  subject: string;
  text: string;
  replyTo: string;
  attachments?: Attachment[];
};

type SendResult = { status: "sent" } | { status: "unconfigured" } | { status: "failed" };

export async function sendPlantBidEmail(email: PlantBidEmail): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_EMAIL?.trim();

  if (!apiKey || !from || !to) return { status: "unconfigured" };

  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email.replyTo,
      subject: email.subject,
      text: email.text,
      attachments: email.attachments,
    });

    if (error) {
      console.error("PlantBid Resend notification failed", { name: error.name, statusCode: error.statusCode });
      return { status: "failed" };
    }

    return { status: "sent" };
  } catch (error) {
    console.error("PlantBid Resend request failed", { name: error instanceof Error ? error.name : "UnknownError" });
    return { status: "failed" };
  }
}
