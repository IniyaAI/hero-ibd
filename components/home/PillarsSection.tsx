import Link from "next/link";
import { ArrowRight, HeartHandshake, BookOpen, Megaphone } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const pillars = [
  {
    title: "Support",
    icon: HeartHandshake,
    accent: "var(--color-coral)",
    accentBg: "var(--color-coral-soft)",
    description:
      "Care packages, flare kits, micro-grants, and financial assistance for individuals and families navigating long-term conditions.",
    href: "/programs#support",
  },
  {
    title: "Education",
    icon: BookOpen,
    accent: "var(--color-lavender)",
    accentBg: "var(--color-lavender-soft)",
    description:
      "School presentations, digital resources, and expert-informed content for students, families, and educators.",
    href: "/programs#education",
  },
  {
    title: "Awareness",
    icon: Megaphone,
    accent: "var(--color-lavender-deep)",
    accentBg: "var(--color-lavender-soft)",
    description:
      "Community campaigns, events, and outreach that reduce stigma and make invisible illnesses visible.",
    href: "/programs#awareness",
  },
];

export function PillarsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-full">
        <SectionHeading
          brand
          title="What we do"
          subtitle="Every program falls under one of three pillars. Each one connects awareness to real support."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <Link
              key={pillar.title}
              href={pillar.href}
              className="group relative card-elevated p-8 flex flex-col"
            >
              {/* Number badge */}
              <span
                className="absolute top-6 right-6 font-brand text-xs opacity-40"
                style={{ color: pillar.accent }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-[var(--radius-lg)] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: pillar.accentBg }}
              >
                <pillar.icon
                  className="w-7 h-7"
                  style={{ color: pillar.accent }}
                />
              </div>

              <h3 className="text-xl font-bold text-[var(--color-plum)] mb-3">
                {pillar.title}
              </h3>

              <p className="text-[var(--color-plum-light)] text-pretty leading-relaxed mb-6 flex-1">
                {pillar.description}
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3" style={{ color: pillar.accent }}>
                Learn more
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
