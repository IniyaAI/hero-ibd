import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/programs/FadeIn";

type SecondaryCardProps = {
  title: string;
  description: string;
  cta: { label: string; href: string };
  external?: boolean;
  delay?: number;
};

export function SecondaryProgramCard({ title, description, cta, external, delay = 0 }: SecondaryCardProps) {
  return (
    <FadeIn delay={delay}>
      <article className="flex h-full flex-col rounded-xl border hairline bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:p-8">
        <h3 className="text-lg font-semibold text-[var(--color-plum)]">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-plum-light)]">{description}</p>
        <div className="mt-6">
          <Button href={cta.href} external={external} variant="outline" size="sm">
            {cta.label}
          </Button>
        </div>
      </article>
    </FadeIn>
  );
}
