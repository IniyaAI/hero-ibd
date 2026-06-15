import type { ReactNode } from "react";

type ScriptAccentProps = {
  children: ReactNode;
  as?: "p" | "span";
  size?: "header" | "quote" | "hero" | "card";
  tone?: "default" | "overlay";
  className?: string;
};

const sizeClasses = {
  header:
    "text-[clamp(2rem,4.25vw,3.375rem)] leading-[1.75] pt-[0.04em] pb-[0.22em]",
  quote:
    "text-[clamp(2rem,4.5vw,3.375rem)] leading-[1.75] pt-[0.05em] pb-[0.5em]",
  hero:
    "text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.8] pt-[0.06em] pb-[0.52em]",
  card:
    "text-[clamp(1.875rem,3.75vw,2.75rem)] leading-[1.75] pt-[0.05em] pb-[0.5em]",
};

const shared =
  "font-script-accent inline-block w-fit max-w-full overflow-visible text-pretty";

const defaultClasses =
  "font-semibold! script-accent-gradient [paint-order:stroke_fill] [-webkit-text-stroke:1.5px_transparent]";

const overlayClasses =
  "font-bold! text-white [-webkit-text-stroke:0.35px_rgba(255,255,255,0.85)] [text-shadow:0_2px_24px_rgba(0,0,0,0.85),0_1px_8px_rgba(0,0,0,0.7),0_0_1px_rgba(255,255,255,0.95)]";

const defaultStyle = {
  WebkitTextFillColor: "transparent",
  paintOrder: "stroke fill",
  WebkitTextStroke: "1.5px transparent",
} as const;

const overlayStyle = {
  color: "#ffffff",
  WebkitTextFillColor: "#ffffff",
};

export function ScriptAccent({
  children,
  as: Tag = "p",
  size = "header",
  tone = "default",
  className = "",
}: ScriptAccentProps) {
  if (tone === "overlay") {
    return (
      <Tag
        className={`${shared} ${overlayClasses} ${sizeClasses[size]} ${className}`}
        style={overlayStyle}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      className={`${shared} ${defaultClasses} ${sizeClasses[size]} ${className}`}
      style={defaultStyle}
    >
      {children}
    </Tag>
  );
}
