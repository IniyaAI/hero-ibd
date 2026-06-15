import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatsRow } from "@/components/ui/StatCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImpactPhotoGallery } from "@/components/impact/ImpactPhotoGallery";
import { IMPACT_STATS, PAGE_HEADERS } from "@/lib/site-content";

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
  { src: "/images/impact/collage-1.png", alt: "Heart to Heart impact collage", width: 1350, height: 1080 },
  { src: "/images/impact/collage-2.png", alt: "Heart to Heart community events collage", width: 2000, height: 1600 },
  { src: "/images/impact/collage-3.png", alt: "Heart to Heart outreach collage", width: 2000, height: 1600 },
  { src: "/images/impact/collage-4.png", alt: "Heart to Heart programs collage", width: 1920, height: 1080 },
];

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader {...PAGE_HEADERS.impact} />

        <section className="section-padding border-b hairline">
          <div className="container-full">
            <StatsRow stats={[...IMPACT_STATS]} bordered={false} />
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
            <SectionHeading title="Event Highlights" />
            <ImpactPhotoGallery photos={eventPhotos} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
