import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Heart, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/events", label: "Events" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/micro-grants", label: "Micro-Grants" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-[var(--color-plum)] text-white">
      <div className="container-full py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/10 rounded-[var(--radius)]">
                <Image
                  src="/images/logo.png"
                  alt="Heart to Heart NPO"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-brand text-xs font-bold text-white">
                  Heart to Heart
                </p>
                <p className="text-xs text-white/60 mt-0.5">
                  Youth-led 501(c)(3)
                </p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed max-w-sm mb-6">
              Promoting earlier diagnosis and better outcomes for people with chronic illness through awareness, education, and support.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Heart className="w-4 h-4 text-[var(--color-coral)]" />
              <span>Strengthen support · Advance education · Raise awareness</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-brand text-xs text-white/50 mb-5">Quick links</h4>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-brand text-xs text-white/50 mb-5">Connect</h4>
            <div className="space-y-4">
              <a
                href="mailto:npo.heart2heart@gmail.com"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-[var(--radius)] bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>npo.heart2heart@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/heart2heartnpo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-[var(--radius)] bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <span className="flex items-center gap-1">
                  @heart2heartnpo
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Heart to Heart NPO. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Made with <Heart className="w-3 h-3 inline text-[var(--color-coral)]" /> by youth, for the community
          </p>
        </div>
      </div>
    </footer>
  );
}
