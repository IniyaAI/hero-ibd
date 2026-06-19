"use client";

import { Quote } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImpactSectionHeading } from "@/components/impact/ImpactSectionHeading";
import { IMPACT_TESTIMONIALS } from "@/lib/impact-content";

export function ImpactTestimonialsSection() {
  return (
    <section className="section-padding relative overflow-hidden border-b hairline bg-[#f3eff8] py-16 md:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(250,198,195,0.35),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(193,160,210,0.2),transparent_50%)]"
        aria-hidden
      />

      <div className="container-full relative">
        <ImpactSectionHeading
          title="Testimonials"
          subtitle="Voices from educators, students, and families who have experienced our work firsthand."
          centered
        />

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {IMPACT_TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.08} className="h-full">
              <li className="h-full list-none">
                <figure className="group flex h-full min-h-[16rem] flex-col rounded-2xl border hairline bg-white p-7 shadow-[0_4px_24px_rgba(92,83,104,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:shadow-[0_18px_48px_rgba(92,83,104,0.11)] md:p-8">
                  <Quote
                    className="size-9 shrink-0 text-[var(--color-lavender)] opacity-80"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <blockquote className="mt-5 flex-1">
                    <p className="text-pretty text-base leading-[1.75] text-[var(--color-plum-light)] md:text-[1.0625rem]">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 border-t hairline pt-5">
                    <p className="font-semibold text-[var(--color-plum)]">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-[var(--color-plum-muted)]">{testimonial.role}</p>
                  </figcaption>
                </figure>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
