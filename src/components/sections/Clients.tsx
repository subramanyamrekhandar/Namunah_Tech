import Link from "next/link";
import { clients } from "@/data/clients";

export function Clients() {
  return (
    <section className="section-pad bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Our clients</p>
          <h2 className="section-title">Trusted by teams we build with.</h2>
          <p className="section-copy">
            Selected organisations we partner with—across healthcare, social
            impact, consumer brands, and student talent platforms.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {clients.map((client) => (
            <article
              key={client.id}
              className="client-card group flex flex-col overflow-hidden"
            >
              <div
                className="relative flex min-h-[140px] items-end p-6 sm:p-7"
                style={{
                  background: `linear-gradient(145deg, ${client.accent}22, ${client.accent}08 45%, #ffffff)`,
                }}
              >
                <div className="absolute inset-0 work-pattern opacity-30" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    {client.industry}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] sm:text-3xl">
                    {client.name}
                  </h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {client.summary}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {client.focus.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--ink)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: client.accent }}
                  >
                    Visit website
                    <span aria-hidden>↗</span>
                  </a>
                  <Link
                    href={`/work/${client.workSlug}`}
                    className="text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent)]"
                  >
                    View engagement →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
