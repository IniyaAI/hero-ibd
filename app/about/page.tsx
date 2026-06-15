import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ABOUT_STORY } from "@/lib/site-content";

const founders = [
  {
    name: "Aashritha I.",
    title: "Co-Founder & President",
    image: "/images/founders/aashritha.jpg",
  },
  {
    name: "Srihitha P.",
    title: "Co-Founder",
    image: "/images/founders/srihita.jpg",
  },
];

const team = [
  {
    name: "Iniya R.",
    title: "Chief Technology Officer",
    image: "/images/team/iniya.png",
    imageClassName: "object-cover object-[center_10%]",
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
            <h2 className="font-brand text-lg font-bold text-[var(--color-plum)] mb-2">Our team</h2>
            <p className="text-sm text-[var(--color-plum-muted)] mb-8">Founders</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl">
              {founders.map((founder) => (
                <article key={founder.name} className="grid grid-cols-[96px_1fr] gap-5">
                  <div className="relative size-24 shrink-0 overflow-hidden border hairline bg-[var(--color-line)]">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-[var(--color-plum)]">{founder.name}</h3>
                    <p className="mt-1 text-sm text-[var(--color-coral-deep)]">{founder.title}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="text-sm text-[var(--color-plum-muted)] mt-10 mb-8">Team</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl">
              {team.map((member) => (
                <article key={member.name} className="grid grid-cols-[96px_1fr] gap-5">
                  <div className="relative size-24 shrink-0 overflow-hidden border hairline bg-[var(--color-line)]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={member.imageClassName ?? "object-cover"}
                      sizes="96px"
                    />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-[var(--color-plum)]">{member.name}</h3>
                    <p className="mt-1 text-sm text-[var(--color-coral-deep)]">{member.title}</p>
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
