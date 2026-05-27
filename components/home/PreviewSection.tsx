import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, ExternalLink } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function PreviewSection() {
  return (
    <section className="section-padding bg-[var(--color-wash)]">
      <div className="container-full">
        <SectionHeading title="Recent work" />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
          {/* Featured upcoming event */}
          <article className="group card-elevated overflow-hidden">
            <div className="relative aspect-[16/10] bg-gradient-to-br from-[var(--color-coral-soft)] to-[var(--color-lavender-soft)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <span className="tagline-brand mb-4">Coming soon</span>
                <h4 className="font-brand text-2xl md:text-3xl font-bold text-[var(--color-plum)]">5K Walk/Run</h4>
                <p className="mt-2 text-[var(--color-plum-muted)]">May 23, 2026</p>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--color-coral-soft)] text-[var(--color-coral-deep)] rounded-full text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  Upcoming
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-plum)] mb-3">5K Walk/Run</h3>
              <p className="text-[var(--color-plum-light)] text-pretty leading-relaxed mb-6">
                In partnership with the STAR Foundation for Athletic Recovery and PowerPlay.
                Registration is open for our upcoming walk/run supporting chronic illness
                awareness and athletic recovery.
              </p>
              <Button href="https://forms.gle/omnufq3TjZtp4ssH8" external>
                Register now
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </article>

          {/* Past event */}
          <article className="group card-elevated overflow-hidden">
            <div className="relative aspect-[16/10] bg-[var(--color-line)] overflow-hidden">
              <Image
                src="https://picsum.photos/seed/pickleball-tournament/1000/625"
                alt="Charity Pickleball Tournament"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm text-[var(--color-plum)] rounded-full text-xs font-semibold">
                  2025
                </span>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-[var(--color-plum)] mb-4">
                Charity Pickleball Tournament
              </h3>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-[var(--color-wash)] rounded-[var(--radius)]">
                  <dd className="text-xl font-bold text-[var(--color-coral)] tabular-nums">$700</dd>
                  <dt className="text-xs text-[var(--color-plum-muted)] mt-1">Raised</dt>
                </div>
                <div className="text-center p-4 bg-[var(--color-wash)] rounded-[var(--radius)]">
                  <dd className="text-xl font-bold text-[var(--color-plum)]">CCF</dd>
                  <dt className="text-xs text-[var(--color-plum-muted)] mt-1">Beneficiary</dt>
                </div>
                <div className="text-center p-4 bg-[var(--color-wash)] rounded-[var(--radius)]">
                  <dd className="text-xl font-bold text-[var(--color-plum)]">CUTX</dd>
                  <dt className="text-xs text-[var(--color-plum-muted)] mt-1">Sponsor</dt>
                </div>
              </div>

              <p className="text-[var(--color-plum-light)] text-pretty leading-relaxed mb-4">
                Proceeds went to the Crohn&apos;s &amp; Colitis Foundation.
              </p>

              <Link href="/events" className="link-arrow">
                View all events
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
