"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/programs/FadeIn";
import { AwarenessTimelineModal } from "@/components/programs/AwarenessTimelineModal";
import type { AwarenessProgramCardData } from "@/lib/programs-content";

type AwarenessProgramCardProps = {
  card: AwarenessProgramCardData;
  modal: {
    eyebrow: string;
    title: string;
    subtitle: string;
    titleId: string;
    subtitleId: string;
    closeLabel: string;
    footerActions?: readonly {
      label: string;
      href: string;
      variant?: "primary" | "secondary" | "outline";
      external?: boolean;
    }[];
  };
  delay?: number;
};

export function AwarenessProgramCard({ card, modal, delay = 0 }: AwarenessProgramCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FadeIn delay={delay}>
        <article className="group flex h-full flex-col overflow-hidden rounded-xl border hairline bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
          <div
            className={`relative gap-0.5 ${
              card.images.length === 1 ? "grid grid-cols-1" : "grid grid-cols-2"
            }`}
          >
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

            {card.metrics.length > 0 && (
              <ul className="mt-4 space-y-2">
                {card.metrics.map((metric) => (
                  <li key={metric.label} className="flex items-baseline gap-2 text-sm">
                    <span className="font-semibold tabular-nums text-[var(--color-coral-deep)]">{metric.value}</span>
                    <span className="text-[var(--color-plum-muted)]">{metric.label}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 pt-2">
              <Button type="button" onClick={() => setOpen(true)} variant="outline" size="sm">
                {card.buttonLabel}
              </Button>
            </div>
          </div>
        </article>
      </FadeIn>

      <AwarenessTimelineModal
        open={open}
        onClose={() => setOpen(false)}
        eyebrow={modal.eyebrow}
        title={modal.title}
        subtitle={modal.subtitle}
        titleId={modal.titleId}
        subtitleId={modal.subtitleId}
        closeLabel={modal.closeLabel}
        entries={card.timeline}
        footerActions={modal.footerActions}
      />
    </>
  );
}
