import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";

const fundUses = [
  "Program materials and outreach events",
  "Support initiatives and micro-grants",
  "Educational resources and toolkits",
  "Community engagement activities",
];

const otherWays = [
  "Partner with us on community initiatives",
  "Sponsor an upcoming event",
  "Volunteer at our programs and events",
  "Spread awareness on social media",
];

export function DonateCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 card-medical overflow-hidden">
          <div className="lg:col-span-3 bg-[var(--color-navy)] p-8 md:p-12 lg:p-14 text-white">
            <div className="accent-line mb-6 !bg-gradient-to-r !from-[var(--color-coral)] !to-[var(--color-lavender)]" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-semibold text-balance mb-4">
              Support Our Mission
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 max-w-lg">
              100% of your donation goes directly to programs supporting patients,
              research, and advocacy. Never to personal profit.
            </p>
            <Button href="/get-involved#donate" variant="primary" className="mb-10">
              Donate Today
            </Button>

            <h3 className="font-brand text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/50 mb-4">
              How Funds Are Used
            </h3>
            <ul className="space-y-2.5">
              {fundUses.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/75">
                  <CheckCircle2 size={16} className="text-[var(--color-coral)] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="mailto:npo.heart2heart@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mt-8 transition-colors"
            >
              <Mail size={15} />
              npo.heart2heart@gmail.com
            </a>
          </div>

          <div className="lg:col-span-2 p-8 md:p-12 lg:p-14 bg-[var(--color-subtle)]">
            <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-navy)] mb-5">
              Other Ways to Support
            </h3>
            <ul className="space-y-4 mb-8">
              {otherWays.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[var(--color-text-secondary)] leading-relaxed pl-4 border-l-2 border-[var(--color-coral)]/30"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/get-involved" variant="secondary">
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
