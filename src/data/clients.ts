export type Client = {
  id: string;
  name: string;
  industry: string;
  summary: string;
  focus: string[];
  website: string;
  accent: string;
  workSlug: string;
  playStoreUrl?: string;
};

export const clients: Client[] = [
  {
    id: "happy-donors",
    name: "Happy Donors",
    industry: "Healthcare · NGO",
    summary:
      "Realtime blood donation portal connecting requestors with donors, blood banks, and healthcare organisations across India.",
    focus: ["Web platform", "Donor matching", "Request workflows"],
    website: "https://www.happydonors.ngo/",
    accent: "#B91C1C",
    workSlug: "happy-donors",
  },
  {
    id: "raviteja-home-foods",
    name: "Ravi Teja Home Foods",
    industry: "Food & Beverage",
    summary:
      "Digital presence and commerce experience for a heritage Indian sweets brand specializing in pure ghee sompapadi and traditional offerings.",
    focus: ["Brand website", "Product showcase", "Customer engagement"],
    website: "https://ravitejahomefoods.in/",
    accent: "#B45309",
    workSlug: "raviteja-home-foods",
  },
  {
    id: "qntern",
    name: "Qntern",
    industry: "EdTech · Student Talent",
    summary:
      "From learning to earning—workshops, hackathons, and campus events that connect students with industry skills, brands, and career pathways.",
    focus: ["Event platform", "Workshops", "Brand–student engagement"],
    website: "https://qntern.com/",
    accent: "#4F46E5",
    workSlug: "qntern",
  },
  {
    id: "docquest",
    name: "DocQuest",
    industry: "EdTech · NEET Prep",
    summary:
      "NEET preparation platform with personalized mock tests, daily quizzes, and performance analytics—available on web and Google Play.",
    focus: ["Mobile app", "Mock tests", "Learning analytics"],
    website: "https://www.docquest.in/",
    accent: "#0E7490",
    workSlug: "docquest",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.docquest.student",
  },
];

export const partners = [
  "AWS Partner",
  "Microsoft Azure",
  "Google Cloud",
  "OpenAI Ecosystem",
];
