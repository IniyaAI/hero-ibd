import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/programs/FadeIn";
import { PROGRAMS_CTA } from "@/lib/programs-content";

export function ProgramsCTA() {
  return (
    <section className="relative overflow-hidden border-t hairline">
      <div className="absolute inset-0">
        <Image
          src="/images/awareness/booth-2.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[var(--color-plum)]/85" aria-hidden />
      </div>

      <div className="container-full relative z-10 section-padding">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-brand !text-white text-2xl font-bold md:text-3xl">Get Involved</h2>
          <p className="mt-4 text-base leading-relaxed !text-white text-pretty md:text-lg">
            Help us create earlier diagnoses, stronger support systems, and more informed communities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {PROGRAMS_CTA.map((action) => (
              <Button
                key={action.label}
                href={action.href}
                variant={action.variant}
                className={
                  action.label === "Partner With Us"
                    ? "border-white bg-white text-[var(--color-plum)] hover:border-white hover:bg-white/90 hover:text-[var(--color-plum)]"
                    : undefined
                }
              >
                {action.label}
              </Button>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
