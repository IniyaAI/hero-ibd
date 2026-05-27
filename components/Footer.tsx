import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail } from "lucide-react";

const footerLinks = {
  organization: [
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/impact", label: "Impact" },
    { href: "/events", label: "Events" },
  ],
  getInvolved: [
    { href: "/get-involved", label: "Volunteer & Partner" },
    { href: "/get-involved#donate", label: "Donate" },
    { href: "/micro-grants", label: "Micro-Grants" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white mt-auto">
      <div className="container-wide px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.png"
                alt="Heart to Heart NPO"
                width={44}
                height={44}
                className="object-contain brightness-110"
              />
              <div>
                <span className="font-brand text-xs font-bold uppercase text-white block">
                  Heart to Heart
                </span>
                <span className="text-[0.6875rem] text-white/50">501(c)(3) Nonprofit</span>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed max-w-xs">
              Promoting earlier diagnosis and improving outcomes for individuals
              living with chronic illnesses through youth-led awareness, education,
              and support.
            </p>
          </div>

          <div>
            <h3 className="font-brand text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/50 mb-4">
              Organization
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.organization.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-brand text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/50 mb-4">
              Get Involved
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-brand text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/50 mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:npo.heart2heart@gmail.com"
                className="flex items-start gap-2.5 text-sm text-white/75 hover:text-white transition-colors"
              >
                <Mail size={15} className="mt-0.5 shrink-0" />
                npo.heart2heart@gmail.com
              </a>
              <a
                href="https://instagram.com/heart2heartnpo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-white/75 hover:text-white transition-colors"
              >
                <Instagram size={15} className="mt-0.5 shrink-0" />
                @heart2heartnpo
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>&copy; {new Date().getFullYear()} Heart to Heart NPO. All rights reserved.</p>
          <p className="font-brand text-[0.625rem] tracking-[0.1em] uppercase">
            Where Awareness Leads to Action
          </p>
        </div>
      </div>
    </footer>
  );
}
