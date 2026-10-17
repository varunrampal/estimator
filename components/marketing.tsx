import { ArrowUpRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy && <p className={`body-copy${light ? " light-copy" : ""}`} style={light ? { color: "rgba(255,255,255,.68)", maxWidth: 600 } : { maxWidth: 600 }}>{copy}</p>}
    </div>
  );
}

export function ServiceCard({ icon: Icon, title, description, href, delay = 0 }: { icon: LucideIcon; title: string; description: string; href: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="service-card">
        <div className="service-icon"><Icon size={17} strokeWidth={1.7} aria-hidden="true" /></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="text-link" href={href}>Learn more <ArrowUpRight size={13} /></Link>
      </article>
    </Reveal>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <Link href="/">Home</Link>
      {items.map((item, index) => <span key={`${item.label}-${index}`} aria-current={index === items.length - 1 ? "page" : undefined}>{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</span>)}
    </nav>
  );
}

export function CTASection() {
  return (
    <section className="cta-band section-pad">
      <div className="section-inner cta-inner">
        <div>
          <p className="eyebrow">Start with the plant schedule</p>
          <h2>Have a plant list to price?</h2>
          <p>Send a planting schedule, drawings or tender documents and tell us what support would move your project forward.</p>
        </div>
        <div className="cta-actions">
          <Link className="button" href="/request-estimate">Request an estimate <ArrowUpRight size={14} /></Link>
          <Link className="button button-light" href="/request-estimate#documents">Upload plant list <ArrowUpRight size={14} /></Link>
        </div>
      </div>
    </section>
  );
}