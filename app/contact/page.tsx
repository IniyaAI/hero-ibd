import { Instagram } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/ui/ContactForm";
import { PAGE_HEADERS, SITE } from "@/lib/site-content";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader {...PAGE_HEADERS.contact} />

        <section className="section-padding">
          <div className="container-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-sm">
              <div>
                <p className="text-[var(--color-plum-muted)] mb-1">Email</p>
                <a href={`mailto:${SITE.email}`} className="text-[var(--color-plum)] hover:text-[var(--color-coral)]">
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="text-[var(--color-plum-muted)] mb-1">Instagram</p>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-plum)] hover:text-[var(--color-coral)]"
                >
                  <Instagram size={15} />
                  {SITE.instagramHandle}
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
