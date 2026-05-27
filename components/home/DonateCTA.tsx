import Link from "next/link";
import { Button } from "../ui/Button";

const fundUses = [
  "Program materials and outreach events",
  "Support initiatives and micro-grants",
  "Educational resources and toolkits",
  "Community engagement activities",
];

export function DonateCTA() {
  return (
    <section className="section-padding border-t hairline bg-[var(--color-wash)]">
      <div className="container-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24">
          <div>
            <div className="accent-rule mb-5" />
            <h2 className="font-brand text-xl md:text-2xl font-bold text-[var(--color-plum)] text-balance mb-4">
              Support our mission
            </h2>
            <p className="text-[var(--color-plum-light)] text-pretty leading-relaxed mb-8 max-w-lg">
              100% of your donation goes directly to programs supporting patients,
              research, and advocacy. Never to personal profit.
            </p>
            <Button href="/get-involved#donate">Donate</Button>
          </div>

          <div className="lg:border-l hairline lg:pl-12 xl:pl-24">
            <h3 className="text-sm font-semibold text-[var(--color-plum)] mb-4">
              How funds are used
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {fundUses.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[var(--color-plum-light)] leading-relaxed pl-4 border-l-2 border-[var(--color-lavender)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[var(--color-plum-muted)]">
              Questions?{" "}
              <a
                href="mailto:npo.heart2heart@gmail.com"
                className="text-[var(--color-coral-deep)] hover:underline"
              >
                npo.heart2heart@gmail.com
              </a>
            </p>
            <p className="mt-4">
              <Link href="/get-involved" className="link-arrow">
                Other ways to help
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
