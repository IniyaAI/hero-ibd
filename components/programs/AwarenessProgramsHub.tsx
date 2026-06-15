import { FadeIn } from "@/components/programs/FadeIn";
import { AwarenessProgramCard } from "@/components/programs/AwarenessProgramCard";
import { COMMUNITY_OUTREACH_CARD, SCHOOL_OUTREACH_CARD } from "@/lib/programs-content";

export function AwarenessProgramsHub() {
  return (
    <FadeIn>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AwarenessProgramCard
          card={SCHOOL_OUTREACH_CARD}
          modal={{
            eyebrow: "School Outreach",
            title: "School Outreach",
            subtitle:
              "Chronic illness education brought directly into schools through presentations, campaigns, and student-led awareness initiatives.",
            titleId: "school-outreach-modal-title",
            subtitleId: "school-outreach-modal-subtitle",
            closeLabel: "Close school outreach timeline",
            footerActions: [{ label: "Invite Us to Speak", href: "/contact", variant: "primary" }],
          }}
          delay={0}
        />
        <AwarenessProgramCard
          card={COMMUNITY_OUTREACH_CARD}
          modal={{
            eyebrow: "Community Outreach",
            title: "Community Booths & Outreach",
            subtitle:
              "Direct community engagement through informational booths, awareness events, and public outreach across the DFW area.",
            titleId: "community-outreach-modal-title",
            subtitleId: "community-outreach-modal-subtitle",
            closeLabel: "Close community outreach timeline",
            footerActions: [{ label: "Partner With Us", href: "/contact", variant: "primary" }],
          }}
          delay={0.08}
        />
      </div>
    </FadeIn>
  );
}
