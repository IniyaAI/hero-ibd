import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/programs/FadeIn";

type ProgramCardProps = {
  title: string;
  description: string;
  images: readonly { src: string; alt: string }[];
  metrics: readonly { value: string; label: string }[];
  cta: { label: string; href: string };
  comingSoon?: boolean;
  delay?: number;
};

export function ProgramCard({
  title,
  description,
  images,
  metrics,
  cta,
  comingSoon,
  delay = 0,
}: ProgramCardProps) {
  return (
    <FadeIn delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border hairline bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
        <div className={`relative ${images.length > 1 ? "grid grid-cols-2 gap-0.5" : ""}`}>
          {images.map((image) => (
            <div
              key={image.src}
              className={`relative bg-[var(--color-line)] ${
                images.length > 1 ? "aspect-[4/3]" : "aspect-[16/10]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
          {comingSoon && (
            <span className="absolute right-3 top-3 rounded-full bg-[var(--color-lavender)] px-3 py-1 text-xs font-semibold text-white">
              Coming Soon
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <h3 className="text-lg font-semibold text-[var(--color-plum)]">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-plum-light)]">{description}</p>

          <ul className="mt-4 space-y-2">
            {metrics.map((metric) => (
              <li key={metric.label} className="flex items-baseline gap-2 text-sm">
                <span className="font-semibold tabular-nums text-[var(--color-coral-deep)]">{metric.value}</span>
                <span className="text-[var(--color-plum-muted)]">{metric.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-2">
            <Button href={cta.href} variant={comingSoon ? "primary" : "outline"} size="sm">
              {cta.label}
            </Button>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
