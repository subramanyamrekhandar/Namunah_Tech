import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Namunah Technologies blog—enterprise engineering, Cloud & AI, Agentic AI, Generative AI, and production AI insights.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="section-eyebrow">Blog</p>
          <h1 className="section-title max-w-3xl">Insights for builders.</h1>
          <p className="section-copy">
            Notes from delivery teams on shipping durable platforms and AI
            systems in regulated, high-stakes environments.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl space-y-6 px-5 sm:px-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border-t border-[var(--line)] pt-8 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
                <span>{post.category}</span>
                <span aria-hidden>·</span>
                <span>{post.readTime}</span>
                <span aria-hidden>·</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] hover:text-[var(--accent)]">
                {post.title}
              </h2>
              <p className="mt-3 max-w-3xl text-[var(--muted)] leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
