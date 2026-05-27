import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function PreviewSection() {
  return (
    <section className="section-padding bg-[var(--color-subtle)]">
      <div className="container-wide">
        <SectionHeading
          title="News & Events"
          subtitle="Stay up to date with our latest programs, fundraisers, and community impact."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="card-medical overflow-hidden flex flex-col">
            <div className="bg-[var(--color-navy)] px-6 py-4 flex items-center gap-2.5">
              <Calendar size={16} className="text-[var(--color-coral)]" />
              <span className="font-brand text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/90">
                Upcoming Event
              </span>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-navy)] mb-2">
                5K Walk/Run
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-4 flex items-center gap-1.5">
                <MapPin size={14} />
                STAR Foundation & PowerPlay Partnership
              </p>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 flex-1">
                Join us for our upcoming 5K Walk/Run supporting chronic illness
                awareness and athletic recovery. Registration is now open.
              </p>
              <div className="rounded-[var(--radius-md)] bg-[var(--color-subtle)] border border-[var(--color-border-light)] p-8 mb-6 text-center">
                <p className="font-brand text-sm uppercase tracking-[0.1em] text-[var(--color-lavender)] mb-1">
                  May 23, 2026
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">Event flyer coming soon</p>
              </div>
              <Button href="https://forms.gle/omnufq3TjZtp4ssH8" external>
                Register Now
              </Button>
            </div>
          </article>

          <article className="card-medical overflow-hidden flex flex-col">
            <div className="relative aspect-[16/9] bg-[var(--color-subtle)]">
              <Image
                src="https://picsum.photos/seed/pickleball-tournament/800/450"
                alt="Charity Pickleball Tournament"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-[var(--radius-sm)] px-3 py-1.5">
                <span className="font-brand text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-navy)]">
                  Latest Impact
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-navy)] mb-4">
                Charity Pickleball Tournament
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-5 pb-5 border-b border-[var(--color-border-light)]">
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-navy)] tabular-nums">
                    $700
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Raised for CCF</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-navy)]">
                    Multi
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Teams</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-navy)]">
                    CUTX
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Sponsor</p>
                </div>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Community members came together for a day of fundraising. Proceeds
                were donated to the Crohn&apos;s & Colitis Foundation with sponsorship
                support from CUTX.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
