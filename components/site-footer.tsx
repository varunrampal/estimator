import { ArrowUpRight, Sprout } from "lucide-react";
import Link from "next/link";

const serviceLinks = [
  ["Plant estimating", "/plant-estimating"],
  ["Plant takeoffs", "/plant-takeoffs"],
  ["Sourcing & procurement", "/plant-sourcing-procurement"],
  ["Tender support", "/tender-support"],
  ["Native & restoration", "/native-restoration-plants"],
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand" href="/"><span className="brand-mark"><Sprout aria-hidden="true" /></span><span>PlantBid</span></Link>
          <p>Plant estimating, sourcing and procurement support for landscape and restoration projects across British Columbia.</p>
          <a className="text-link" href="mailto:hello@plantbid.ca">hello@plantbid.ca <ArrowUpRight size={13} /></a>
        </div>
        <div className="footer-col">
          <h2>Services</h2>
          {serviceLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
        <div className="footer-col">
          <h2>PlantBid</h2>
          <Link href="/industries">Industries</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Insights</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h2>Service area</h2>
          <p>British Columbia, Canada</p>
          <p>Metro Vancouver · Fraser Valley · province-wide support</p>
          <Link href="/request-estimate">Request an estimate <ArrowUpRight size={12} /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>PlantBid. Plant estimating · sourcing · procurement.</span>
        <div className="footer-legal"><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
    </footer>
  );
}