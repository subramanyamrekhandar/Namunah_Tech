import Link from "next/link";

export function CTABand() {
  return (
    <section className="cta-band relative overflow-hidden">
      <div className="cta-band-aura" aria-hidden />
      <div className="cta-band-ring" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="cta-band-panel">
          <div className="cta-band-copy">
            <p className="cta-band-eyebrow">Next engagement</p>
            <h2 className="cta-band-title">
              Build the next
              <span> intelligent system</span>
              with Namunah.
            </h2>
            <p className="cta-band-text">
              Share your platform goals, cloud estate, or AI roadmap. We will
              shape a clear path from discovery to production—with enterprise
              standards from day one.
            </p>
          </div>

          <div className="cta-band-actions">
            <Link href="/contact" className="cta-band-primary">
              Start a conversation
              <span aria-hidden>→</span>
            </Link>
            <Link href="/platform" className="cta-band-secondary">
              Explore Namunah.AI
            </Link>
            <p className="cta-band-note">
              Typical response within one business day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
