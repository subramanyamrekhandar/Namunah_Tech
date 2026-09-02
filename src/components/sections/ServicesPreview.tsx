import Link from "next/link";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/ServiceIcon";

const classicIds = ["design", "web", "mobile"] as const;
const trendingIds = ["cloud-ai", "agentic-ai", "generative-ai"] as const;

export function ServicesPreview() {
  const classic = classicIds
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean);
  const trending = trendingIds
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <section className="section-pad services-redesign">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-eyebrow">What we do</p>
            <h2 className="section-title">
              Reliable software. Production-grade AI.
            </h2>
            <p className="section-copy">
              From product design and custom platforms to Cloud &amp; AI, Agentic
              AI, and Generative AI—we build systems enterprises can run with
              confidence.
            </p>
          </div>
          <Link href="/services" className="btn-ghost shrink-0 self-start lg:self-auto">
            View all services
          </Link>
        </div>

        {/* Classic format — foundation IT services */}
        <div className="mt-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="format-chip format-chip-classic">Classic</span>
            <p className="text-sm text-[var(--muted)]">
              Product &amp; platform engineering
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {classic.map((service, index) =>
              service ? (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className="service-card-classic group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="service-icon-badge">
                      <ServiceIcon name={service.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-sm font-semibold tabular-nums text-[var(--ink)]/25">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1">
                    Learn more
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              ) : null,
            )}
          </div>
        </div>

        {/* Trending format — AI & cloud bento */}
        <div className="mt-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="format-chip format-chip-trending">Trending</span>
            <p className="text-sm text-[var(--muted)]">
              Enterprise AI capabilities
            </p>
          </div>

          <div className="services-bento">
            {trending[0] ? (
              <Link
                href={`/services#${trending[0].id}`}
                className="service-bento-feature group"
              >
                <div className="service-bento-glow" aria-hidden />
                <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm">
                      <ServiceIcon name={trending[0].icon} className="h-6 w-6" />
                    </span>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200/80">
                      Featured capability
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                      {trending[0].title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                      {trending[0].description}
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--ink)] transition group-hover:bg-teal-50">
                    Explore Cloud &amp; AI
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ) : null}

            <div className="services-bento-side">
              {trending.slice(1).map((service) =>
                service ? (
                  <Link
                    key={service.id}
                    href={`/services#${service.id}`}
                    className="service-bento-tile group"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
                        <ServiceIcon name={service.icon} className="h-5 w-5" />
                      </span>
                      <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                        AI
                      </span>
                    </div>
                    <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
                      {service.shortTitle}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {service.description}
                    </p>
                    <span className="mt-5 inline-flex text-sm font-semibold text-[var(--accent)] opacity-80 transition-opacity group-hover:opacity-100">
                      Learn more →
                    </span>
                  </Link>
                ) : null,
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
