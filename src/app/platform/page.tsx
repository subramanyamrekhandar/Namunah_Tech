import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";
import { product } from "@/data/product";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Namunah.AI Platform",
  description:
    "Namunah.AI by Namunah Technologies—AI communication platform with voice agents in 20+ Indian languages across phone, WhatsApp, and web.",
  alternates: { canonical: "/platform" },
  keywords: [
    "Namunah AI",
    "Namunah.AI",
    "AI voice agents India",
    "AI phone agent",
    "conversational AI India",
  ],
  openGraph: {
    title: "Namunah.AI Platform | Namunah Technologies",
    description:
      "AI Communication Platform for Indian Businesses—voice, WhatsApp, and web.",
    url: `${siteConfig.url}/platform`,
  },
};

export default function PlatformPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-eyebrow">Our product</p>
          <h1 className="section-title max-w-3xl">{product.name}</h1>
          <p className="section-copy">{product.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={product.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Open namunah.ai ↗
            </a>
            <Link href="/contact" className="btn-ghost">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Capabilities</p>
            <h2 className="section-title">Built for Indian businesses.</h2>
            <p className="section-copy">
              Namunah.AI is engineered and operated by Namunah Technologies—the
              same enterprise standards we apply to client platforms, applied to
              our own AI product.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {product.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--surface)] section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-eyebrow">How it works</p>
          <h2 className="section-title">From zero to live in minutes.</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {product.steps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-[var(--line)] bg-white p-6"
              >
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--accent)]">
                  {step.number}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap gap-2">
            {product.highlights.map((item) => (
              <span key={item} className="product-pill">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
              Product contact
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Reach the Namunah.AI team for demos and onboarding.
            </p>
            <div className="mt-5 flex flex-wrap gap-6 text-sm font-semibold text-[var(--ink)]">
              <a href={product.contact.phoneHref} className="hover:text-[var(--accent)]">
                {product.contact.phone}
              </a>
              <a
                href={`mailto:${product.contact.email}`}
                className="hover:text-[var(--accent)]"
              >
                {product.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
