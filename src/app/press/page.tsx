import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PressLogoStrip from "@/components/PressLogoStrip";
import { pressMentions } from "@/data/press";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Press",
  description: "Press features and media mentions for Diane Morrisey.",
  path: "/press",
});

export default function PressPage() {
  return (
    <div className="container-page py-14">
      <SectionHeading
        eyebrow="Press & Media"
        title="Featured in"
        description="A few of the places that have covered Diane's recipes, her story, and You Got This!"
      />

      <div className="mt-8">
        <PressLogoStrip />
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {pressMentions.map((mention) => (
          <a
            key={mention.headline}
            href={mention.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-display text-lg font-semibold text-ink">
                {mention.outlet}
              </span>
              <div className="flex items-center gap-2">
                {mention.type === "podcast" && (
                  <span className="rounded-full bg-olive/10 px-2.5 py-0.5 font-body text-xs font-bold uppercase tracking-wide text-olive-dark">
                    Podcast
                  </span>
                )}
                {mention.date && (
                  <span className="font-body text-xs font-semibold text-ink-light">
                    {mention.date}
                  </span>
                )}
              </div>
            </div>
            <h3 className="font-body text-lg font-bold text-tomato-dark">
              {mention.headline}
            </h3>
            <p className="font-body text-ink-light">{mention.description}</p>
            <span className="mt-2 font-body text-sm font-semibold text-olive-dark">
              {mention.type === "podcast" ? "Listen to the episode" : "Read the feature"} &rarr;
            </span>
          </a>
        ))}
      </div>

      {/* Media kit / inquiries */}
      <div className="mt-16 rounded-3xl bg-cream-dark px-8 py-12 text-center">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          Press & media inquiries
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-body text-ink-light">
          For interviews, features, or media kit requests, reach out at{" "}
          <a
            href={`mailto:${site.businessEmail}`}
            className="font-semibold text-tomato hover:underline"
          >
            {site.businessEmail}
          </a>{" "}
          or use the contact form.
        </p>
      </div>
    </div>
  );
}
