import { FadeIn } from "@/components/programs/FadeIn";
import { SchoolCommunityEngagementCard } from "@/components/programs/SchoolCommunityEngagementCard";
import { PROGRAM_CARD_WIDTH } from "@/components/programs/programCardLayout";
import { SCHOOL_COMMUNITY_ENGAGEMENT } from "@/lib/programs-content";

export function SchoolCommunityEngagementHub() {
  return (
    <FadeIn delay={0.12}>
      <section>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[var(--color-plum)] md:text-2xl">
            {SCHOOL_COMMUNITY_ENGAGEMENT.title}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-plum-light)]">
            {SCHOOL_COMMUNITY_ENGAGEMENT.subtitle}
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:flex-wrap">
          <div className={PROGRAM_CARD_WIDTH}>
            <SchoolCommunityEngagementCard />
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
