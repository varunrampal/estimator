import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs, SectionHeading } from "@/components/marketing";
import { articles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Plant Project Insights",
  description: "Practical notes on plant estimating, schedules, sourcing, restoration procurement and delivery for landscape projects in British Columbia.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Plant Project Insights", description: "Practical notes on plant estimating, sourcing and procurement.", url: "/blog", type: "website" },
  twitter: { title: "Plant Project Insights", description: "Practical notes on plant estimating, sourcing and procurement." },
};

export default function BlogIndexPage() {
  return (
    <main id="main-content" className="blog-page">
      <section className="page-hero"><div className="section-inner"><Breadcrumbs items={[{ label: "Insights" }]} /><p className="eyebrow">Plant Estimators / Field notes</p><h1>Useful reads for the plant package.</h1><p className="page-intro">Practical guidance for estimating, sourcing and procuring plant material on landscape and restoration projects.</p></div></section>
      <section className="section-pad blog-listing"><div className="section-inner"><SectionHeading eyebrow="Guides and project notes" title="Plant knowledge, made useful." /><div className="blog-grid">{articles.map((article) => <article className="blog-card" key={article.slug}><Link className="blog-image" href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`}><Image src={article.featuredImage} alt={article.imageAlt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" /></Link><div className="blog-card-body"><div className="blog-meta"><span>{article.category}</span><span>{article.readingTime}</span></div><h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2><p>{article.description}</p><Link className="text-link" href={`/blog/${article.slug}`}>Read article <ArrowUpRight size={13} /></Link></div></article>)}</div></div></section>
    </main>
  );
}