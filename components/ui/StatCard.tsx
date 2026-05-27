interface StatItemProps {
  value: string;
  label: string;
}

export function StatItem({ value, label }: StatItemProps) {
  return (
    <div>
      <p className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-semibold text-[var(--color-plum)] tabular-nums">
        {value}
      </p>
      <p className="mt-1 text-sm text-[var(--color-plum-muted)]">{label}</p>
    </div>
  );
}

interface StatsRowProps {
  stats: StatItemProps[];
  bordered?: boolean;
}

export function StatsRow({ stats, bordered = true }: StatsRowProps) {
  const cols =
    stats.length === 5
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
      : "grid-cols-2 md:grid-cols-4";

  return (
    <div
      className={`grid ${cols} gap-8 lg:gap-12 xl:gap-16 ${
        bordered ? "pt-10 mt-10 border-t hairline" : ""
      }`}
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} />
      ))}
    </div>
  );
}
