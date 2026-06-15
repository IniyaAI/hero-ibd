import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/Button";
import { SITE } from "@/lib/site-content";

export function PreviewSection() {
  return (
    <section className="section-padding bg-[var(--color-wash)]">
      <div className="container-full space-y-14 md:space-y-16">
        <div>
          <h2 className="text-xl font-semibold text-[var(--color-plum)] mb-8">Upcoming events</h2>
          <article className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-start">
            <div className="relative aspect-[16/10] w-full bg-[var(--color-line)]">
              <Image
                src={SITE.marathonPhotoUrl}
                alt="Runners at a community marathon"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-[var(--color-lavender-deep)] font-medium mb-2">May 23, 2026</p>
              <h3 className="text-xl font-semibold text-[var(--color-plum)] mb-3">5K Walk/Run</h3>
              <p className="text-[var(--color-plum-light)] text-pretty leading-relaxed mb-6 flex-1">
                In partnership with the STAR Foundation for Athletic Recovery and PowerPlay.
                More details coming soon — registration is open now.
              </p>
              <Button href={SITE.register5kUrl} external size="sm">
                Register
              </Button>
            </div>
          </article>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[var(--color-plum)] mb-8">Latest impact</h2>
          <article className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-start">
            <div className="relative aspect-[16/10] bg-[var(--color-line)]">
              <Image
                src="/images/events/pickleball-img_0394.jpg"
                alt="Charity Pickleball Tournament"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-[var(--color-plum-muted)] mb-2">2025</p>
              <h3 className="text-xl font-semibold text-[var(--color-plum)] mb-4">
                Charity Pickleball Tournament
              </h3>
              <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5 text-sm border hairline bg-white p-4 rounded-[var(--radius)]">
                <div>
                  <dt className="text-[var(--color-plum-muted)]">Raised</dt>
                  <dd className="font-semibold text-[var(--color-coral-deep)] tabular-nums">$700</dd>
                </div>
                <div>
                  <dt className="text-[var(--color-plum-muted)]">Beneficiary</dt>
                  <dd className="font-semibold text-[var(--color-plum)]">CCF</dd>
                </div>
                <div>
                  <dt className="text-[var(--color-plum-muted)]">Teams</dt>
                  <dd className="font-semibold text-[var(--color-plum)]">Community teams</dd>
                </div>
                <div>
                  <dt className="text-[var(--color-plum-muted)]">Sponsor</dt>
                  <dd className="font-semibold text-[var(--color-plum)]">CUTX</dd>
                </div>
              </dl>
              <p className="text-[var(--color-plum-light)] text-pretty leading-relaxed mb-4 flex-1">
                Proceeds went to the Crohn&apos;s & Colitis Foundation. CUTX sponsored the
                tournament, helping us raise funds for chronic illness awareness and research.
              </p>
              <Link href="/events" className="link-arrow">
                All events
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
