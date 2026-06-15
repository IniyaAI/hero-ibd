"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScriptAccent } from "@/components/ui/ScriptAccent";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/site-content";

function FeaturedStoryCard({
  imageSrc,
  imageAlt,
  accent,
  title,
  children,
  footer,
  priority = false,
}: {
  imageSrc: string;
  imageAlt: string;
  accent: string;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  priority?: boolean;
}) {
  return (
    <article className="group overflow-hidden rounded-[calc(var(--radius)+4px)] border hairline bg-[var(--color-plum)] shadow-[0_4px_24px_rgba(92,83,104,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(92,83,104,0.14)]">
      <div className="relative min-h-[22rem] overflow-hidden sm:min-h-[26rem] lg:min-h-[32rem]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 1280px) 100vw, 1200px"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/45 to-black/15 transition-opacity duration-500 group-hover:from-black/92"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-end overflow-visible p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="overflow-visible">
            <ScriptAccent as="p" size="card" tone="overlay">
              {accent}
            </ScriptAccent>
          </div>
          <h3
            className="mt-2 text-balance font-[family-name:var(--font-heading)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold! leading-[1.08] tracking-[-0.02em] text-white! md:mt-3 [text-shadow:0_2px_16px_rgba(0,0,0,0.65),0_1px_4px_rgba(0,0,0,0.5)]"
          >
            {title}
          </h3>
          <div className="mt-4 max-w-2xl text-white/90 md:mt-5">{children}</div>
          {footer && <div className="mt-6 md:mt-8">{footer}</div>}
        </div>
      </div>
    </article>
  );
}

export function StoriesOfImpactSection() {
  return (
    <section className="section-padding border-t hairline bg-[#faf8fc]">
      <div className="container-full">
        <ScrollReveal className="mb-12 max-w-3xl md:mb-16 lg:mb-20">
          <div className="accent-rule mb-6" />
          <ScriptAccent as="p" size="quote" className="mb-3">
            In the Community
          </ScriptAccent>
          <h2 className="text-balance font-[family-name:var(--font-heading)] text-[clamp(2.5rem,5.5vw,4rem)] font-bold! leading-[1.05] tracking-[-0.02em] text-[var(--color-plum)]">
            Stories of Impact
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--color-plum-light)] text-pretty md:mt-5">
            From upcoming community events to recent milestones — see how Heart to Heart is
            turning awareness into action across DFW.
          </p>
        </ScrollReveal>

        <div className="space-y-8 lg:space-y-10">
          <ScrollReveal delay={0.05}>
            <FeaturedStoryCard
              priority
              imageSrc={SITE.marathonPhotoUrl}
              imageAlt="Runners at a community marathon"
              accent="Join Us"
              title="Upcoming Events"
              footer={
                <Button
                  href={SITE.register5kUrl}
                  external
                  className="transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Register for 5K
                </Button>
              }
            >
              <p className="font-brand text-xs tracking-[0.14em] text-white/70 uppercase">
                May 23, 2026
              </p>
              <p className="mt-2 text-xl font-semibold text-white md:text-2xl">5K Walk/Run</p>
              <p className="mt-3 text-base leading-relaxed text-white/88 text-pretty md:text-lg">
                Supporting awareness and research for chronic illness — in partnership with the
                STAR Foundation for Athletic Recovery and PowerPlay.
              </p>
            </FeaturedStoryCard>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="space-y-6">
              <FeaturedStoryCard
                imageSrc="/images/events/pickleball-img_0394.jpg"
                imageAlt="Charity Pickleball Tournament"
                accent="Making a Difference"
                title="Latest Impact"
              >
                <p className="font-brand text-xs tracking-[0.14em] text-white/70 uppercase">
                  2025 · Charity Pickleball Tournament
                </p>
                <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                  <div className="rounded-[var(--radius)] border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/15">
                    <dt className="text-xs text-white/65">Raised</dt>
                    <dd className="mt-0.5 text-lg font-bold tabular-nums text-[var(--color-ombre-start)]">
                      $700
                    </dd>
                  </div>
                  <div className="rounded-[var(--radius)] border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/15">
                    <dt className="text-xs text-white/65">Type</dt>
                    <dd className="mt-0.5 text-lg font-semibold text-white">Community Event</dd>
                  </div>
                  <div className="rounded-[var(--radius)] border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/15">
                    <dt className="text-xs text-white/65">Focus</dt>
                    <dd className="mt-0.5 text-lg font-semibold text-white">Supporting Research</dd>
                  </div>
                </dl>
              </FeaturedStoryCard>

              <div className="rounded-[var(--radius)] border hairline bg-white/80 p-6 backdrop-blur-sm md:p-8">
                <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-plum-light)] text-pretty">
                  Proceeds from our Charity Pickleball Tournament went directly to the{" "}
                  <strong className="font-semibold text-[var(--color-plum)]">
                    Crohn&apos;s & Colitis Foundation
                  </strong>
                  , bringing our community together for a day of competition, connection, and
                  purpose — and proving that youth-led action can fuel real change for chronic
                  illness research and awareness.
                </p>
                <Link
                  href="/events"
                  className="link-arrow mt-5 inline-flex transition-transform duration-300 hover:translate-x-0.5"
                >
                  Explore all events
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
