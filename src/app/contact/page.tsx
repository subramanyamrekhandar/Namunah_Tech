import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a 30-minute discovery call with Namunah Technologies. Schedule via Calendly for enterprise IT, Cloud & AI, Agentic AI, and Generative AI discussions.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Namunah Technologies",
    description:
      "Book a 30-minute discovery call with Namunah Technologies on Calendly.",
    url: "https://namunah.tech/contact",
  },
};

const CALENDLY_URL = "https://calendly.com/sures-namunah/30min";

const steps = [
  {
    number: "01",
    title: "Book a slot",
    body: "Pick a 30-minute window that fits your calendar.",
  },
  {
    number: "02",
    title: "Share context",
    body: "Bring goals, constraints, and any existing stack notes.",
  },
  {
    number: "03",
    title: "Leave with a plan",
    body: "Walk away with clear discovery next steps and owners.",
  },
];

const topics = [
  "Enterprise IT modernization",
  "Cloud & AI Services",
  "Agentic AI systems",
  "Generative AI / RAG",
  "Product, web, and mobile platforms",
  "Namunah.AI voice agents",
];

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="section-eyebrow">Contact</p>
              <h1 className="contact-hero-title">
                Book a discovery call.
                <span> No forms. Just a clear conversation.</span>
              </h1>
              <p className="section-copy mt-5 max-w-xl">
                Schedule 30 minutes with Namunah Technologies. We will map your
                platform or AI initiative and outline a practical path to
                production.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-primary-btn"
                >
                  Schedule on Calendly
                  <span aria-hidden>↗</span>
                </a>
                <a href="#calendar" className="btn-ghost">
                  Book below
                </a>
              </div>
            </div>

            <aside className="contact-hero-card">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-200/80">
                Meeting details
              </p>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-xs uppercase tracking-[0.12em] text-white/45">
                    Duration
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-white">
                    30 minutes
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.12em] text-white/45">
                    Format
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-white">
                    Video discovery call
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.12em] text-white/45">
                    Host
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-white">
                    Namunah Technologies
                  </dd>
                </div>
              </dl>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex text-sm font-semibold text-teal-200 hover:text-white"
              >
                Open Calendly scheduling page →
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="contact-step">
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--accent)]">
                  {step.number}
                </span>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div
            id="calendar"
            className="contact-calendar scroll-mt-28"
          >
            <div className="flex flex-col gap-3 border-b border-[var(--line)] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
                  Choose a time
                </h2>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Powered by Calendly · Secure booking · Instant confirmation
                </p>
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                Prefer a new tab? Open Calendly ↗
              </a>
            </div>

            <div className="contact-calendar-frame">
              <iframe
                title="Schedule a meeting with Namunah Technologies"
                src={`${CALENDLY_URL}?hide_gdpr_banner=1`}
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--surface)] section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="section-eyebrow">Direct channels</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
              Prefer email or phone?
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              Reach us anytime. For fastest scheduling, use the calendar above.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a href="tel:+919959351113" className="contact-channel">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Phone
                </span>
                <span className="mt-2 block text-base font-semibold text-[var(--ink)]">
                  +91 99593 51113
                </span>
              </a>
              <a
                href="mailto:sures@namunah.ai"
                className="contact-channel"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Product · Namunah.AI
                </span>
                <span className="mt-2 block text-base font-semibold text-[var(--ink)]">
                  sures@namunah.ai
                </span>
              </a>
            </div>
          </div>

          <div>
            <p className="section-eyebrow">What we can cover</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
              Topics for the call
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <li key={topic} className="contact-topic">
                  {topic}
                </li>
              ))}
            </ul>
            <Link
              href="/platform"
              className="mt-8 inline-flex text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              Or explore Namunah.AI first →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
