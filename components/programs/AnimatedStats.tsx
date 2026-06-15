"use client";

import { motion, useReducedMotion } from "framer-motion";

type Stat = { value: string; label: string };

export function AnimatedStats({ stats }: { stats: readonly Stat[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="rounded-xl border hairline bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
        >
          <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold tabular-nums text-[var(--color-plum)] md:text-3xl">
            {stat.value}
          </p>
          <p className="mt-1 text-sm text-[var(--color-plum-muted)]">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
