import { FadeIn } from "@/components/programs/FadeIn";
import { PodcastSeriesCard } from "@/components/programs/PodcastSeriesCard";
import { PROGRAM_CARD_WIDTH } from "@/components/programs/programCardLayout";
import { PATIENT_STORY_PODCAST_HUB, PODCAST_SERIES } from "@/lib/programs-content";

export function PatientStoryPodcastHub() {
  return (
    <FadeIn>
      <section>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[var(--color-plum)] md:text-2xl">
            {PATIENT_STORY_PODCAST_HUB.title}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-plum-light)]">
            {PATIENT_STORY_PODCAST_HUB.subtitle}
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:flex-wrap">
          {PODCAST_SERIES.map((series, index) => (
            <div key={series.id} className={PROGRAM_CARD_WIDTH}>
              <PodcastSeriesCard series={series} delay={index * 0.08} />
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
