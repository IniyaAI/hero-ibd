import { PARTNERS } from "@/lib/site-content";

export function PartnersSection() {
  return (
    <section className="section-padding border-t hairline bg-white">
      <div className="container-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="accent-rule mb-4" />
            <h2 className="font-brand text-xl md:text-2xl font-bold text-[var(--color-plum)] text-balance">
              Our partners
            </h2>
            <p className="mt-3 text-[var(--color-plum-light)] text-pretty leading-relaxed">
              Hospitals, foundations, and local organizations that help us expand reach
              across the DFW community.
            </p>
          </div>

          <ul className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {PARTNERS.map((partner) => (
              <li
                key={partner.name}
                className="flex min-h-[5rem] flex-col items-center justify-center rounded-[var(--radius)] border hairline bg-[var(--color-wash)] px-3 py-4 text-center"
              >
                <span className="font-brand text-[0.625rem] leading-snug text-[var(--color-plum)]">
                  {partner.short}
                </span>
                <span className="mt-1 text-[0.6875rem] text-[var(--color-plum-muted)] leading-snug text-pretty hidden sm:block">
                  {partner.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
