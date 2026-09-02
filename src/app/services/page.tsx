import type { Metadata } from "next";
import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import { CTABand } from "@/components/sections/CTABand";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Namunah Technologies services: Product Design, Web Engineering, Mobile Apps, Cloud & AI Services, Agentic AI, and Generative AI for enterprises.",
  alternates: { canonical: "/services" },
  keywords: [
    "Namunah Technologies services",
    "Agentic AI company",
    "Generative AI services India",
    "Cloud and AI Services",
    "enterprise web development",
  ],
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description:
      "End-to-end IT and AI services—design, web, mobile, Cloud & AI, Agentic AI, and Generative AI.",
    url: `${siteConfig.url}/services`,
  },
};

const engineeringIds = ["design", "web", "mobile"] as const;
const aiIds = ["cloud-ai", "agentic-ai", "generative-ai"] as const;

export default function ServicesPage() {
  const engineering = engineeringIds
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean);
  const aiServices = aiIds
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean);
  const [aiFeatured, ...aiRest] = aiServices;

  return (
    <>
      <section className="svc-hero">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-eyebrow">Services</p>
          <h1 className="svc-hero-title">
            IT platforms.
            <span> Production AI.</span>
          </h1>
          <p className="section-copy mt-5 max-w-2xl">
            One partner for product engineering and production AI—aligned to
            security, compliance, and the operating model your organization
            already runs.
          </p>

          <nav className="svc-jump" aria-label="Jump to service">
            {services.map((service, index) => (
              <a key={service.id} href={`#${service.id}`} className="svc-jump-chip">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {service.shortTitle}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section-pad pt-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-eyebrow">Engineering</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-3xl">
                Design, web, and mobile foundations.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-[var(--muted)]">
              Product systems built for clarity, scale, and long-term ownership.
            </p>
          </div>

          <div className="svc-eng-grid">
            {engineering.map((service, index) =>
              service ? (
                <article
                  key={service.id}
                  id={service.id}
                  className="svc-eng-card scroll-mt-28 group"
                >
                  <div className="svc-eng-top">
                    <span className="svc-eng-icon">
                      <ServiceIcon name={service.icon} className="h-6 w-6" />
                    </span>
                    <span className="svc-eng-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {service.longDescription}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.capabilities.map((item) => (
                      <li key={item} className="svc-capability-line">
                        <span aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="svc-card-link">
                    Discuss this capability
                    <span aria-hidden>→</span>
                  </Link>
                </article>
              ) : null,
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--surface)] section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-eyebrow">AI &amp; Cloud</p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-3xl">
                Production-grade intelligence.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-[var(--muted)]">
              Cloud foundations, agentic workflows, and generative systems ready
              for enterprise governance.
            </p>
          </div>

          <div className="svc-ai-bento">
            {aiFeatured ? (
              <article
                id={aiFeatured.id}
                className="svc-ai-feature scroll-mt-28 group"
              >
                <div className="svc-ai-glow" aria-hidden />
                <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20">
                      <ServiceIcon name={aiFeatured.icon} className="h-6 w-6" />
                    </span>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-teal-200/80">
                      Featured capability
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                      {aiFeatured.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                      {aiFeatured.longDescription}
                    </p>
                  </div>

                  <div>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {aiFeatured.capabilities.map((item) => (
                        <li
                          key={item}
                          className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-sm text-white/85"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--ink)] transition group-hover:bg-teal-50"
                    >
                      Discuss Cloud &amp; AI
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ) : null}

            <div className="svc-ai-side">
              {aiRest.map((service, index) =>
                service ? (
                  <article
                    key={service.id}
                    id={service.id}
                    className="svc-ai-tile scroll-mt-28 group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="svc-eng-icon">
                        <ServiceIcon name={service.icon} className="h-5 w-5" />
                      </span>
                      <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                        0{index + 5}
                      </span>
                    </div>
                    <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {service.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.capabilities.map((item) => (
                        <li key={item} className="svc-mini-chip">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="svc-card-link">
                      Discuss this capability
                      <span aria-hidden>→</span>
                    </Link>
                  </article>
                ) : null,
              )}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
