export const SITE = {
  name: "Heart to Heart NPO",
  email: "npo.heart2heart@gmail.com",
  instagram: "https://instagram.com/heart2heartnpo",
  instagramHandle: "@heart2heartnpo",
  donateUrl: "https://hcb.hackclub.com/donations/start/heart-to-heart",
  microGrantFormUrl: "https://forms.gle/WUAuPvW1ha7ipU998",
  register5kUrl: "https://forms.gle/omnufq3TjZtp4ssH8",
  spotifyEmbedUrl:
    "https://open.spotify.com/embed/show/2eW4ghzCBqdazzHaDs70qR/video?utm_source=generator",
  podcastUrl: "https://open.spotify.com/show/2eW4ghzCBqdazzHaDs70qR",
  marathonPhotoUrl:
    "https://theplantedrunner.com/wp-content/uploads/2022/01/header-8.png",
} as const;

export const MISSION_STATEMENT =
  "Dedicated to promoting earlier diagnosis and improving outcomes for individuals living with chronic illnesses by advancing awareness, education, and support through youth-led initiatives and community partnerships.";

export const TAGLINE = "Heart to Heart: Where Awareness Leads to Action";

export const PAGE_HEADERS = {
  about: {
    accentHeading: "Our Mission",
    title: "About Us",
    description:
      "Founded from a passion for helping others and improving health outcomes through awareness, education, and support.",
  },
  programs: {
    accentHeading: "What We Do",
    title: "Programs",
    description: "Support, education, and awareness programs for chronic illness communities in DFW.",
  },
  events: {
    accentHeading: "Join Us",
    title: "Events",
    description: "Upcoming registration and past community programs.",
  },
  impact: {
    accentHeading: "Our Reach",
    title: "Impact",
    description: "Outcomes from youth-led action and community partnership across the DFW area.",
  },
  getInvolved: {
    accentHeading: "Take Action",
    title: "Get Involved",
    description: "Time, partnership, or funding all help us reach more people affected by chronic illness.",
  },
  contact: {
    accentHeading: "Reach Out",
    title: "Contact",
    description: "Questions about partnerships, volunteering, or our programs.",
  },
  microGrants: {
    accentHeading: "Apply Today",
    title: "Microgrants",
    description: "Thank you for your interest in the Heart to Heart Micro-Grant Program!",
  },
} as const;

export const HOME_STATS = [
  { value: "162,347+", label: "People reached" },
  { value: "15+", label: "Events hosted" },
  { value: "3+", label: "Schools/communities engaged" },
  { value: "$1,800+", label: "raised" },
] as const;

export const IMPACT_STATS = [
  { value: "162,347+", label: "People reached" },
  { value: "15+", label: "Events hosted" },
  { value: "3+", label: "Schools/communities engaged" },
  { value: "$1,800+", label: "raised" },
  { value: "65+", label: "Patients supported" },
] as const;

export const FUND_USES = [
  "Program materials and outreach events",
  "Support initiatives and micro-grants",
  "Educational resources and toolkits",
  "Community engagement activities",
] as const;

export const DONATE_MESSAGE =
  "100% of your donation goes directly to programs supporting patients, research, and advocacy — never to personal profit.";

export const PILLARS = [
  {
    title: "Support",
    accent: "var(--color-coral)",
    description:
      "Our Support pillar is dedicated to uplifting individuals and families affected by chronic illnesses by providing essential resources and financial assistance. Through initiatives such as care packages, flare kits, and micro-grants, we help ease the day-to-day burdens of long-term conditions while fostering a community where individuals feel supported, understood, and empowered.",
    href: "/programs#support",
  },
  {
    title: "Education",
    accent: "var(--color-lavender)",
    description:
      "Our Education pillar focuses on delivering clear, accessible, and reliable information about chronic illnesses to improve understanding, early recognition, and long-term support. Through school and community presentations, digital resources, and expert-informed content, we equip students, families, and educators with the knowledge needed to better support those living with chronic conditions.",
    href: "/programs#education",
  },
  {
    title: "Awareness",
    accent: "var(--color-lavender-deep)",
    description:
      "Our Awareness pillar works to increase visibility for chronic and often invisible illnesses through community campaigns, events, and outreach initiatives. By encouraging open dialogue and engagement, we aim to reduce stigma, promote understanding, and ensure individuals feel seen, acknowledged, and supported within their communities.",
    href: "/programs#awareness",
  },
] as const;

export const PARTNERS = [
  {
    name: "Crohn's & Colitis Foundation",
    short: "CCF",
    logo: "/images/partners/ccf.png",
  },
  {
    name: "PowerPlay Foundation",
    short: "PowerPlay",
    logo: "/images/partners/powerplay.png",
  },
  {
    name: "Chicken N Pickle",
    short: "Chicken N Pickle",
    logo: "/images/partners/chicken-n-pickle.png",
  },
  {
    name: "Children's Health",
    short: "Children's Health",
    logo: "/images/partners/childrens-health.png",
  },
  {
    name: "STAR Foundation for Athletic Recovery",
    short: "STAR Foundation",
    logo: "/images/partners/star-foundation.png",
  },
  {
    name: "City of Prosper",
    short: "City of Prosper",
    logo: "/images/partners/city-of-prosper.png",
  },
  {
    name: "City of Celina",
    short: "City of Celina",
    logo: "/images/partners/city-of-celina.png",
  },
] as const;

export const PODCAST_SPEAKERS = [
  { name: "Makayla Allison", image: "/images/podcast/speakers/makayla-allison.jpg" },
  { name: "Rob Nunnery", image: "/images/podcast/speakers/rob-nunnery.jpg" },
  { name: "Nicole Benish", image: "/images/podcast/speakers/nicole-benish.jpg" },
  { name: "Lenette Sparacino", image: "/images/podcast/speakers/lenette-sparacino.jpg" },
] as const;

export const ABOUT_STORY = `Heart to Heart was born from our passion for helping others and our growing interest in medicine. Early on, we were drawn to understanding how diseases affect people's lives, which led us to lead HOSA community awareness campaigns on sickle cell disease, endometriosis, and pediatric IBD. These experiences revealed how many illnesses remain unheard, stigmatized, and lacking proper awareness or support, leaving patients struggling to get diagnosed. Through personal stories, conversations, and podcast episodes, we witnessed firsthand the challenges patients and families face when conditions go unnoticed or misunderstood. We realized that awareness alone isn't enough; people need real support, education, and connection. Building on initiatives like BLOOM and Heroes for IBD, we founded Heart to Heart, a student-led 501(c)(3) nonprofit empowering youth to create meaningful change through events, storytelling, and outreach programs that foster understanding, break stigma, and promote earlier diagnosis.`;
