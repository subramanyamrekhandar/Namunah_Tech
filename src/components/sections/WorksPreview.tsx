import Link from "next/link";
import { works } from "@/data/works";

export function WorksPreview({ limit = 5 }: { limit?: number }) {
  const items = works.slice(0, limit);

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Our work</p>
            <h2 className="section-title">Client platforms and our own product.</h2>
            <p className="section-copy">
              Real engagements for Happy Donors, Ravi Teja Home Foods, Qntern,
              and DocQuest—plus Namunah.AI, the AI communication platform we
              build in-house.
            </p>
          </div>
          <Link href="/work" className="btn-ghost shrink-0">
            Browse all work
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:gap-10">
          {items.map((work, index) => (
            <article
              key={work.slug}
              className={`grid overflow-hidden rounded-2xl border border-[var(--line)] bg-white lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className="relative min-h-[240px] p-8 sm:min-h-[300px] sm:p-10"
                style={{
                  background: `linear-gradient(145deg, ${work.accent}18, ${work.accent}08 40%, #0f172a0a)`,
                }}
              >
                <div className="absolute inset-0 work-pattern opacity-40" />
                <div className="relative flex h-full flex-col justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    {work.category}
                  </p>
                  <p
                    className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"
                    style={{ color: work.accent }}
                  >
                    {work.client.split(" ")[0]}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
                  {work.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {work.summary}
                </p>
                <Link
                  href={`/work/${work.slug}`}
                  className="mt-7 inline-flex text-sm font-semibold text-[var(--accent)] hover:underline"
                >
                  View case study →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
