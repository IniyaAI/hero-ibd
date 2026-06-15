import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatsRow } from "@/components/ui/StatCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMPACT_STATS } from "@/lib/site-content";

const testimonials = [
  {
    quote:
      "Heart to Heart's presentation helped our students understand invisible illnesses in a way textbooks never could.",
    name: "Educator",
    role: "Teacher",
  },
  {
    quote:
      "Learning about chronic illness awareness from peers made the topic feel real and important to our community.",
    name: "Student leader",
    role: "HOSA chapter member",
  },
  {
    quote:
      "The care packages show that someone truly understands what families go through.",
    name: "Community member",
    role: "Patient family",
  },
];

const eventPhotos = [
  "/images/awareness/booth-1.jpg",
  "/images/events/pickleball-img_0365.jpg",
  "/images/programs/guest-speaker-img_3788.jpg",
  "/images/awareness/school-img_0162.jpg",
  "/images/awareness/booth-3.jpg",
  "/images/events/pickleball-img_8297.jpg",
  "/images/programs/guest-speaker-img_3791.jpg",
  "/images/awareness/proclamation.jpg",
];

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Impact"
          description="Outcomes from youth-led action and community partnership across the DFW area."
        />

        <section className="section-padding border-b hairline">
          <div className="container-full">
            <StatsRow stats={[...IMPACT_STATS]} bordered={false} />
            <p className="mt-6 text-sm text-[var(--color-plum-muted)] max-w-2xl">
              *Patients supported figure is based on our toy donation drive to Children&apos;s Health.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-full">
            <SectionHeading title="Testimonials" />
            <div className="space-y-8 max-w-2xl">
              {testimonials.map((t) => (
                <blockquote key={t.name} className="border-l-2 border-[var(--color-line-strong)] pl-5">
                  <p className="text-[var(--color-plum-light)] text-pretty leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-3 text-sm">
                    <span className="font-medium text-[var(--color-plum)]">{t.name}</span>
                    <span className="text-[var(--color-plum-muted)]">, {t.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[var(--color-wash)] border-t hairline">
          <div className="container-full">
            <SectionHeading title="Photos from events" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {eventPhotos.map((src) => (
                <div key={src} className="relative aspect-square bg-[var(--color-line)]">
                  <Image src={src} alt="Heart to Heart event" fill className="object-cover" sizes="25vw" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
