import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  brand?: boolean;
  children?: ReactNode;
}

export function SectionHeading({ title, subtitle, brand = false, children }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-12 max-w-2xl">
      {brand && <div className="accent-rule mb-4" />}
      <h2
        className={`text-2xl md:text-[1.75rem] font-semibold text-[var(--color-plum)] text-balance ${
          brand ? "font-brand text-xl md:text-2xl font-bold" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[var(--color-plum-light)] text-pretty leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
