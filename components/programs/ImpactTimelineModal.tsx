"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Landmark, ScrollText, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export type TimelineEntryIcon = "city" | "proclamation" | "school";

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
  beneficiary?: string;
  organization?: string;
  primaryMetric?: { label: string; value: string };
  icon?: TimelineEntryIcon;
  badge?: string;
  highlighted?: boolean;
  image?: { src: string; alt: string; className?: string };
  gallery?: readonly { src: string; alt: string }[];
};

export type TimelineHeaderMetric = {
  value: string;
  label: string;
};

export type TimelineFooterAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
};

type ImpactTimelineModalProps = {
  open: boolean;
  onClose: () => void;
  eyebrow: string;
  title: string;
  subtitle: string;
  titleId: string;
  subtitleId: string;
  closeLabel: string;
  headerMetrics: readonly TimelineHeaderMetric[];
  entries: readonly TimelineEntry[];
  footerActions: readonly TimelineFooterAction[];
};

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function ImpactTimelineModal({
  open,
  onClose,
  eyebrow,
  title,
  subtitle,
  titleId,
  subtitleId,
  closeLabel,
  headerMetrics,
  entries,
  footerActions,
}: ImpactTimelineModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll(FOCUSABLE);
    const first = focusable?.[0] as HTMLElement | undefined;
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
        return;
      }

      if (event.key !== "Tab" || !dialog) return;

      const elements = dialog.querySelectorAll(FOCUSABLE);
      if (elements.length === 0) return;

      const firstEl = elements[0] as HTMLElement;
      const lastEl = elements[elements.length - 1] as HTMLElement;

      if (event.shiftKey && document.activeElement === firstEl) {
        event.preventDefault();
        lastEl.focus();
      } else if (!event.shiftKey && document.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [open, handleClose]);

  const years = [...new Set(entries.map((entry) => entry.year))];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={handleClose}
          role="presentation"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={subtitleId}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative flex max-h-[min(90vh,820px)] w-full max-w-2xl flex-col overflow-hidden rounded-xl border hairline bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <ModalHeader
              closeLabel={closeLabel}
              onClose={handleClose}
              eyebrow={eyebrow}
              title={title}
              subtitle={subtitle}
              titleId={titleId}
              subtitleId={subtitleId}
              headerMetrics={headerMetrics}
            />

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <TimelineList years={years} entries={entries} />
            </div>

            <div className="shrink-0 border-t hairline bg-[var(--color-wash)] px-6 py-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {footerActions.map((action) => (
                  <Button
                    key={action.label}
                    href={action.href}
                    external={action.external}
                    variant={action.variant ?? "primary"}
                    className="w-full sm:w-auto"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalHeader({
  closeLabel,
  onClose,
  eyebrow,
  title,
  subtitle,
  titleId,
  subtitleId,
  headerMetrics,
}: {
  closeLabel: string;
  onClose: () => void;
  eyebrow: string;
  title: string;
  subtitle: string;
  titleId: string;
  subtitleId: string;
  headerMetrics: readonly TimelineHeaderMetric[];
}) {
  return (
    <div className="shrink-0 border-b hairline px-6 py-5 pr-14">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border hairline bg-white text-[var(--color-plum)] transition-colors hover:bg-[var(--color-wash)]"
        aria-label={closeLabel}
      >
        <X className="size-5" />
      </button>

      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-coral-deep)]">{eyebrow}</p>
      <h2 id={titleId} className="mt-1 text-xl font-semibold text-[var(--color-plum)] md:text-2xl">
        {title}
      </h2>
      <p id={subtitleId} className="mt-2 text-sm leading-relaxed text-[var(--color-plum-light)]">
        {subtitle}
      </p>

      <div
        className={`mt-4 grid gap-3 ${
          headerMetrics.length > 1 ? "grid-cols-2" : "grid-cols-1"
        }`}
      >
        {headerMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border hairline bg-[var(--color-wash)] px-4 py-3 shadow-sm"
          >
            <p className="text-xs text-[var(--color-plum-muted)]">{metric.label}</p>
            <p className="font-[family-name:var(--font-heading)] text-2xl font-semibold tabular-nums text-[var(--color-plum)]">
              {metric.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TimelineIcon({ icon }: { icon: TimelineEntryIcon }) {
  const Icon = icon === "city" ? Landmark : icon === "proclamation" ? ScrollText : GraduationCap;
  const label =
    icon === "city" ? "City meeting" : icon === "proclamation" ? "Proclamation" : "School engagement";

  return (
    <span
      className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-coral)]/15 text-[var(--color-coral-deep)]"
      aria-label={label}
      title={label}
    >
      <Icon className="size-3.5" aria-hidden />
    </span>
  );
}

function TimelineList({
  years,
  entries,
}: {
  years: string[];
  entries: readonly TimelineEntry[];
}) {
  return (
    <ol className="relative space-y-10 before:absolute before:bottom-2 before:left-[11px] before:top-2 before:w-px before:bg-[var(--color-line-strong)]">
      {years.map((year) => (
        <li key={year}>
          <p className="mb-5 inline-flex rounded-full bg-[var(--color-plum)] px-3 py-1 text-xs font-semibold text-white">
            {year}
          </p>

          <ul className="space-y-8">
            {entries
              .filter((entry) => entry.year === year)
              .map((entry) => (
                <li key={entry.title} className="relative pl-8">
                  <span
                    className="absolute left-0 top-1.5 size-[22px] rounded-full border-2 border-white bg-[var(--color-coral)] shadow-sm"
                    aria-hidden
                  />

                  <article
                    className={`rounded-xl border bg-white p-4 shadow-sm md:p-5 ${
                      entry.highlighted
                        ? "border-[var(--color-coral)] ring-1 ring-[var(--color-coral)]/20"
                        : "hairline"
                    }`}
                  >
                    {entry.badge && (
                      <span className="mb-3 inline-flex rounded-full bg-[var(--color-coral)]/15 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-coral-deep)]">
                        {entry.badge}
                      </span>
                    )}

                    <div className="flex items-start gap-3">
                      {entry.icon && <TimelineIcon icon={entry.icon} />}
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-[var(--color-plum)]">{entry.title}</h3>
                        {entry.organization && (
                          <p className="mt-1 text-sm font-medium text-[var(--color-coral-deep)]">
                            {entry.organization}
                          </p>
                        )}
                      </div>
                    </div>

                    {entry.primaryMetric && entry.beneficiary && (
                      <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                        <div>
                          <dt className="text-[var(--color-plum-muted)]">{entry.primaryMetric.label}</dt>
                          <dd className="font-semibold tabular-nums text-[var(--color-coral-deep)]">
                            {entry.primaryMetric.value}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[var(--color-plum-muted)]">Beneficiary</dt>
                          <dd className="font-medium text-[var(--color-plum)]">{entry.beneficiary}</dd>
                        </div>
                      </dl>
                    )}

                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-plum-light)]">
                      {entry.description}
                    </p>

                    {entry.image && (
                      <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-lg bg-[var(--color-line)]">
                        <Image
                          src={entry.image.src}
                          alt={entry.image.alt}
                          fill
                          className={entry.image.className ?? "object-cover"}
                          sizes="(max-width: 672px) 100vw, 672px"
                        />
                      </div>
                    )}

                    {entry.gallery && entry.gallery.length > 0 && (
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {entry.gallery.map((photo) => (
                          <div
                            key={photo.src}
                            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[var(--color-line)]"
                          >
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              fill
                              className="object-cover"
                              sizes="200px"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </article>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
