import { partners } from "@/data/clients";

export function Partners() {
  return (
    <section className="border-y border-[var(--line)] bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="shrink-0 text-sm text-[var(--muted)]">
          Cloud &amp; AI platforms we engineer on
        </p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {partners.map((name) => (
            <li
              key={name}
              className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-[var(--ink)]/55"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
