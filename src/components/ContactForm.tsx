"use client";

import { useState, type FormEvent } from "react";

// ---------------------------------------------------------------------------
// CONTACT FORM
// TODO before launch: wire this up to a real form backend (Formspree,
// Netlify Forms, a serverless function, etc.) that emails submissions to
// the business inbox in src/data/site.ts. Replace the body of
// `handleSubmit` with that provider's submission call.
// ---------------------------------------------------------------------------

const inquiryTypes = ["Brand Partnership", "Media / Press", "Recipe Question", "Other"];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: replace with a real submission to your form backend.
    setStatus("success");
    event.currentTarget.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-olive/10 p-8 text-center">
        <h3 className="font-display text-xl font-bold text-olive-dark">
          Thanks for reaching out!
        </h3>
        <p className="mt-2 font-body text-ink-light">
          We got your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-body text-sm font-semibold text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border-2 border-ink/15 bg-white px-4 py-2.5 font-body text-ink focus:border-tomato focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-body text-sm font-semibold text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border-2 border-ink/15 bg-white px-4 py-2.5 font-body text-ink focus:border-tomato focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="inquiryType" className="mb-1.5 block font-body text-sm font-semibold text-ink">
          What&apos;s this about?
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          className="w-full rounded-xl border-2 border-ink/15 bg-white px-4 py-2.5 font-body text-ink focus:border-tomato focus:outline-none"
          defaultValue={inquiryTypes[0]}
        >
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-body text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border-2 border-ink/15 bg-white px-4 py-2.5 font-body text-ink focus:border-tomato focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-tomato px-6 py-3 font-body font-bold text-white transition-colors hover:bg-tomato-dark sm:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
