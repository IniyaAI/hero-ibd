import Link from "next/link";
import { ArrowUpRight, Heart, BookOpen, Megaphone } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { PILLARS } from "@/lib/site-content";

const icons = [Heart, BookOpen, Megaphone];

export function PillarsSection() {
  return (
    <section className="section-padding">
      <div className="container-full">
        <SectionHeading
          brand
          title="Our mission pillars"
          subtitle="Support, education, and awareness — the foundation of everything we do."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 xl:gap-12 border-t hairline lg:border-t-0 pt-8 lg:pt-0">
          {PILLARS.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <article
                key={pillar.title}
                className={`py-8 lg:py-0 ${
                  index > 0 ? "border-t hairline lg:border-t-0 lg:border-l lg:pl-8 xl:pl-12" : ""
                }`}
              >
                <span
                  className="inline-flex size-10 items-center justify-center rounded-[var(--radius)] border hairline mb-5"
                  style={{ color: pillar.accent }}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <h3 className="text-lg font-semibold text-[var(--color-plum)] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[var(--color-plum-light)] text-pretty leading-relaxed mb-5">
                  {pillar.description}
                </p>
                <Link href={pillar.href} className="link-arrow">
                  Our Programs
                  <ArrowUpRight size={14} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
