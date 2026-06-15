import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { PAGE_HEADERS, SITE } from "@/lib/site-content";

export default function MicroGrantsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader {...PAGE_HEADERS.microGrants} />

        <section className="pt-14 md:pt-20 pb-28 md:pb-32">
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
              <h2 className="mb-2 text-base font-semibold text-[var(--color-plum)]">
                Pilot program partnership
              </h2>
              <p className="text-sm">
                This is a pilot program currently launched in partnership with Children&apos;s Health.
                We plan to expand to additional hospitals and healthcare systems across the DFW area
                in the future.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-semibold text-[var(--color-plum)]">
                Eligibility & referral requirements
              </h2>
              <p className="mb-3 text-sm">
                At this time, we only accept direct referrals from social work teams or care
                coordinators within hospitals in the DFW area. Self-referrals are not accepted.
              </p>
              <p className="mb-2 text-sm font-medium text-[var(--color-plum)]">
                All applications must include:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm">
                <li>Name of referring social worker or care coordinator</li>
                <li>Hospital or healthcare system overseeing care</li>
                <li>Department or unit (if applicable)</li>
                <li>Contact information for verification</li>
              </ul>
              <p className="mt-3 text-sm">
                Applications without proper referral details will not be reviewed.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-semibold text-[var(--color-plum)]">
                Important information
              </h2>
              <ul className="list-disc space-y-1 pl-5 text-sm">
                <li>Grants are limited and awarded based on need and available funding</li>
                <li>Submission does not guarantee funding</li>
                <li>Applications are reviewed within 7–14 days</li>
                <li>
                  All information is kept strictly confidential and used only for verification and
                  review
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <Button href={SITE.microGrantFormUrl} external>
                Application form
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
