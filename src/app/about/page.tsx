import type { Metadata } from "next";
import { CTABand } from "@/components/sections/CTABand";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Namunah Technologies—enterprise IT and AI engineering partner building Cloud & AI, Agentic AI, Generative AI platforms and Namunah.AI.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About ${siteConfig.name}`,
    description:
      "Enterprise IT and AI engineering company behind Namunah.AI and client platforms across healthcare, food, and edtech.",
    url: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    title: "Enterprise rigor",
    body: "Security, observability, and maintainability are designed in—not bolted on after launch.",
  },
  {
    title: "AI with accountability",
    body: "Agentic and generative systems ship with evaluation, audit trails, and human oversight where it matters.",
  },
  {
    title: "Partnership depth",
    body: "We embed with your architects and operators so delivery continues after the first release.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-eyebrow">About</p>
          <h1 className="section-title max-w-3xl">
            Built for enterprises adopting AI with discipline.
          </h1>
          <p className="section-copy">
            Namunah Technologies helps organizations modernize core IT while
            adopting Cloud &amp; AI Services, Agentic AI, and Generative AI. We
            also build Namunah.AI—our own voice and communication platform for
            Indian businesses.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
              Who we are
            </h2>
            <div className="mt-5 space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                We are a product and platform engineering company. Alongside
                client delivery for organisations such as Happy Donors, Ravi
                Teja Home Foods, Qntern, and DocQuest, we ship Namunah.AI—voice
                agents in 20+ Indian languages across phone, WhatsApp, and web.
              </p>
              <p>
                Whether you need a customer-facing digital product or a
                governed AI capability, we deliver with clear milestones,
                documented architecture, and handover that operations teams can
                own.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-[var(--line)] bg-white p-6"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
