"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/programs/FadeIn";
import { SchoolCommunityEngagementTimelineModal } from "@/components/programs/SchoolCommunityEngagementTimelineModal";
import { SCHOOL_COMMUNITY_ENGAGEMENT_CARD } from "@/lib/programs-content";

const card = SCHOOL_COMMUNITY_ENGAGEMENT_CARD;

export function SchoolCommunityEngagementCard({ delay = 0 }: { delay?: number }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <FadeIn delay={delay}>
        <article className="group flex h-full flex-col overflow-hidden rounded-xl border hairline bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
          <div className="relative grid grid-cols-2 gap-0.5">
            {card.images.map((image) => (
              <div key={image.src} className="relative aspect-[4/3] bg-[var(--color-line)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-1 flex-col p-5 md:p-6">
            <h3 className="text-lg font-semibold text-[var(--color-plum)]">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-plum-light)]">{card.description}</p>

            <ul className="mt-4 space-y-2">
              {card.metrics.map((metric) => (
                <li key={metric.label} className="flex items-baseline gap-2 text-sm">
                  <span className="font-semibold tabular-nums text-[var(--color-coral-deep)]">{metric.value}</span>
                  <span className="text-[var(--color-plum-muted)]">{metric.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-2">
              <Button type="button" onClick={() => setModalOpen(true)} variant="outline" size="sm">
                View Impact
              </Button>
            </div>
          </div>
        </article>
      </FadeIn>

      <SchoolCommunityEngagementTimelineModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
