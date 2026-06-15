import { ScriptAccent } from "@/components/ui/ScriptAccent";

export interface PageHeaderProps {
  accentHeading: string;
  title: string;
  description?: string;
}

export function PageHeader({ accentHeading, title, description }: PageHeaderProps) {
  return (
    <section className="page-hero relative border-b hairline bg-gradient-to-br from-[var(--color-wash)] via-white to-[#fdf7f9]">
      {/* Decorative layer only — must not clip page content */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/images/watercolor-paper.svg')] bg-cover opacity-[0.35]" />
        <div className="absolute -right-8 -top-16 h-72 w-72 rounded-full bg-[var(--color-lavender)] opacity-[0.18] blur-3xl" />
        <div className="absolute -bottom-20 -left-6 h-64 w-64 rounded-full bg-[var(--color-ombre-start)] opacity-[0.22] blur-3xl" />
      </div>

      <div className="container-full relative py-16 pb-20 md:py-20 md:pb-24 lg:py-24 lg:pb-28 xl:py-28 xl:pb-32">
        <div className="max-w-4xl">
          <div className="accent-rule mb-7 md:mb-8" />

          <div className="overflow-visible">
            <ScriptAccent size="header">{accentHeading}</ScriptAccent>
          </div>

          <h1 className="mt-1 text-balance font-[family-name:var(--font-heading)] text-[clamp(2.75rem,6.5vw,4.5rem)] font-bold! leading-[1.04] tracking-[-0.02em] text-[var(--color-plum)] md:mt-1.5">
            {title}
          </h1>

          {description && (
            <p className="mt-5 max-w-[38rem] text-pretty text-[clamp(1.0625rem,1.6vw,1.1875rem)] leading-[1.65] text-[var(--color-plum-light)] md:mt-6">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
