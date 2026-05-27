import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const pillars = [
  {
    title: "Support",
    accent: "var(--color-coral)",
    description:
      "Care packages, flare kits, micro-grants, and financial assistance for individuals and families navigating long-term conditions.",
    href: "/programs#support",
  },
  {
    title: "Education",
    accent: "var(--color-lavender)",
    description:
      "School presentations, digital resources, and expert-informed content for students, families, and educators.",
    href: "/programs#education",
  },
  {
    title: "Awareness",
    accent: "var(--color-lavender-deep)",
    description:
      "Community campaigns, events, and outreach that reduce stigma and make invisible illnesses visible.",
    href: "/programs#awareness",
  },
];

export function PillarsSection() {
  return (
    <section className="section-padding">
      <div className="container-full">
        <SectionHeading
          brand
          title="What we do"
          subtitle="Every program falls under one of three pillars. Each one connects awareness to real support."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 xl:gap-12 border-t hairline lg:border-t-0 pt-8 lg:pt-0">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`py-8 lg:py-0 ${
                index > 0 ? "border-t hairline lg:border-t-0 lg:border-l lg:pl-8 xl:pl-12" : ""
              }`}
            >
              <span
                className="font-brand text-xs block mb-4"
                style={{ color: pillar.accent }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-plum)] mb-3">
                {pillar.title}
              </h3>
              <p className="text-[var(--color-plum-light)] text-pretty leading-relaxed mb-5">
                {pillar.description}
              </p>
              <Link href={pillar.href} className="link-arrow">
                Programs
                <ArrowUpRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
