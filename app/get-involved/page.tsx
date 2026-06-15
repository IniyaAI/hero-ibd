import { Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/ContactForm";
import { DonateEmbed } from "@/components/ui/DonateEmbed";
import { DONATE_MESSAGE, FUND_USES, SITE } from "@/lib/site-content";

const involvementOptions = [
  {
    title: "Join as volunteer",
    description: "Help at events, donation drives, and community outreach.",
    href: "#contact",
  },
  {
    title: "Partner with us",
    description: "Collaborate on school programs and awareness campaigns in DFW.",
    href: "#contact",
  },
  {
    title: "Sponsor or donate",
    description: "Fund patient programs through event sponsorship or direct giving.",
    href: "#donate",
  },
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
              <article
                key={option.title}
                className="py-8 grid grid-cols-1 md:grid-cols-[220px_1fr_auto] gap-4 items-start"
              >
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
          <div className="container-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="max-w-xl">
                <h2 className="font-brand text-lg font-bold text-[var(--color-plum)] mb-3">Donate</h2>
                <p className="text-[var(--color-plum-light)] mb-8 leading-relaxed">{DONATE_MESSAGE}</p>
                <ul className="space-y-2 mb-8 text-sm text-[var(--color-plum-light)]">
                  {FUND_USES.map((item) => (
                    <li key={item} className="pl-4 border-l-2 border-[var(--color-line-strong)]">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button href={SITE.donateUrl} external>
                    Donate online
                  </Button>
                  <Button href={`mailto:${SITE.email}?subject=Donation%20Inquiry`} variant="outline">
                    <Mail size={15} />
                    Email us
                  </Button>
                </div>
              </div>
              <DonateEmbed />
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding scroll-mt-20">
          <div className="container-full max-w-lg">
            <h2 className="text-xl font-semibold text-[var(--color-plum)] mb-6">Inquiry form</h2>
            <ContactForm subject="Get Involved Inquiry" />
            <p className="mt-6 text-sm text-[var(--color-plum-muted)]">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-1.5 text-[var(--color-coral)] hover:underline"
              >
                <Mail size={14} />
                {SITE.email}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
