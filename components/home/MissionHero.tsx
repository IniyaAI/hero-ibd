import { Button } from "@/components/ui/Button";

const stats = [
  { value: "162,347+", label: "People reached" },
  { value: "15+", label: "Events hosted" },
  { value: "3+", label: "Communities engaged" },
  { value: "$1,500+", label: "Funds raised" },
];

export function MissionHero() {
  return (
    <section className="relative overflow-hidden bg-white border-b hairline">
      <div
        className="pointer-events-none absolute -right-16 top-1/2 size-72 -translate-y-1/2 rounded-full bg-[var(--color-wash)] md:size-96 lg:-right-8 lg:size-[28rem] xl:size-[32rem]"
        aria-hidden
      />

      <div className="container-full relative">
        <div className="pt-10 pb-10 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14">
          <div className="accent-rule mb-6 md:mb-8" />
          <p className="tagline-brand mb-5 md:mb-6">501(c)(3) youth-led nonprofit</p>

          <h1 className="font-brand max-w-[14ch] text-[clamp(2rem,4.75vw,3.75rem)] font-semibold leading-[1.08] tracking-[0.05em] text-[var(--color-plum)] sm:max-w-none xl:text-[4rem]">
            Where awareness{" "}
            <span className="text-[var(--color-coral)]">leads to action</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-plum-light)] text-pretty md:mt-8">
            Promoting earlier diagnosis and better outcomes for people with chronic
            illness through youth-led awareness, education, and support.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
            <Button href="/get-involved#donate">Donate</Button>
            <Button href="/about" variant="outline">
              Our story
            </Button>
          </div>

          <div className="mt-10 border-t hairline pt-6 md:mt-12 md:pt-8">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-8 lg:gap-10">
              {stats.map((stat) => (
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
      </div>
    </section>
  );
}
