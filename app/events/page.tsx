"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

const upcomingEvents = [
  {
    title: "5K Walk/Run",
    date: "May 23, 2026",
    time: "More details coming soon",
    location: "DFW Area",
    description:
      "In partnership with the STAR Foundation for Athletic Recovery and PowerPlay. Supporting chronic illness awareness and athletic recovery.",
    registerUrl: "https://forms.gle/omnufq3TjZtp4ssH8",
  },
];

const pastEvents = [
  {
    title: "Charity Pickleball Tournament",
    date: "2025",
    image: "https://picsum.photos/seed/pickleball-past/800/500",
    metrics: [
      { label: "Raised", value: "$700" },
      { label: "Beneficiary", value: "CCF" },
      { label: "Sponsor", value: "CUTX" },
    ],
    description:
      "Community tournament raising funds for the Crohn's & Colitis Foundation.",
  },
  {
    title: "Sports Inclusivity Seminar",
    date: "2025",
    image: "https://picsum.photos/seed/seminar-past/800/500",
    metrics: [
      { label: "Attendees", value: "65+" },
      { label: "Speaker", value: "Dr. Gurram" },
    ],
    description:
      "Seminar with Pediatric Gastroenterologist Dr. Bhaskar Gurram on sports inclusivity.",
  },
  {
    title: "HEARD Awareness Campaign",
    date: "2024",
    image: "https://picsum.photos/seed/heard-past/800/500",
    metrics: [
      { label: "Reach", value: "1000s" },
      { label: "Type", value: "School Event" },
    ],
    description: "School-based awareness campaign for chronic illness education.",
  },
];

export default function EventsPage() {
  const [expandedPast, setExpandedPast] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Events"
          description="Join us at upcoming events or explore our past community impact."
        />

        <section className="section-padding bg-white">
          <div className="container-wide">
            <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-navy)] mb-6">
              Upcoming
            </h2>
            <div className="space-y-4 mb-16">
              {upcomingEvents.map((event) => (
                <article key={event.title} className="card-medical p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--color-navy)]">{event.title}</h3>
                      <p className="text-sm font-medium text-[var(--color-coral)] mt-1">{event.date}</p>
                    </div>
                    <Button href={event.registerUrl} external size="sm">
                      Register
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[var(--color-text-secondary)] mb-4">
                    <p><span className="font-semibold text-[var(--color-navy)]">Time:</span> {event.time}</p>
                    <p><span className="font-semibold text-[var(--color-navy)]">Location:</span> {event.location}</p>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{event.description}</p>
                </article>
              ))}
            </div>

            <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--color-navy)] mb-6">
              Past Events
            </h2>
            <div className="space-y-4">
              {pastEvents.map((event, index) => (
                <article key={event.title} className="card-medical overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setExpandedPast(expandedPast === index ? null : index)}
                    className="w-full text-left"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative sm:w-48 md:w-56 aspect-video sm:aspect-auto sm:min-h-[120px] shrink-0">
                        <Image src={event.image} alt={event.title} fill className="object-cover" />
                      </div>
                      <div className="p-5 flex-1 flex items-center justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-[var(--color-navy)]">{event.title}</h3>
                          <p className="text-sm text-[var(--color-text-muted)]">{event.date}</p>
                        </div>
                        <span className="text-xs font-semibold text-[var(--color-coral)] shrink-0">
                          {expandedPast === index ? "Hide" : "Details"}
                        </span>
                      </div>
                    </div>
                  </button>
                  {expandedPast === index && (
                    <div className="px-5 pb-5 border-t border-[var(--color-border-light)] pt-4">
                      <div className="flex flex-wrap gap-6 mb-3">
                        {event.metrics.map((m) => (
                          <div key={m.label}>
                            <p className="text-lg font-bold text-[var(--color-navy)] tabular-nums">{m.value}</p>
                            <p className="text-xs text-[var(--color-text-muted)]">{m.label}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-[var(--color-text-secondary)]">{event.description}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
