"use client";

import { useState, type FormEvent } from "react";

// ---------------------------------------------------------------------------
// EMAIL SIGNUP FORM
// TODO before launch: wire this up to a real email service (Mailchimp,
// ConvertKit, Flodesk, etc). Replace the body of `handleSubmit` with a call
// to that provider's signup API/embed, using the `email` state below.
// ---------------------------------------------------------------------------

type EmailSignupFormProps = {
  compact?: boolean;
};

export default function EmailSignupForm({ compact = false }: EmailSignupFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.includes("@")) {
      setStatus("error");
      return;
    }

    // TODO: replace with a real API call to your email service provider.
    setStatus("success");
    setEmail("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full flex-col gap-3 sm:flex-row ${compact ? "max-w-md" : "max-w-lg"}`}
      noValidate
    >
      <label htmlFor="email-signup" className="sr-only">
        Email address
      </label>
      <input
        id="email-signup"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        className="w-full flex-1 rounded-full border-2 border-ink/15 bg-white px-5 py-3 font-body text-ink placeholder:text-ink-light/70 focus:border-tomato focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-tomato px-6 py-3 font-body font-bold text-white transition-colors hover:bg-tomato-dark"
      >
        Get the recipes
      </button>
      {status === "success" && (
        <p className="basis-full font-body text-sm font-semibold text-olive-dark" role="status">
          You&apos;re on the list! Check your inbox to confirm.
        </p>
      )}
      {status === "error" && (
        <p className="basis-full font-body text-sm font-semibold text-tomato-dark" role="alert">
          Please enter a valid email address.
        </p>
      )}
    </form>
  );
}
