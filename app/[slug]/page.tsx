import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, CTASection, SectionHeading } from "@/components/marketing";
import { Reveal } from "@/components/motion/reveal";
import { routePages, services, siteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(routePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = routePages[slug];
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${slug}` },
    openGraph: { title: page.title, description: page.description, url: `/${slug}`, type: "website" },
    twitter: { title: page.title, description: page.description },
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = routePages[slug];
  if (!page) notFound();

  const isService = ["plant-estimating", "plant-takeoffs", "plant-sourcing-procurement", "tender-support", "native-restoration-plants"].includes(slug);
  const serviceSchema = isService ? {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    url: `${siteUrl}/${slug}`,
    provider: { "@type": "Organization", name: "Plant Estimators", url: siteUrl, email: "info@plantestimators.ca" },
    areaServed: { "@type": "AdministrativeArea", name: "British Columbia, Canada" },
  } : null;

  return (
    <main id="main-content" className="content-page">
      {serviceSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />}
      <section className="page-hero"><div className="section-inner">
        <Breadcrumbs items={[{ label: isService ? "Services" : page.eyebrow, href: isService ? "/services" : undefined }, { label: page.title }]} />
        <Reveal><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p className="page-intro">{page.intro}</p><div className="page-actions"><Link className="button" href="/request-estimate">Discuss your project <ArrowUpRight size={14} /></Link>{isService && <Link className="text-link" href="/services">All services <ArrowUpRight size={14} /></Link>}</div></Reveal>
      </div></section>
      {page.sections.map((section, index) => (
        <section className={`content-section section-pad${index % 2 ? " content-section-muted" : ""}`} key={section.heading}>
          <div className="section-inner content-grid">
            <Reveal><p className="eyebrow">{page.eyebrow} / 0{index + 1}</p><h2 className="content-heading">{section.heading}</h2></Reveal>
            <Reveal delay={0.1}><div><p className="body-copy">{section.body}</p>{section.points && <ul className="content-points">{section.points.map((point) => <li key={point}><Check size={15} aria-hidden="true" /><span>{point}</span></li>)}</ul>}</div></Reveal>
          </div>
        </section>
      ))}
      {slug === "services" && <section className="section-pad"><div className="section-inner"><SectionHeading eyebrow="Service menu" title="Choose the support your plant package needs." /><div className="page-service-list">{services.map(({ title, description, href, icon: Icon }) => <Link className="page-service-row" href={href} key={title}><Icon size={18} /><span><strong>{title}</strong><small>{description}</small></span><ArrowUpRight size={15} /></Link>)}</div></div></section>}
      <CTASection />
    </main>
  );
}