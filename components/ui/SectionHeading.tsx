import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  brand?: boolean;
  children?: ReactNode;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, brand = false, children, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center mx-auto" : ""} max-w-2xl`}>
      {brand && <div className={`accent-rule mb-5 ${centered ? "mx-auto" : ""}`} />}
      <h2
        className={`text-3xl md:text-4xl font-bold text-[var(--color-plum)] text-balance ${
          brand ? "font-brand tracking-wide" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[var(--color-plum-light)] text-pretty leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
