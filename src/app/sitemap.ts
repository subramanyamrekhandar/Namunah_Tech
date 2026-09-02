import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";
import { siteConfig } from "@/data/site";
import { works } from "@/data/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/services",
    "/work",
    "/platform",
    "/blog",
    "/contact",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/services" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" || path === "/services" ? 0.9 : 0.8,
  }));

  const workRoutes: MetadataRoute.Sitemap = works.map((work) => ({
    url: `${siteConfig.url}/work/${work.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...blogRoutes];
}
