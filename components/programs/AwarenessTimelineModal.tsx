"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { AwarenessTimelineEntry } from "@/lib/programs-content";

type FooterAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
};

type AwarenessTimelineModalProps = {
  open: boolean;
  onClose: () => void;
  eyebrow: string;
  title: string;
  subtitle: string;
  titleId: string;
  subtitleId: string;
  closeLabel: string;
  entries: readonly AwarenessTimelineEntry[];
  footerActions?: readonly FooterAction[];
};

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function AwarenessTimelineModal({
  open,
  onClose,
  eyebrow,
  title,
  subtitle,
  titleId,
  subtitleId,
  closeLabel,
  entries,
  footerActions = [],
}: AwarenessTimelineModalProps) {
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
            className="relative flex max-h-[min(90vh,820px)] w-full max-w-3xl flex-col overflow-hidden rounded-xl border hairline bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="shrink-0 border-b hairline px-6 py-5 pr-14">
              <button
                type="button"
                onClick={handleClose}
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
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              <ol className="relative space-y-12 before:absolute before:bottom-2 before:left-1/2 before:top-2 before:hidden before:w-px before:-translate-x-1/2 before:bg-[var(--color-line-strong)] md:before:block">
                {years.map((year) => (
                  <li key={year}>
                    <p className="mb-8 inline-flex rounded-full bg-[var(--color-plum)] px-3 py-1 text-xs font-semibold text-white">
                      {year}
                    </p>

                    <ul className="space-y-10">
                      {entries
                        .filter((entry) => entry.year === year)
                        .map((entry, index) => {
                          const imageClassName =
                            "className" in entry.image && entry.image.className
                              ? entry.image.className
                              : "object-cover";
                          const reverse = index % 2 === 1;

                          return (
                            <li key={entry.title}>
                              <article
                                className={`grid items-center gap-5 md:grid-cols-2 md:gap-8 ${
                                  reverse ? "md:[&>*:first-child]:order-2" : ""
                                }`}
                              >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border hairline bg-white shadow-sm">
                                  <Image
                                    src={entry.image.src}
                                    alt={entry.image.alt}
                                    fill
                                    className={imageClassName}
                                    sizes="(max-width: 768px) 100vw, 400px"
                                  />
                                </div>

                                <div className="rounded-xl border hairline bg-[var(--color-wash)] p-4 md:p-5">
                                  <h3 className="font-semibold text-[var(--color-plum)]">{entry.title}</h3>
                                  {entry.organization && (
                                    <p className="mt-1 text-sm font-medium text-[var(--color-coral-deep)]">
                                      {entry.organization}
                                    </p>
                                  )}
                                  <p
                                    className={`text-sm leading-relaxed text-[var(--color-plum-light)] ${
                                      entry.organization ? "mt-3" : "mt-2"
                                    }`}
                                  >
                                    {entry.description}
                                  </p>
                                  {entry.impact && (
                                    <p className="mt-3 text-sm font-semibold tabular-nums text-[var(--color-plum)]">
                                      {entry.impact}
                                    </p>
                                  )}
                                </div>
                              </article>
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            {footerActions.length > 0 && (
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
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
