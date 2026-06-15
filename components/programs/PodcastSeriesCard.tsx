"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/programs/FadeIn";
import { ProgramDetailModal } from "@/components/programs/ProgramDetailModal";
import {
  PROGRAM_CARD_IMAGE_CELL,
  PROGRAM_CARD_SINGLE_IMAGE_ASPECT,
} from "@/components/programs/programCardLayout";
import { PATIENT_STORY_PODCAST_HUB, type PodcastSeries } from "@/lib/programs-content";

type PodcastSeriesCardProps = {
  series: PodcastSeries;
  delay?: number;
};

function SeriesCover({ series }: { series: PodcastSeries }) {
  if (series.images.length === 1) {
    const image = series.images[0];
    const imageClassName =
      "className" in image ? image.className : "object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]";

    return (
      <div className={`relative ${PROGRAM_CARD_SINGLE_IMAGE_ASPECT} bg-white`}>
        <Image src={image.src} alt={image.alt} fill className={imageClassName} sizes="576px" />
      </div>
    );
  }

  return (
    <div className="relative grid grid-cols-2 gap-0.5">
      {series.images.map((image) => (
        <div key={image.src} className={PROGRAM_CARD_IMAGE_CELL}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}

export function PodcastSeriesCard({ series, delay = 0 }: PodcastSeriesCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FadeIn delay={delay}>
        <article className="group flex flex-col overflow-hidden rounded-xl border hairline bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
          <SeriesCover series={series} />

          <div className="flex flex-col p-5 md:p-6">
            <h4 className="text-lg font-semibold text-[var(--color-plum)]">{series.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-plum-light)]">{series.description}</p>
            <div className="mt-6 pt-2">
              <Button type="button" onClick={() => setOpen(true)} variant="outline" size="sm">
                {series.buttonLabel}
              </Button>
            </div>
          </div>
        </article>
      </FadeIn>

      <ProgramDetailModal
        open={open}
        onClose={() => setOpen(false)}
        eyebrow="Podcast Series"
        title={series.title}
        subtitle={series.subtitle}
        titleId={`${series.id}-modal-title`}
        subtitleId={`${series.id}-modal-subtitle`}
        closeLabel={`Close ${series.title}`}
        maxWidth="3xl"
        footer={
          <div className="flex justify-center">
            <Button href={series.podcastUrl} external>
              {series.listenButtonLabel}
            </Button>
          </div>
        }
      >
        <div className="space-y-8">
          <div>
            <p className="text-sm leading-relaxed text-[var(--color-plum-light)]">{series.overview}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-coral-deep)]">
              Part of the {PATIENT_STORY_PODCAST_HUB.title}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[var(--color-plum)]">Series Guests</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {series.speakers.map((speaker) => (
                <article
                  key={speaker.name}
                  className="rounded-xl border hairline bg-[var(--color-wash)] p-3 text-center"
                >
                  <div className="relative mx-auto size-16 overflow-hidden rounded-full border-2 border-white bg-[var(--color-line)] shadow-sm">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className={
                        "imageClassName" in speaker && speaker.imageClassName
                          ? speaker.imageClassName
                          : "object-cover object-top"
                      }
                      sizes="64px"
                    />
                  </div>
                  <h4 className="mt-3 text-sm font-semibold text-[var(--color-plum)]">{speaker.name}</h4>
                  {"role" in speaker && speaker.role && (
                    <p className="mt-1 text-xs font-medium text-[var(--color-coral-deep)]">{speaker.role}</p>
                  )}
                  <p className="mt-2 text-xs leading-relaxed text-[var(--color-plum-light)]">{speaker.bio}</p>
                  {"instagram" in speaker && speaker.instagram && (
                    <a
                      href={`https://instagram.com/${speaker.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center justify-center gap-1 text-xs text-[var(--color-coral-deep)] hover:underline"
                    >
                      <Instagram size={12} aria-hidden />@{speaker.instagram}
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </ProgramDetailModal>
    </>
  );
}
