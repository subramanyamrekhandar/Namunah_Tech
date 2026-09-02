import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/data/site";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/platform", label: "Namunah.AI" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#design", label: "Product Design" },
      { href: "/services#web", label: "Web Engineering" },
      { href: "/services#mobile", label: "Mobile Applications" },
      { href: "/services#cloud-ai", label: "Cloud & AI Services" },
      { href: "/services#agentic-ai", label: "Agentic AI" },
      { href: "/services#generative-ai", label: "Generative AI" },
    ],
  },
];

const socialLinks = [
  { href: siteConfig.social.linkedin, label: "LinkedIn" },
  { href: siteConfig.social.x, label: "X" },
  { href: siteConfig.social.instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            Enterprise IT and AI engineering partner. We design, build, and
            operate secure digital systems—from cloud platforms to agentic and
            generative AI—for organizations that need reliability at scale.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer me"
                className="rounded-full border border-[var(--line)] bg-white px-3.5 py-1.5 text-xs font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Enterprise IT · Namunah.AI · Agentic AI · Generative AI</p>
        </div>
      </div>
    </footer>
  );
}
