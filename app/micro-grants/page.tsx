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
          title="Micro-grant application"
          description="Need-based financial assistance for medical and health-related challenges."
        />

        <section className="section-padding">
          <div className="container-full max-w-2xl space-y-8 text-[var(--color-plum-light)] leading-relaxed">
            <p>
              The Heart to Heart Micro-Grant Program provides small, need-based financial
              assistance to individuals facing medical and health-related challenges. While our
              mission is rooted in supporting those affected by chronic illnesses, we also extend
              support to others experiencing urgent healthcare-related financial need.
            </p>

            <p>
              Funding may be used for medical care, supplies, transportation, wellness support,
              medical procedures, and other health-related needs. Maximum award:{" "}
              <strong className="text-[var(--color-plum)]">$500</strong>.
            </p>

            <div>
              <h2 className="text-base font-semibold text-[var(--color-plum)] mb-2">
                Pilot program partnership
              </h2>
              <p className="text-sm">
                Currently launched in partnership with Children&apos;s Health. We plan to expand
                to additional hospitals across the DFW area.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[var(--color-plum)] mb-2">
                Eligibility and referral requirements
              </h2>
              <ul className="text-sm space-y-2 list-disc pl-5">
                <li>Direct referrals only from social work teams or care coordinators at DFW hospitals</li>
                <li>Self-referrals are not accepted</li>
              </ul>
              <p className="text-sm font-medium text-[var(--color-plum)] mt-4 mb-2">
                Applications must include:
              </p>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>Name of referring social worker or care coordinator</li>
                <li>Hospital or healthcare system overseeing care</li>
                <li>Department or unit (if applicable)</li>
                <li>Contact information for verification</li>
              </ul>
            </div>

            <div>
              <h2 className="text-base font-semibold text-[var(--color-plum)] mb-2">
                Important information
              </h2>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>Grants are limited and awarded based on need and available funding</li>
                <li>Submission does not guarantee funding</li>
                <li>Applications are reviewed within 7-14 days</li>
                <li>All information is kept strictly confidential</li>
              </ul>
            </div>

            <Button href="mailto:npo.heart2heart@gmail.com?subject=Micro-Grant%20Referral">
              Submit referral via email
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
