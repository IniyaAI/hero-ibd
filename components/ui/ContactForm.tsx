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
    "w-full rounded-[var(--radius)] border hairline px-3 py-2.5 text-sm text-[var(--color-plum)] placeholder:text-[var(--color-plum-muted)] focus:outline-none focus:border-[var(--color-lavender)] bg-white";

  if (submitted) {
    return (
      <div className="border hairline p-8 text-center bg-white">
        <p className="font-semibold text-[var(--color-plum)]">Thank you for reaching out.</p>
        <p className="mt-2 text-sm text-[var(--color-plum-light)]">
          Your email client should open shortly, or write to{" "}
          <a href="mailto:npo.heart2heart@gmail.com" className="text-[var(--color-coral-deep)] hover:underline">
            npo.heart2heart@gmail.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-sm font-medium text-[var(--color-plum)]">Name</label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-plum)]">Email</label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="inquiryType" className="block text-sm font-medium text-[var(--color-plum)]">Inquiry type</label>
        <select id="inquiryType" name="inquiryType" className={inputClass}>
          <option value="Partnership">Partnership</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Sponsorship">Sponsorship</option>
          <option value="Donation">Donation</option>
          <option value="General">General question</option>
        </select>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-plum)]">Message</label>
        <textarea id="message" name="message" rows={5} required className={`${inputClass} resize-y`} />
      </div>
      <Button type="submit">Send inquiry</Button>
    </form>
  );
}
