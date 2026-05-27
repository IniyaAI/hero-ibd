import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  accent?: boolean;
  children?: ReactNode;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  accent = false,
  children,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-2xl mb-10 md:mb-14 ${alignClass}`}>
      <div className={`accent-line mb-5 ${align === "center" ? "accent-line-center" : ""}`} />
      <h2
        className={`font-[family-name:var(--font-heading)] text-2xl md:text-3xl lg:text-[2rem] font-semibold text-[var(--color-text)] text-balance ${
          accent ? "gradient-accent-text" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[var(--color-text-secondary)] text-pretty leading-relaxed max-w-[60ch] text-base md:text-[1.0625rem]">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
