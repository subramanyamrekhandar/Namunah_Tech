import Link from "next/link";
import { posts } from "@/data/blog";

export function BlogPreview() {
  return (
    <section className="section-pad bg-[var(--surface)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Insights</p>
            <h2 className="section-title">Blogs &amp; articles</h2>
            <p className="section-copy">
              Practical notes on enterprise engineering, cloud foundations, and
              shipping AI that holds up in production.
            </p>
          </div>
          <Link href="/blog" className="btn-ghost shrink-0">
            View all posts
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col border-t-2 border-[var(--ink)] bg-white p-6 transition-shadow hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center justify-between gap-3 text-xs text-[var(--muted)]">
                <span>{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold tracking-[-0.02em] text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                {post.excerpt}
              </p>
              <time
                className="mt-6 text-xs text-[var(--muted)]"
                dateTime={post.date}
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
