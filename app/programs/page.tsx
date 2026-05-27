import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

function ProgramSection({
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
    <section id={id} className="section-padding border-b hairline scroll-mt-20 last:border-0">
      <div className="container-full">
        <h2 className="text-xl font-semibold text-[var(--color-plum)] mb-2">{title}</h2>
        <p className="text-[var(--color-plum-light)] mb-10 max-w-2xl leading-relaxed">{description}</p>
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
          description="Support, education, and awareness programs for chronic illness communities in DFW."
        />

        <ProgramSection
          id="support"
          title="Support"
          description="Resources and financial assistance for individuals and families affected by chronic illness."
        >
          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-plum)] mb-4">Fundraisers</h3>
              <ul className="space-y-4 text-sm">
                <li className="pb-4 border-b hairline">
                  <p className="font-medium text-[var(--color-plum)]">Charity Pickleball Tournament</p>
                  <p className="text-[var(--color-coral)] mt-1 tabular-nums">$700 to CCF</p>
                </li>
                <li>
                  <p className="font-medium text-[var(--color-plum)]">Chicken N Pickle Giveback Night</p>
                  <p className="text-[var(--color-plum-muted)] mt-1">Details coming soon</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-plum)] mb-4">Donation drives</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="relative aspect-[3/2] bg-[var(--color-line)]">
                  <Image src="https://picsum.photos/seed/toy-donation/800/450" alt="Toy donation" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-2xl font-semibold tabular-nums text-[var(--color-plum)]">100+</p>
                  <p className="text-sm text-[var(--color-plum-muted)] mt-1">Toys donated to Children&apos;s Health</p>
                  <p className="text-sm text-[var(--color-plum-light)] mt-3 leading-relaxed">
                    Supporting hospitalized pediatric IBD patients.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[var(--color-plum)] mb-3">Micro-grants</h3>
              <p className="text-sm text-[var(--color-plum-light)] mb-4 max-w-xl">
                Need-based financial assistance for medical and health-related challenges.
              </p>
              <Button href="/micro-grants" size="sm">Apply</Button>
            </div>
          </div>
        </ProgramSection>

        <ProgramSection
          id="education"
          title="Education"
          description="Accessible information to improve understanding and early recognition of chronic illness."
        >
          <div className="space-y-8">
            <div className="max-w-xl">
              <p className="font-medium text-[var(--color-plum)]">Sports Inclusivity Seminar</p>
              <p className="text-sm text-[var(--color-plum-muted)] mt-1">Dr. Bhaskar Gurram, pediatric gastroenterologist</p>
              <p className="text-sm text-[var(--color-plum-light)] mt-3">
                Informed over 65 people on sports and physical activity with chronic digestive conditions.
              </p>
            </div>
            <div>
              <p className="text-sm text-[var(--color-plum-light)] max-w-xl leading-relaxed">
                Our school and community engagement program delivers chronic illness education toolkits
                and presentations across the DFW area.
              </p>
            </div>
            <Button href="https://instagram.com/heart2heartnpo" external variant="outline" size="sm">
              Instagram
            </Button>
          </div>
        </ProgramSection>

        <ProgramSection
          id="awareness"
          title="Awareness"
          description="Community campaigns and outreach that reduce stigma around invisible illness."
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              { seed: "community-booth", label: "Community booths" },
              { seed: "heard-event", label: "HEARD school events" },
              { seed: "guest-speaker", label: "Guest speaker event" },
              { seed: "pickleball-awareness", label: "Pickleball tournament" },
              { seed: "proclamation", label: "City proclamation" },
              { seed: "school-outreach", label: "School outreach" },
            ].map((item) => (
              <figure key={item.seed}>
                <div className="relative aspect-[4/3] bg-[var(--color-line)]">
                  <Image src={`https://picsum.photos/seed/${item.seed}/600/450`} alt={item.label} fill className="object-cover" />
                </div>
                <figcaption className="text-xs text-[var(--color-plum-muted)] mt-2">{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </ProgramSection>
      </main>
      <Footer />
    </>
  );
}
