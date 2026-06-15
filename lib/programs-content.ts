export const PILLAR_NAV = [
  { id: "support", label: "Support", icon: "heart" as const },
  { id: "education", label: "Education", icon: "book" as const },
  { id: "awareness", label: "Awareness", icon: "megaphone" as const },
] as const;

export const SUPPORT_METRICS = [
  { value: "$1,800+", label: "raised" },
  { value: "65+", label: "Patients Supported" },
  { value: "100+", label: "Toys Donated" },
] as const;

export const EDUCATION_PEOPLE_EDUCATED = "194+" as const;

export const EDUCATION_METRICS = [
  { value: EDUCATION_PEOPLE_EDUCATED, label: "People Educated" },
  { value: "5+", label: "Podcast Episodes" },
  { value: "3+", label: "Community Partnerships" },
] as const;

export const AWARENESS_METRICS = [
  { value: "162,347+", label: "People Reached" },
  { value: "15+", label: "Events Hosted" },
  { value: "3+", label: "Schools & Communities Engaged" },
] as const;

export const FUNDRAISER_TIMELINE_TOTAL = "$1,613.40+";

export const FUNDRAISER_TIMELINE = [
  {
    year: "2024",
    title: "Sickle Cell Disease Fundraiser",
    amount: "$300",
    beneficiary: "The National Bleeding Disorders Foundation",
    description:
      "Student-led fundraising campaign focused on increasing awareness and supporting individuals affected by sickle cell disease.",
  },
  {
    year: "2025",
    title: "BLOOM Endometriosis Fundraiser",
    amount: "$500",
    beneficiary: "Endometriosis Research Center and Women's Hospital",
    description:
      "Community campaign supporting education, awareness, and advocacy for endometriosis.",
  },
  {
    year: "2025",
    title: "Chicken N Pickle 10% Giveback Night",
    amount: "$113.40",
    beneficiary: "Crohn's & Colitis Foundation",
    description:
      "Partnership event where 10% of eligible purchases were donated to support patients living with inflammatory bowel disease.",
    image: { src: "/images/programs/giveback-night.jpg", alt: "Chicken N Pickle giveback night" },
  },
  {
    year: "2026",
    title: "Charity Pickleball Tournament",
    amount: "$700",
    beneficiary: "Crohn's & Colitis Foundation",
    description:
      "Community tournament sponsored by CUTX that brought teams together to raise funds and awareness for pediatric IBD.",
    isLatest: true,
    image: { src: "/images/events/pickleball-img_0394.jpg", alt: "Charity Pickleball Tournament" },
    gallery: [
      { src: "/images/events/pickleball-img_0394.jpg", alt: "Charity Pickleball Tournament" },
      { src: "/images/events/pickleball-img_0365.jpg", alt: "Pickleball tournament participants" },
      { src: "/images/events/pickleball-img_8297.jpg", alt: "Pickleball tournament community" },
    ],
  },
] as const;

export const FUNDRAISERS_CARD = {
  title: "Fundraisers",
  description:
    "Community events that raise funds for nonprofit partners and future micro-grant initiatives for patients in need.",
  images: [
    { src: "/images/events/pickleball-img_0394.jpg", alt: "Charity Pickleball Tournament" },
    { src: "/images/programs/giveback-night.jpg", alt: "Chicken N Pickle Giveback Night" },
  ],
  metrics: [{ value: "$1,613+", label: "total raised across events" }],
} as const;

export const DONATION_DRIVES_HEADER_METRICS = [
  { value: "65+", label: "items donated" },
  { value: "1", label: "active donation initiative completed" },
] as const;

export const DONATION_DRIVE_TIMELINE = [
  {
    year: "2026",
    title: "Children's Health Toy Donation Drive",
    itemsDonated: "65 toys",
    beneficiary: "Children's Health",
    description:
      "Community members donated toys and comfort items to support hospitalized pediatric patients living with inflammatory bowel disease and other chronic health conditions.",
    badge: "Founding Initiative",
    highlighted: true,
    image: {
      src: "/images/programs/toy-drive.jpg",
      alt: "Community members at the Children's Health toy donation drive",
      className: "object-cover object-[center_40%]",
    },
  },
] as const;

export const DONATION_DRIVES_CARD = {
  title: "Donation Drives",
  description:
    "Care packages, flare kits, and toy drives that bring comfort and joy to pediatric patients navigating chronic illness.",
  images: [{ src: "/images/programs/toy-drive-card.png", alt: "Toy donations for Children's Health" }],
  metrics: [{ value: "65", label: "toys donated" }],
} as const;

