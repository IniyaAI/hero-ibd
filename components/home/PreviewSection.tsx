import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

export function PreviewSection() {
  return (
    <section className="section-padding bg-[var(--color-wash)]">
      <div className="container-full">
        <SectionHeading title="Recent work" />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16">
          <article className="flex flex-col">
            <div className="relative aspect-[16/10] bg-[var(--color-line)] mb-6">
              <div className="absolute inset-0 flex items-center justify-center bg-white border hairline">
                <p className="tagline-brand">5K event flyer coming soon</p>
              </div>
            </div>
            <p className="text-sm text-[var(--color-lavender-deep)] font-medium mb-2">May 23, 2026</p>
            <h3 className="text-xl font-semibold text-[var(--color-plum)] mb-3">5K Walk/Run</h3>
            <p className="text-[var(--color-plum-light)] text-pretty leading-relaxed mb-6 flex-1">
              In partnership with the STAR Foundation for Athletic Recovery and PowerPlay.
              Registration is open for our upcoming walk/run supporting chronic illness
              awareness and athletic recovery.
            </p>
            <Button href="https://forms.gle/omnufq3TjZtp4ssH8" external size="sm">
              Register
            </Button>
          </article>

          <article className="flex flex-col">
            <div className="relative aspect-[16/10] bg-[var(--color-line)] mb-6">
              <Image
                src="https://picsum.photos/seed/pickleball-tournament/1000/625"
                alt="Charity Pickleball Tournament"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
            </div>
            <p className="text-sm text-[var(--color-plum-muted)] mb-2">2025</p>
            <h3 className="text-xl font-semibold text-[var(--color-plum)] mb-4">
              Charity Pickleball Tournament
            </h3>
            <dl className="grid grid-cols-3 gap-4 mb-5 text-sm">
              <div>
                <dt className="text-[var(--color-plum-muted)]">Raised</dt>
                <dd className="font-semibold text-[var(--color-coral-deep)] tabular-nums">$700</dd>
              </div>
              <div>
                <dt className="text-[var(--color-plum-muted)]">Beneficiary</dt>
                <dd className="font-semibold text-[var(--color-plum)]">CCF</dd>
              </div>
              <div>
                <dt className="text-[var(--color-plum-muted)]">Sponsor</dt>
                <dd className="font-semibold text-[var(--color-plum)]">CUTX</dd>
              </div>
            </dl>
            <p className="text-[var(--color-plum-light)] text-pretty leading-relaxed mb-4 flex-1">
              Proceeds went to the Crohn&apos;s & Colitis Foundation.
            </p>
            <Link href="/events" className="link-arrow">
              All events
              <ArrowUpRight size={14} />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
