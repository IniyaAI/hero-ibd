"use client";

import Image from "next/image";
import { PARTNERS } from "@/lib/site-content";
import { ScriptAccent } from "@/components/ui/ScriptAccent";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PartnersSection() {
  return (
    <section className="section-padding border-t hairline bg-white">
      <div className="container-full">
        <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <div className="accent-rule mx-auto mb-5" />
          <ScriptAccent as="p" size="quote" className="mb-3">
            Together
          </ScriptAccent>
          <h2 className="text-balance font-[family-name:var(--font-heading)] text-[clamp(2rem,4.5vw,3.25rem)] font-bold! leading-[1.08] text-[var(--color-plum)]">
            Our Partners
          </h2>
          <p className="mt-4 text-[var(--color-plum-light)] leading-relaxed text-pretty md:mt-5">
            Hospitals, foundations, and local organizations that help us expand reach across the
            DFW community.
          </p>
        </ScrollReveal>

        <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {PARTNERS.map((partner, index) => (
            <ScrollReveal key={partner.name} delay={index * 0.08} y={20}>
              <li className="group">
                <div className="flex h-28 items-center justify-center rounded-[var(--radius)] border border-transparent px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-line)] hover:bg-[var(--color-wash)] hover:shadow-[0_12px_36px_rgba(143,127,184,0.14)] sm:h-32">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="max-h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:max-h-16"
                  />
                </div>
                <p className="mt-2 hidden text-center text-[0.6875rem] text-[var(--color-plum-muted)] sm:block">
                  {partner.short}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
