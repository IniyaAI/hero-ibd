"use client";

import Image from "next/image";
import { ScriptAccent } from "@/components/ui/ScriptAccent";
import { ScrollReveal, ScrollRevealQuote } from "@/components/ui/ScrollReveal";

export function AboutStorySection() {
  return (
    <section className="section-padding">
      <div className="container-full max-w-5xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-14 lg:gap-16">
          <ScrollReveal delay={0}>
            <article>
              <h2 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-plum)] md:text-xl">
                Why We Started
              </h2>
              <div className="space-y-5 text-[var(--color-plum-light)] leading-relaxed text-pretty">
                <p>
                  Heart to Heart was born from our{" "}
                  <strong className="font-semibold text-[var(--color-plum)]">
                    passion for helping others
                  </strong>{" "}
                  and our growing interest in medicine.
                </p>
                <p>
                  Early on, we were drawn to understanding how diseases affect people&apos;s lives,
                  which led us to lead{" "}
                  <strong className="font-semibold text-[var(--color-plum)]">
                    HOSA community awareness campaigns
                  </strong>{" "}
                  on sickle cell disease, endometriosis, and pediatric IBD.
                </p>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <article>
              <h2 className="mb-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-plum)] md:text-xl">
                What We Saw
              </h2>
              <div className="space-y-5 text-[var(--color-plum-light)] leading-relaxed text-pretty">
                <p>
                  These experiences revealed how many illnesses remain{" "}
                  <strong className="font-semibold text-[var(--color-plum)]">
                    unheard, stigmatized, and lacking proper awareness or support
                  </strong>
                  , leaving patients struggling to get diagnosed.
                </p>
                <p>
                  Through personal stories, conversations, and podcast episodes, we witnessed
                  firsthand the challenges patients and families face when conditions go unnoticed
                  or misunderstood.
                </p>
              </div>
            </article>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-14 md:mt-16 lg:mt-20" delay={0.08}>
          <h2 className="mb-5 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-plum)] md:mb-6 md:text-xl">
            Where We Are Today
          </h2>
          <div className="rounded-[var(--radius)] border hairline bg-[var(--color-wash)] p-6 md:p-8 lg:p-10">
            <p className="text-[1.0625rem] leading-relaxed text-[var(--color-plum-light)] text-pretty md:text-lg md:leading-[1.75]">
              Building on initiatives like{" "}
              <strong className="font-semibold text-[var(--color-plum)]">BLOOM</strong> and{" "}
              <strong className="font-semibold text-[var(--color-plum)]">Heroes for IBD</strong>,
              we founded Heart to Heart — a{" "}
              <strong className="font-semibold text-[var(--color-plum)]">
                student-led 501(c)(3) nonprofit
              </strong>{" "}
              empowering youth to create meaningful change through events, storytelling, and
              outreach programs that{" "}
              <strong className="font-semibold text-[var(--color-plum)]">
                foster understanding, break stigma, and promote earlier diagnosis
              </strong>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function AboutStoryQuote() {
  return (
    <section className="border-y hairline bg-gradient-to-br from-[var(--color-wash)] via-white to-[#fdf7f9] py-14 md:py-16 lg:py-20">
      <div className="container-full max-w-4xl text-center">
        <ScrollRevealQuote>
          <div className="accent-rule mx-auto mb-8" />
          <blockquote>
            <ScriptAccent as="p" size="quote">
              &ldquo;Awareness alone isn&apos;t enough. People need support, education, and
              connection.&rdquo;
            </ScriptAccent>
          </blockquote>
        </ScrollRevealQuote>
      </div>
    </section>
  );
}

type TeamMember = {
  name: string;
  title: string;
  image: string;
  imageClassName?: string;
};

export function AboutTeamSection({ members }: { members: TeamMember[] }) {
  return (
    <section className="section-padding bg-[var(--color-wash)]">
      <div className="container-full">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
            <h2 className="text-balance font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold! text-[var(--color-plum)]">
              Meet the Students Behind Heart to Heart
            </h2>
            <p className="mt-4 text-[var(--color-plum-light)] leading-relaxed text-pretty md:mt-5">
              The work we do is powered by students committed to creating meaningful change in
              their communities.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-10 md:gap-12">
          {members.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.14} y={24}>
              <article className="grid grid-cols-[96px_1fr] gap-5">
                <div className="relative size-24 shrink-0 overflow-hidden border hairline bg-[var(--color-line)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={member.imageClassName ?? "object-cover"}
                    sizes="96px"
                  />
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-[var(--color-plum)]">{member.name}</h3>
                  <p className="mt-1 text-sm text-[var(--color-coral-deep)]">{member.title}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
