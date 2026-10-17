import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { routePages, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/contact", "/request-estimate", "/blog"];
  const pages = [...staticRoutes, ...Object.keys(routePages).map((slug) => `/${slug}`)];
  return [
    ...pages.map((route) => ({ url: `${siteUrl}${route || "/"}`, changeFrequency: route === "/blog" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : route === "/request-estimate" ? 0.9 : 0.75 })),
    ...articles.map((article) => ({ url: `${siteUrl}/blog/${article.slug}`, lastModified: new Date(article.date), changeFrequency: "yearly" as const, priority: 0.65 })),
  ];
}