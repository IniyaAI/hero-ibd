import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatsBar } from "@/components/ui/StatCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: "162,347+", label: "People Reached" },
  { value: "15+", label: "Events Hosted" },
  { value: "3+", label: "Communities Engaged" },
  { value: "$1,500+", label: "Funds Raised" },
];

const testimonials = [
  {
    quote:
      "Heart to Heart's presentation helped our students understand invisible illnesses in a way textbooks never could.",
    name: "Educator",
    role: "High School Teacher",
  },
  {
    quote:
      "Learning about chronic illness awareness from peers made the topic feel real and important to our community.",
    name: "Student Leader",
    role: "HOSA Chapter Member",
  },
  {
    quote:
      "The care packages and support initiatives show that someone truly understands what families go through.",
    name: "Community Member",
    role: "Patient Family",
  },
];

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Impact"
          description="Measurable outcomes from youth-led action and community partnership across the DFW area."
        />
        <StatsBar stats={[...stats, { value: "65+", label: "Patients Supported" }]} />

        <section className="section-padding bg-white">
          <div className="container-wide">
            <SectionHeading title="Testimonials" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <blockquote key={t.name} className="card-medical p-6 md:p-7">
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer>
                    <p className="text-sm font-semibold text-[var(--color-navy)]">{t.name}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{t.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[var(--color-subtle)]">
          <div className="container-wide">
            <SectionHeading title="Event Gallery" align="center" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="relative aspect-square rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border)]">
                  <Image
                    src={`https://picsum.photos/seed/impact-event-${i}/400/400`}
                    alt="Heart to Heart event"
                    fill
                    className="object-cover"
                  />
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
