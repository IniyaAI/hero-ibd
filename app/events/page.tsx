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
    location: "DFW area",
    description:
      "In partnership with the STAR Foundation for Athletic Recovery and PowerPlay.",
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
    ],
    description: "Fundraiser for the Crohn's & Colitis Foundation.",
  },
  {
    title: "Sports Inclusivity Seminar",
    date: "2025",
    image: "https://picsum.photos/seed/seminar-past/800/500",
    metrics: [
      { label: "Attendees", value: "65+" },
      { label: "Speaker", value: "Dr. Gurram" },
    ],
    description: "Seminar with Dr. Bhaskar Gurram on sports and chronic conditions.",
  },
  {
    title: "HEARD Awareness Campaign",
    date: "2024",
    image: "https://picsum.photos/seed/heard-past/800/500",
    metrics: [{ label: "Type", value: "School event" }],
    description: "School-based chronic illness education campaign.",
  },
];

export default function EventsPage() {
  const [expandedPast, setExpandedPast] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader title="Events" description="Upcoming registration and past community programs." />

        <section className="section-padding">
          <div className="container-full">
            <h2 className="text-lg font-semibold text-[var(--color-plum)] mb-6">Upcoming</h2>
            {upcomingEvents.map((event) => (
              <article key={event.title} className="pb-10 mb-10 border-b hairline last:border-0 last:mb-0 last:pb-0">
                <p className="text-sm text-[var(--color-plum-muted)] mb-1">{event.date}</p>
                <h3 className="text-xl font-semibold text-[var(--color-plum)] mb-3">{event.title}</h3>
                <p className="text-sm text-[var(--color-plum-light)] mb-4 max-w-prose">{event.description}</p>
                <p className="text-sm text-[var(--color-plum-muted)] mb-6">
                  {event.time} · {event.location}
                </p>
                <Button href={event.registerUrl} external size="sm">Register</Button>
              </article>
            ))}

            <h2 className="text-lg font-semibold text-[var(--color-plum)] mb-6 mt-14">Past</h2>
            <div className="divide-y hairline border-t hairline">
              {pastEvents.map((event, index) => (
                <article key={event.title}>
                  <button
                    type="button"
                    onClick={() => setExpandedPast(expandedPast === index ? null : index)}
                    className="w-full py-6 flex items-center justify-between gap-4 text-left"
                  >
                    <div>
                      <h3 className="font-semibold text-[var(--color-plum)]">{event.title}</h3>
                      <p className="text-sm text-[var(--color-plum-muted)]">{event.date}</p>
                    </div>
                    <span className="text-sm text-[var(--color-coral)] shrink-0">
                      {expandedPast === index ? "Close" : "Details"}
                    </span>
                  </button>
                  {expandedPast === index && (
                    <div className="pb-6 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
                      <div className="relative aspect-[3/2] bg-[var(--color-line)]">
                        <Image src={event.image} alt={event.title} fill className="object-cover" />
                      </div>
                      <div>
                        <dl className="flex flex-wrap gap-x-8 gap-y-2 mb-4 text-sm">
                          {event.metrics.map((m) => (
                            <div key={m.label}>
                              <dt className="text-[var(--color-plum-muted)]">{m.label}</dt>
                              <dd className="font-semibold text-[var(--color-plum)] tabular-nums">{m.value}</dd>
                            </div>
                          ))}
                        </dl>
                        <p className="text-sm text-[var(--color-plum-light)]">{event.description}</p>
                      </div>
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
