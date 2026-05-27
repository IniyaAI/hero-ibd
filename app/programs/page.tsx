import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

function ProgramBlock({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section-padding border-b border-[var(--color-border-light)] scroll-mt-28">
      <div className="container-wide">
        <div className="accent-line mb-5" />
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--color-navy)] mb-3">
          {title}
        </h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mb-10">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Programs"
          description="Our work is organized around three pillars: Support, Education, and Awareness."
        />

        <ProgramBlock
          id="support"
          title="Support"
          description="Providing essential resources and financial assistance to individuals and families affected by chronic illnesses."
        >
          <div className="space-y-10">
            <div>
              <h3 className="text-base font-semibold text-[var(--color-navy)] mb-4">Fundraisers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card-medical p-5">
                  <p className="font-semibold text-[var(--color-navy)]">Charity Pickleball Tournament</p>
                  <p className="text-sm font-bold text-[var(--color-coral)] mt-1 tabular-nums">$700 to CCF</p>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                    Proceeds donated to the Crohn&apos;s & Colitis Foundation with CUTX sponsorship.
                  </p>
                </div>
                <div className="card-medical p-5">
                  <p className="font-semibold text-[var(--color-navy)]">Chicken N Pickle Giveback Night</p>
                  <p className="text-sm text-[var(--color-text-muted)] mt-2">Details coming soon</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-[var(--color-navy)] mb-4">Donation Drives</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="relative aspect-video rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)]">
                  <Image
                    src="https://picsum.photos/seed/toy-donation/800/450"
                    alt="Toy donation drive"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="card-medical p-6">
                  <p className="text-3xl font-bold text-[var(--color-navy)] tabular-nums">100+</p>
                  <p className="text-sm font-semibold text-[var(--color-text-secondary)] mt-1">Toys Donated</p>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-3 leading-relaxed">
                    Donated to Children&apos;s Health to support hospitalized pediatric IBD patients.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-[var(--color-navy)] mb-4">Micro-Grants</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4 max-w-2xl">
                Small, need-based financial assistance for individuals facing medical and health-related challenges.
              </p>
              <Button href="/micro-grants">Apply for Micro-Grant</Button>
            </div>
          </div>
        </ProgramBlock>

        <ProgramBlock
          id="education"
          title="Education"
          description="Delivering clear, accessible information about chronic illnesses to improve understanding and early recognition."
        >
          <div className="space-y-8">
            <div className="card-medical p-6">
              <p className="font-semibold text-[var(--color-navy)]">
                Sports Inclusivity Seminar with Dr. Bhaskar Gurram
              </p>
              <p className="text-sm text-[var(--color-coral)] mt-1">Pediatric Gastroenterologist</p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-3">
                Informed over 65 people on navigating sports and physical activity with chronic digestive conditions.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-[var(--color-navy)] mb-3">School/Community Engagement</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
                Our upcoming program partners with cities and schools to deliver chronic illness education toolkits,
                community presentations, and awareness resources across the DFW area.
              </p>
            </div>
            <Button href="https://instagram.com/heart2heartnpo" external variant="outline">
              Follow on Instagram
            </Button>
          </div>
        </ProgramBlock>

        <ProgramBlock
          id="awareness"
          title="Awareness"
          description="Increasing visibility for chronic and often invisible illnesses through community campaigns and outreach."
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { seed: "community-booth", label: "Community Booths" },
              { seed: "heard-event", label: "HEARD School Events" },
              { seed: "guest-speaker", label: "Guest Speaker Event" },
              { seed: "pickleball-awareness", label: "Pickleball Tournament" },
              { seed: "proclamation", label: "City Proclamation" },
              { seed: "school-outreach", label: "School Outreach" },
            ].map((item) => (
              <div key={item.seed} className="card-medical overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={`https://picsum.photos/seed/${item.seed}/600/450`} alt={item.label} fill className="object-cover" />
                </div>
                <p className="p-3 text-xs font-semibold text-[var(--color-text-secondary)]">{item.label}</p>
              </div>
            ))}
          </div>
        </ProgramBlock>
      </main>
      <Footer />
    </>
  );
}
