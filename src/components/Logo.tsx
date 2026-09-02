import Link from "next/link";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  inverted?: boolean;
};

export function Logo({
  className = "",
  showWordmark = true,
  inverted = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${className}`}
      aria-label="Namunah Technologies home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-mark.svg"
        alt=""
        width={36}
        height={36}
        className={`h-9 w-9 ${inverted ? "brightness-0 invert" : ""}`}
      />
      {showWordmark ? (
        <span
          className={`font-[family-name:var(--font-display)] text-[1.05rem] font-semibold tracking-[-0.02em] leading-tight ${
            inverted ? "text-white" : "text-[var(--ink)]"
          }`}
        >
          Namunah
          <span className="block text-[0.68rem] font-medium tracking-[0.14em] uppercase opacity-60">
            Technologies
          </span>
        </span>
      ) : null}
    </Link>
  );
}
