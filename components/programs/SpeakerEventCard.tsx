"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/programs/FadeIn";
import { ProgramDetailModal } from "@/components/programs/ProgramDetailModal";
import type { GuestSpeakerEvent } from "@/lib/programs-content";

type SpeakerEventCardProps = {
  event: GuestSpeakerEvent;
  delay?: number;
};

export function SpeakerEventCard({ event, delay = 0 }: SpeakerEventCardProps) {
  const [open, setOpen] = useState(false);
  const eventImageClassName =
    "className" in event.eventImage
      ? event.eventImage.className
      : "object-cover transition-transform duration-500 group-hover:scale-[1.02]";
  const modalEventImageClassName =
    "className" in event.eventImage ? event.eventImage.className : "object-cover";

  return (
    <>
      <FadeIn delay={delay}>
        <article className="group flex h-full flex-col overflow-hidden rounded-xl border hairline bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
          <div className="relative grid grid-cols-2 gap-0.5">
            <div className="relative aspect-[4/5] bg-[var(--color-line)]">
              <Image
                src={event.speakerImage.src}
                alt={event.speakerImage.alt}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="200px"
              />
            </div>
            <div className="relative aspect-[4/5] bg-[var(--color-line)]">
              <Image
                src={event.eventImage.src}
                alt={event.eventImage.alt}
                fill
                className={eventImageClassName}
                sizes="200px"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5 md:p-6">
            <h4 className="text-lg font-semibold text-[var(--color-plum)]">{event.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-plum-light)]">{event.cardSubtitle}</p>
            <div className="mt-6 pt-2">
              <Button type="button" onClick={() => setOpen(true)} variant="outline" size="sm">
                Open Event
              </Button>
            </div>
          </div>
        </article>
      </FadeIn>

      <ProgramDetailModal
        open={open}
        onClose={() => setOpen(false)}
        eyebrow="Educational Speaker Series"
        title={event.name}
        subtitle={event.title}
        titleId={`${event.id}-modal-title`}
        subtitleId={`${event.id}-modal-subtitle`}
        closeLabel={`Close ${event.name}`}
        maxWidth="2xl"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-0.5 overflow-hidden rounded-xl border hairline">
            <div className="relative aspect-[4/5] bg-[var(--color-line)]">
              <Image
                src={event.speakerImage.src}
                alt={event.speakerImage.alt}
                fill
                className="object-cover object-top"
                sizes="300px"
              />
            </div>
            <div className="relative aspect-[4/5] bg-[var(--color-line)]">
              <Image
                src={event.eventImage.src}
                alt={event.eventImage.alt}
                fill
                className={modalEventImageClassName}
                sizes="300px"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--color-plum)]">{event.title}</h3>
            <p className="mt-2 text-sm font-semibold tabular-nums text-[var(--color-coral-deep)]">
              {event.metric}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-plum-light)]">{event.description}</p>
          </div>
        </div>
      </ProgramDetailModal>
    </>
  );
}
