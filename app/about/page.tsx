import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";

const founders = [
  {
    name: "Founder Name",
    title: "Co-Founder & President",
    bio: "Passionate about medicine and community health advocacy, leading Heart to Heart's mission to support those affected by chronic illness.",
    image: "https://picsum.photos/seed/founder-1/400/400",
  },
  {
    name: "Founder Name",
    title: "Co-Founder & Vice President",
    bio: "Dedicated to breaking stigma around invisible illnesses through storytelling, education, and youth-led outreach programs.",
    image: "https://picsum.photos/seed/founder-2/400/400",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="About Us"
          description="Heart to Heart was founded by students who saw firsthand how chronic illnesses remain unheard, stigmatized, and under-supported."
        />

        <section className="section-padding bg-white">
          <div className="container-wide max-w-3xl">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-navy)] mb-6">
              Our Story
            </h2>
            <div className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed text-pretty">
              <p>
                Heart to Heart was born from our passion for helping others and our
                growing interest in medicine. Early on, we were drawn to understanding
                how diseases affect people&apos;s lives, which led us to lead HOSA
                community awareness campaigns on sickle cell disease, endometriosis,
                and pediatric IBD.
              </p>
              <p>
                These experiences revealed how many illnesses remain unheard,
                stigmatized, and lacking proper awareness or support, leaving patients
                struggling to get diagnosed. Through personal stories, conversations,
                and podcast episodes, we witnessed firsthand the challenges patients
                and families face when conditions go unnoticed or misunderstood.
              </p>
              <p>
                We realized that awareness alone isn&apos;t enough; people need real
                support, education, and connection. Building on initiatives like BLOOM
                and Heroes for IBD, we founded Heart to Heart, a student-led 501(c)(3)
                nonprofit empowering youth to create meaningful change through events,
                storytelling, and outreach programs that foster understanding, break
                stigma, and promote earlier diagnosis.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[var(--color-subtle)]">
          <div className="container-wide">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-navy)] mb-8 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {founders.map((founder) => (
                <article key={founder.title} className="card-medical overflow-hidden">
                  <div className="relative aspect-[4/3] max-h-56">
                    <Image src={founder.image} alt={founder.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-navy)]">
                      {founder.name}
                    </h3>
                    <p className="text-sm font-medium text-[var(--color-coral)] mt-0.5 mb-3">
                      {founder.title}
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {founder.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
