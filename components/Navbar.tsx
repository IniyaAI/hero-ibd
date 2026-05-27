"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[var(--shadow-sm)]"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container-full flex items-center justify-between h-18 py-4">
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative">
            <Image
              src="/images/logo.png"
              alt="Heart to Heart NPO"
              width={42}
              height={42}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-brand text-xs font-bold text-[var(--color-plum)] block">
              Heart to Heart
            </span>
            <span className="text-[10px] text-[var(--color-plum-muted)]">
              NPO
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-[var(--radius)] transition-all duration-200 ${
                pathname === link.href
                  ? "text-[var(--color-coral-deep)] bg-[var(--color-coral-soft)]"
                  : "text-[var(--color-plum-muted)] hover:text-[var(--color-plum)] hover:bg-[var(--color-wash)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/get-involved#donate" size="sm">
            <Heart className="w-4 h-4" />
            Donate
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden p-2.5 rounded-[var(--radius)] text-[var(--color-plum)] hover:bg-[var(--color-wash)] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--color-line)] shadow-[var(--shadow-lg)]">
          <div className="container-full py-6">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-[var(--radius)] text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[var(--color-coral-deep)] bg-[var(--color-coral-soft)]"
                      : "text-[var(--color-plum-light)] hover:bg-[var(--color-wash)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-[var(--color-line)]">
              <Button href="/get-involved#donate" className="w-full" size="lg">
                <Heart className="w-5 h-5" />
                Donate
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