export const SUPPORT_CARDS = [
  {
    title: "Micro-grant Relief Program",
    description:
      "Need-based micro-grants providing financial assistance for healthcare-related expenses and day-to-day support.",
    images: [{ src: "/images/watercolor-paper.svg", alt: "Micro-grants program illustration" }],
    metrics: [
      { value: "—", label: "Patients Supported" },
      { value: "—", label: "Funds Distributed" },
    ],
    comingSoon: true,
    cta: { label: "Apply for a Micro-Grant", href: "/micro-grants" },
  },
] as const;

export const EDUCATION_SPEAKERS = [
  { name: "Makayla Allison", image: "/images/podcast/speakers/makayla-allison.jpg" },
  { name: "Rob Nunnery", image: "/images/podcast/speakers/rob-nunnery.jpg" },
  { name: "Nicole Benish", image: "/images/podcast/speakers/nicole-benish.jpg" },
  { name: "Lenette Sparacino", image: "/images/podcast/speakers/lenette-sparacino.jpg" },
] as const;

export const PATIENT_STORY_PODCAST_HUB = {
  title: "Patient Story Podcast Series",
  subtitle:
    "Real stories from patients, advocates, and experts across different chronic illness communities.",
} as const;

export const PODCAST_SERIES = [
  {
    id: "endo-series",
    title: "Endo Series",
    subtitle:
      "A patient storytelling podcast series focused on lived experiences with endometriosis.",
    description:
      "Stories from individuals living with endometriosis, sharing diagnosis journeys, symptom experiences, and advocacy efforts.",
    buttonLabel: "Open Series",
    listenButtonLabel: "Listen to Endo Series Podcast",
    podcastUrl: "https://open.spotify.com/show/1zF2cLjxCxbObnhT2q7fov?si=3a295431749142de",
    images: [
      {
        src: "/images/podcast/endo-series/bloom-logo.png",
        alt: "BLOOM Endo Series logo",
        className: "object-contain p-6",
      },
    ],
    overview:
      "Endo Series shares patient storytelling focused on lived experiences with endometriosis—featuring advocates and community voices building awareness, validation, and connection.",
    speakers: [
      {
        name: "Aria",
        role: "Influencer & Endometriosis Advocate",
        image: "/images/podcast/endo-series/aria.png",
        imageClassName: "object-cover object-center scale-[1.38]",
        instagram: "endodiarieswitharia",
        bio: "Aria shares her personal journey with endometriosis, including her diagnosis, daily struggles, and the challenges of living with a chronic condition. Through her platform, she advocates for awareness and empowers others to seek answers and support.",
      },
    ],
  },
  {
    id: "voices-of-ibd",
    title: "Voices of IBD",
    subtitle:
      "A patient storytelling podcast series focused on lived experiences with inflammatory bowel disease.",
    description:
      "Stories from individuals living with inflammatory bowel disease and those supporting the community.",
    buttonLabel: "Open Series",
    listenButtonLabel: "Listen to Episodes",
    podcastUrl: "https://open.spotify.com/show/2eW4ghzCBqdazzHaDs70qR",
    images: [
      {
        src: "/images/podcast/voices-of-ibd-logo.png",
        alt: "Voices of IBD podcast logo",
        className: "object-contain p-6",
      },
    ],
    overview:
      "Voices of IBD shares patient storytelling focused on lived experiences with inflammatory bowel disease—featuring teens, athletes, advocates, and community voices building awareness and connection.",
    speakers: [
      {
        name: "Makayla Allison",
        image: "/images/podcast/speakers/makayla-allison.jpg",
        instagram: "makaylascrohnsjourney",
        bio: "Teen living with Crohn's disease balancing high school life and competitive soccer while managing chronic illness. Shares awareness through @makaylascrohnsjourney.",
      },
      {
        name: "Rob Nunnery",
        image: "/images/podcast/speakers/rob-nunnery.jpg",
        instagram: "robnunnery",
        bio: "Professional pickleball athlete with 13 titles bringing a performance and resilience perspective to chronic illness awareness. Shares through @robnunnery.",
      },
      {
        name: "Nicole Benish",
        image: "/images/podcast/speakers/nicole-benish.jpg",
        instagram: "benish.nicole",
        bio: "Chronic illness advocate living with Crohn's and fibromyalgia, diagnosed at age six, focused on invisible illness awareness and stigma reduction. Shares through @benish.nicole.",
      },
      {
        name: "Lenette Sparacino",
        image: "/images/podcast/speakers/lenette-sparacino.jpg",
        instagram: "_lifewithcrohnsdisease",
        bio: "Living with Crohn's disease, endometriosis, multiple surgeries, and motherhood, sharing a deeply personal journey across chronic illness and family life.",
      },
    ],
  },
] as const;

