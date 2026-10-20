import Image from "next/image";
import { ArrowUpRight, Check, CircleHelp } from "lucide-react";
import Link from "next/link";
import { CTASection, SectionHeading, ServiceCard } from "@/components/marketing";
import { Reveal } from "@/components/motion/reveal";
import { industries, insights, nativeSpecies, plantSizes, processSteps, projectTypes, services, siteUrl } from "@/lib/site";

const commonChallenges = ["Large planting schedules", "Difficult-to-source species", "Multiple container sizes", "Substitution requests", "Supplier comparisons", "Freight and delivery requirements", "Short bid deadlines", "Phased deliveries", "Changing availability"];
const reasons = ["Plant-focused estimating", "BC supplier-market context", "Pricing research with clear assumptions", "Practical substitution review", "Organized project deliverables", "Contractor-focused scope", "Confidential handling of project information", "General landscape and restoration plant knowledge"];

export default function Home() {
  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Plant Estimators", url: siteUrl, email: "info@plantestimators.ca", description: "Plant estimating, sourcing and procurement support for landscape and restoration projects across British Columbia.", areaServed: { "@type": "AdministrativeArea", name: "British Columbia, Canada" } },
      { "@type": "ProfessionalService", "@id": `${siteUrl}/#service`, name: "Plant Estimators plant estimating and sourcing support", url: siteUrl, email: "info@plantestimators.ca", areaServed: { "@type": "AdministrativeArea", name: "British Columbia, Canada" }, provider: { "@id": `${siteUrl}/#organization` } },
    ],
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow">Plant estimating <span aria-hidden="true">·</span> sourcing <span aria-hidden="true">·</span> procurement</p>
              <h1>Plant estimating, <em>sourcing & procurement</em> for landscape projects.</h1>
              <p className="hero-lede">Helping contractors and project teams price, source and procure plant material with greater accuracy, speed and confidence across British Columbia.</p>
              <p className="hero-specialty">Specialized knowledge in BC native plants, restoration material and complex planting schedules.</p>
              <div className="hero-actions"><Link className="button" href="/request-estimate">Request an estimate <ArrowUpRight size={14} /></Link><Link className="button button-quiet" href="/request-estimate#documents">Upload your plant list <ArrowUpRight size={14} /></Link></div>
              <div className="hero-trust" aria-label="Project areas"><span>Landscape</span><span>Restoration</span><span>Municipal</span><span>Civil</span><span>Environmental</span></div>
            </Reveal>
          </div>
          <Reveal className="hero-visual" delay={0.12}>
            <div className="hero-photo"><Image src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85" alt="Layered temperate forest canopy in British Columbia" fill priority sizes="(max-width: 760px) 100vw, 54vw" /></div>
            <div className="schedule-card" aria-label="Illustrative plant schedule">
              <div className="schedule-top"><div><div className="schedule-label">Plant package review</div><div className="schedule-title">Schedule overview</div></div><span className="schedule-number">PE / 014</span></div>
              <table className="schedule-table"><thead><tr><th>Plant material</th><th>Size</th><th>Qty</th><th>Status</th></tr></thead><tbody>
                <tr><td><span className="schedule-species">Acer circinatum</span></td><td>#5</td><td>36</td><td><span className="schedule-status">Review</span></td></tr>
                <tr><td><span className="schedule-species">Carex obnupta</span></td><td>Plug</td><td>480</td><td><span className="schedule-status">Source</span></td></tr>
                <tr><td><span className="schedule-species">Cornus sericea</span></td><td>#2</td><td>72</td><td><span className="schedule-status">Check</span></td></tr>
              </tbody></table>
            </div>
            <span className="visual-caption">Plant schedule / field notes</span><span className="hero-index">01 — 04 / BC</span>
          </Reveal>
        </div>
      </section>
      <div className="credibility-strip"><div className="credibility-inner"><p>Plant material support for teams across</p><div className="credibility-list"><span>British Columbia</span><span>Metro Vancouver</span><span>Fraser Valley</span><span>Projects province-wide</span></div></div></div>
      <section className="problem-section section-pad"><div className="section-inner problem-grid"><Reveal><SectionHeading eyebrow="The package behind the bid" title="Plant packages are often more complicated than they look." copy="The schedule is only the start. Sizes, suppliers, delivery windows and availability all shape what a plant package will take to price and procure." /></Reveal><Reveal delay={0.12}><div className="problem-list">{commonChallenges.map((item) => <div className="problem-item" key={item}><CircleHelp size={15} strokeWidth={1.5} aria-hidden="true" />{item}</div>)}</div></Reveal></div></section>
      <section className="services-section section-pad" id="services"><div className="section-inner"><div className="section-head-row"><SectionHeading eyebrow="What we do" title="Plant expertise behind better bids." copy="Plant-focused estimating and sourcing support, scoped to what your team needs." /><Link className="button button-quiet" href="/services">Explore all services <ArrowUpRight size={14} /></Link></div><div className="services-grid">{services.map((service, index) => <ServiceCard key={service.title} {...service} delay={Math.min(index % 4, 3) * 0.06} />)}</div></div></section>
      <section className="industries-section section-pad" id="industries"><div className="section-inner"><Reveal><SectionHeading eyebrow="Who we help" title="Built for the teams responsible for getting plants from specification to site." light /></Reveal><div className="industry-grid">{industries.map((industry, index) => <Reveal key={industry} delay={(index % 5) * 0.035}><Link className="industry-item" href={industry.includes("Restoration") || industry.includes("Environmental") ? "/restoration-contractors" : industry.includes("Landscape") ? "/landscape-contractors" : "/industries"}>{industry}</Link></Reveal>)}</div></div></section>
      <section className="process-section section-pad" id="process"><div className="section-inner"><SectionHeading eyebrow="A clear process" title="From project documents to a usable plant estimate." copy="A straightforward review, with assumptions and open questions visible along the way." /><div className="process-grid">{processSteps.map((step, index) => <Reveal key={step.title} delay={index * 0.08}><article className="process-step"><span className="step-number">0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p><ul>{step.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article></Reveal>)}</div></div></section>
      <section className="expertise-section section-pad" id="expertise"><div className="section-inner expertise-grid"><Reveal className="expertise-image"><Image src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85" alt="Rows of nursery-grown plants across a broad growing field" fill sizes="(max-width: 760px) 100vw, 50vw" /><span className="image-note">Plant material / format / availability</span></Reveal><Reveal delay={0.1}><p className="eyebrow">Practical plant knowledge</p><h2 className="section-title">More than spreadsheet estimating.</h2><p className="body-copy">Plant packages move through real suppliers, seasons, sizes and site requirements. The details around nursery availability, restoration specifications, substitutions, logistics and phasing matter to an estimate that can be used.</p><div className="size-list" aria-label="Common plant sizes and formats">{plantSizes.map((size) => <span key={size}>{size}</span>)}</div><Link className="text-link" href="/plant-estimating">How plant estimating works <ArrowUpRight size={14} /></Link></Reveal></div></section>
      <section className="native-section section-pad"><div className="section-inner native-grid"><Reveal><p className="eyebrow">A specialty, not a limitation</p><h2 className="section-title">Deep knowledge of BC native and restoration plants.</h2><p className="body-copy">Plant Estimators works across general landscape material while bringing focused knowledge of native shrubs and trees, riparian and wetland species, sedges, rushes and restoration plant material. Species, sizes and project requirements stay connected in the review.</p><Link className="text-link" href="/native-restoration-plants">Explore native & restoration support <ArrowUpRight size={14} /></Link></Reveal><Reveal delay={0.12}><div className="native-species">{nativeSpecies.map(([scientific, common]) => <div className="species-item" key={scientific}><em>{scientific}</em><span>{common}</span></div>)}</div></Reveal></div></section>
      <section className="project-section section-pad"><div className="section-inner"><SectionHeading eyebrow="Project experience" title="Plant scope across project types." copy="Support can be shaped around a defined plant package within a larger construction, public realm or ecological project." /><div className="project-grid">{projectTypes.map((type) => <div className="project-type" key={type}>{type}</div>)}</div></div></section>
      <section className="value-section section-pad"><div className="section-inner value-grid"><Reveal><p className="eyebrow">Why Plant Estimators</p><h2 className="section-title">Clearer plant information for the decisions ahead.</h2><p className="body-copy">Focused assistance, careful assumptions and organized information help your team make its next move with a better view of the plant scope.</p></Reveal><Reveal delay={0.12}><div className="value-list">{reasons.map((reason) => <div className="value-item" key={reason}><Check size={15} aria-hidden="true" />{reason}</div>)}</div></Reveal></div></section>
      <CTASection />
      <section className="insights-section section-pad" id="insights"><div className="section-inner"><div className="section-head-row"><SectionHeading eyebrow="Field notes" title="Useful reads for the plant package." /><Link className="button button-quiet" href="/blog">All insights <ArrowUpRight size={14} /></Link></div><div className="insight-grid">{insights.slice(0, 3).map((article) => <article className="insight-card" key={article.slug}><span className="insight-meta">{article.category} · Plant Estimators</span><h3>{article.title}</h3><Link className="text-link" href={`/blog/${article.slug}`}>Read article <ArrowUpRight size={13} /></Link></article>)}</div></div></section>
    </main>
  );
}
