export type ProductFeature = {
  title: string;
  description: string;
};

export const product = {
  name: "Namunah.AI",
  tagline: "AI Communication Platform for Indian Businesses",
  summary:
    "Our flagship product. AI phone agents in 20+ Indian languages, instant lead calling, and website chat—no code required, live in minutes.",
  website: "https://namunah.ai/",
  highlights: [
    "20+ Indian languages",
    "Voice · WhatsApp · Web",
    "No-code setup",
    "Pay as you go",
  ],
  features: [
    {
      title: "Natural, real-time conversations",
      description:
        "Domain-tuned voice agents that sound natural and handle high-volume inbound and outbound calls.",
    },
    {
      title: "Built for Indian industries",
      description:
        "Ready patterns for real estate, education, healthcare, e-commerce, telecom, and more—not a generic chatbot.",
    },
    {
      title: "One agent, every channel",
      description:
        "Train once. The same assistant answers on phone, WhatsApp, and web with shared knowledge.",
    },
    {
      title: "Instant lead callback",
      description:
        "When a lead arrives from ads or forms, Namunah.AI calls back in seconds and updates your CRM.",
    },
  ] satisfies ProductFeature[],
  steps: [
    {
      number: "01",
      title: "Create your assistant",
      description: "Choose a voice, language, and greeting.",
    },
    {
      number: "02",
      title: "Define behaviour",
      description: "Teach how your business should respond.",
    },
    {
      number: "03",
      title: "Go live",
      description: "Connect your number and start answering instantly.",
    },
  ],
  contact: {
    phone: "+91 99593 51113",
    phoneHref: "tel:+919959351113",
    email: "sures@namunah.ai",
  },
};
