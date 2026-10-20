import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/marketing";
import { QuoteForm } from "@/components/forms/quote-form";

export const metadata: Metadata = {
  title: "Request a Plant Estimate",
  description: "Request plant estimating, sourcing, takeoff, procurement or tender support for a landscape or restoration project in British Columbia.",
  alternates: { canonical: "/request-estimate" },
  openGraph: { title: "Request a Plant Estimate", description: "Share your project scope and plant support needs with Plant Estimators.", url: "/request-estimate", type: "website" },
  twitter: { title: "Request a Plant Estimate", description: "Share your project scope and plant support needs with Plant Estimators." },
};

export default function RequestEstimatePage() {
  return (
    <main id="main-content" className="request-page">
      <section className="page-hero request-hero"><div className="section-inner"><Breadcrumbs items={[{ label: "Request an estimate" }]} /><p className="eyebrow">Start a project conversation</p><h1>Tell us about the plant package.</h1><p className="page-intro">Share the project basics, what support you need and any documents that help explain the scope.</p></div></section>
      <section className="section-pad form-layout"><div className="section-inner request-layout"><div className="form-sidebar"><p className="eyebrow">Estimate request</p><h2>Clear scope helps us respond usefully.</h2><p className="body-copy">Include the tender close, project location and the latest planting schedule or addenda. We will confirm the requested scope and timing before any work begins.</p><div className="sidebar-detail"><strong>Service area</strong><span>British Columbia, Canada</span></div><div className="sidebar-detail"><strong>Direct contact</strong><a href="mailto:info@plantestimators.ca">info@plantestimators.ca</a></div></div><QuoteForm /></div></section>
    </main>
  );
}