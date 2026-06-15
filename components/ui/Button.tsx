import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

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
    "bg-[var(--color-coral)] text-white hover:bg-[var(--color-coral-hover)] border border-transparent",
  secondary:
    "bg-[var(--color-lavender)] text-white hover:bg-[var(--color-lavender-deep)] border border-transparent",
  outline:
    "bg-transparent text-[var(--color-plum)] border border-[var(--color-line-strong)] hover:border-[var(--color-lavender)] hover:text-[var(--color-lavender-deep)]",
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
  const sizeClass = size === "sm" ? "px-4 py-2 text-sm" : "px-5 py-2.5 text-sm";
  const base = `inline-flex items-center justify-center gap-1.5 rounded-[var(--radius)] font-semibold transition-colors duration-150 whitespace-nowrap ${sizeClass}`;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
