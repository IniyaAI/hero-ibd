"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScriptAccent } from "@/components/ui/ScriptAccent";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function FeaturedStoryCard({
  imageSrc,
  imageAlt,
  accent,
  title,
  children,
  footer,
  priority = false,
}: {
  imageSrc?: string;
  imageAlt?: string;
  accent: string;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  priority?: boolean;
}) {
  const hasImage = Boolean(imageSrc);

  return (
    <article
      className={`group overflow-hidden rounded-[calc(var(--radius)+4px)] border hairline shadow-[0_4px_24px_rgba(92,83,104,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(92,83,104,0.14)] ${
        hasImage ? "bg-[var(--color-plum)]" : "bg-white/75 backdrop-blur-sm"
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          hasImage ? "min-h-[22rem] sm:min-h-[26rem] lg:min-h-[32rem]" : ""
        }`}
      >
        {hasImage ? (
          <Image
            src={imageSrc!}
            alt={imageAlt ?? ""}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        ) : (
          <div
            className="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--color-ombre-start)_28%,white)] via-white/80 to-[color-mix(in_srgb,var(--color-lavender)_16%,white)]"
            aria-hidden
          />
        )}
        {hasImage && (
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/45 to-black/15 transition-opacity duration-500 group-hover:from-black/92"
            aria-hidden
          />
        )}
        <div
          className={`flex flex-col overflow-visible p-6 sm:p-8 md:p-10 lg:p-12 ${
            hasImage ? "absolute inset-0 justify-end" : "relative"
          }`}
        >
          <div className="overflow-visible">
            <ScriptAccent as="p" size="card" tone={hasImage ? "overlay" : "default"}>
              {accent}
            </ScriptAccent>
          </div>
          <h3
            className={`mt-2 text-balance font-[family-name:var(--font-heading)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold! leading-[1.08] tracking-[-0.02em] md:mt-3 ${
              hasImage
                ? "text-white! [text-shadow:0_2px_16px_rgba(0,0,0,0.65),0_1px_4px_rgba(0,0,0,0.5)]"
                : "text-[var(--color-plum)]"
            }`}
          >
            {title}
          </h3>
          <div
            className={`mt-4 max-w-2xl md:mt-5 ${hasImage ? "text-white/90" : "text-[var(--color-plum-light)]"}`}
          >
            {children}
          </div>
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
              accent="Join Us"
              title="Upcoming Events"
              footer={
                <Button
                  type="button"
                  variant="outline"
                  className="pointer-events-none border-[var(--color-line-strong)] bg-white text-[var(--color-plum)] opacity-100"
                >
                  More Information Coming Soon
                </Button>
              }
            >
              <p className="font-brand text-xs tracking-[0.14em] text-[var(--color-plum-muted)] uppercase">
                July 25, 2026
              </p>
              <p className="mt-2 text-xl font-semibold text-[var(--color-plum)] md:text-2xl">
                5K Walk/Run Fundraiser
              </p>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-plum-light)] text-pretty md:text-lg">
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
                <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
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
