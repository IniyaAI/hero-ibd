"use client";

import { ImpactTimelineModal } from "@/components/programs/ImpactTimelineModal";
import {
  FUNDRAISER_TIMELINE,
  FUNDRAISER_TIMELINE_TOTAL,
} from "@/lib/programs-content";

type FundraiserTimelineModalProps = {
  open: boolean;
  onClose: () => void;
};

export function FundraiserTimelineModal({ open, onClose }: FundraiserTimelineModalProps) {
  return (
    <ImpactTimelineModal
      open={open}
      onClose={onClose}
      eyebrow="Fundraiser Impact"
      title="Fundraiser Impact Timeline"
      subtitle="Every event directly supports patient resources, awareness initiatives, and nonprofit partners."
      titleId="fundraiser-timeline-title"
      subtitleId="fundraiser-timeline-subtitle"
      closeLabel="Close fundraiser timeline"
      headerMetrics={[{ value: FUNDRAISER_TIMELINE_TOTAL, label: "Total Raised" }]}
      entries={FUNDRAISER_TIMELINE.map((entry) => ({
        year: entry.year,
        title: entry.title,
        beneficiary: entry.beneficiary,
        description: entry.description,
        primaryMetric: { label: "Amount Raised", value: entry.amount },
        badge: "isLatest" in entry && entry.isLatest ? "Latest Event" : undefined,
        highlighted: "isLatest" in entry && entry.isLatest,
        image: "image" in entry ? entry.image : undefined,
        gallery: "gallery" in entry ? entry.gallery : undefined,
      }))}
      footerActions={[{ label: "See Events & Impact", href: "/events", variant: "primary" }]}
    />
  );
}
