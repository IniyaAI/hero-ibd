import { Button } from "@/components/ui/Button";
import { HeroPhotoCarousel } from "@/components/home/HeroPhotoCarousel";
import { HOME_STATS, MISSION_STATEMENT } from "@/lib/site-content";

export function MissionHero() {
  return (
    <section className="border-b hairline">
      <div className="container-full py-10 md:py-12 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div>
            <p className="tagline-brand mb-5 md:mb-6">501(c)(3) youth-led nonprofit</p>

            <h1 className="max-w-xl">
              <span className="font-brand mb-3 block text-sm text-[var(--color-plum-muted)] md:text-base">
                Heart to Heart:
              </span>
              <span className="block font-[family-name:var(--font-heading)] text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.15] text-[var(--color-plum)]">
                Where awareness
              </span>
              <span className="font-script text-ombre mt-2 inline-block pb-1 text-[clamp(2.75rem,7vw,4.5rem)] leading-[0.95] md:mt-1">
                leads to action
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-plum-light)] text-pretty md:mt-8">
              {MISSION_STATEMENT}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              <Button href="/get-involved#donate">Donate</Button>
              <Button href="/about" variant="outline">
                Our story
              </Button>
            </div>

            <div className="mt-10 border-t hairline pt-6 md:mt-12 md:pt-8">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {HOME_STATS.map((stat) => (
                  <div key={stat.label}>
                    <dd className="font-[family-name:var(--font-heading)] text-2xl font-semibold tabular-nums leading-none text-[var(--color-plum)] md:text-[1.75rem]">
                      {stat.value}
                    </dd>
                    <dt className="mt-2 text-sm text-[var(--color-plum-muted)]">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div>
            <HeroPhotoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
