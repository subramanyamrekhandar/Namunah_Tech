import type { ReactNode } from "react";

type IconName =
  | "design"
  | "web"
  | "mobile"
  | "cloud"
  | "agentic"
  | "generative";

const paths: Record<IconName, ReactNode> = {
  design: (
    <>
      <path d="M4 20 14.5 9.5a2.5 2.5 0 1 1 3.5 3.5L7.5 20H4v-3.5Z" />
      <path d="m13 8 3 3" />
    </>
  ),
  web: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18h10a4 4 0 0 0 .4-8 6 6 0 0 0-11.5-1.5A3.5 3.5 0 0 0 7 18Z" />
      <path d="M12 14v4M10 16h4" />
    </>
  ),
  agentic: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 19a7 7 0 0 1 14 0" />
      <path d="M19 8h2M3 8h2M12 3V1" />
    </>
  ),
  generative: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m6.5 6.5 2.5 2.5M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
};

export function ServiceIcon({
  name,
  className = "h-7 w-7",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
