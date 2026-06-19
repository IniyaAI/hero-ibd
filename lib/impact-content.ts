export const IMPACT_TESTIMONIALS = [
  {
    quote:
      "Heart to Heart's presentation helped our students understand invisible illnesses in a way textbooks never could.",
    name: "Educator",
    role: "Teacher",
  },
  {
    quote:
      "Learning about chronic illness awareness from peers made the topic feel real and important to our community.",
    name: "Student leader",
    role: "HOSA chapter member",
  },
  {
    quote:
      "The care packages show that someone truly understands what families go through.",
    name: "Community member",
    role: "Patient family",
  },
] as const;

export type ImpactEventHighlight = {
  src: string;
  alt: string;
  title: string;
  date: string;
  location: string;
  featured?: boolean;
  width: number;
  height: number;
};

export const IMPACT_EVENT_HIGHLIGHTS: ImpactEventHighlight[] = [
  {
    src: "/images/impact/collage-1.png",
    alt: "Heart to Heart community events and outreach collage",
    title: "Community Events & Outreach",
    date: "2024–2025",
    location: "DFW, TX",
    featured: true,
    width: 1350,
    height: 1080,
  },
  {
    src: "/images/impact/collage-2.png",
    alt: "Heart to Heart awareness campaigns collage",
    title: "Awareness Campaigns",
    date: "2024–2025",
    location: "North Texas",
    width: 2000,
    height: 1600,
  },
  {
    src: "/images/impact/collage-3.png",
    alt: "Heart to Heart school partnerships collage",
    title: "School Partnerships",
    date: "2023–2025",
    location: "DFW Schools",
    width: 2000,
    height: 1600,
  },
  {
    src: "/images/impact/collage-4.png",
    alt: "Heart to Heart patient support initiatives collage",
    title: "Patient Support Initiatives",
    date: "2024–2025",
    location: "DFW, TX",
    width: 1920,
    height: 1080,
  },
];

export const IMPACT_EVENT_INTRO =
  "Moments from our community events, awareness campaigns, school partnerships, and patient support initiatives.";
