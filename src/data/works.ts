export type Work = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  description: string;
  outcomes: string[];
  stack: string[];
  accent: string;
  externalUrl?: string;
};

export const works: Work[] = [
  {
    slug: "happy-donors",
    title: "Happy Donors Blood Donation Platform",
    client: "Happy Donors",
    category: "Web · Healthcare",
    summary:
      "Online blood donation portal enabling realtime donor search, blood requests, blood banks, and organisation partnerships across India.",
    description:
      "Namunah Technologies engineered the Happy Donors digital platform so people in urgent need of blood can place and track requests while donors, banks, and organisations stay connected in a transparent workflow—from initiation through completion.",
    outcomes: [
      "End-to-end blood request lifecycle: Initiated → Active → In-Progress → Completed",
      "Realtime donor discovery and request visibility for registered donors",
      "Services spanning donation, blood banks, organisations, and healthcare awareness",
    ],
    stack: ["Web application", "Realtime matching", "Mobile-ready UX"],
    accent: "#B91C1C",
    externalUrl: "https://www.happydonors.ngo/",
  },
  {
    slug: "raviteja-home-foods",
    title: "Ravi Teja Home Foods Digital Brand",
    client: "Ravi Teja Home Foods",
    category: "Web · Commerce",
    summary:
      "Brand and product website for a heritage sweets manufacturer known for pure ghee sompapadi and traditional Indian offerings.",
    description:
      "We delivered a clean digital experience for Ravi Teja Home Foods so customers can discover product varieties, brand heritage, and engagement paths—built for clarity on mobile and desktop across Telangana and Andhra Pradesh audiences.",
    outcomes: [
      "Modern product-led brand presence for a heritage food manufacturer",
      "Clear pathways for customer enquiry and wholesale interest",
      "Mobile-first layout aligned to regional retail and festival demand cycles",
    ],
    stack: ["Next-ready web", "Brand UX", "Responsive commerce presentation"],
    accent: "#B45309",
    externalUrl: "https://ravitejahomefoods.in/",
  },
  {
    slug: "qntern",
    title: "Qntern Student Talent Platform",
    client: "Qntern",
    category: "Web · EdTech",
    summary:
      "Digital platform for immersive workshops, hackathons, and campus events that help students build skills and connect with brands.",
    description:
      "Namunah Technologies delivered the Qntern web experience so students can discover workshops and events, participate in high-impact learning, and so corporates can run curated campaigns across a large student community—from campus fests to AI-focused cohorts.",
    outcomes: [
      "Clear student journey: Discover → Participate → Network → Accelerate",
      "Event discovery across workshops, meetups, hackathons, and campus fests",
      "Corporate partnership surfaces for brands engaging student communities",
    ],
    stack: ["Web platform", "Event UX", "Responsive marketing site"],
    accent: "#4F46E5",
    externalUrl: "https://qntern.com/",
  },
  {
    slug: "namunah-ai-platform",
    title: "Namunah.AI Voice Platform",
    client: "Namunah Technologies",
    category: "Generative AI · Agentic AI",
    summary:
      "Our own AI communication product—voice agents in 20+ Indian languages with phone, WhatsApp, and web channels for SMBs and enterprises.",
    description:
      "Namunah.AI is the product we build and operate in-house: no-code AI phone agents, instant lead calling, multilingual conversations, call recording, and CRM-ready workflows designed for Indian businesses.",
    outcomes: [
      "No-code assistant setup live in minutes",
      "Multi-channel coverage: Phone, WhatsApp, and Web",
      "Industry-tuned agents for real estate, education, healthcare, and more",
    ],
    stack: ["Voice AI", "LLM orchestration", "CRM integrations", "Multilingual NLP"],
    accent: "#0F766E",
    externalUrl: "https://namunah.ai/",
  },
];
