"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

type ProgramDetailModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  titleId: string;
  closeLabel: string;
  eyebrow?: string;
  subtitle?: string;
  subtitleId?: string;
  maxWidth?: "2xl" | "3xl";
  children: ReactNode;
  footer?: ReactNode;
};

export function ProgramDetailModal({
  open,
  onClose,
  title,
  titleId,
  closeLabel,
  eyebrow,
  subtitle,
  subtitleId,
  maxWidth = "2xl",
  children,
  footer,
}: ProgramDetailModalProps) {
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

  const widthClass = maxWidth === "3xl" ? "max-w-3xl" : "max-w-2xl";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={handleClose}
          role="presentation"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={subtitleId}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className={`relative flex max-h-[92vh] w-full ${widthClass} flex-col overflow-hidden rounded-t-2xl border hairline bg-white shadow-xl sm:max-h-[min(90vh,820px)] sm:rounded-xl`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative shrink-0 border-b hairline px-6 py-5 pr-14">
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border hairline bg-white text-[var(--color-plum)] transition-colors hover:bg-[var(--color-wash)]"
                aria-label={closeLabel}
              >
                <X className="size-5" />
              </button>

              {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-coral-deep)]">
                  {eyebrow}
                </p>
              )}
              <h2 id={titleId} className="mt-1 text-xl font-semibold text-[var(--color-plum)] md:text-2xl">
                {title}
              </h2>
              {subtitle && (
                <p id={subtitleId} className="mt-2 text-sm leading-relaxed text-[var(--color-plum-light)]">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">{children}</div>

            {footer && (
              <div className="shrink-0 border-t hairline bg-[var(--color-wash)] px-6 py-4">{footer}</div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
