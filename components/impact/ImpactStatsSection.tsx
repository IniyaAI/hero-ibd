"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Stat = { value: string; label: string };

function parseStatValue(value: string) {
  const prefix = value.includes("$") ? "$" : "";
  const suffix = value.includes("+") ? "+" : "";
  const target = Number(value.replace(/[^0-9.]/g, ""));
  return { prefix, suffix, target };
}

function formatStatNumber(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

const ease = [0.22, 1, 0.36, 1] as const;
const COUNT_DURATION_MS = 1750;

function ImpactStatCard({
  value,
  label,
  delay = 0,
  index = 0,
}: Stat & { delay?: number; index?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();
  const { prefix, suffix, target } = parseStatValue(value);
  const [display, setDisplay] = useState(reducedMotion ? target : 0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isInView || started) return;

    if (reducedMotion) {
      setDisplay(target);
      setStarted(true);
      return;
    }

    const timeout = window.setTimeout(() => {
      setStarted(true);
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / COUNT_DURATION_MS, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isInView, reducedMotion, target, delay, started]);

  return (
    <motion.article
      ref={ref}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: reducedMotion ? 0 : 0.7,
        delay: reducedMotion ? 0 : index * 0.1,
        ease,
      }}
      className="group flex h-full flex-col items-center justify-center rounded-2xl border hairline bg-white p-6 text-center shadow-[0_4px_20px_rgba(92,83,104,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:shadow-[0_16px_40px_rgba(92,83,104,0.1)] md:p-8"
    >
      <div
        className="mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-lavender)]"
        aria-hidden
      />
      <p
        className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold! tabular-nums leading-none text-[var(--color-plum)]"
        aria-label={`${prefix}${formatStatNumber(target)}${suffix} ${label}`}
      >
        <span aria-hidden="true">
          {prefix}
          {formatStatNumber(display)}
          {suffix}
        </span>
      </p>
      <p className="mt-3 text-sm font-medium text-[var(--color-plum-muted)] md:text-base">
        {label}
      </p>
    </motion.article>
  );
}

type ImpactStatsSectionProps = {
  stats: readonly Stat[];
};

export function ImpactStatsSection({ stats }: ImpactStatsSectionProps) {
  const cols =
    stats.length === 5
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="section-padding border-b hairline bg-white py-16 md:py-24 lg:py-28">
      <div className="container-full">
        <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center md:mb-14 lg:mb-16">
          <div className="accent-rule mx-auto mb-5 md:mb-6" />
          <h2 className="text-balance font-[family-name:var(--font-heading)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold! leading-[1.12] tracking-[-0.02em] text-[var(--color-plum)]">
            Impact at a Glance
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-[var(--color-plum-light)]">
            Measurable outcomes from youth-led action across the DFW community.
          </p>
        </ScrollReveal>

        <div className={`grid ${cols} gap-5 md:gap-6 lg:gap-8`}>
          {stats.map((stat, index) => (
            <ImpactStatCard key={stat.label} {...stat} delay={index * 120} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
