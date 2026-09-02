import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABand } from "@/components/sections/CTABand";
import { works } from "@/data/works";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  if (!work) return { title: "Case study" };
  return {
    title: work.title,
    description: work.summary,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  if (!work) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Link
            href="/work"
            className="text-sm font-medium text-[var(--muted)] hover:text-[var(--ink)]"
          >
            ← All work
          </Link>
          <p className="section-eyebrow mt-6">{work.category}</p>
          <h1 className="section-title max-w-3xl">{work.title}</h1>
          <p className="section-copy">{work.summary}</p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)]">
              Engagement overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
              {work.description}
            </p>

            <h3 className="mt-10 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
              Outcomes
            </h3>
            <ul className="mt-4 space-y-3">
              {work.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-2xl border border-[var(--line)] bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Client
            </p>
            <p className="mt-2 font-semibold text-[var(--ink)]">{work.client}</p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Stack
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {work.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-[var(--surface)] px-2.5 py-1 text-xs font-medium text-[var(--ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>

            {work.externalUrl ? (
              <a
                href={work.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-8 w-full"
              >
                Visit live site ↗
              </a>
            ) : null}

            <Link href="/contact" className="btn-primary mt-3 w-full">
              Start a similar project
            </Link>
          </aside>
        </div>
      </section>

      <CTABand />
    </>
  );
}
