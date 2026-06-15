import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site-content";

export default function MicroGrantsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Micro-grant application"
          description="Thank you for your interest in the Heart to Heart Micro-Grant Program!"
        />

        <section className="section-padding">
          <div className="container-full max-w-2xl space-y-8 text-[var(--color-plum-light)] leading-relaxed">
            <p>
              The Heart to Heart Micro-Grant Program provides small, need-based financial assistance
              to individuals facing medical and health-related challenges. While our mission is rooted
              in supporting those affected by chronic illnesses, we also extend support to others
              experiencing urgent healthcare-related financial need.
            </p>

            <p>
              Funding may be used for medical care, supplies, transportation, wellness support,
              medical procedures, and other health-related needs. At this time, micro-grants are
              limited to a maximum of{" "}
              <strong className="text-[var(--color-plum)]">$500 per award</strong>.
            </p>

            <div>
              <h2 className="text-base font-semibold text-[var(--color-plum)] mb-2">
                Pilot program partnership
              </h2>
              <p className="text-sm">
                This is a pilot program currently launched in partnership with Children&apos;s Health.
                We plan to expand to additional hospitals and healthcare systems across the DFW area
                in the future.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[var(--color-plum)] mb-2">
                Eligibility & referral requirements
              </h2>
              <p className="text-sm mb-3">
                At this time, we only accept direct referrals from social work teams or care
                coordinators within hospitals in the DFW area. Self-referrals are not accepted.
              </p>
              <p className="text-sm font-medium text-[var(--color-plum)] mb-2">
                All applications must include:
              </p>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>Name of referring social worker or care coordinator</li>
                <li>Hospital or healthcare system overseeing care</li>
                <li>Department or unit (if applicable)</li>
                <li>Contact information for verification</li>
              </ul>
              <p className="text-sm mt-3">
                Applications without proper referral details will not be reviewed.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[var(--color-plum)] mb-2">
                Important information
              </h2>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>Grants are limited and awarded based on need and available funding</li>
                <li>Submission does not guarantee funding</li>
                <li>Applications are reviewed within 7–14 days</li>
                <li>
                  All information is kept strictly confidential and used only for verification and
                  review
                </li>
              </ul>
            </div>

            <Button href={SITE.microGrantFormUrl} external>
              Application Form
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
