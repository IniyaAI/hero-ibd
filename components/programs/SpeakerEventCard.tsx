"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/programs/FadeIn";
import { ProgramDetailModal } from "@/components/programs/ProgramDetailModal";
import { PROGRAM_CARD_IMAGE_CELL } from "@/components/programs/programCardLayout";
import type { GuestSpeakerEvent } from "@/lib/programs-content";

type SpeakerEventCardProps = {
  event: GuestSpeakerEvent;
  delay?: number;
};

function CardImagePanel({ event }: { event: GuestSpeakerEvent }) {
  const speakerImageClassName =
    "className" in event.speakerImage && event.speakerImage.className
      ? `${event.speakerImage.className} transition-transform duration-500 group-hover:scale-[1.02]`
      : "object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]";
  const eventImageClassName =
    "className" in event.eventImage
      ? `${event.eventImage.className} transition-transform duration-500 group-hover:scale-[1.02]`
      : "object-cover transition-transform duration-500 group-hover:scale-[1.02]";

  return (
    <div className="relative grid grid-cols-2 gap-0.5">
      <div className={PROGRAM_CARD_IMAGE_CELL}>
        <Image
          src={event.speakerImage.src}
          alt={event.speakerImage.alt}
          fill
          className={speakerImageClassName}
          sizes="288px"
        />
      </div>
      <div className={PROGRAM_CARD_IMAGE_CELL}>
        <Image
          src={event.eventImage.src}
          alt={event.eventImage.alt}
          fill
          className={eventImageClassName}
          sizes="288px"
        />
      </div>
    </div>
  );
}

function ModalImagePanel({ event }: { event: GuestSpeakerEvent }) {
  const modalSpeakerImageClassName =
    "className" in event.speakerImage && typeof event.speakerImage.className === "string"
      ? event.speakerImage.className
      : "object-cover object-top";
  const modalEventImageClassName =
    "className" in event.eventImage && typeof event.eventImage.className === "string"
      ? event.eventImage.className
      : "object-cover";

  return (
    <div className="grid grid-cols-2 gap-0.5 overflow-hidden rounded-xl border hairline">
      <div className="relative aspect-[4/5] bg-[var(--color-line)]">
        <Image
          src={event.speakerImage.src}
          alt={event.speakerImage.alt}
          fill
          className={modalSpeakerImageClassName}
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
  );
}

export function SpeakerEventCard({ event, delay = 0 }: SpeakerEventCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FadeIn delay={delay}>
        <article className="group flex flex-col overflow-hidden rounded-xl border hairline bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
          <CardImagePanel event={event} />

          <div className="flex flex-col p-5 md:p-6">
            <h3 className="text-lg font-semibold text-[var(--color-plum)]">{event.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-plum-light)]">{event.cardSubtitle}</p>

            <ul className="mt-4 space-y-2">
              <li className="flex items-baseline gap-2 text-sm">
                <span className="font-semibold tabular-nums text-[var(--color-coral-deep)]">{event.metric}</span>
              </li>
            </ul>

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
          <ModalImagePanel event={event} />

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
