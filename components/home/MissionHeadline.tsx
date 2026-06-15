import { AnimatedScriptLine } from "@/components/home/AnimatedScriptLine";

export function MissionHeadline() {
  return (
    <h1>
      <span className="font-brand mb-2 block text-sm text-[var(--color-plum-muted)] md:mb-3 md:text-base">
        Heart to Heart:
      </span>

      <span className="block font-[family-name:var(--font-heading)] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.12] text-[var(--color-plum)]">
        Where awareness
      </span>

      <AnimatedScriptLine />
    </h1>
  );
}
