import { FadeIn } from "@/components/programs/FadeIn";
import { SpeakerEventCard } from "@/components/programs/SpeakerEventCard";
import { PROGRAM_CARD_WIDTH } from "@/components/programs/programCardLayout";
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

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:flex-wrap">
          {GUEST_SPEAKER_EVENTS.map((event, index) => (
            <div key={event.id} className={PROGRAM_CARD_WIDTH}>
              <SpeakerEventCard event={event} delay={index * 0.08} />
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
