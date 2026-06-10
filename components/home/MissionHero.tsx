import { Button } from "@/components/ui/Button";
import { HOME_STATS, MISSION_STATEMENT } from "@/lib/site-content";

export function MissionHero() {
  return (
    <section className="relative overflow-hidden bg-white border-b hairline">
      <div className="container-full relative">
        <div className="relative pt-10 pb-10 text-center md:pt-12 md:pb-12 lg:pt-14 lg:pb-14">
          <p className="tagline-brand mb-5 md:mb-6">501(c)(3) youth-led nonprofit</p>

          <h1 className="mx-auto max-w-4xl">
            <span className="font-brand block text-sm md:text-base text-[var(--color-plum-muted)] mb-3">
              Heart to Heart:
            </span>
            <span className="block font-[family-name:var(--font-heading)] text-[clamp(1.875rem,4vw,2.75rem)] font-semibold leading-[1.15] text-[var(--color-plum)]">
              Where awareness
            </span>
            <span className="font-script text-ombre mt-2 inline-block pb-1 text-[clamp(3rem,8vw,5rem)] leading-[0.95] md:mt-1 md:whitespace-nowrap">
              leads to action
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-plum-light)] text-pretty md:mt-8">
            {MISSION_STATEMENT}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:mt-10">
            <Button href="/get-involved#donate">Donate</Button>
            <Button href="/about" variant="outline">
              Our story
            </Button>
          </div>

          <div className="mt-10 border-t hairline pt-6 md:mt-12 md:pt-8">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-8 lg:gap-10">
              {HOME_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
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
      </div>
    </section>
  );
}
