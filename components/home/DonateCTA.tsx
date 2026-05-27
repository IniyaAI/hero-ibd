import Link from "next/link";
import { Button } from "../ui/Button";
import { Heart, ArrowRight, Check } from "lucide-react";

const fundUses = [
  "Program materials and outreach events",
  "Support initiatives and micro-grants",
  "Educational resources and toolkits",
  "Community engagement activities",
];

export function DonateCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-mesh" />
      
      <div className="container-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left side - CTA */}
          <div className="relative">
            <div className="accent-rule mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-plum)] text-balance mb-5">
              Support our mission
            </h2>
            <p className="text-lg text-[var(--color-plum-light)] text-pretty leading-relaxed mb-8 max-w-lg">
              100% of your donation goes directly to programs supporting patients,
              research, and advocacy. Never to personal profit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/get-involved#donate" size="lg">
                <Heart className="w-5 h-5" />
                Donate now
              </Button>
              <Button href="/get-involved" variant="ghost" size="lg">
                Other ways to help
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right side - Fund uses */}
          <div className="bg-white rounded-[var(--radius-xl)] p-8 md:p-10 shadow-[var(--shadow-lg)] border border-[var(--color-line)]">
            <h3 className="text-lg font-bold text-[var(--color-plum)] mb-6">
              How your funds are used
            </h3>
            <ul className="space-y-4 mb-8">
              {fundUses.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-coral-soft)] flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[var(--color-coral-deep)]" />
                  </div>
                  <span className="text-[var(--color-plum-light)] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-[var(--color-line)]">
              <p className="text-sm text-[var(--color-plum-muted)] mb-2">
                Questions about donations?
              </p>
              <a
                href="mailto:npo.heart2heart@gmail.com"
                className="inline-flex items-center gap-2 text-[var(--color-coral-deep)] font-semibold hover:text-[var(--color-coral)] transition-colors"
              >
                npo.heart2heart@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
