type ImpactChipsProps = {
  chips: string[];
};

export function ImpactChips({ chips }: ImpactChipsProps) {
  if (!chips.length) return null;

  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {chips.map((chip) => (
        <li
          key={chip}
          className="rounded-full bg-[color-mix(in_srgb,var(--color-lavender)_14%,white)] px-3 py-1 text-xs font-semibold text-[var(--color-lavender-deep)]"
        >
          {chip}
        </li>
      ))}
    </ul>
  );
}
