import { Mail, Instagram } from "lucide-react";
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
          title="Contact Us"
          description="Questions about partnerships, volunteering, or our programs? We would love to hear from you."
        />

        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div className="space-y-4">
                <a
                  href="mailto:npo.heart2heart@gmail.com"
                  className="card-medical p-5 flex items-center gap-4 hover:border-[var(--color-lavender)]/50 transition-colors group"
                >
                  <div className="size-11 rounded-[var(--radius-sm)] bg-[var(--color-coral-soft)] flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-[var(--color-coral)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Email</p>
                    <p className="font-medium text-[var(--color-navy)] group-hover:text-[var(--color-coral)] transition-colors">
                      npo.heart2heart@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/heart2heartnpo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-medical p-5 flex items-center gap-4 hover:border-[var(--color-lavender)]/50 transition-colors group"
                >
                  <div className="size-11 rounded-[var(--radius-sm)] bg-[var(--color-lavender-soft)] flex items-center justify-center shrink-0">
                    <Instagram size={20} className="text-[var(--color-lavender)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wide">Instagram</p>
                    <p className="font-medium text-[var(--color-navy)] group-hover:text-[var(--color-lavender)] transition-colors">
                      @heart2heartnpo
                    </p>
                  </div>
                </a>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-navy)] mb-5">
                  Send an Inquiry
                </h2>
                <ContactForm subject="Website Inquiry" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
