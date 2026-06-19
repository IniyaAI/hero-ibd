"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarDays, MapPin, X } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImpactSectionHeading } from "@/components/impact/ImpactSectionHeading";
import {
  IMPACT_EVENT_HIGHLIGHTS,
  IMPACT_EVENT_INTRO,
  type ImpactEventHighlight,
} from "@/lib/impact-content";

function EventCard({
  event,
  index,
  onOpen,
}: {
  event: ImpactEventHighlight;
  index: number;
  onOpen: () => void;
}) {
  const reducedMotion = useReducedMotion();
  const featured = event.featured === true;

  return (
    <ScrollReveal delay={index * 0.07} className={featured ? "md:col-span-2 lg:col-span-2" : ""}>
      <article className="group h-full">
        <button
          type="button"
          onClick={onOpen}
          className={`relative w-full cursor-zoom-in overflow-hidden rounded-2xl border hairline bg-[var(--color-wash)] text-left shadow-[0_4px_20px_rgba(92,83,104,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:shadow-[0_18px_48px_rgba(92,83,104,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lavender-deep)] focus-visible:ring-offset-2 ${
            featured ? "aspect-[16/10] md:aspect-[16/9]" : "aspect-[4/3]"
          }`}
          aria-label={`View ${event.title}`}
        >
          <Image
            src={event.src}
            alt={event.alt}
            fill
            className={`object-cover transition-transform duration-700 ease-out ${
              reducedMotion ? "" : "group-hover:scale-[1.06]"
            }`}
            sizes={
              featured
                ? "(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 900px"
                : "(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 450px"
            }
          />

          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-500 ${
              reducedMotion ? "opacity-100" : "opacity-80 group-hover:opacity-100"
            }`}
            aria-hidden
          />

          <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
            <h3 className="text-balance font-[family-name:var(--font-heading)] text-lg font-bold! text-white md:text-xl">
              {event.title}
            </h3>
            <dl
              className={`mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-white/85 transition-all duration-500 md:text-sm ${
                reducedMotion
                  ? "opacity-100"
                  : "translate-y-1 opacity-90 group-hover:translate-y-0 group-hover:opacity-100"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <dt className="sr-only">Date</dt>
                <CalendarDays className="size-3.5 shrink-0" aria-hidden />
                <dd>{event.date}</dd>
              </div>
              <div className="flex items-center gap-1.5">
                <dt className="sr-only">Location</dt>
                <MapPin className="size-3.5 shrink-0" aria-hidden />
                <dd>{event.location}</dd>
              </div>
            </dl>
          </div>
        </button>
      </article>
    </ScrollReveal>
  );
}

export function ImpactEventGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedEvent = selectedIndex !== null ? IMPACT_EVENT_HIGHLIGHTS[selectedIndex] : null;
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <section className="section-padding bg-white py-16 md:py-24 lg:py-28">
        <div className="container-full">
          <ImpactSectionHeading title="Event Highlights" subtitle={IMPACT_EVENT_INTRO} />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {IMPACT_EVENT_HIGHLIGHTS.map((event, index) => (
              <EventCard
                key={event.src}
                event={event}
                index={index}
                onOpen={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-10"
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedEvent.title} photo`}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/95 text-[var(--color-plum)] shadow-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-lavender-deep)]"
              aria-label="Close photo"
            >
              <X className="size-5" />
            </button>

            <motion.div
              initial={reducedMotion ? false : { scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { type: "spring", damping: 28, stiffness: 320 }
              }
              className="relative max-h-[85vh] max-w-[min(95vw,1200px)]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selectedEvent.src}
                alt={selectedEvent.alt}
                width={selectedEvent.width}
                height={selectedEvent.height}
                className="max-h-[85vh] max-w-[min(95vw,1200px)] h-auto w-auto rounded-2xl object-contain"
                sizes="100vw"
                priority
              />
              <p className="mt-4 text-center text-sm text-white/90">{selectedEvent.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
