"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

type Feedback = { kind: "success" | "unavailable" | "error"; message: string } | null;

export function ContactForm() {
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setFeedback(null);
    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", { method: "POST", body: new FormData(event.currentTarget) });
      const result = (await response.json()) as { message?: string };
      if (response.status === 503) setFeedback({ kind: "unavailable", message: result.message || "The contact email service is not configured." });
      else if (response.ok) setFeedback({ kind: "success", message: result.message || "Your message has been sent to Plant Estimators." });
      else setFeedback({ kind: "error", message: result.message || "We could not send your message. Please try again." });
    } catch {
      setFeedback({ kind: "error", message: "We could not confirm that your message was sent. Please email info@plantestimators.ca before retrying." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      {feedback && <p className={`form-feedback feedback-${feedback.kind}`} role={feedback.kind === "error" ? "alert" : "status"}>{feedback.message}</p>}
      <label>Your name <span>*</span><input name="name" autoComplete="name" required maxLength={120} /></label>
      <label>Company<input name="company" autoComplete="organization" maxLength={160} /></label>
      <label>Email <span>*</span><input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label>How can we help? <span>*</span><textarea name="message" rows={5} required maxLength={5000} /></label>
      <p className="form-footnote">Your contact details and message are emailed to Plant Estimators through IONOS so we can respond. Please do not include sensitive project documents here.</p>
      <button className="button" type="submit" disabled={submitting}>{submitting ? "Sending message..." : "Send message"}<ArrowUpRight size={14} /></button>
    </form>
  );
}
