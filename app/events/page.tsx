import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site-content";

const upcomingEvents = [
  {
    title: "5K Walk/Run",
    date: "May 23, 2026",
    time: "More details coming soon",
    location: "DFW area",
    description:
      "In partnership with the STAR Foundation for Athletic Recovery and PowerPlay. Registration is open.",
    registerUrl: SITE.register5kUrl,
    photo: SITE.marathonPhotoUrl,
  },
];

const pastEventGalleries = [
  {
    title: "Charity Pickleball Tournament",
    date: "2025",
    description: "Fundraiser for the Crohn's & Colitis Foundation with CUTX sponsorship.",
    metrics: "Raised $700 · Beneficiary CCF · Sponsor CUTX",
    photos: [
      { src: "/images/events/pickleball-img_0394.jpg", alt: "Charity Pickleball Tournament" },
      { src: "/images/events/pickleball-img_0365.jpg", alt: "Pickleball tournament participants" },
      { src: "/images/events/pickleball-img_8297.jpg", alt: "Pickleball tournament community" },
    ],
  },
  {
    title: "Sports Inclusivity Seminar",
    date: "2025",
    description: "Seminar with Dr. Bhaskar Gurram on sports and chronic conditions.",
    metrics: "65+ attendees · Dr. Bhaskar Gurram",
    photos: [
      { src: "/images/programs/guest-speaker-img_3791.jpg", alt: "Sports Inclusivity Seminar" },
      { src: "/images/programs/guest-speaker-img_3788.jpg", alt: "Guest speaker event audience" },
      { src: "/images/programs/guest-speaker-fullsizerender.jpg", alt: "Guest speaker event" },
    ],
  },
  {
    title: "HEARD Awareness Campaign",
    date: "2024",
    description: "School-based chronic illness education campaign.",
    metrics: "School event",
    photos: [
      { src: "/images/awareness/school-fullsizerender.jpg", alt: "HEARD school event" },
      { src: "/images/awareness/school-img_0162.jpg", alt: "School awareness event" },
      { src: "/images/awareness/school-promotion.png", alt: "School promotion" },
    ],
  },
  {
    title: "Chicken N Pickle Giveback Night",
    date: "2025",
    description: "10% giveback night supporting Heart to Heart programs.",
    metrics: "Community fundraiser",
    photos: [{ src: "/images/programs/giveback-night.jpg", alt: "Chicken N Pickle Giveback Night" }],
  },
  {
    title: "Community awareness booths",
    date: "2024–2025",
    description: "Outreach booths connecting with the community about chronic illness.",
    metrics: "Multiple community events",
    photos: [
      { src: "/images/awareness/booth-1.jpg", alt: "Community awareness booth" },
      { src: "/images/awareness/booth-2.jpg", alt: "Community awareness booth" },
      { src: "/images/awareness/booth-3.jpg", alt: "Community awareness booth" },
      { src: "/images/awareness/booth-4.jpg", alt: "Community awareness booth" },
    ],
  },
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader title="Events" description="Upcoming registration and past community programs." />

        <section className="section-padding border-b hairline">
          <div className="container-full">
            <h2 className="text-lg font-semibold text-[var(--color-plum)] mb-6">Upcoming events</h2>
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10 mb-10 border-b hairline last:border-0 last:mb-0 last:pb-0"
              >
                <div className="relative aspect-[16/10] bg-[var(--color-line)]">
                  <Image src={event.photo} alt={`${event.title} photo`} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm text-[var(--color-plum-muted)] mb-1">{event.date}</p>
                  <h3 className="text-xl font-semibold text-[var(--color-plum)] mb-3">{event.title}</h3>
                  <p className="text-sm text-[var(--color-plum-light)] mb-4 max-w-prose">{event.description}</p>
                  <p className="text-sm text-[var(--color-plum-muted)] mb-6">
                    {event.time} · {event.location}
                  </p>
                  <Button href={event.registerUrl} external size="sm">
                    Register
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-padding bg-[var(--color-wash)]">
          <div className="container-full space-y-14">
            <div>
              <h2 className="text-lg font-semibold text-[var(--color-plum)] mb-2">Past events</h2>
              <p className="text-sm text-[var(--color-plum-light)] max-w-2xl">
                Photos from fundraisers, seminars, and community outreach across DFW.
              </p>
            </div>

            {pastEventGalleries.map((event) => (
              <article key={event.title}>
                <div className="mb-5">
                  <h3 className="font-semibold text-[var(--color-plum)]">{event.title}</h3>
                  <p className="text-sm text-[var(--color-plum-muted)] mt-1">
                    {event.date} · {event.metrics}
                  </p>
                  <p className="text-sm text-[var(--color-plum-light)] mt-2 max-w-2xl">{event.description}</p>
                </div>
                <ul
                  className={`grid gap-2 ${
                    event.photos.length === 1
                      ? "grid-cols-1 max-w-xl"
                      : event.photos.length === 2
                        ? "grid-cols-1 sm:grid-cols-2"
                        : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  }`}
                >
                  {event.photos.map((photo) => (
                    <li key={photo.src} className="relative aspect-[4/3] bg-[var(--color-line)] overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
