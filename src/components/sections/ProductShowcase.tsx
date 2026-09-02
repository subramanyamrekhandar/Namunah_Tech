import Link from "next/link";
import { product } from "@/data/product";

export function ProductShowcase() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="product-atmosphere" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Our product</p>
            <h2 className="section-title">{product.name}</h2>
            <p className="section-copy">{product.summary}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={product.website}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Visit Namunah.AI ↗
            </a>
            <Link href="/platform" className="btn-ghost">
              Platform details
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {product.highlights.map((item) => (
            <span key={item} className="product-pill">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="product-panel">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-200/80">
              Flagship AI platform
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
              {product.tagline}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Built and operated by Namunah Technologies—voice AI that Indian
              businesses can launch without engineering overhead, with
              enterprise-ready channels and integrations.
            </p>

            <ol className="mt-8 grid gap-4 sm:grid-cols-3">
              {product.steps.map((step) => (
                <li
                  key={step.number}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-teal-200">
                    {step.number}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {step.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-4">
            {product.features.slice(0, 4).map((feature) => (
              <div key={feature.title} className="product-feature-tile">
                <h4 className="font-[family-name:var(--font-display)] text-base font-semibold tracking-[-0.02em] text-[var(--ink)]">
                  {feature.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
