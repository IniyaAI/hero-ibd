export type EventCategory =
  | "Awareness Campaigns"
  | "School Outreach"
  | "Community Events"
  | "Podcasts & Media"
  | "Advocacy"
  | "Fundraisers"
  | "Educational Programs";

export type ArchiveFilter =
  | "all"
  | "awareness-campaigns"
  | "fundraisers"
  | "outreach"
  | "advocacy"
  | "podcasts"
  | "educational-programs";

export const ARCHIVE_FILTERS: { id: ArchiveFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "awareness-campaigns", label: "Awareness Campaigns" },
  { id: "fundraisers", label: "Fundraisers" },
  { id: "outreach", label: "Outreach" },
  { id: "advocacy", label: "Advocacy" },
  { id: "podcasts", label: "Podcasts and Media" },
  { id: "educational-programs", label: "Educational Programs" },
];

export type EventImage = {
  src?: string;
  alt: string;
};

export type EventLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type IndividualEvent = {
  id: string;
  title: string;
  schoolYear: string;
  parentCampaign: string | null;
  category: EventCategory;
  description: string;
  impactMetrics?: string[];
  images?: {
    primary?: EventImage;
    secondary?: EventImage;
  };
  tags: string[];
  date?: string;
  location?: string;
  link?: EventLink;
  links?: EventLink[];
  beneficiary?: string;
  /** Optional display extensions */
  milestones?: string[];
  guests?: string[];
};

export type Campaign = {
  id: string;
  title: string;
  events: IndividualEvent[];
};

export type SchoolYearArchive = {
  id: string;
  label: string;
  anchor: string;
  campaigns: Campaign[];
  /** Events not grouped under a named campaign (e.g. 2025–2026 community programs) */
  standaloneEvents: IndividualEvent[];
};

export const UPCOMING_EVENT = {
  title: "5K Walk/Run Fundraiser",
  date: "July 25, 2026",
  description:
    "Join our community for a morning of movement, awareness, and impact as we raise funds to support patient microgrants and direct giving initiatives for underserved students and families affected by chronic illnesses.",
  ctaLabel: "More Information Coming Soon",
  image: undefined as EventImage | undefined,
};

