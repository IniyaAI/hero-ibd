import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ImpactStatsSection } from "@/components/impact/ImpactStatsSection";
import { ImpactTestimonialsSection } from "@/components/impact/ImpactTestimonialsSection";
import { ImpactEventGallery } from "@/components/impact/ImpactEventGallery";
import { IMPACT_STATS, PAGE_HEADERS } from "@/lib/site-content";

const IMPACT_PAGE_STATS = [
  { value: IMPACT_STATS[0].value, label: "People Reached" },
  { value: IMPACT_STATS[1].value, label: "Events Hosted" },
  { value: IMPACT_STATS[2].value, label: "Schools/Communities Engaged" },
  { value: IMPACT_STATS[3].value, label: "Raised" },
  { value: IMPACT_STATS[4].value, label: "Patients Supported" },
] as const;

export default function ImpactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader {...PAGE_HEADERS.impact} />
        <ImpactStatsSection stats={IMPACT_PAGE_STATS} />
        <ImpactTestimonialsSection />
        <ImpactEventGallery />
      </main>
      <Footer />
    </>
  );
}
