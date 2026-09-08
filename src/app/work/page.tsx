import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/sections/CTABand";
import { siteConfig } from "@/data/site";
import { works, type Work } from "@/data/works";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Namunah Technologies work—Happy Donors, Ravi Teja Home Foods, Qntern, DocQuest, and Namunah.AI case studies.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: `Work | ${siteConfig.name}`,
    description:
      "Client platforms and our product: Happy Donors, Ravi Teja Home Foods, Qntern, DocQuest, and Namunah.AI.",
    url: `${siteConfig.url}/work`,
  },
};

const visuals: Record<
  string,
  { label: string; motif: string; scene: string }
> = {
  "happy-donors": {
    label: "Live · happydonors.ngo",
    motif: "♥",
    scene: "donor",
  },
  "raviteja-home-foods": {
    label: "Live · ravitejahomefoods.in",
    motif: "◆",
    scene: "food",
  },
  qntern: {
    label: "Live · qntern.com",
    motif: "◇",
    scene: "edu",
  },
  docquest: {
    label: "Live · docquest.in · Play Store",
    motif: "▣",
    scene: "edu",
  },
  "namunah-ai-platform": {
    label: "Live · namunah.ai",
    motif: "◎",
    scene: "ai",
  },
};

function WorkVisual({ work }: { work: Work }) {
  const visual = visuals[work.slug] ?? {
    label: work.client,
    motif: "●",
    scene: "default",
  };

  return (
    <div
      className={`work-visual work-visual-${visual.scene}`}
      style={{ ["--work-accent" as string]: work.accent }}
    >
      <div className="work-visual-browser">
        <span />
        <span />
        <span />
        <em>{visual.label}</em>
      </div>
      <div className="work-visual-stage">
        <p className="work-visual-motif" aria-hidden>
          {visual.motif}
        </p>
        <p className="work-visual-brand">{work.client}</p>
        <div className="work-visual-blocks" aria-hidden>
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  const clientWorks = works.filter((work) => work.slug !== "namunah-ai-platform");
  const productWork = works.find((work) => work.slug === "namunah-ai-platform");
  const [featured, ...rest] = clientWorks;

  return (
    <>
      <section className="work-showcase-hero">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-eyebrow">Portfolio</p>
          <h1 className="work-showcase-title">
            Selected platforms.
            <span> Built to go live.</span>
          </h1>
          <p className="section-copy mt-5 max-w-2xl">
            Attractive, production-ready digital products for Happy Donors,
            Ravi Teja Home Foods, Qntern, and DocQuest—plus Namunah.AI, our own
            voice AI platform.
          </p>
        </div>
      </section>

      <section id="clients" className="pb-8 pt-4 sm:pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="work-bento">
            {featured ? (
              <Link
                href={`/work/${featured.slug}`}
                className="work-bento-feature group"
              >
                <WorkVisual work={featured} />
                <div className="work-bento-copy">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="work-tag">{featured.category}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                      Featured
                    </span>
                  </div>
                  <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-3xl lg:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    {featured.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <span className="work-cta-pill">
                      Open case study
                      <span aria-hidden>→</span>
                    </span>
                    {featured.externalUrl ? (
                      <span className="text-sm font-medium text-[var(--muted)]">
                        Visit live site available
                      </span>
                    ) : null}
                  </div>
                </div>
              </Link>
            ) : null}

            {rest.map((work, index) => (
              <Link
                key={work.slug}
                href={`/work/${work.slug}`}
                className="work-bento-card group"
              >
                <WorkVisual work={work} />
                <div className="work-bento-copy">
                  <span className="work-tag">{work.category}</span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.02em] text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                    {work.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {work.summary}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <ul className="flex flex-wrap gap-1.5">
                      {work.stack.slice(0, 2).map((item) => (
                        <li key={item} className="work-mini-chip">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="work-index">
                      0{index + 2}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {productWork ? (
        <section id="product" className="section-pad pt-4 scroll-mt-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-eyebrow">Our product</p>
                <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-3xl">
                  Namunah.AI in the spotlight.
                </h2>
              </div>
              <a
                href="https://namunah.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                Open namunah.ai ↗
              </a>
            </div>

            <Link
              href={`/work/${productWork.slug}`}
              className="work-product-showcase group"
            >
              <div className="work-product-copy">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-teal-100">
                  Flagship product
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                  {productWork.title}
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
                  {productWork.summary}
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {productWork.outcomes.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--ink)]">
                  View product story
                  <span aria-hidden>→</span>
                </span>
              </div>

              <div className="work-product-preview" aria-hidden>
                <div className="work-phone">
                  <div className="work-phone-bar" />
                  <p className="work-phone-status">AI Assistant Online</p>
                  <p className="work-phone-wave">············</p>
                  <div className="work-phone-card">
                    <span>Lead Status</span>
                    <strong>Qualified</strong>
                  </div>
                  <div className="work-phone-card">
                    <span>Languages</span>
                    <strong>20+</strong>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      <CTABand />
    </>
  );
}
