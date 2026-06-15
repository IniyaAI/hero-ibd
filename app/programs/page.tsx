import { BookOpen, Heart, Megaphone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { PillarNav } from "@/components/programs/PillarNav";
import { PillarSection } from "@/components/programs/PillarSection";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { FundraisersCard } from "@/components/programs/FundraisersCard";
import { DonationDrivesCard } from "@/components/programs/DonationDrivesCard";
import { PatientStoryPodcastHub } from "@/components/programs/PatientStoryPodcastHub";
import { EducationalSpeakerSeriesHub } from "@/components/programs/EducationalSpeakerSeriesHub";
import { SchoolCommunityEngagementCard } from "@/components/programs/SchoolCommunityEngagementCard";
import { AwarenessProgramsHub } from "@/components/programs/AwarenessProgramsHub";
import { ProgramsCTA } from "@/components/programs/ProgramsCTA";
import {
  AWARENESS_METRICS,
  AWARENESS_SECTION,
  EDUCATION_METRICS,
  SUPPORT_CARDS,
  SUPPORT_METRICS,
} from "@/lib/programs-content";

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Programs"
          description="Improving outcomes for individuals living with chronic illnesses through support, education, and awareness."
        />
        <PillarNav />

        <PillarSection
          id="support"
          icon={Heart}
          title="Support"
          description="Providing tangible resources and financial assistance to reduce the burden of chronic illness."
          metrics={SUPPORT_METRICS}
          background="white"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <FundraisersCard delay={0} />
            <DonationDrivesCard delay={0.08} />
            {SUPPORT_CARDS.map((card, index) => (
              <ProgramCard key={card.title} {...card} delay={(index + 2) * 0.08} />
            ))}
          </div>
        </PillarSection>

        <PillarSection
          id="education"
          icon={BookOpen}
          title="Education"
          description="Delivering accessible, expert-informed resources that improve understanding, early recognition, and long-term support."
          metrics={EDUCATION_METRICS}
          background="wash"
        >
          <div className="space-y-14">
            <PatientStoryPodcastHub />
            <EducationalSpeakerSeriesHub />

            <div className="max-w-xl">
              <SchoolCommunityEngagementCard delay={0.12} />
            </div>
          </div>
        </PillarSection>

        <PillarSection
          id="awareness"
          icon={Megaphone}
          title="Awareness"
          description={AWARENESS_SECTION.description}
          metrics={AWARENESS_METRICS}
          background="white"
        >
          <AwarenessProgramsHub />
        </PillarSection>

        <ProgramsCTA />
      </main>
      <Footer />
    </>
  );
}
