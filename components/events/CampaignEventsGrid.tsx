import { IndividualEventCard } from "@/components/events/IndividualEventCard";
import { EVENTS_CARD_GRID, EVENTS_SECTION_STACK } from "@/components/events/events-layout";
import type { Campaign, IndividualEvent } from "@/lib/events-content";

type CampaignEventsGridProps = {
  campaign: Campaign;
  events: IndividualEvent[];
};

function SickleCellCampaignLayout({ events }: { events: IndividualEvent[] }) {
  const hub = events.find((e) => e.id === "sickle-cell-information-hub");
  const survey = events.find((e) => e.id === "sickle-cell-community-survey");
  const fundraiser = events.find((e) => e.id === "sickle-cell-fundraiser");
  const rightColumnEvents = [survey, fundraiser].filter(Boolean) as IndividualEvent[];

  if (hub && rightColumnEvents.length > 0) {
    return (
      <div className={EVENTS_CARD_GRID}>
        <IndividualEventCard event={hub} uniformHeight />
        <div className={EVENTS_SECTION_STACK}>
          {rightColumnEvents.map((event) => (
            <IndividualEventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={EVENTS_CARD_GRID}>
      {events.map((event) => (
        <IndividualEventCard key={event.id} event={event} uniformHeight />
      ))}
    </div>
  );
}

export function CampaignEventsGrid({ campaign, events }: CampaignEventsGridProps) {
  if (campaign.id === "sickle-cell-campaign") {
    return <SickleCellCampaignLayout events={events} />;
  }

  const isBloom = campaign.id === "bloom-campaign";

  return (
    <div className={`${EVENTS_CARD_GRID} ${isBloom ? "md:items-stretch" : ""}`}>
      {events.map((event) => (
        <IndividualEventCard key={event.id} event={event} uniformHeight={isBloom} />
      ))}
    </div>
  );
}
