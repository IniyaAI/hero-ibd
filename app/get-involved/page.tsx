import { Mail, Users, Handshake, Heart, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/ContactForm";

const involvementOptions = [
  {
    icon: Users,
    title: "Volunteer",
    description: "Help at events, support donation drives, and assist with community outreach.",
    href: "#contact",
  },
  {
    icon: Handshake,
    title: "Partner",
    description: "Collaborate on school programs, community campaigns, and awareness initiatives.",
    href: "#contact",
  },
  {
    icon: Heart,
    title: "Sponsor or Donate",
    description: "Support our mission through event sponsorship or direct donations.",
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
          title="Get Involved"
          description="Every contribution of time, partnership, or funding helps us reach more people affected by chronic illness."
        />

        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {involvementOptions.map((option) => (
                <article key={option.title} className="card-medical p-6 flex flex-col">
                  <div className="size-10 rounded-[var(--radius-sm)] bg-[var(--color-coral-soft)] flex items-center justify-center mb-4">
                    <option.icon size={20} className="text-[var(--color-coral)]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--color-navy)] mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1 mb-5">
                    {option.description}
                  </p>
                  <Button href={option.href} variant="outline" size="sm">
                    Learn More
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="donate" className="section-padding bg-[var(--color-subtle)] scroll-mt-28">
          <div className="container-wide max-w-2xl mx-auto text-center">
            <div className="accent-line-center mb-5" />
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--color-navy)] mb-3">
              Donate
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              100% of your donation goes directly to programs supporting patients,
              research, and advocacy. Never to personal profit.
            </p>
            <div className="card-medical p-6 text-left mb-8">
              <ul className="space-y-2">
                {fundUses.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle2 size={15} className="text-[var(--color-coral)] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Button href="mailto:npo.heart2heart@gmail.com?subject=Donation%20Inquiry" variant="primary">
              Donate via Email
            </Button>
          </div>
        </section>

        <section id="contact" className="section-padding bg-white scroll-mt-28">
          <div className="container-wide max-w-xl mx-auto">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--color-navy)] mb-6 text-center">
              Contact Us
            </h2>
            <ContactForm subject="Get Involved Inquiry" />
            <p className="mt-6 text-center">
              <a href="mailto:npo.heart2heart@gmail.com" className="inline-flex items-center gap-2 text-sm text-[var(--color-coral)] font-medium hover:underline">
                <Mail size={15} />
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
