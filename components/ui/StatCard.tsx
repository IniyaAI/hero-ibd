interface StatCardProps {
  value: string;
  label: string;
  detail?: string;
  variant?: "light" | "dark";
}

export function StatCard({ value, label, detail, variant = "light" }: StatCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`text-left ${isDark ? "text-white" : ""}`}
    >
      <p
        className={`font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold tabular-nums ${
          isDark ? "text-white" : "text-[var(--color-navy)]"
        }`}
      >
        {value}
      </p>
      <p
        className={`mt-1.5 text-sm font-semibold ${
          isDark ? "text-white/80" : "text-[var(--color-text-secondary)]"
        }`}
      >
        {label}
      </p>
      {detail && (
        <p
          className={`mt-2 text-xs leading-relaxed ${
            isDark ? "text-white/60" : "text-[var(--color-text-muted)]"
          }`}
        >
          {detail}
        </p>
      )}
    </div>
  );
}

interface StatsBarProps {
  stats: { value: string; label: string }[];
}

export function StatsBar({ stats }: StatsBarProps) {
  const cols =
    stats.length >= 5
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
      : "grid-cols-2 lg:grid-cols-4";

  return (
    <section className="bg-[var(--color-navy)]">
      <div className="container-wide px-6 py-10 md:py-12">
        <div className={`grid ${cols} gap-8 lg:gap-6`}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-6" : ""}`}
            >
              <StatCard value={stat.value} label={stat.label} variant="dark" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
