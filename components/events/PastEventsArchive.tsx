"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import {
  ARCHIVE_FILTERS,
  SCHOOL_YEAR_ARCHIVES,
  getFilteredArchive,
  type ArchiveFilter,
} from "@/lib/events-content";
import { CampaignEventsGrid } from "@/components/events/CampaignEventsGrid";
import { StandaloneEventsGrid } from "@/components/events/StandaloneEventsGrid";
import { EVENTS_SECTION_STACK } from "@/components/events/events-layout";

export function PastEventsArchive() {
  const [filter, setFilter] = useState<ArchiveFilter>("all");
  const [search, setSearch] = useState("");
  const [expandedYears, setExpandedYears] = useState<Record<string, boolean>>({
    "2025-2026": true,
    "2024-2025": false,
    "2023-2024": false,
  });

  const filteredArchive = useMemo(
    () => getFilteredArchive(filter, search),
    [filter, search]
  );

  const toggleYear = (yearId: string) => {
    setExpandedYears((prev) => ({ ...prev, [yearId]: !prev[yearId] }));
  };

  const visibleYears = useMemo(() => {
    const idsWithContent = new Set(filteredArchive.map((r) => r.year.id));
    return SCHOOL_YEAR_ARCHIVES.filter((y) => idsWithContent.has(y.id));
  }, [filteredArchive]);

  return (
    <section id="past-events" className="scroll-mt-24 section-padding bg-[var(--color-wash)]">
      <div className="container-full">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold text-[var(--color-plum)] md:text-3xl">Past events archive</h2>
          <p className="mt-3 text-[var(--color-plum-light)]">
            Browse completed initiatives by year and campaign.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {ARCHIVE_FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === item.id
                    ? "bg-[var(--color-coral)] text-white shadow-sm"
                    : "border border-[var(--color-line-strong)] bg-white text-[var(--color-plum)] hover:border-[var(--color-lavender)]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <label className="relative block w-full lg:max-w-xs">
            <span className="sr-only">Search events by title</span>
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-plum-muted)]"
              aria-hidden
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by event title…"
              className="w-full rounded-2xl border border-[var(--color-line-strong)] bg-white py-2.5 pl-10 pr-4 text-sm text-[var(--color-plum)] placeholder:text-[var(--color-plum-muted)] focus:border-[var(--color-lavender)] focus:outline-none focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-lavender)_35%,transparent)]"
            />
          </label>
        </div>

        <div className="space-y-4">
          {visibleYears.length === 0 ? (
            <p className="rounded-2xl border hairline bg-white px-6 py-10 text-center text-sm text-[var(--color-plum-muted)]">
              No events match your filters. Try adjusting the category or search term.
            </p>
          ) : (
            visibleYears.map((yearMeta) => {
              const filtered = filteredArchive.find((r) => r.year.id === yearMeta.id);
              if (!filtered) return null;

              const isOpen = expandedYears[yearMeta.id] ?? yearMeta.id === "2025-2026";

              return (
                <div
                  key={yearMeta.id}
                  id={yearMeta.anchor}
                  className="scroll-mt-24 overflow-hidden rounded-[20px] border border-[var(--color-line)] bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleYear(yearMeta.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-[var(--color-wash)] md:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold text-[var(--color-plum)]">{yearMeta.label}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[var(--color-plum-muted)] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>

                  {isOpen && (
                    <div className={`${EVENTS_SECTION_STACK} border-t hairline px-5 pb-8 pt-6 md:px-6`}>
                      {filtered.campaigns.map(({ campaign, events }) => (
                        <section key={campaign.id} aria-labelledby={`campaign-${campaign.id}`}>
                          <h3
                            id={`campaign-${campaign.id}`}
                            className="mb-5 border-b border-[var(--color-line)] pb-3 text-base font-semibold text-[var(--color-plum)] md:text-lg"
                          >
                            {campaign.title}
                          </h3>
                          <CampaignEventsGrid campaign={campaign} events={events} />
                        </section>
                      ))}

                      {filtered.standaloneEvents.length > 0 && (
                        <section aria-labelledby={`standalone-${yearMeta.id}`}>
                          {filtered.campaigns.length > 0 && (
                            <h3
                              id={`standalone-${yearMeta.id}`}
                              className="mb-5 border-b border-[var(--color-line)] pb-3 text-base font-semibold text-[var(--color-plum)] md:text-lg"
                            >
                              Events & programs
                            </h3>
                          )}
                          <StandaloneEventsGrid yearId={yearMeta.id} events={filtered.standaloneEvents} />
                        </section>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
