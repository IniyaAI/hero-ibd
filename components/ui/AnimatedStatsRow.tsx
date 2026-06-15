"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type StatItemProps = {
  value: string;
  label: string;
  delay?: number;
  index?: number;
};

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

function CountUpStat({ value, label, delay = 0, index = 0 }: StatItemProps) {
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
      const duration = 2400;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isInView, reducedMotion, target, delay, started]);

  return (
    <motion.div
      ref={ref}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: reducedMotion ? 0 : 0.7,
        delay: reducedMotion ? 0 : index * 0.1,
        ease,
      }}
      className="relative text-center md:text-left"
    >
      <div
        className="mx-auto mb-3 h-0.5 w-8 rounded-full bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-lavender)] md:mx-0"
        aria-hidden
      />
      <p
        className="font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,3.25rem)] font-bold! tabular-nums leading-none text-[var(--color-plum)]"
        style={{
          textShadow: "0 2px 20px rgba(168, 150, 200, 0.22)",
        }}
      >
        {prefix}
        {formatStatNumber(display)}
        {suffix}
      </p>
      <p className="mt-2.5 text-sm font-medium text-[var(--color-plum-muted)] md:text-base">
        {label}
      </p>
    </motion.div>
  );
}

type AnimatedStatsRowProps = {
  stats: { value: string; label: string }[];
  bordered?: boolean;
};

export function AnimatedStatsRow({ stats, bordered = true }: AnimatedStatsRowProps) {
  const cols =
    stats.length === 5
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
      : "grid-cols-2 md:grid-cols-4";

  return (
    <div
      className={`grid ${cols} gap-10 lg:gap-12 xl:gap-16 ${
        bordered ? "mt-10 border-t hairline pt-10" : ""
      }`}
    >
      {stats.map((stat, index) => (
        <CountUpStat key={stat.label} {...stat} delay={index * 150} index={index} />
      ))}
    </div>
  );
}
