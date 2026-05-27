import { Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/ContactForm";

const involvementOptions = [
  {
    title: "Volunteer",
    description: "Help at events, donation drives, and community outreach.",
    href: "#contact",
  },
  {
    title: "Partner",
    description: "Collaborate on school programs and awareness campaigns in DFW.",
    href: "#contact",
  },
  {
    title: "Sponsor or donate",
    description: "Fund patient programs through event sponsorship or direct giving.",
    href: "#donate",
  },
];

const fundUses = [
  "Program materials and outreach events",
  "Support initiatives and micro-grants",
  "Educational resources and toolkits",
  "Community engagement activities",
];

export default function GetInvolvedPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Get involved"
          description="Time, partnership, or funding all help us reach more people affected by chronic illness."
        />

        <section className="section-padding">
          <div className="container-full divide-y hairline border-t border-b hairline">
            {involvementOptions.map((option) => (
              <article key={option.title} className="py-8 grid grid-cols-1 md:grid-cols-[200px_1fr_auto] gap-4 items-start">
                <h3 className="font-semibold text-[var(--color-plum)]">{option.title}</h3>
                <p className="text-[var(--color-plum-light)] text-sm leading-relaxed">{option.description}</p>
                <Button href={option.href} variant="outline" size="sm">
                  Learn more
                </Button>
              </article>
            ))}
          </div>
        </section>

        <section id="donate" className="section-padding bg-[var(--color-wash)] scroll-mt-20 border-t hairline">
          <div className="container-full max-w-2xl">
            <h2 className="font-brand text-lg font-bold text-[var(--color-plum)] mb-3">Donate</h2>
            <p className="text-[var(--color-plum-light)] mb-8 leading-relaxed">
              100% of your donation goes directly to programs supporting patients,
              research, and advocacy. Never to personal profit.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-[var(--color-plum-light)]">
              {fundUses.map((item) => (
                <li key={item} className="pl-4 border-l-2 border-[var(--color-line-strong)]">{item}</li>
              ))}
            </ul>
            <Button href="mailto:npo.heart2heart@gmail.com?subject=Donation%20Inquiry">
              Donate via email
            </Button>
          </div>
        </section>

        <section id="contact" className="section-padding scroll-mt-20">
          <div className="container-full max-w-lg">
            <h2 className="text-xl font-semibold text-[var(--color-plum)] mb-6">Contact us</h2>
            <ContactForm subject="Get Involved Inquiry" />
            <p className="mt-6 text-sm text-[var(--color-plum-muted)]">
              <a href="mailto:npo.heart2heart@gmail.com" className="inline-flex items-center gap-1.5 text-[var(--color-coral)] hover:underline">
                <Mail size={14} />
                npo.heart2heart@gmail.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
