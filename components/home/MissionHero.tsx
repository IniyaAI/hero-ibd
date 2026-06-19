import { Button } from "@/components/ui/Button";
import { AnimatedStatsRow } from "@/components/ui/AnimatedStatsRow";
import { MissionHeadline } from "@/components/home/MissionHeadline";
import { HeroEditorialCarousel } from "@/components/home/HeroEditorialCarousel";
import { HOME_STATS, MISSION_STATEMENT } from "@/lib/site-content";

export function MissionHero() {
  return (
    <section className="border-b hairline">
      <div className="relative overflow-hidden bg-gradient-to-br from-[var(--color-wash)] via-white to-[#fdf7f9]">
        <div
          className="pointer-events-none absolute inset-0 bg-[url('/images/watercolor-paper.svg')] bg-cover opacity-[0.25]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[var(--color-lavender)] opacity-[0.12] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-[var(--color-ombre-start)] opacity-[0.2] blur-3xl"
          aria-hidden
        />

        <div className="container-full relative">
          <div className="grid min-h-[min(100vh,900px)] grid-cols-1 items-center gap-12 py-12 md:gap-10 md:py-16 lg:grid-cols-2 lg:gap-14 xl:gap-20 lg:py-20">
            <div className="max-w-xl lg:max-w-lg xl:max-w-xl">
              <p className="tagline-brand mb-4 text-[0.6875rem] md:mb-5 md:text-xs">
                501(c)(3) youth-led nonprofit
              </p>

              <MissionHeadline />

              <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-plum-light)] text-pretty md:mt-6 md:text-lg">
                {MISSION_STATEMENT}
              </p>

              <div className="mt-7 flex flex-wrap gap-3 md:mt-8">
                <Button href="/get-involved#donate" className="px-6 py-3 text-base">
                  Donate
                </Button>
                <Button href="/about" variant="outline" className="px-6 py-3 text-base">
                  Our story
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <HeroEditorialCarousel className="w-full max-w-[560px] lg:max-w-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t hairline bg-gradient-to-b from-[var(--color-wash)] to-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-coral)]/40 to-transparent" />
        <div className="container-full py-12 md:py-14 lg:py-16">
          <AnimatedStatsRow stats={[...HOME_STATS]} bordered={false} />
        </div>
      </div>
    </section>
  );
}
