import { Instagram } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/ui/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Contact"
          description="Questions about partnerships, volunteering, or our programs."
        />

        <section className="section-padding">
          <div className="container-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-[var(--color-plum-muted)] mb-1">Email</p>
                <a href="mailto:npo.heart2heart@gmail.com" className="text-[var(--color-plum)] hover:text-[var(--color-coral)]">
                  npo.heart2heart@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[var(--color-plum-muted)] mb-1">Instagram</p>
                <a
                  href="https://instagram.com/heart2heartnpo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-plum)] hover:text-[var(--color-coral)]"
                >
                  <Instagram size={15} />
                  @heart2heartnpo
                </a>
              </div>
            </div>

            <ContactForm subject="Website Inquiry" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
