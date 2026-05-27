import { HeartHandshake, GraduationCap, Megaphone } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "../ui/SectionHeading";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Support",
    description:
      "Uplifting individuals and families through care packages, flare kits, micro-grants, and financial assistance that eases the day-to-day burdens of long-term conditions.",
    href: "/programs#support",
    accent: "var(--color-coral)",
    bg: "var(--color-coral-soft)",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Delivering clear, accessible information through school presentations, digital resources, and expert-informed content for students, families, and educators.",
    href: "/programs#education",
    accent: "var(--color-lavender)",
    bg: "var(--color-lavender-soft)",
  },
  {
    icon: Megaphone,
    title: "Awareness",
    description:
      "Increasing visibility for chronic and invisible illnesses through community campaigns, events, and outreach that reduces stigma and promotes understanding.",
    href: "/programs#awareness",
    accent: "var(--color-navy-mid)",
    bg: "var(--color-subtle)",
  },
];

export function PillarsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeading
          title="Our Mission Pillars"
          subtitle="Three interconnected areas of focus guide every program, partnership, and initiative we undertake."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group card-medical p-7 md:p-8 flex flex-col h-full hover:border-[var(--color-lavender)]/40 transition-colors"
            >
              <div
                className="size-11 rounded-[var(--radius-md)] flex items-center justify-center mb-5"
                style={{ backgroundColor: pillar.bg }}
              >
                <pillar.icon size={22} style={{ color: pillar.accent }} strokeWidth={1.75} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-navy)] mb-3">
                {pillar.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed flex-1">
                {pillar.description}
              </p>
              <span className="mt-5 text-sm font-semibold text-[var(--color-coral)] group-hover:underline">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