export const SCHOOL_YEAR_ARCHIVES: SchoolYearArchive[] = [
  {
    id: "2025-2026",
    label: "2025–2026",
    anchor: "year-2025-2026",
    campaigns: [],

    standaloneEvents: [
      {
        id: "charity-pickleball-tournament",
        title: "Charity Pickleball Tournament",
        schoolYear: "2025–2026",
        parentCampaign: null,
        category: "Fundraisers",
        description:
          "In partnership with Chicken N Pickle, participants competed in a community tournament to raise funds and awareness for pediatric IBD.",
        impactMetrics: ["$700 Donated to the Crohn's & Colitis Foundation"],
        tags: ["fundraiser", "community", "pickleball", "ibd"],
        images: {
          primary: {
            src: "/images/events/charity-pickleball-tournament.png",
            alt: "Participants playing pickleball at the Charity Pickleball Tournament at Chicken N Pickle",
          },
        },
      },
      {
        id: "hearts-of-hope-wall",
        title: "Hearts of Hope Awareness Wall",
        schoolYear: "2025–2026",
        parentCampaign: null,
        category: "School Outreach",
        description:
          "Students wrote motivational messages for pediatric IBD patients, creating a heart-shaped display in the school hallway to promote kindness, empathy, and awareness.",
        impactMetrics: ["202+ Messages Shared"],
        tags: ["outreach", "school", "awareness", "ibd"],
        images: {
          primary: {
            src: "/images/awareness/hearts-of-hope-wall.png",
            alt: "Hearts of Hope awareness wall with student messages",
          },
        },
      },
      {
        id: "holiday-awareness-booth",
        title: "Holiday Awareness Booth",
        schoolYear: "2025–2026",
        parentCampaign: null,
        category: "Community Events",
        description:
          "Community members engaged with educational resources and conversations about pediatric IBD during our holiday awareness outreach event.",
        location: "HEARD Natural Science and Wildlife Sanctuary",
        impactMetrics: ["40–50 Participants"],
        tags: ["outreach", "community", "ibd", "heard"],
        images: {
          primary: {
            src: "/images/awareness/heard-holiday-booth.png",
            alt: "Holiday awareness booth at HEARD Natural Science and Wildlife Sanctuary",
          },
        },
      },
      {
        id: "toy-donation-drive",
        title: "Toy Donation Drive",
        schoolYear: "2025–2026",
        parentCampaign: null,
        category: "Community Events",
        description:
          "Community members donated toys to support children and families facing chronic illness.",
        impactMetrics: ["65 Toys Collected"],
        tags: ["outreach", "community", "donation"],
        images: {
          primary: {
            src: "/images/programs/toy-drive.png",
            alt: "Toy donation drive collection",
          },
        },
      },
      {
        id: "voices-of-ibd-podcast-series",
        title: "Voices of IBD Podcast Series",
        schoolYear: "2025–2026",
        parentCampaign: null,
        category: "Podcasts & Media",
        description:
          "Our podcast series amplifies the voices of individuals living with IBD through personal stories, advocacy, and educational conversations.",
        impactMetrics: ["4 Episodes Released"],
        tags: ["podcast", "ibd", "media", "advocacy"],
        guests: ["Makayla Allison", "Rob Nunnery", "Nicole Benish", "Lenette Sparacino"],
        images: {
          primary: {
            src: "/images/podcast/voices-of-ibd-logo.png",
            alt: "Voices of IBD podcast series",
          },
        },
      },
      {
        id: "chicken-n-pickle-giveback",
        title: "Chicken N Pickle 10% Giveback Night",
        schoolYear: "2025–2026",
        parentCampaign: null,
        category: "Fundraisers",
        description:
          "Community members gathered for a fundraising night supporting pediatric IBD initiatives.",
        impactMetrics: ["$113.40 Donated to the Crohn's & Colitis Foundation"],
        tags: ["fundraiser", "community", "ibd"],
        images: {
          primary: {
            src: "/images/events/chicken-n-pickle-giveback-night.png",
            alt: "Heart to Heart volunteers with a donation check from Chicken N Pickle Giveback Night for the Crohn's & Colitis Foundation",
          },
        },
      },
      {
        id: "ibd-sports-inclusivity-seminar",
        title: "IBD Sports & Inclusivity Seminar",
        schoolYear: "2025–2026",
        parentCampaign: null,
        category: "Educational Programs",
        description:
          "An educational session focused on creating inclusive sports environments for youth living with IBD.",
        location: "Speaker: Dr. Bhaskar Gurram",
        impactMetrics: ["65 Attendees"],
        tags: ["education", "sports", "inclusivity", "ibd", "webinar"],
        images: {
          primary: {
            src: "/images/programs/dr-gurram-event.png",
            alt: "Dr. Bhaskar Gurram speaking at the IBD Sports & Inclusivity Seminar",
          },
        },
      },
      {
        id: "community-advocacy-meetings",
        title: "Community Advocacy Meetings",
        schoolYear: "2025–2026",
        parentCampaign: null,
        category: "Advocacy",
        description:
          "Heart to Heart met with local leaders to advance awareness and support for pediatric IBD initiatives.",
        tags: ["advocacy", "ibd", "community", "leadership"],
        milestones: [
          "Met with the Mayor of Celina",
          "Advanced a proclamation recognizing December 1–7 as Pediatric IBD Awareness Week",
          "Met with the Mayor of Prosper",
          "Presented to the Prosper Youth Advisory Council",
        ],
      },
      {
        id: "hero-cards-station",
        title: "HERO Cards Station",
        schoolYear: "2025–2026",
        parentCampaign: null,
        category: "School Outreach",
        description:
          "Students created heartfelt cards for pediatric IBD patients to provide encouragement and support during treatment and recovery.",
        impactMetrics: ["130+ Cards Created"],
        tags: ["outreach", "school", "cards", "ibd"],
        images: {
          primary: {
            src: "/images/awareness/ibd-cardmaking.png",
            alt: "Students creating HERO cards for pediatric IBD patients",
          },
        },
      },
    ],
  },
  {
    id: "2024-2025",
    label: "2024–2025",
    anchor: "year-2024-2025",
    campaigns: [
      {
        id: "bloom-campaign",
        title: "BLOOM Endometriosis Awareness Campaign",
        events: [
          {
            id: "endo-series-podcast-aria",
            title: "Endo Series Podcast",
            schoolYear: "2024–2025",
            parentCampaign: "BLOOM Endometriosis Awareness Campaign",
            category: "Podcasts & Media",
            description:
              "Featured Aria, a college student and social media influencer, who shared her experience living with endometriosis.",
            impactMetrics: ["1 Episode Released"],
            tags: [" podcast", "endometriosis", "bloom", "media", "storytelling"],
            images: {
              primary: {
                src: "/images/events/bloom-logo.png",
                alt: "BLOOM endometriosis awareness campaign logo for the Endo Series Podcast",
              },
            },
          },
          {
            id: "endometriosis-webinar-dr-khan",
            title: "Endometriosis Webinar",
            schoolYear: "2024–2025",
            parentCampaign: "BLOOM Endometriosis Awareness Campaign",
            category: "Educational Programs",
            description:
              "Hosted an educational webinar featuring Dr. Khan to increase awareness and understanding of endometriosis.",
            location: "Speaker: Dr. Hina Khan",
            impactMetrics: ["129 Attendees"],
            tags: ["webinar", "education", "endometriosis", "bloom", "awareness"],
            images: {
              primary: {
                src: "/images/podcast/webinars/dr-hina-khan-event.png",
                alt: "Endometriosis educational webinar with Dr. Khan",
              },
            },
          },
          {
            id: "endocare-cardmaking",
            title: "EndoCare Cardmaking Initiative",
            schoolYear: "2024–2025",
            parentCampaign: "BLOOM Endometriosis Awareness Campaign",
            category: "School Outreach",
            description:
              "Students created EndoCare cards and distributed BLOOM awareness pins throughout the school community.",
            impactMetrics: ["150 Cards Created"],
            tags: ["outreach", "school", "endometriosis", "bloom", "cards"],
            images: {
              primary: {
                src: "/images/awareness/endometriosis-cardmaking.png",
                alt: "Students creating EndoCare cards during the BLOOM campaign",
              },
            },
          },
          {
            id: "bloom-fundraiser",
            title: "BLOOM Fundraiser",
            schoolYear: "2024–2025",
            parentCampaign: "BLOOM Endometriosis Awareness Campaign",
            category: "Fundraisers",
            description:
              "Raised funds through GoFundMe to support endometriosis research and women's health initiatives.",
            beneficiary: "Endometriosis Research Center and Women's Hospital",
            impactMetrics: ["$500 Raised"],
            tags: ["fundraiser", "endometriosis", "bloom", "awareness"],
            images: {
              primary: {
                src: "/images/events/bloom-fundraiser.png",
                alt: "Yellow endometriosis awareness ribbon tied on a tree branch for the BLOOM Fundraiser",
              },
            },
          },
        ],
      },
    ],
    standaloneEvents: [],
  },
  {
    id: "2023-2024",
    label: "2023–2024",
    anchor: "year-2023-2024",
    campaigns: [
      {
        id: "sickle-cell-campaign",
        title: "Sickle Cell Disease Awareness Campaign",
        events: [
          {
            id: "sickle-cell-information-hub",
            title: "Sickle Cell Disease Information Hub",
            schoolYear: "2023–2024",
            parentCampaign: "Sickle Cell Disease Awareness Campaign",
            category: "Awareness Campaigns",
            description:
              "Created a Google Sites information hub to provide reliable educational resources and share findings from community research.",
            tags: ["awareness", "sickle-cell", "education", "resources"],
            link: {
              label: "Visit Information Hub",
              href: "https://sites.google.com/view/sicklecelldiseaseawareness/sickle-cell-disease",
              external: true,
            },
            images: {
              primary: {
                src: "/images/events/sickle-cell-information-hub.png",
                alt: "Screenshot of the Sickle Cell Disease Awareness information hub website",
              },
            },
          },
          {
            id: "sickle-cell-community-survey",
            title: "Sickle Cell Disease Community Survey",
            schoolYear: "2023–2024",
            parentCampaign: "Sickle Cell Disease Awareness Campaign",
            category: "Awareness Campaigns",
            description:
              "Collected and analyzed survey responses to better understand community knowledge of sickle cell disease.",
            impactMetrics: ["130 Survey Responses"],
            tags: ["awareness", "sickle_cell", "research", "survey"],
            links: [
              {
                label: "Survey",
                href: "https://forms.gle/qg9z2HpLiVenz1Aa6",
                external: true,
              },
              {
                label: "Survey Findings",
                href: "https://sites.google.com/view/sicklecelldiseaseawareness/sickle-cell-disease/significance",
                external: true,
              },
            ],
          },
          {
            id: "sickle-cell-fundraiser",
            title: "Sickle Cell Disease Fundraiser",
            schoolYear: "2023–2024",
            parentCampaign: "Sickle Cell Disease Awareness Campaign",
            category: "Fundraisers",
            description:
              "Raised funds through GoFundMe to support Sickle Cell Disease research and patient support initiatives.",
            beneficiary: "National Bleeding Disorders Foundation",
            impactMetrics: ["$300 Raised"],
            tags: ["fundraiser", "sickle_cell", "awareness"],
          },
        ],
      },
    ],
    standaloneEvents: [],
  },
];

