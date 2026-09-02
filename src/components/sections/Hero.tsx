import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="hero-atmosphere" aria-hidden />
      <div className="mx-auto grid min-h-[calc(100svh-4.25rem)] max-w-7xl items-center gap-12 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-6">
        <div className="relative z-10 max-w-2xl animate-rise">
          <p className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.04em] text-[var(--ink)] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Namunah Technologies
          </p>
          <h1 className="mt-5 max-w-xl text-2xl font-medium leading-snug tracking-[-0.02em] text-[var(--ink)] sm:text-3xl lg:text-[2rem]">
            Enterprise IT. Intelligent systems that scale.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            We partner with enterprises to design, engineer, and operate secure
            digital platforms—alongside Cloud, Agentic AI, and Generative AI
            solutions built for production.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Let&apos;s Work Together
            </Link>
            <Link href="/services" className="btn-ghost">
              Explore services
            </Link>
          </div>
        </div>

        <div className="relative z-10 animate-rise-delayed">
          <div className="hero-visual" aria-hidden>
            <div className="hero-orb hero-orb-a" />
            <div className="hero-orb hero-orb-b" />
            <div className="hero-grid-plane" />
            <svg
              className="hero-mark"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.12502 12.9039V14.4215C3.12502 14.4215 3.12498 14.4147 3.12502 14.4492C3.12505 14.4836 3.28864 14.3983 3.38116 14.3388C6.00671 12.6518 7.47949 13.459 8.6578 14.2008C9.83611 14.9427 11.2717 16.4948 15.0615 19.3813C17.5974 21.3128 20.6455 20.8989 21.875 19.6642V18.0086C21.875 17.9603 21.6317 18.1673 21.5164 18.2432C18.3813 20.3299 16.0705 18.3867 13.5744 16.2876L13.5374 16.2565C11.0272 14.1457 9.10609 12.1658 6.98003 11.8416C5.39192 11.5381 3.47085 12.4555 3.12502 12.9039Z"
                fill="currentColor"
              />
              <path
                d="M3.12502 9.10311V10.6207C3.12502 10.6207 3.12498 10.614 3.12502 10.6484C3.12505 10.6828 3.28864 10.5975 3.38116 10.538C6.00671 8.85107 7.47949 9.65825 8.6578 10.4001C9.83611 11.1419 11.2717 12.694 15.0615 15.5806C17.5974 17.512 20.6455 17.0982 21.875 15.8634V14.2079C21.875 14.1595 21.6317 14.3665 21.5164 14.4424C18.3813 16.5291 16.0705 14.5859 13.5744 12.4869L13.5374 12.4557C11.0272 10.3449 9.10609 8.36504 6.98003 8.04079C5.39192 7.73734 3.47085 8.65477 3.12502 9.10311Z"
                fill="currentColor"
              />
              <path
                d="M3.12502 5.23592V6.75352C3.12502 6.75352 3.12498 6.74677 3.12502 6.78121C3.12505 6.81565 3.28864 6.73029 3.38116 6.67084C6.00671 4.98388 7.47949 5.79106 8.6578 6.53288C9.83611 7.27469 11.2717 8.82678 15.0615 11.7134C17.5974 13.6449 20.6455 13.231 21.875 11.9962V10.3407C21.875 10.2923 21.6317 10.4993 21.5164 10.5752C18.3813 12.662 16.0705 10.7187 13.5744 8.61967L13.5374 8.58854C11.0272 6.47769 9.10609 4.49786 6.98003 4.1736C5.39192 3.87016 3.47085 4.78758 3.12502 5.23592Z"
                fill="currentColor"
              />
              <path
                d="M21.7203 8.23838C21.6818 8.26597 19.1204 10.1699 16.0466 8.19699C16.0107 8.17458 16.0063 8.14237 16.0082 8.07282V6.78967C16.0082 6.63802 16.1362 6.6977 16.1875 6.7345C19.1075 8.67989 21.7203 6.76208 21.7203 6.76208C21.7203 6.76208 21.8227 6.66562 21.8227 6.76208V8.05894C21.8227 8.1556 21.7587 8.21079 21.7203 8.23838Z"
                fill="currentColor"
              />
              <path
                d="M21.7203 4.85947C21.6818 4.88707 19.1204 6.79097 16.0466 4.81808C16.0107 4.79567 16.0063 4.76346 16.0082 4.69392V3.41076C16.0082 3.25911 16.1362 3.31879 16.1875 3.3556C19.1075 5.30098 21.7203 3.38317 21.7203 3.38317C21.7203 3.38317 21.8227 3.28671 21.8227 3.38317V4.68003C21.8227 4.77669 21.7587 4.83188 21.7203 4.85947Z"
                fill="currentColor"
              />
              <path
                d="M8.83744 16.3358C8.79902 16.3082 6.23754 14.4043 3.16378 16.3772C3.12788 16.3996 3.1235 16.4319 3.12535 16.5014V17.7845C3.12535 17.9362 3.25343 17.8765 3.30466 17.8397C6.22474 15.8943 8.83744 17.8121 8.83744 17.8121C8.83744 17.8121 8.9399 17.9086 8.9399 17.8121V16.5153C8.9399 16.4186 8.87586 16.3634 8.83744 16.3358Z"
                fill="currentColor"
              />
              <path
                d="M8.83744 19.8397C8.79902 19.8122 6.23754 17.9083 3.16378 19.8811C3.12788 19.9035 3.1235 19.9358 3.12535 20.0053V21.2885C3.12535 21.4401 3.25343 21.3804 3.30466 21.3436C6.22474 19.3982 8.83744 21.316 8.83744 21.316C8.83744 21.316 8.9399 21.4125 8.9399 21.316V20.0192C8.9399 19.9225 8.87586 19.8673 8.83744 19.8397Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
