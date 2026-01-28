import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Users, Gift, MapPin, Eye, Heart } from 'lucide-react';

const EventCard = ({ 
  title, 
  date, 
  stat, 
  statLabel, 
  icon: Icon, 
  location 
}: { 
  title: string; 
  date: string; 
  stat: string; 
  statLabel: string; 
  icon: any; 
  location?: string;
}) => (
  <div className="sketch-card p-8 hover:scale-105 transition-transform">
    <div className="flex items-start gap-4 mb-6">
      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-3xl font-bold text-primary mb-2 font-heading">{title}</h3>
        <div className="flex items-center gap-2 text-text/70 font-body text-lg mb-2">
          <Calendar className="w-5 h-5" />
          <span>{date}</span>
        </div>
        {location && (
          <div className="flex items-center gap-2 text-text/70 font-body text-lg mb-4">
            <MapPin className="w-5 h-5" />
            <span>{location}</span>
          </div>
        )}
      </div>
    </div>
    <div className="border-t border-primary/20 pt-4">
      <div className="text-center">
        <p className="text-4xl font-bold text-primary mb-1 font-heading">{stat}</p>
        <p className="text-text font-body text-xl">{statLabel}</p>
      </div>
    </div>
  </div>
);

const FutureEventCard = ({ 
  title, 
  date, 
  stat, 
  statLabel, 
  icon: Icon,
  scheduled 
}: { 
  title: string; 
  date: string; 
  stat?: string; 
  statLabel?: string; 
  icon: any;
  scheduled?: boolean;
}) => (
  <div className="sketch-card p-8 hover:scale-105 transition-transform">
    <div className="flex items-start gap-4 mb-6">
      <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-8 h-8 text-secondary" />
      </div>
      <div className="flex-1">
        <h3 className="text-3xl font-bold text-primary mb-2 font-heading">{title}</h3>
        <div className="flex items-center gap-2 text-text/70 font-body text-lg mb-2">
          <Calendar className="w-5 h-5" />
          <span>{date}</span>
        </div>
        {scheduled && (
          <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold font-heading">
            SCHEDULED
          </span>
        )}
      </div>
    </div>
    {stat && statLabel && (
      <div className="border-t border-primary/20 pt-4">
        <div className="text-center">
          <p className="text-4xl font-bold text-primary mb-1 font-heading">{stat}</p>
          <p className="text-text font-body text-xl">{statLabel}</p>
        </div>
      </div>
    )}
  </div>
);

export default function EventsPage() {
  const pastEvents = [
    {
      title: "Social Media Outreach",
      date: "October 2024 - Present",
      stat: "204,463+",
      statLabel: "VIEWS AND INTERACTIONS",
      icon: Eye,
    },
    {
      title: "School Outreach",
      date: "October 2025",
      stat: "130+",
      statLabel: "CARDS MADE",
      icon: Heart,
    },
    {
      title: "Toy Donation Drive",
      date: "November 2025 - December 2025",
      stat: "65+",
      statLabel: "TOYS DONATED",
      icon: Gift,
    },
    {
      title: "IBD Awareness Week Proclamation",
      date: "Issued first week of December 2025",
      stat: "CELINA",
      statLabel: "CITY-WIDE EVENT",
      icon: MapPin,
      location: "Celina, TX",
    },
    {
      title: "IBD Awareness Booths",
      date: "December 2025",
      stat: "50+",
      statLabel: "PARTICIPANTS",
      icon: Users,
    },
  ];

  const futureEvents = [
    {
      title: "Crohn's & Colitis Foundation Newsletter",
      date: "January 28, 2026",
      stat: "10,000",
      statLabel: "VIEWS",
      icon: Eye,
    },
    {
      title: "Infographic & Brochure Distribution",
      date: "January 29, 2026",
      icon: Users,
    },
    {
      title: "Hearts of Hope: IBD Awareness Wall",
      date: "January 30, 2026",
      scheduled: true,
      icon: Heart,
    },
    {
      title: "IBD Webinar w/ Pediatrician",
      date: "February 1, 2026",
      scheduled: true,
      icon: Users,
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden pt-0">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-paper/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-wider uppercase text-lg mb-2 block font-heading rotate-[-1deg]">Our Events</span>
            <h1 className="text-7xl font-bold text-primary font-heading mb-4">
              Past & Upcoming Events
            </h1>
            <p className="text-text text-xl font-body max-w-2xl mx-auto">
              See what we've accomplished and what's coming next in our mission to support pediatric IBD.
            </p>
          </div>

          {/* Past Events */}
          <div className="mb-24">
            <h2 className="text-5xl font-bold text-primary mb-12 font-heading text-center">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  stat={event.stat}
                  statLabel={event.statLabel}
                  icon={event.icon}
                  location={event.location}
                />
              ))}
            </div>
          </div>

          {/* Future Events */}
          <div>
            <h2 className="text-5xl font-bold text-primary mb-12 font-heading text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {futureEvents.map((event, index) => (
                <FutureEventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  stat={event.stat}
                  statLabel={event.statLabel}
                  icon={event.icon}
                  scheduled={event.scheduled}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
