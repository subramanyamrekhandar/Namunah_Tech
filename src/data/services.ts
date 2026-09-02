export type Service = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  capabilities: string[];
  icon: "design" | "web" | "mobile" | "cloud" | "agentic" | "generative";
};

export const services: Service[] = [
  {
    id: "design",
    title: "Product Design",
    shortTitle: "Design",
    description:
      "Research-led UX and interface systems that make complex enterprise workflows feel clear and confident.",
    longDescription:
      "We design digital products for regulated industries and high-stakes operations—balancing usability, accessibility, and brand clarity so your teams and customers can move faster with less friction.",
    capabilities: [
      "Discovery & journey mapping",
      "Design systems & UI kits",
      "Prototyping & usability testing",
      "Accessibility (WCAG) reviews",
    ],
    icon: "design",
  },
  {
    id: "web",
    title: "Web Engineering",
    shortTitle: "Web",
    description:
      "Secure, high-performance web platforms built for scale, compliance, and long-term maintainability.",
    longDescription:
      "From customer portals to internal operations suites, we deliver modern web applications with enterprise-grade architecture, observability, and deployment pipelines.",
    capabilities: [
      "Next.js & React applications",
      "API & microservices design",
      "CMS & content platforms",
      "Performance & SEO engineering",
    ],
    icon: "web",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    shortTitle: "Mobile",
    description:
      "Native-quality iOS and Android apps that connect field teams, customers, and enterprise systems.",
    longDescription:
      "We build mobile experiences that stay reliable offline, integrate with your backend securely, and meet store and enterprise distribution requirements.",
    capabilities: [
      "Cross-platform Flutter & React Native",
      "Secure auth & device policies",
      "Offline-first data sync",
      "App store & MDM release support",
    ],
    icon: "mobile",
  },
  {
    id: "cloud-ai",
    title: "Cloud & AI Services",
    shortTitle: "Cloud & AI",
    description:
      "Cloud modernization paired with AI platforms that are secure, observable, and ready for production workloads.",
    longDescription:
      "We help enterprises migrate, harden, and operate cloud estates while standing up governed AI infrastructure—model hosting, data pipelines, MLOps, and cost controls.",
    capabilities: [
      "AWS, Azure & GCP architecture",
      "Landing zones & FinOps",
      "MLOps & model serving",
      "Data platforms & governance",
    ],
    icon: "cloud",
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    shortTitle: "Agentic AI",
    description:
      "Autonomous AI agents that execute multi-step business workflows with human oversight and audit trails.",
    longDescription:
      "We design agent systems that plan, tool-call, and collaborate across your CRM, ERP, and internal APIs—with guardrails, evaluation harnesses, and escalation paths your risk teams can trust.",
    capabilities: [
      "Multi-agent orchestration",
      "Tool & API grounding",
      "Policy & safety guardrails",
      "Evaluation & monitoring",
    ],
    icon: "agentic",
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    shortTitle: "Generative AI",
    description:
      "Domain-tuned generation for documents, code assistance, knowledge search, and customer conversations.",
    longDescription:
      "From RAG knowledge assistants to content and code copilots, we ship generative AI solutions grounded in your proprietary data with enterprise security and measurable ROI.",
    capabilities: [
      "RAG & knowledge assistants",
      "Fine-tuning & prompt systems",
      "Document intelligence",
      "Voice & multimodal experiences",
    ],
    icon: "generative",
  },
];
