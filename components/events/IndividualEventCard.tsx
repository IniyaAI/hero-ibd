import { Button } from "@/components/ui/Button";
import { EventImagePanel } from "@/components/events/EventImagePanel";
import { ImpactChips } from "@/components/events/ImpactChips";
import type { IndividualEvent } from "@/lib/events-content";

type IndividualEventCardProps = {
  event: IndividualEvent;
  uniformHeight?: boolean;
};

export function IndividualEventCard({ event, uniformHeight = false }: IndividualEventCardProps) {
  const showImage = event.images !== undefined;
  const shouldStretch = uniformHeight && showImage;

  return (
    <article
      className={`group flex w-full flex-col overflow-hidden rounded-[18px] border border-[var(--color-line)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        shouldStretch ? "h-full" : ""
      }`}
    >
      {showImage && (
        <EventImagePanel
          primaryImage={event.images?.primary}
          secondaryImage={event.images?.secondary}
        />
      )}

      <div className={`flex flex-col p-5 md:p-6 ${shouldStretch ? "flex-1" : ""}`}>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[var(--color-wash)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-plum-muted)]">
            {event.category}
          </span>
          {event.parentCampaign && (
            <span
              className="max-w-full truncate rounded-full border border-[color-mix(in_srgb,var(--color-lavender)_40%,var(--color-line))] bg-[color-mix(in_srgb,var(--color-lavender)_8%,white)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--color-lavender-deep)]"
              title={event.parentCampaign}
            >
              {event.parentCampaign}
            </span>
          )}
        </div>

        {event.date && (
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-plum-muted)]">
            {event.date}
          </p>
        )}

        <h3 className="text-lg font-semibold text-[var(--color-plum)]">{event.title}</h3>

        {event.beneficiary && (
          <p className="mt-1.5 text-xs font-medium text-[var(--color-lavender-deep)]">
            Beneficiary: {event.beneficiary}
          </p>
        )}

        {event.location && (
          <p className="mt-1 text-xs text-[var(--color-coral-deep)]">{event.location}</p>
        )}

        <p
          className={`mt-2 text-sm leading-relaxed text-[var(--color-plum-light)] ${
            shouldStretch ? "flex-1" : ""
          }`}
        >
          {event.description}
        </p>

        {event.guests && event.guests.length > 0 && (
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-plum-muted)]">
              Featured guests
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {event.guests.map((name) => (
                <li
                  key={name}
                  className="rounded-full bg-[var(--color-wash)] px-2.5 py-1 text-xs font-medium text-[var(--color-plum)]"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.milestones && event.milestones.length > 0 && (
          <ol className="relative mt-4 space-y-0 border-l-2 border-[var(--color-lavender)] pl-4">
            {event.milestones.map((milestone) => (
              <li key={milestone} className="relative pb-4 pl-1 text-sm text-[var(--color-plum)] last:pb-0">
                {milestone}
              </li>
            ))}
          </ol>
        )}

        {event.impactMetrics && event.impactMetrics.length > 0 && (
          <ImpactChips chips={event.impactMetrics} />
        )}

        {event.link && (
          <div className="mt-4 flex flex-wrap gap-2 pt-1">
            <Button href={event.link.href} external={event.link.external} variant="outline" size="sm">
              {event.link.label}
            </Button>
          </div>
        )}

        {event.links && event.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2 pt-1">
            {event.links.map((action) => (
              <Button
                key={`${action.label}-${action.href}`}
                href={action.href}
                external={action.external}
                variant="outline"
                size="sm"
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
