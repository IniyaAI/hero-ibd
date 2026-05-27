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
  size?: "default" | "sm" | "lg";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-coral)] text-white hover:bg-[var(--color-coral-hover)] active:bg-[var(--color-coral-deep)] border border-transparent shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]",
  secondary:
    "bg-[var(--color-lavender)] text-white hover:bg-[var(--color-lavender-deep)] border border-transparent shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]",
  outline:
    "bg-white text-[var(--color-plum)] border-2 border-[var(--color-line-strong)] hover:border-[var(--color-coral)] hover:text-[var(--color-coral-deep)] shadow-[var(--shadow-sm)]",
  ghost:
    "bg-transparent text-[var(--color-plum-light)] hover:text-[var(--color-plum)] hover:bg-[var(--color-wash)]",
};

const sizes: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
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
  const base = `inline-flex items-center justify-center gap-2 rounded-[var(--radius)] font-semibold transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[var(--color-lavender)] focus:ring-offset-2 ${sizes[size]}`;
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
