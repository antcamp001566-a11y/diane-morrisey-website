import type { Metadata } from "next";
import SiteImage from "@/components/SiteImage";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { aboutStory, aboutPullQuote, aboutGallery } from "@/data/about";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Meet Diane Morrisey — New York Times best-selling author, mom of 6, and the home cook behind Cooking Real Food for Real People.",
  path: "/about",
});

export default function AboutPage() {
  const [intro, ...rest] = aboutStory;

  return (
    <div className="container-page py-14">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-lg">
          <SiteImage
            alt="Diane Morrisey in her kitchen"
            fallbackLabel="Diane in the kitchen, candid photo"
            variant="olive"
            fill
          />
        </div>
        <div>
          <SectionHeading eyebrow="About Diane" title="Hi, I'm Diane." />
          <div className="mt-5 space-y-4 font-body text-lg text-ink-light">
            <p>{intro}</p>
            <blockquote className="border-l-4 border-tomato py-1 pl-4 font-display text-xl italic text-ink">
              &ldquo;{aboutPullQuote}&rdquo;
            </blockquote>
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/the-book" variant="primary">
              Read About the Book
            </Button>
          </div>
        </div>
      </div>

      {/* Family & travel moments */}
      <div className="mt-20">
        <SectionHeading
          eyebrow="Life Behind the Recipes"
          title="Family, food, and a little wanderlust"
          description="The moments between the recipes — six kids, a lot of pasta, and the trips that inspire what's for dinner."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {aboutGallery.map((image) => (
            <div
              key={image.fallbackLabel}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <SiteImage
                alt={image.alt}
                fallbackLabel={image.fallbackLabel}
                variant={image.variant}
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
