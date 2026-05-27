import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  size?: "default" | "sm";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-coral)] text-white hover:bg-[#b85a52] border border-[var(--color-coral)]",
  secondary:
    "bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-mid)] border border-[var(--color-navy)]",
  outline:
    "bg-white text-[var(--color-navy)] border border-[var(--color-border)] hover:border-[var(--color-navy)] hover:bg-[var(--color-subtle)]",
  ghost:
    "bg-transparent text-[var(--color-coral)] border border-transparent hover:bg-[var(--color-coral-soft)]",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external,
  type = "button",
  size = "default",
}: ButtonProps) {
  const sizeClass =
    size === "sm" ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-sm md:text-[0.9375rem]";

  const base = `inline-flex items-center justify-center gap-1.5 rounded-[var(--radius-sm)] font-semibold transition-colors duration-150 active:scale-[0.98] whitespace-nowrap ${sizeClass}`;

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
