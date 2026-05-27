import { Building2, HeartPulse } from "lucide-react";

const partnerGroups = [
  {
    label: "Health & advocacy",
    icon: HeartPulse,
    partners: [
      "Crohn's & Colitis Foundation",
      "Children's Health",
      "STAR Foundation for Athletic Recovery",
      "PowerPlay Foundation",
    ],
  },
  {
    label: "Community",
    icon: Building2,
    partners: ["Chicken N Pickle", "City of Prosper", "City of Celina"],
  },
];

export function PartnersSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="accent-rule mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-plum)] text-balance mb-4">
              Partners &amp; collaborators
            </h2>
            <p className="text-[var(--color-plum-light)] text-pretty leading-relaxed">
              We work with hospitals, foundations, and local organizations to bring
              awareness and support to the DFW community.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-10">
            {partnerGroups.map((group) => (
              <div key={group.label}>
                <div className="flex items-center gap-2 mb-5">
                  <group.icon className="w-4 h-4 text-[var(--color-lavender)]" />
                  <p className="tagline-brand">{group.label}</p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.partners.map((name) => (
                    <li
                      key={name}
                      className="group flex min-h-[5rem] items-center justify-center rounded-[var(--radius-lg)] border-2 border-[var(--color-line)] bg-white px-6 py-5 text-center transition-all duration-300 hover:border-[var(--color-lavender)] hover:shadow-[var(--shadow-md)]"
                    >
                      <span className="text-sm font-semibold text-[var(--color-plum)] leading-snug text-pretty group-hover:text-[var(--color-lavender-deep)] transition-colors">
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
