import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
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
          <Link className="brand" href="/" aria-label="Plant Estimators home">
            <Image className="footer-brand-logo" src="/images/plant-estimators-logo-footer.png" alt="Plant Estimators" width={1760} height={500} unoptimized />
          </Link>
          <p>Plant estimating, sourcing and procurement support for landscape and restoration projects across British Columbia.</p>
          <a className="text-link" href="mailto:info@plantestimators.ca">info@plantestimators.ca <ArrowUpRight size={13} /></a>
        </div>
        <div className="footer-col">
          <h2>Services</h2>
          {serviceLinks.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
        <div className="footer-col">
          <h2>Plant Estimators</h2>
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
        <span>Plant Estimators. Plant estimating · sourcing · procurement.</span>
        <div className="footer-legal"><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
    </footer>
  );
}
