const partnerGroups = [
  {
    label: "Health & advocacy",
    partners: [
      "Crohn's & Colitis Foundation",
      "Children's Health",
      "STAR Foundation for Athletic Recovery",
      "PowerPlay Foundation",
    ],
  },
  {
    label: "Community",
    partners: ["Chicken N Pickle", "City of Prosper", "City of Celina"],
  },
];

export function PartnersSection() {
  return (
    <section className="section-padding border-t hairline bg-white">
      <div className="container-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="accent-rule mb-4" />
            <h2 className="font-brand text-xl md:text-2xl font-bold text-[var(--color-plum)] text-balance">
              Partners and collaborators
            </h2>
            <p className="mt-3 text-[var(--color-plum-light)] text-pretty leading-relaxed">
              We work with hospitals, foundations, and local organizations to bring
              awareness and support to the DFW community.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-10">
            {partnerGroups.map((group) => (
              <div key={group.label}>
                <p className="tagline-brand mb-4">{group.label}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.partners.map((name) => (
                    <li
                      key={name}
                      className="flex min-h-[4.5rem] items-center justify-center rounded-[var(--radius)] border hairline bg-[var(--color-wash)] px-5 py-4 text-center"
                    >
                      <span className="text-sm font-medium text-[var(--color-plum)] leading-snug text-pretty">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