export type PodcastSeries = (typeof PODCAST_SERIES)[number];

export const EDUCATIONAL_SPEAKER_SERIES = {
  title: "Educational Speaker Series",
  subtitle:
    "Educational webinars and seminars featuring clinicians and experts in chronic illness awareness and patient care.",
} as const;

export const GUEST_SPEAKER_EVENTS = [
  {
    id: "hina-khan",
    name: "Dr. Hina Khan",
    cardSubtitle: "Endometriosis Educational Webinar",
    title: "Endometriosis Educational Webinar",
    metric: "129 people educated",
    description:
      "Focused on endometriosis education, patient awareness, and improving early diagnosis through medical literacy.",
    imageLayout: "fit-left" as const,
    speakerImage: {
      src: "/images/podcast/webinars/dr-hina-khan.png",
      alt: "Dr. Hina Khan",
    },
    eventImage: {
      src: "/images/podcast/webinars/dr-hina-khan-event.png",
      alt: "Endometriosis educational webinar with 129 participants",
      className: "object-cover",
    },
  },
  {
    id: "bhaskar-gurram",
    name: "Dr. Bhaskar Gurram",
    cardSubtitle: "IBD Health & Sports Inclusivity Seminar",
    title: "IBD Health & Sports Inclusivity Seminar",
    metric: "57 people educated",
    description:
      "Discussion on chronic illness in youth athletes and building inclusive sports environments.",
    speakerImage: { src: "/images/podcast/webinars/dr-bhaskar-gurram.png", alt: "Dr. Bhaskar Gurram" },
    eventImage: {
      src: "/images/programs/guest-speaker-img_3791.jpg",
      alt: "IBD sports inclusivity seminar event",
    },
  },
] as const;

export type GuestSpeakerEvent = (typeof GUEST_SPEAKER_EVENTS)[number];

export const SCHOOL_COMMUNITY_ENGAGEMENT_CARD = {
  title: "School & Community Engagement",
  description:
    "Partnering with schools and local government to expand chronic illness awareness through education, advocacy, and civic engagement.",
  images: [
    { src: "/images/awareness/proclamation.jpg", alt: "IBD Awareness Week proclamation ceremony" },
    { src: "/images/awareness/school-fullsizerender.jpg", alt: "School community engagement event" },
  ],
  metrics: [{ value: "4+", label: "civic and school partnerships" }],
} as const;

export const SCHOOL_COMMUNITY_ENGAGEMENT_HEADER_METRICS = [
  { value: "4+", label: "Major civic and school partnerships" },
  { value: "2", label: "City mayor-level engagements" },
  { value: "1", label: "Official proclamation secured" },
] as const;

export const SCHOOL_COMMUNITY_ENGAGEMENT_TIMELINE = [
  {
    year: "2025",
    title: "Meeting with Mayor of Celina",
    organization: "Mayor of Celina",
    description:
      "Met with the Mayor of Celina to discuss youth-led health advocacy and chronic illness awareness initiatives. Focused on expanding community-level education and engagement efforts.",
    icon: "city" as const,
  },
  {
    year: "2025",
    title: "Meeting with Mayor of Prosper",
    organization: "Mayor of Prosper",
    description:
      "Engaged in discussions with the Mayor of Prosper about improving visibility and support for chronic illness awareness programs. Highlighted youth leadership in public health advocacy.",
    icon: "city" as const,
  },
  {
    year: "2025",
    title: "IBD Awareness Week Proclamation",
    organization: "City of Prosper",
    description:
      "Official proclamation declaring December 1–7 as IBD Awareness Week. Recognized efforts to increase awareness, education, and support for individuals living with inflammatory bowel disease.",
    icon: "proclamation" as const,
    image: { src: "/images/awareness/proclamation.jpg", alt: "IBD Awareness Week proclamation" },
  },
  {
    year: "2025",
    title: "Prosper Youth Advisory Council Meeting",
    organization: "Prosper Youth Advisory Council",
    description:
      "Participated in meetings with the Prosper Youth Advisory Council to discuss student-led health initiatives and community outreach strategies. Focused on empowering youth voices in public health education.",
    icon: "school" as const,
  },
] as const;

