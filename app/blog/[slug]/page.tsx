import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/marketing";
import { Reveal } from "@/components/motion/reveal";
import { articles, getArticle } from "@/content/articles";
import { siteUrl } from "@/lib/site";

type ArticleProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title: article.title, description: article.description, url: `/blog/${slug}`, type: "article", images: [article.featuredImage], publishedTime: article.date, authors: [article.author] },
    twitter: { title: article.title, description: article.description, images: [article.featuredImage] },
  };
}

export default async function ArticlePage({ params }: ArticleProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: article.author },
    publisher: { "@type": "Organization", name: "Plant Estimators", url: siteUrl },
    image: article.featuredImage,
    mainEntityOfPage: `${siteUrl}/blog/${article.slug}`,
  };

  return (
    <main id="main-content" className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <section className="article-hero"><div className="article-inner"><Breadcrumbs items={[{ label: "Insights", href: "/blog" }, { label: article.title }]} /><p className="eyebrow">{article.category} <span aria-hidden="true">/</span> {article.readingTime}</p><h1>{article.title}</h1><p className="article-description">{article.description}</p><div className="article-byline"><span>{article.author}</span><time dateTime={article.date}>{new Date(`${article.date}T12:00:00Z`).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</time></div></div></section>
      <div className="article-image"><Image src={article.featuredImage} alt={article.imageAlt} fill priority sizes="100vw" /></div>
      <article className="article-content"><p className="article-introduction">{article.introduction}</p>{article.sections.map((section, index) => <Reveal key={section.heading} delay={Math.min(index * 0.03, 0.12)}><section><p className="eyebrow">0{index + 1} / {article.category}</p><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section></Reveal>)}<div className="article-contact"><p className="eyebrow">Need project-specific support?</p><h2>Have a plant schedule to review?</h2><Link className="button" href="/request-estimate">Request an estimate <ArrowUpRight size={14} /></Link></div><Link className="back-link" href="/blog"><ArrowLeft size={14} /> Back to insights</Link></article>
    </main>
  );
}