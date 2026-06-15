import Image from "next/image";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { PODCAST_SPEAKERS, SITE } from "@/lib/site-content";

function ProgramSection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-padding border-b hairline scroll-mt-20 last:border-0">
      <div className="container-full">
        <h2 className="text-xl font-semibold text-[var(--color-plum)] mb-2">{title}</h2>
        <p className="text-[var(--color-plum-light)] mb-10 max-w-3xl leading-relaxed">{description}</p>
        {children}
      </div>
    </section>
  );
}

function PhotoGrid({ items }: { items: { src: string; alt: string; label?: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {items.map((item) => (
        <figure key={item.src}>
          <div className="relative aspect-[4/3] bg-[var(--color-line)]">
            <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
          {item.label && (
            <figcaption className="text-xs text-[var(--color-plum-muted)] mt-2">{item.label}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Programs"
          description="Support, education, and awareness programs for chronic illness communities in DFW."
        />

        <ProgramSection
          id="support"
          title="Support"
          description="Resources and financial assistance for individuals and families affected by chronic illness."
        >
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-plum)] mb-3">Fundraisers</h3>
              <p className="text-sm text-[var(--color-plum-light)] max-w-3xl leading-relaxed mb-6">
                Our fundraisers support dedicated organizations today and fund our{" "}
                <a href="/micro-grants" className="text-[var(--color-coral-deep)] hover:underline">
                  micro-grant program
                </a>{" "}
                for patients in need.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <article className="border hairline rounded-[var(--radius)] overflow-hidden bg-white">
                  <div className="relative aspect-[16/10] bg-[var(--color-line)]">
                    <Image
                      src="/images/events/pickleball-img_0394.jpg"
                      alt="Charity Pickleball Tournament"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-medium text-[var(--color-plum)]">Charity Pickleball Tournament</p>
                    <p className="text-[var(--color-coral)] mt-1 tabular-nums text-sm">$700 to CCF</p>
                  </div>
                </article>
                <article className="border hairline rounded-[var(--radius)] overflow-hidden bg-white">
                  <div className="relative aspect-[16/10] bg-[var(--color-line)]">
                    <Image
                      src="/images/programs/giveback-night.jpg"
                      alt="Chicken N Pickle 10% Giveback Night"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-medium text-[var(--color-plum)]">Chicken N Pickle 10% Giveback Night</p>
                    <p className="text-sm text-[var(--color-plum-muted)] mt-1">Community giveback event</p>
                  </div>
                </article>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-plum)] mb-3">Donation drives</h3>
              <p className="text-sm text-[var(--color-plum-light)] max-w-3xl leading-relaxed mb-6">
                We support patients through care packages, flare kits, and toys for hospitalized
                children navigating chronic illness.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="relative aspect-[3/4] max-w-md bg-[var(--color-line)] border hairline">
                  <Image
                    src="/images/programs/toy-drive.jpg"
                    alt="Heart to Heart volunteers with toy donations for Children's Health"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div>
                  <p className="text-2xl font-semibold tabular-nums text-[var(--color-plum)]">100+</p>
                  <p className="text-sm text-[var(--color-plum-muted)] mt-1">
                    Toys donated to Children&apos;s Health
                  </p>
                  <p className="text-sm text-[var(--color-plum-light)] mt-3 leading-relaxed">
                    Supporting hospitalized pediatric IBD patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ProgramSection>

        <ProgramSection
          id="education"
          title="Education"
          description="Accessible information to improve understanding, early recognition, and long-term support for chronic illness."
        >
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-plum)] mb-3">
                Podcast & guest speaker events
              </h3>
              <p className="text-sm text-[var(--color-plum-light)] max-w-3xl leading-relaxed mb-6">
                We share patient stories and expert voices through our podcast and live events to
                build empathy, understanding, and community.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
                <div className="relative aspect-[16/10] bg-[var(--color-line)]">
                  <Image
                    src="/images/programs/guest-speaker-img_3791.jpg"
                    alt="Sports Inclusivity Seminar with Dr. Bhaskar Gurram"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-plum)]">Sports Inclusivity Seminar</p>
                  <p className="text-sm text-[var(--color-plum-muted)] mt-1">
                    Pediatric Gastroenterologist Dr. Bhaskar Gurram
                  </p>
                  <p className="text-sm text-[var(--color-plum-light)] mt-3 leading-relaxed">
                    Informed over 65 people on sports and physical activity with chronic digestive
                    conditions.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-plum)] mb-4">Podcast speakers</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {PODCAST_SPEAKERS.map((speaker) => (
                  <li key={speaker.name} className="text-center">
                    <div className="relative mx-auto size-24 rounded-full overflow-hidden bg-[var(--color-line)] mb-3">
                      <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
                    </div>
                    <p className="text-sm font-medium text-[var(--color-plum)]">{speaker.name}</p>
                  </li>
                ))}
              </ul>
              <div className="overflow-hidden rounded-xl border hairline max-w-full">
                <iframe
                  data-testid="embed-iframe"
                  style={{ borderRadius: 12 }}
                  src={SITE.spotifyEmbedUrl}
                  width="100%"
                  height="351"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Heart to Heart podcast on Spotify"
                  className="w-full max-w-[624px]"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-plum)] mb-3">
                School & community engagement program
              </h3>
              <p className="text-sm text-[var(--color-plum-light)] max-w-3xl leading-relaxed mb-6">
                Our upcoming program delivers chronic illness education toolkits and presentations
                across DFW schools and communities through local partnerships to expand reach.
              </p>
              <PhotoGrid
                items={[
                  { src: "/images/awareness/school-promotion.png", alt: "School promotion event" },
                  { src: "/images/awareness/school-img_0162.jpg", alt: "School engagement" },
                ]}
              />
              <div className="mt-6">
                <Button href={SITE.instagram} external variant="outline" size="sm">
                  Follow on Instagram
                </Button>
              </div>
            </div>
          </div>
        </ProgramSection>

        <ProgramSection
          id="awareness"
          title="Awareness"
          description="Community campaigns and outreach that reduce stigma and make invisible illnesses visible."
        >
          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-plum)] mb-4">Community Awareness Booths</h3>
              <PhotoGrid
                items={[
                  { src: "/images/awareness/booth-1.jpg", alt: "Community awareness booth" },
                  { src: "/images/awareness/booth-2.jpg", alt: "Community awareness booth" },
                  { src: "/images/awareness/booth-3.jpg", alt: "Community awareness booth" },
                  { src: "/images/awareness/booth-4.jpg", alt: "Community awareness booth" },
                  { src: "/images/awareness/booth-5.jpg", alt: "Community awareness booth" },
                  { src: "/images/awareness/booth-heic.jpg", alt: "Community awareness booth" },
                ]}
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-plum)] mb-4">School Outreach</h3>
              <PhotoGrid
                items={[
                  { src: "/images/awareness/school-fullsizerender.jpg", alt: "HEARD school event" },
                  {
                    src: "/images/awareness/school-e9c868ad-919c-4a31-86c9-a60af0640e3a.jpg",
                    alt: "School event",
                  },
                ]}
              />
            </div>
          </div>
        </ProgramSection>
      </main>
      <Footer />
    </>
  );
}
