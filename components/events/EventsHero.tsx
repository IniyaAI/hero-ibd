import { Button } from "@/components/ui/Button";
import { ScriptAccent } from "@/components/ui/ScriptAccent";

export function EventsHero() {
  return (
    <section className="relative border-b hairline bg-gradient-to-br from-[var(--color-wash)] via-white to-[#fdf7f9]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-[url('/images/watercolor-paper.svg')] bg-cover opacity-[0.35]" />
        <div className="absolute -right-8 -top-16 h-72 w-72 rounded-full bg-[var(--color-lavender)] opacity-[0.18] blur-3xl" />
        <div className="absolute -bottom-20 -left-6 h-64 w-64 rounded-full bg-[var(--color-ombre-start)] opacity-[0.22] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-6 py-16 md:px-8 md:py-20 lg:py-24">
        <div className="accent-rule mb-6" />
        <ScriptAccent size="header">Community Impact</ScriptAccent>
        <h1 className="mt-2 text-balance font-[family-name:var(--font-heading)] text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--color-plum)]">
          Events & Community Impact
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--color-plum-light)]">
          Explore our awareness campaigns, fundraisers, educational programs, and advocacy efforts dedicated to
          supporting individuals and families affected by chronic illnesses.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#upcoming-events">View Upcoming Events</Button>
          <Button href="#past-events" variant="outline">
            Browse Past Events
          </Button>
        </div>
      </div>
    </section>
  );
}
