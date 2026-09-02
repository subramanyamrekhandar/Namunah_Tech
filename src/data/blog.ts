export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
};

export const posts: BlogPost[] = [
  {
    slug: "enterprise-agentic-ai-guardrails",
    title: "Shipping Agentic AI with Guardrails Enterprises Can Trust",
    excerpt:
      "How to design multi-step agents with policy engines, evaluation suites, and human escalation paths that satisfy security and compliance teams.",
    date: "2026-08-12",
    category: "Agentic AI",
    readTime: "8 min",
  },
  {
    slug: "rag-for-regulated-industries",
    title: "RAG Patterns for Regulated Industries",
    excerpt:
      "Practical architecture choices for retrieval-augmented generation when data residency, citations, and audit trails are non-negotiable.",
    date: "2026-06-28",
    category: "Generative AI",
    readTime: "7 min",
  },
  {
    slug: "cloud-ai-landing-zones",
    title: "Cloud Landing Zones Built for AI Workloads",
    excerpt:
      "What changes when your cloud foundation must support GPU pools, model registries, and governed data access from day one.",
    date: "2026-05-09",
    category: "Cloud & AI",
    readTime: "6 min",
  },
];
