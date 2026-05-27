import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";

const founders = [
  {
    name: "Founder Name",
    title: "Co-Founder & President",
    bio: "Leads Heart to Heart's mission to support those affected by chronic illness through community health advocacy.",
    image: "https://picsum.photos/seed/founder-1/400/400",
  },
  {
    name: "Founder Name",
    title: "Co-Founder & Vice President",
    bio: "Focuses on education and outreach programs that break stigma around invisible illnesses.",
    image: "https://picsum.photos/seed/founder-2/400/400",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="About us"
          description="Heart to Heart was founded by students who saw how chronic illnesses remain unheard, stigmatized, and under-supported."
        />

        <section className="section-padding">
          <div className="container-full max-w-2xl">
            <div className="space-y-5 text-[var(--color-plum-light)] text-pretty leading-relaxed">
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

        <section className="section-padding bg-[var(--color-wash)] border-t hairline">
          <div className="container-full">
            <h2 className="font-brand text-xl font-bold text-[var(--color-plum)] mb-8">Our team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl">
              {founders.map((founder) => (
                <article key={founder.title} className="grid grid-cols-[96px_1fr] gap-5">
                  <div className="relative size-24 shrink-0">
                    <Image src={founder.image} alt={founder.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-plum)]">{founder.name}</h3>
                    <p className="text-sm text-[var(--color-coral-deep)] mt-0.5 mb-2">{founder.title}</p>
                    <p className="text-sm text-[var(--color-plum-light)] leading-relaxed">{founder.bio}</p>
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
