import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/marketing";
import { ContactForm } from "@/components/forms/contact-form";

const questions = [
  ["Do you supply plants directly?", "Plant Estimators focuses on estimating, sourcing and procurement support. Plant purchases and supply commitments are made with the relevant supplier and purchasing team."],
  ["Can you work from landscape drawings?", "Yes. Share the current planting plans, schedules, specifications and addenda. We can review the plant scope and confirm whether the documents support the requested takeoff or estimate."],
  ["Can you estimate restoration projects?", "Yes. Support can include native, riparian, wetland and other restoration plant material, subject to the project information and required scope."],
  ["Do you work only with native plants?", "No. Plant Estimators supports ornamental and general landscape material as well as native and restoration plant schedules."],
  ["Can you recommend substitutions?", "Potential alternatives can be researched when specified material is unavailable. Any change remains subject to the contract requirements and approval by the authorized project representative."],
  ["Can you work with tender deadlines?", "Include the closing date and any internal milestones in your request. Plant Estimators will confirm what can reasonably be reviewed in the time available."],
  ["Do you work throughout BC?", "Projects across British Columbia may be supported, including Metro Vancouver and the Fraser Valley. Supplier coverage and freight assumptions depend on project location."],
];

export const metadata: Metadata = {
  title: "Contact Plant Estimators",
  description: "Contact Plant Estimators about plant estimating, sourcing, procurement and tender support for projects across British Columbia.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Plant Estimators", description: "Talk with Plant Estimators about your plant project scope.", url: "/contact", type: "website" },
  twitter: { title: "Contact Plant Estimators", description: "Talk with Plant Estimators about your plant project scope." },
};

export default function ContactPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: questions.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  return (
    <main id="main-content" className="contact-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <section className="page-hero"><div className="section-inner"><Breadcrumbs items={[{ label: "Contact" }]} /><p className="eyebrow">Contact</p><h1>Let&apos;s talk about the plant scope.</h1><p className="page-intro">Tell us what your team is pricing, sourcing or preparing for tender. We support projects across British Columbia.</p></div></section>
      <section className="section-pad contact-main"><div className="section-inner contact-grid"><div><p className="eyebrow">Send a note</p><h2 className="content-heading">What does your project need?</h2><p className="body-copy">For a detailed project review or document upload, use the estimate request form. The direct email is a placeholder until business contact details are confirmed.</p><Link className="text-link" href="/request-estimate">Request an estimate <ArrowUpRight size={14} /></Link><div className="contact-details"><span>EMAIL</span><a href="mailto:info@plantestimators.ca">info@plantestimators.ca</a><span>SERVICE AREA</span><p>British Columbia, Canada<br />Metro Vancouver · Fraser Valley · province-wide support</p></div></div><ContactForm /></div></section>
      <section className="section-pad faq-section"><div className="section-inner faq-layout"><div><p className="eyebrow">Common questions</p><h2 className="content-heading">Before you reach out.</h2></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    </main>
  );
}