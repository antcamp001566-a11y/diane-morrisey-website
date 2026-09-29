import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import EmailSignupForm from "@/components/EmailSignupForm";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Diane Morrisey for brand partnerships, media, or fan questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container-page py-14">
      <div className="grid gap-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's work together"
            description="Brand or media inquiry? Recipe question? Just want to say hi? I'd love to hear from you."
          />
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
            <h3 className="font-display text-lg font-bold text-ink">
              Brand & Media Inquiries
            </h3>
            <p className="mt-2 font-body text-ink-light">
              For partnerships, sponsorships, or press requests, email:
            </p>
            <a
              href={`mailto:${site.businessEmail}`}
              className="mt-2 inline-block font-body font-semibold text-tomato hover:underline"
            >
              {site.businessEmail}
            </a>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5">
            <h3 className="font-display text-lg font-bold text-ink">
              General Questions
            </h3>
            <p className="mt-2 font-body text-ink-light">
              Recipe questions, book questions, or anything else:
            </p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-2 inline-block font-body font-semibold text-tomato hover:underline"
            >
              {site.contactEmail}
            </a>
          </div>

          <div className="rounded-2xl bg-olive/10 p-6">
            <h3 className="font-display text-lg font-bold text-olive-dark">
              Join the Newsletter
            </h3>
            <p className="mt-2 font-body text-ink-light">
              Get new recipes and book updates straight to your inbox.
            </p>
            <div className="mt-4">
              <EmailSignupForm compact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
