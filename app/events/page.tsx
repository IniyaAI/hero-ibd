import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventsHero } from "@/components/events/EventsHero";
import { UpcomingEventFeatured } from "@/components/events/UpcomingEventFeatured";
import { PastEventsArchive } from "@/components/events/PastEventsArchive";
import { EventsCTA } from "@/components/events/EventsCTA";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        <EventsHero />
        <UpcomingEventFeatured />
        <PastEventsArchive />
        <EventsCTA />
      </main>
      <Footer />
    </>
  );
}