export const BLOOM_ENDOMETRIOSIS_CAMPAIGN = "BLOOM Endometriosis Awareness Campaign";
export const SICKLE_CELL_AWARENESS_CAMPAIGN = "Sickle Cell Disease Awareness Campaign";

export function eventMatchesFilter(event: IndividualEvent, filter: ArchiveFilter): boolean {
  if (filter === "all") return true;

  switch (filter) {
    case "awareness-campaigns":
      return (
        event.category === "Awareness Campaigns" ||
        event.parentCampaign === BLOOM_ENDOMETRIOSIS_CAMPAIGN ||
        event.parentCampaign === SICKLE_CELL_AWARENESS_CAMPAIGN
      );
    case "fundraisers":
      return event.category === "Fundraisers";
    case "outreach":
      return event.category === "School Outreach" || event.category === "Community Events";
    case "advocacy":
      return event.category === "Advocacy";
    case "podcasts":
      return event.category === "Podcasts & Media";
    case "educational-programs":
      return event.category === "Educational Programs";
    default:
      return true;
  }
}

export function eventMatchesSearch(event: IndividualEvent, query: string): boolean {
  if (!query.trim()) return true;
  const q = query.trim().toLowerCase();
  return (
    event.title.toLowerCase().includes(q) ||
    event.description.toLowerCase().includes(q) ||
    event.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}

export function filterEvent(event: IndividualEvent, filter: ArchiveFilter, search: string): boolean {
  return eventMatchesFilter(event, filter) && eventMatchesSearch(event, search);
}

export type FilteredSchoolYear = {
  year: SchoolYearArchive;
  campaigns: { campaign: Campaign; events: IndividualEvent[] }[];
  standaloneEvents: IndividualEvent[];
};

export function getFilteredArchive(
  filter: ArchiveFilter,
  search: string
): FilteredSchoolYear[] {
  return SCHOOL_YEAR_ARCHIVES.map((year) => {
    const campaigns = year.campaigns
      .map((campaign) => ({
        campaign,
        events: campaign.events.filter((e) => filterEvent(e, filter, search)),
      }))
      .filter((group) => group.events.length > 0);

    const standaloneEvents = year.standaloneEvents.filter((e) => filterEvent(e, filter, search));

    return { year, campaigns, standaloneEvents };
  }).filter(
    (result) => result.campaigns.length > 0 || result.standaloneEvents.length > 0
  );
}
