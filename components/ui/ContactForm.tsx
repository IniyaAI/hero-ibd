"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";

interface ContactFormProps {
  subject?: string;
}

export function ContactForm({ subject = "General Inquiry" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const inquiryType = data.get("inquiryType") as string;

    const mailto = `mailto:npo.heart2heart@gmail.com?subject=${encodeURIComponent(
      `${subject}: ${inquiryType}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\n${message}`
    )}`;

    window.location.href = mailto;
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] px-4 py-2.5 text-[var(--color-text)] text-sm placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-lavender)]/25 focus:border-[var(--color-lavender)] bg-white";

  if (submitted) {
    return (
      <div className="card-medical p-8 text-center">
        <p className="text-lg font-semibold text-[var(--color-navy)]">
          Thank you for reaching out.
        </p>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          Your email client should open shortly. You can also email us at{" "}
          <a
            href="mailto:npo.heart2heart@gmail.com"
            className="text-[var(--color-coral)] hover:underline font-medium"
          >
            npo.heart2heart@gmail.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-medical p-6 md:p-8 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-navy)]">
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-navy)]">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="inquiryType" className="block text-sm font-semibold text-[var(--color-navy)]">
          Inquiry Type
        </label>
        <select id="inquiryType" name="inquiryType" className={inputClass}>
          <option value="Partnership">Partnership</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Sponsorship">Sponsorship</option>
          <option value="Donation">Donation</option>
          <option value="General">General Question</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-navy)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-y`}
          placeholder="Tell us how we can help..."
        />
      </div>

      <Button type="submit" variant="primary">
        Send Inquiry
      </Button>
    </form>
  );
}
