"use client";

import { ImpactTimelineModal } from "@/components/programs/ImpactTimelineModal";
import {
  SCHOOL_COMMUNITY_ENGAGEMENT_HEADER_METRICS,
  SCHOOL_COMMUNITY_ENGAGEMENT_TIMELINE,
} from "@/lib/programs-content";

type SchoolCommunityEngagementTimelineModalProps = {
  open: boolean;
  onClose: () => void;
};

export function SchoolCommunityEngagementTimelineModal({
  open,
  onClose,
}: SchoolCommunityEngagementTimelineModalProps) {
  return (
    <ImpactTimelineModal
      open={open}
      onClose={onClose}
      eyebrow="Education Impact"
      title="School & Community Engagement Impact"
      subtitle="Working with schools, youth leaders, and city officials to promote awareness and early diagnosis of chronic illness."
      titleId="school-community-timeline-title"
      subtitleId="school-community-timeline-subtitle"
      closeLabel="Close school and community engagement timeline"
      headerMetrics={SCHOOL_COMMUNITY_ENGAGEMENT_HEADER_METRICS}
      entries={SCHOOL_COMMUNITY_ENGAGEMENT_TIMELINE.map((entry) => ({
        year: entry.year,
        title: entry.title,
        organization: entry.organization,
        description: entry.description,
        icon: entry.icon,
        image: "image" in entry ? entry.image : undefined,
      }))}
      footerActions={[
        { label: "Partner With Us", href: "/contact", variant: "primary" },
        { label: "Invite Us to Speak", href: "/contact", variant: "outline" },
      ]}
    />
  );
}
