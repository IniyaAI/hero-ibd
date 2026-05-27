"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/events", label: "Events" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[var(--color-navy)] text-white/90 text-xs md:text-[0.8125rem]">
        <div className="container-wide px-6 py-2 flex flex-wrap items-center justify-between gap-2">
          <span className="font-brand text-[0.625rem] md:text-[0.6875rem] tracking-[0.12em] text-white/70">
            501(c)(3) YOUTH-LED NONPROFIT
          </span>
          <a
            href="mailto:npo.heart2heart@gmail.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail size={13} />
            npo.heart2heart@gmail.com
          </a>
        </div>
      </div>

      <nav className="bg-white border-b border-[var(--color-border-light)] shadow-[0_1px_0_rgb(26_35_50/0.04)]">
        <div className="container-wide flex items-center justify-between h-[68px] px-6">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Heart to Heart NPO"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
            <div className="hidden sm:block">
              <span className="font-brand text-[0.8125rem] font-bold uppercase text-[var(--color-navy)] leading-tight block">
                Heart to Heart
              </span>
              <span className="text-[0.6875rem] text-[var(--color-text-muted)] leading-tight">
                Chronic Illness Awareness
              </span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-[0.875rem] font-medium rounded-[var(--radius-sm)] transition-colors ${
                  pathname === link.href
                    ? "text-[var(--color-coral)] bg-[var(--color-coral-soft)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-navy)] hover:bg-[var(--color-subtle)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-3">
            <Button href="/micro-grants" variant="outline" size="sm">
              Micro-Grants
            </Button>
            <Button href="/get-involved#donate" variant="primary" size="sm">
              Donate
            </Button>
          </div>

          <button
            type="button"
            className="xl:hidden p-2 text-[var(--color-navy)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="xl:hidden border-t border-[var(--color-border-light)] bg-white px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-[0.9375rem] font-medium border-b border-[var(--color-border-light)] last:border-0 ${
                  pathname === link.href
                    ? "text-[var(--color-coral)]"
                    : "text-[var(--color-text)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button href="/micro-grants" variant="outline" className="w-full">
                Micro-Grants
              </Button>
              <Button href="/get-involved#donate" variant="primary" className="w-full">
                Donate
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
