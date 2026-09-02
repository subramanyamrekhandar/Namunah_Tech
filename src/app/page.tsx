import type { Metadata } from "next";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Clients } from "@/components/sections/Clients";
import { CTABand } from "@/components/sections/CTABand";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { WorksPreview } from "@/components/sections/WorksPreview";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Enterprise IT, Cloud & AI, Agentic AI`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Enterprise IT & AI Services`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <ServicesPreview />
      <ProductShowcase />
      <Clients />
      <WorksPreview />
      <BlogPreview />
      <CTABand />
    </>
  );
}
