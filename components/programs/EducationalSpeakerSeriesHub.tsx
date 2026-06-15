import { FadeIn } from "@/components/programs/FadeIn";
import { SpeakerEventCard } from "@/components/programs/SpeakerEventCard";
import { EDUCATIONAL_SPEAKER_SERIES, GUEST_SPEAKER_EVENTS } from "@/lib/programs-content";

export function EducationalSpeakerSeriesHub() {
  return (
    <FadeIn delay={0.08}>
      <section>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-[var(--color-plum)] md:text-2xl">
            {EDUCATIONAL_SPEAKER_SERIES.title}
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-plum-light)]">
            {EDUCATIONAL_SPEAKER_SERIES.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {GUEST_SPEAKER_EVENTS.map((event, index) => (
            <SpeakerEventCard key={event.id} event={event} delay={index * 0.08} />
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
