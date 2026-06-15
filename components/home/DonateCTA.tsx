"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { DonateEmbed } from "../ui/DonateEmbed";
import { ScriptAccent } from "../ui/ScriptAccent";
import { ScrollReveal } from "../ui/ScrollReveal";
import { DONATE_MESSAGE, FUND_USES, SITE } from "@/lib/site-content";

export function DonateCTA() {
  return (
    <section className="section-padding border-t hairline bg-gradient-to-br from-[var(--color-wash)] via-white to-[#fdf7f9]">
      <div className="container-full">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 xl:gap-20">
          <ScrollReveal>
            <div>
              <div className="accent-rule mb-5" />
              <ScriptAccent as="p" size="quote" className="mb-3">
                Support Us
              </ScriptAccent>
              <h2 className="font-brand text-xl font-bold text-[var(--color-plum)] text-balance md:text-2xl">
                Donate
              </h2>
              <p className="mb-8 mt-4 max-w-lg text-[var(--color-plum-light)] text-pretty leading-relaxed">
                {DONATE_MESSAGE}
              </p>
              <DonateEmbed />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="lg:border-l hairline lg:pl-12 xl:pl-16">
              <h3 className="mb-4 text-sm font-semibold text-[var(--color-plum)]">
                How funds are used
              </h3>
              <ul className="mb-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {FUND_USES.map((item, index) => (
                  <li
                    key={item}
                    className="border-l-2 border-[var(--color-lavender)] pl-4 text-sm leading-relaxed text-[var(--color-plum-light)]"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mb-6 text-sm text-[var(--color-plum-light)]">
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
