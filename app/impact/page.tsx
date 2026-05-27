import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { StatsRow } from "@/components/ui/StatCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const stats = [
  { value: "162,347+", label: "People reached" },
  { value: "15+", label: "Events hosted" },
  { value: "3+", label: "Communities engaged" },
  { value: "$1,500+", label: "Funds raised" },
  { value: "65+", label: "Patients supported" },
];

const testimonials = [
  {
    quote:
      "Heart to Heart's presentation helped our students understand invisible illnesses in a way textbooks never could.",
    name: "Educator",
    role: "High school teacher",
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
            <StatsRow stats={stats} bordered={false} />
          </div>
        </section>

        <section className="section-padding">
          <div className="container-full">
            <SectionHeading title="What people say" />
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
            <SectionHeading title="Event photos" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="relative aspect-square bg-[var(--color-line)]">
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
