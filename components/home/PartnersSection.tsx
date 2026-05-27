import { SectionHeading } from "../ui/SectionHeading";

const partners = [
  "Crohn's & Colitis Foundation",
  "PowerPlay Foundation",
  "Chicken N Pickle",
  "Children's Health",
  "STAR Foundation for Athletic Recovery",
  "City of Prosper",
  "City of Celina",
];

export function PartnersSection() {
  return (
    <section className="section-padding bg-[var(--color-subtle)] border-t border-[var(--color-border-light)]">
      <div className="container-wide">
        <SectionHeading
          title="Our Partners"
          subtitle="Collaborating with healthcare organizations, municipalities, and community groups across the DFW area."
          align="center"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((name) => (
            <div
              key={name}
              className="bg-white border border-[var(--color-border)] rounded-[var(--radius-md)] px-4 py-5 flex items-center justify-center min-h-[72px] text-center"
            >
              <span className="text-xs font-semibold text-[var(--color-text-secondary)] leading-snug">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
