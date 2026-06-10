import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ABOUT_STORY } from "@/lib/site-content";

const founders = [
  {
    name: "Founder name",
    title: "Co-Founder & President",
    bio: "Add founder bio and photo when ready.",
    image: null as string | null,
  },
  {
    name: "Founder name",
    title: "Co-Founder & Vice President",
    bio: "Add founder bio and photo when ready.",
    image: null as string | null,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader title="About us" description="Our story and the team behind Heart to Heart." />

        <section className="section-padding">
          <div className="container-full max-w-3xl">
            <h2 className="font-brand text-lg font-bold text-[var(--color-plum)] mb-6">Our story</h2>
            <p className="text-[var(--color-plum-light)] text-pretty leading-relaxed">{ABOUT_STORY}</p>
          </div>
        </section>

        <section className="section-padding bg-[var(--color-wash)] border-t hairline">
          <div className="container-full">
            <h2 className="font-brand text-lg font-bold text-[var(--color-plum)] mb-8">Our team</h2>
            <p className="text-sm text-[var(--color-plum-muted)] mb-8">Founders</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl">
              {founders.map((founder) => (
                <article key={founder.title} className="grid grid-cols-[96px_1fr] gap-5">
                  <div className="relative size-24 shrink-0 bg-[var(--color-line)] border hairline">
                    {founder.image ? (
                      <Image src={founder.image} alt={founder.name} fill className="object-cover" />
                    ) : (
                      <div className="flex size-full items-center justify-center text-xs text-[var(--color-plum-muted)]">
                        Photo
                      </div>
                    )}
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
