"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

type ImpactSectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function ImpactSectionHeading({
  title,
  subtitle,
  centered = false,
}: ImpactSectionHeadingProps) {
  return (
    <ScrollReveal
      className={`mb-12 md:mb-14 lg:mb-16 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
    >
      <div className={`accent-rule mb-5 md:mb-6 ${centered ? "mx-auto" : ""}`} />
      <h2 className="text-balance font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold! leading-[1.12] tracking-[-0.02em] text-[var(--color-plum)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-[var(--color-plum-light)] md:mt-5">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
