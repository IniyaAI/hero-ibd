import { Button } from "@/components/ui/Button";
import { StatsRow } from "@/components/ui/StatCard";
import { HeroPhotoCarousel } from "@/components/home/HeroPhotoCarousel";
import { HOME_STATS, MISSION_STATEMENT } from "@/lib/site-content";

export function MissionHero() {
  return (
    <section className="border-b hairline">
      <div className="relative min-h-[min(100vh,900px)] overflow-hidden">
        <HeroPhotoCarousel className="absolute inset-0 z-0" />

        <div
          className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/50 to-transparent"
          aria-hidden
        />

        <div
          className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.22)_100%)]"
          aria-hidden
        />

        <div className="container-full relative z-10 flex min-h-[min(100vh,900px)] items-center px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-xl text-left md:max-w-lg lg:max-w-xl">
            <p className="tagline-brand mb-4 text-white/75 md:mb-5">501(c)(3) youth-led nonprofit</p>

            <h1>
              <span className="font-brand mb-2 block text-xs text-white/80 md:mb-3 md:text-sm">
                Heart to Heart:
              </span>
              <span className="block font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.12] text-white">
                Where awareness
              </span>
              <span className="font-script text-ombre mt-1 inline-block pb-1 text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[0.95] md:mt-2">
                leads to action
              </span>
            </h1>

            <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-white/88 text-pretty md:mt-6 md:text-base">
              {MISSION_STATEMENT}
            </p>

            <div className="mt-7 flex flex-wrap gap-3 md:mt-8">
              <Button href="/get-involved#donate">Donate</Button>
              <Button
                href="/about"
                variant="outline"
                className="border-white/55 bg-white/5 text-white hover:border-white/80 hover:bg-white/10 hover:text-white"
              >
                Our story
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t hairline bg-[var(--color-wash)]">
        <div className="container-full py-10 md:py-12 lg:py-14">
          <StatsRow stats={[...HOME_STATS]} bordered={false} />
        </div>
      </div>
    </section>
  );
}