export const AWARENESS_SECTION = {
  description:
    "Increasing visibility for chronic and often invisible illnesses through community outreach, educational engagement, and public awareness campaigns.",
} as const;

export type AwarenessTimelineEntry = {
  year: string;
  title: string;
  organization?: string;
  description: string;
  impact?: string;
  image: { src: string; alt: string; className?: string };
};

export type AwarenessProgramCardData = {
  title: string;
  description: string;
  buttonLabel: string;
  images: readonly { src: string; alt: string }[];
  metrics: readonly { value: string; label: string }[];
  timeline: readonly AwarenessTimelineEntry[];
};

export const SCHOOL_OUTREACH_CARD = {
  title: "School Outreach",
  description:
    "Bringing chronic illness education directly into schools through presentations, awareness campaigns, student engagement, and educational resources.",
  buttonLabel: "View Outreach",
  images: [
    { src: "/images/awareness/endometriosis-cardmaking.png", alt: "Endometriosis awareness cardmaking activity" },
    { src: "/images/awareness/hearts-of-hope-wall.png", alt: "Hearts of Hope awareness wall" },
  ],
  metrics: [{ value: "3", label: "school awareness initiatives" }],
  timeline: [
    {
      year: "2025",
      title: "Cardmaking for Endometriosis Awareness",
      description:
        "Students participated in a cardmaking activity focused on supporting individuals living with endometriosis by creating handwritten messages of encouragement and solidarity. The initiative centered on uplifting patients, reducing feelings of isolation, and showing emotional support for those managing chronic symptoms.",
      image: {
        src: "/images/awareness/endometriosis-cardmaking.png",
        alt: "Students creating endometriosis awareness cards",
        className: "object-contain",
      },
    },
    {
      year: "2025",
      title: "Cardmaking for IBD Awareness",
      description:
        "Students created handmade cards focused on supporting individuals living with inflammatory bowel disease by sharing messages of encouragement, empathy, and awareness. The activity was designed to emotionally support patients while fostering understanding of the challenges of living with a chronic illness.",
      image: {
        src: "/images/awareness/ibd-cardmaking.png",
        alt: "Students creating IBD awareness cards",
        className: "object-contain",
      },
    },
    {
      year: "2026",
      title: "Hearts of Hope Awareness Wall",
      description:
        "Students wrote motivational messages for pediatric IBD patients, which were displayed in the school's main hallway in a large heart-shaped installation to promote kindness, empathy, and awareness. This initiative also included interactive trivia questions about pediatric IBD and digestive tract health to reinforce learning in an engaging and educational way.",
      image: {
        src: "/images/awareness/hearts-of-hope-wall.png",
        alt: "Hearts of Hope awareness wall in school hallway",
        className: "object-contain",
      },
    },
  ],
} as const satisfies AwarenessProgramCardData;

export const COMMUNITY_OUTREACH_CARD = {
  title: "Community Awareness Booths",
  description:
    "Connecting directly with community members through informational booths, awareness events, and public engagement opportunities.",
  buttonLabel: "View Community Outreach",
  images: [{ src: "/images/awareness/heard-holiday-booth.png", alt: "HEARD holiday awareness booth" }],
  metrics: [{ value: "85+", label: "people reached through outreach" }],
  timeline: [
    {
      year: "2025",
      title: "HEARD Holiday Awareness Booth",
      organization: "HEARD Natural Science & Wildlife Sanctuary Museum",
      description:
        "In partnership with HEARD, we hosted a holiday awareness booth at the Natural Science and Wildlife Sanctuary Museum to engage the community in pediatric IBD education and awareness. Visitors participated in interactive ring toss games and pediatric IBD trivia, with difficulty levels tied to points earned. Participants received candy and small toys as prizes. Alongside the activities, we shared educational materials about pediatric IBD, our campaign initiatives, and the daily challenges faced by individuals living with IBD. We also distributed awareness pins to encourage ongoing community engagement and visibility.",
      image: {
        src: "/images/awareness/heard-holiday-booth.png",
        alt: "HEARD holiday awareness booth at the Natural Science and Wildlife Sanctuary Museum",
        className: "object-contain",
      },
    },
  ],
} as const satisfies AwarenessProgramCardData;

export const PROGRAMS_CTA = [
  { label: "Volunteer", href: "/get-involved#contact", variant: "primary" as const },
  { label: "Partner With Us", href: "/contact", variant: "outline" as const },
  { label: "Donate", href: "/get-involved#donate", variant: "secondary" as const },
] as const;
