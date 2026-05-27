import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function MissionHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-subtle)] border-b border-[var(--color-border-light)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,var(--color-lavender-soft)_0%,transparent_60%)] pointer-events-none" />

      <div className="container-wide relative px-6 py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[var(--color-border)] px-3.5 py-1.5 mb-6 shadow-sm">
              <ShieldCheck size={14} className="text-[var(--color-coral)]" />
              <span className="label-caps text-[var(--color-text-secondary)] !text-[0.625rem]">
                Youth-Led 501(c)(3) Nonprofit
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold text-[var(--color-navy)] text-balance leading-[1.15] mb-5">
              Where{" "}
              <span className="gradient-accent-text">Awareness</span>{" "}
              Leads to Action
            </h1>

            <p className="text-[var(--color-text-secondary)] text-pretty leading-relaxed text-lg max-w-[58ch] mb-8">
              Dedicated to promoting earlier diagnosis and improving outcomes for
              individuals living with chronic illnesses by advancing awareness,
              education, and support through youth-led initiatives and community
              partnerships.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/about">
                Our Story
                <ArrowRight size={16} className="ml-1.5" />
              </Button>
              <Button href="/programs" variant="outline">
                View Programs
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px]">
              <div className="card-medical p-8 md:p-10 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Heart to Heart NPO"
                  width={280}
                  height={280}
                  className="object-contain w-full h-auto"
                  priority
                />
              </div>
              <p className="text-center mt-4 text-sm text-[var(--color-text-muted)] font-brand uppercase tracking-[0.1em]">
                Strengthen Support · Advance Education · Raise Awareness
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
