import { siteConfig } from "@/data/site";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: [
      "Namunah",
      "Namunah AI",
      "Namunah.AI",
      "Namunah Technologies",
    ],
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-mark.svg`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingLocation: {
      "@type": "Place",
      name: "India",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.x,
      siteConfig.social.instagram,
      siteConfig.productUrl,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "sales",
        email: siteConfig.email,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Telugu"],
        url: `${siteConfig.url}/contact`,
      },
    ],
    knowsAbout: [
      "Enterprise IT",
      "Cloud computing",
      "Agentic AI",
      "Generative AI",
      "Voice AI",
      "Software engineering",
      "Product design",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: ["Namunah", "Namunah Technologies"],
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function softwareProductJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Namunah.AI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: siteConfig.productUrl,
    description:
      "AI Communication Platform for Indian Businesses—voice agents in 20+ languages across phone, WhatsApp, and web.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Pay as you go",
    },
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}
