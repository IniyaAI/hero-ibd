import Image from "next/image";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { UPCOMING_EVENT } from "@/lib/events-content";

export function UpcomingEventFeatured() {
  return (
    <section id="upcoming-events" className="scroll-mt-24 section-padding border-b hairline">
      <div className="container-full">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[var(--color-plum)] md:text-3xl">Upcoming events</h2>
          <p className="mt-2 max-w-2xl text-[var(--color-plum-light)]">
            Join us at our next community gathering — registration and details will be shared soon.
          </p>
        </div>

        <article className="overflow-hidden rounded-[20px] border border-[var(--color-line)] bg-white shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video bg-[var(--color-line)] lg:aspect-auto lg:min-h-[320px]">
              {UPCOMING_EVENT.image?.src ? (
                <Image
                  src={UPCOMING_EVENT.image.src}
                  alt={UPCOMING_EVENT.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full min-h-[240px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-[var(--color-wash)] via-white to-[#fdf7f9] p-8">
                  <Calendar className="h-10 w-10 text-[var(--color-plum-muted)] opacity-50" strokeWidth={1.5} />
                  <span className="text-sm text-[var(--color-plum-muted)]">Event photo coming soon</span>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
              <span className="mb-4 inline-flex w-fit rounded-full bg-[var(--color-coral)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Upcoming
              </span>
              <h3 className="text-2xl font-semibold text-[var(--color-plum)] md:text-3xl">{UPCOMING_EVENT.title}</h3>
              <p className="mt-3 flex items-center gap-2 text-sm font-medium text-[var(--color-coral-deep)]">
                <Calendar className="h-4 w-4" aria-hidden />
                {UPCOMING_EVENT.date}
              </p>
              <p className="mt-4 text-[var(--color-plum-light)] leading-relaxed">{UPCOMING_EVENT.description}</p>
              <div className="mt-8">
                <Button type="button" variant="outline" className="pointer-events-none opacity-90">
                  {UPCOMING_EVENT.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
