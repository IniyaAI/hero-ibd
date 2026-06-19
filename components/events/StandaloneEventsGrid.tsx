import { IndividualEventCard } from "@/components/events/IndividualEventCard";
import { EVENTS_CARD_GRID, EVENTS_SECTION_STACK } from "@/components/events/events-layout";
import type { IndividualEvent } from "@/lib/events-content";

type StandaloneEventsGridProps = {
  yearId: string;
  events: IndividualEvent[];
};

/** Full display order for 2025–2026 standalone events (left-to-right, top-to-bottom in 2-col grid) */
const STANDALONE_2025_DISPLAY_IDS = [
  "charity-pickleball-tournament",
  "hearts-of-hope-wall",
  "holiday-awareness-booth",
  "toy-donation-drive",
  "voices-of-ibd-podcast-series",
  "chicken-n-pickle-giveback",
  "ibd-sports-inclusivity-seminar",
  "community-advocacy-meetings",
  "hero-cards-station",
] as const;

const STANDALONE_2025_LEFT_IDS = [
  "charity-pickleball-tournament",
  "hearts-of-hope-wall",
  "holiday-awareness-booth",
  "toy-donation-drive",
] as const;

const STANDALONE_2025_RIGHT_IDS = [
  "voices-of-ibd-podcast-series",
  "chicken-n-pickle-giveback",
  "ibd-sports-inclusivity-seminar",
  "community-advocacy-meetings",
  "hero-cards-station",
] as const;

function sortByDisplayOrder(
  events: IndividualEvent[],
  order: readonly string[],
): IndividualEvent[] {
  return [...events].sort(
    (a, b) => order.indexOf(a.id) - order.indexOf(b.id),
  );
}

function eventsInColumnOrder(
  ids: readonly string[],
  events: IndividualEvent[],
): IndividualEvent[] {
  return ids
    .map((id) => events.find((event) => event.id === id))
    .filter((event): event is IndividualEvent => event !== undefined);
}

function Standalone20252026StackLayout({ events }: { events: IndividualEvent[] }) {
  const leftEvents = eventsInColumnOrder(STANDALONE_2025_LEFT_IDS, events);
  const rightEvents = eventsInColumnOrder(STANDALONE_2025_RIGHT_IDS, events);

  if (leftEvents.length === 0 && rightEvents.length === 0) {
    return null;
  }

  if (leftEvents.length === 0) {
    return (
      <div className={EVENTS_SECTION_STACK}>
        {rightEvents.map((event) => (
          <IndividualEventCard key={event.id} event={event} />
        ))}
      </div>
    );
  }

  if (rightEvents.length === 0) {
    return (
      <div className={EVENTS_SECTION_STACK}>
        {leftEvents.map((event) => (
          <IndividualEventCard key={event.id} event={event} />
        ))}
      </div>
    );
  }

  return (
    <div className={EVENTS_CARD_GRID}>
      <div className={EVENTS_SECTION_STACK}>
        {leftEvents.map((event) => (
          <IndividualEventCard key={event.id} event={event} />
        ))}
      </div>
      <div className={EVENTS_SECTION_STACK}>
        {rightEvents.map((event) => (
          <IndividualEventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

function Standalone20252026GridLayout({ events }: { events: IndividualEvent[] }) {
  const sorted = sortByDisplayOrder(events, STANDALONE_2025_DISPLAY_IDS);

  return (
    <div className={EVENTS_CARD_GRID}>
      {sorted.map((event) => (
        <IndividualEventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export function StandaloneEventsGrid({ yearId, events }: StandaloneEventsGridProps) {
  if (yearId === "2025-2026") {
    const hasAdvocacy = events.some((e) => e.id === "community-advocacy-meetings");
    const hasHero = events.some((e) => e.id === "hero-cards-station");

    // Balanced 2×2 (or N×2) grid when filtered subset — e.g. Outreach shows 4 cards
    if (!hasAdvocacy || !hasHero) {
      return <Standalone20252026GridLayout events={events} />;
    }

    return <Standalone20252026StackLayout events={events} />;
  }

  return (
    <div className={EVENTS_CARD_GRID}>
      {events.map((event) => (
        <IndividualEventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
