import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { DonateEmbed } from "../ui/DonateEmbed";
import { DONATE_MESSAGE, FUND_USES, SITE } from "@/lib/site-content";

export function DonateCTA() {
  return (
    <section className="section-padding border-t hairline bg-[var(--color-wash)]">
      <div className="container-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          <div>
            <div className="accent-rule mb-5" />
            <h2 className="font-brand text-xl md:text-2xl font-bold text-[var(--color-plum)] text-balance mb-4">
              Donate
            </h2>
            <p className="text-[var(--color-plum-light)] text-pretty leading-relaxed mb-8 max-w-lg">
              {DONATE_MESSAGE}
            </p>
            <DonateEmbed />
          </div>

          <div className="lg:border-l hairline lg:pl-12 xl:pl-16">
            <h3 className="text-sm font-semibold text-[var(--color-plum)] mb-4">
              How funds are used
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
              {FUND_USES.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[var(--color-plum-light)] leading-relaxed pl-4 border-l-2 border-[var(--color-lavender)]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[var(--color-plum-light)] mb-6">
              Other ways to support: partner with us, sponsor an event, or volunteer.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={SITE.donateUrl} external>
                Donate online
              </Button>
              <Button href={`mailto:${SITE.email}?subject=Donation%20Inquiry`} variant="outline">
                <Mail size={15} />
                Email us
              </Button>
            </div>
            <p className="mt-6">
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
