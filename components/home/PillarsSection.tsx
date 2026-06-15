"use client";

import Link from "next/link";
import { ArrowUpRight, Heart, BookOpen, Megaphone } from "lucide-react";
import { PILLARS } from "@/lib/site-content";
import { ScriptAccent } from "@/components/ui/ScriptAccent";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const icons = [Heart, BookOpen, Megaphone];

export function PillarsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-full">
        <ScrollReveal className="mx-auto mb-10 max-w-2xl md:mb-12">
          <div className="accent-rule mb-5" />
          <ScriptAccent as="p" size="quote" className="mb-3">
            Our Foundation
          </ScriptAccent>
          <h2 className="font-brand text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold uppercase tracking-[0.1em] text-[var(--color-plum)]">
            Mission Pillars
          </h2>
          <p className="mt-4 text-[var(--color-plum-light)] leading-relaxed text-pretty">
            Support, education, and awareness — the foundation of everything we do.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {PILLARS.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal key={pillar.title} delay={index * 0.12}>
                <article className="group h-full rounded-[var(--radius)] border hairline bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:shadow-[0_14px_40px_rgba(92,83,104,0.09)] md:p-8">
                  <span
                    className="mb-5 inline-flex size-11 items-center justify-center rounded-[var(--radius)] border hairline bg-[var(--color-wash)] transition-colors duration-300 group-hover:bg-white"
                    style={{ color: pillar.accent }}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="mb-3 text-lg font-semibold text-[var(--color-plum)]">
                    {pillar.title}
                  </h3>
                  <p className="mb-5 text-[var(--color-plum-light)] text-pretty leading-relaxed">
                    {pillar.description}
                  </p>
                  <Link
                    href={pillar.href}
                    className="link-arrow transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    Programs
                    <ArrowUpRight size={14} />
                  </Link>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
