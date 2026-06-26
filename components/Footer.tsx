import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail } from "lucide-react";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/events", label: "Events" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/micro-grants", label: "Microgrant Relief Program" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-[var(--color-wash)] border-t hairline">
      <div className="container-full py-12 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Heart to Heart NPO"
                width={819}
                height={1024}
                className="h-9 w-auto object-contain"
              />
              <div>
                <p className="font-brand text-[0.6875rem] font-bold text-[var(--color-plum)]">
                  Heart to Heart
                </p>
                <p className="text-xs text-[var(--color-plum-muted)] mt-0.5">
                  Youth-led 501(c)(3)
                </p>
              </div>
            </div>
            <p className="tagline-brand max-w-md leading-relaxed">
              Strengthen support · Advance education · Raise awareness
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 lg:justify-end">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-plum-muted)] hover:text-[var(--color-lavender-deep)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t hairline flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-[var(--color-plum-muted)]">
          <p>&copy; {new Date().getFullYear()} Heart to Heart NPO</p>
          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:npo.heart2heart@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-[var(--color-coral-deep)]"
            >
              <Mail size={14} />
              npo.heart2heart@gmail.com
            </a>
            <a
              href="https://instagram.com/heart2heartnpo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-[var(--color-lavender-deep)]"
            >
              <Instagram size={14} />
              @heart2heartnpo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
