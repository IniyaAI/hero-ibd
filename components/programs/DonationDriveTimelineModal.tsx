"use client";

import { ImpactTimelineModal } from "@/components/programs/ImpactTimelineModal";
import {
  DONATION_DRIVE_TIMELINE,
  DONATION_DRIVES_HEADER_METRICS,
} from "@/lib/programs-content";

type DonationDriveTimelineModalProps = {
  open: boolean;
  onClose: () => void;
};

export function DonationDriveTimelineModal({ open, onClose }: DonationDriveTimelineModalProps) {
  return (
    <ImpactTimelineModal
      open={open}
      onClose={onClose}
      eyebrow="Donation Drive Impact"
      title="Donation Drive Impact"
      subtitle="Supporting patients and families through essential items, care packages, and community-driven donations."
      titleId="donation-drive-timeline-title"
      subtitleId="donation-drive-timeline-subtitle"
      closeLabel="Close donation drive timeline"
      headerMetrics={DONATION_DRIVES_HEADER_METRICS}
      entries={DONATION_DRIVE_TIMELINE.map((entry) => ({
        year: entry.year,
        title: entry.title,
        beneficiary: entry.beneficiary,
        description: entry.description,
        primaryMetric: { label: "Items Donated", value: entry.itemsDonated },
        badge: entry.badge,
        highlighted: entry.highlighted,
        image: entry.image,
      }))}
      footerActions={[
        { label: "Host a Donation Drive", href: "/get-involved#contact", variant: "primary" },
        { label: "Donate Items", href: "/contact", variant: "outline" },
      ]}
    />
  );
}
