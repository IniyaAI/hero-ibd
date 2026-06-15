import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/programs/FadeIn";
import { AnimatedStats } from "@/components/programs/AnimatedStats";

type PillarSectionProps = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  metrics: readonly { value: string; label: string }[];
  background?: "white" | "wash";
  children: ReactNode;
};

export function PillarSection({
  id,
  icon: Icon,
  title,
  description,
  metrics,
  background = "white",
  children,
}: PillarSectionProps) {
  return (
    <section
      id={id}
      className={`section-padding scroll-mt-36 border-b hairline ${
        background === "wash" ? "bg-[var(--color-wash)]" : "bg-white"
      }`}
    >
      <div className="container-full">
        <FadeIn>
          <div className="mb-10 flex items-start gap-4 md:mb-12">
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-coral)]/15 text-[var(--color-coral-deep)]">
              <Icon size={22} aria-hidden />
            </span>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold text-[var(--color-plum)] md:text-3xl">{title}</h2>
              <p className="mt-3 text-[var(--color-plum-light)] leading-relaxed text-pretty">{description}</p>
            </div>
          </div>
        </FadeIn>

        <div className="mb-12">
          <AnimatedStats stats={metrics} />
        </div>

        {children}
      </div>
    </section>
  );
}
