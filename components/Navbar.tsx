"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/micro-grants", label: "Micro-Grants" },
  { href: "/impact", label: "Impact" },
  { href: "/events", label: "Events" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b hairline">
      <nav className="container-full flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Heart to Heart NPO"
            width={819}
            height={1024}
            className="h-9 w-auto object-contain"
            priority
          />
          <span className="font-brand text-[0.6875rem] font-bold text-[var(--color-plum)] hidden sm:block">
            Heart to Heart
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "font-semibold text-[var(--color-coral-deep)]"
                  : "text-[var(--color-plum-muted)] hover:text-[var(--color-lavender-deep)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/get-involved#donate" size="sm">
            Donate
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-[var(--color-plum)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden border-t hairline bg-white container-full py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2.5 text-sm ${
                pathname === link.href
                  ? "font-semibold text-[var(--color-coral-deep)]"
                  : "text-[var(--color-plum-light)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Button href="/get-involved#donate" className="w-full">
              Donate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
