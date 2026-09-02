import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <section className="page-hero">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/blog"
            className="text-sm font-medium text-[var(--muted)] hover:text-[var(--ink)]"
          >
            ← All articles
          </Link>
          <p className="section-eyebrow mt-6">{post.category}</p>
          <h1 className="section-title">{post.title}</h1>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span aria-hidden>·</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        <div className="space-y-5 text-base leading-relaxed text-[var(--muted)]">
          <p>{post.excerpt}</p>
          <p>
            At Namunah Technologies, we treat AI programs like any other
            enterprise platform initiative: clear ownership, measurable
            quality bars, and architecture that security and operations teams
            can approve. This article outlines the principles we apply when
            advising clients on {post.category.toLowerCase()} initiatives.
          </p>
          <p>
            Start with business outcomes and risk appetite, then choose
            models, tooling, and cloud patterns that fit your data residency
            and integration landscape. Instrument evaluation early, keep humans
            in the loop for consequential actions, and plan for cost and
            latency as first-class product constraints.
          </p>
          <p>
            If you are scoping a similar initiative, our team can help map the
            discovery, pilot, and production phases for your environment.
          </p>
        </div>
        <Link href="/contact" className="btn-primary mt-10 inline-flex">
          Talk to an expert
        </Link>
      </div>
    </article>
  );
}
