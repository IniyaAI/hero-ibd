import { FadeIn } from "@/components/programs/FadeIn";
import { PodcastSeriesCard } from "@/components/programs/PodcastSeriesCard";
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-4xl">
          {PODCAST_SERIES.map((series, index) => (
            <PodcastSeriesCard key={series.id} series={series} delay={index * 0.08} />
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
