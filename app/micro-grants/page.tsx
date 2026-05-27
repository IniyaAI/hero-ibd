import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

export default function MicroGrantsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Micro-Grant Application"
          description="Small, need-based financial assistance for individuals facing medical and health-related challenges."
        />

        <section className="section-padding bg-white">
          <div className="container-wide max-w-2xl">
            <div className="space-y-8 text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                Thank you for your interest in the Heart to Heart Micro-Grant Program.
                While our mission is rooted in supporting those affected by chronic illnesses,
                we also extend support to others experiencing urgent healthcare-related financial need.
              </p>

              <p>
                Funding may be used for medical care, supplies, transportation, wellness support,
                medical procedures, and other health-related needs.
              </p>

              <div className="card-medical p-6">
                <p className="text-sm font-semibold text-[var(--color-navy)]">Maximum Award</p>
                <p className="text-3xl font-bold text-[var(--color-navy)] tabular-nums mt-1">$500</p>
                <p className="text-sm mt-2">Per award, based on need and available funding.</p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-navy)] mb-3">
                  Pilot Program Partnership
                </h2>
                <p className="text-sm">
                  Currently launched in partnership with Children&apos;s Health. We plan to expand
                  to additional hospitals and healthcare systems across the DFW area.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-navy)] mb-3">
                  Eligibility & Referral Requirements
                </h2>
                <ul className="space-y-2 text-sm list-none">
                  <li className="pl-4 border-l-2 border-[var(--color-coral)]/40">
                    Direct referrals only from social work teams or care coordinators within DFW hospitals.
                  </li>
                  <li className="pl-4 border-l-2 border-[var(--color-coral)]/40">
                    Self-referrals are not accepted.
                  </li>
                </ul>
                <p className="text-sm font-semibold text-[var(--color-navy)] mt-5 mb-2">
                  All applications must include:
                </p>
                <ul className="space-y-1.5 text-sm list-disc pl-5">
                  <li>Name of referring social worker or care coordinator</li>
                  <li>Hospital or healthcare system overseeing care</li>
                  <li>Department or unit (if applicable)</li>
                  <li>Contact information for verification</li>
                </ul>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-navy)] mb-3">
                  Important Information
                </h2>
                <ul className="space-y-1.5 text-sm list-disc pl-5">
                  <li>Grants are limited and awarded based on need and available funding</li>
                  <li>Submission does not guarantee funding</li>
                  <li>Applications are reviewed within 7-14 days</li>
                  <li>All information is kept strictly confidential</li>
                </ul>
              </div>

              <Button
                href="mailto:npo.heart2heart@gmail.com?subject=Micro-Grant%20Application%20Referral"
                variant="primary"
              >
                Submit Referral via Email
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
