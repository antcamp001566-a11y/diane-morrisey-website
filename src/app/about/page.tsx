import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About | ${site.name}`,
  description:
    "Meet Diane Morrisey — New York Times best-selling author, mom of 6, and the home cook behind Cooking Real Food for Real People.",
};

export default function AboutPage() {
  return (
    <div className="container-page py-14">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-lg">
          <PlaceholderImage
            alt="Diane Morrisey in her kitchen"
            label="Diane in the kitchen, candid photo"
            variant="olive"
            fill
          />
        </div>
        <div>
          <SectionHeading eyebrow="About Diane" title="Hi, I'm Diane." />
          <div className="mt-5 space-y-4 font-body text-lg text-ink-light">
            <p>
              Long before Instagram, I was already feeding a crowd. A Monroe,
              Connecticut native, I ran my own catering business in Fairfield
              County for years, then spent over a decade at Whole Foods,
              eventually overseeing the prepared foods business for stores
              across New York and Connecticut. Real food, made for real
              people &mdash; that was always the job.
            </p>
            <p>
              Then I got Instagram, mostly to keep an eye on my six kids. One
              day, just for fun, I posted a photo of a cake I&apos;d made. I
              didn&apos;t expect much &mdash; but the questions started
              rolling in: What&apos;s the recipe? Can I really pull this off?
              I started answering the way my dad, a basketball coach, always
              answered me: &ldquo;You got this.&rdquo; Turns out that&apos;s
              exactly what people needed to hear.
            </p>
            <p>
              That&apos;s the whole philosophy behind my cooking, and behind
              my first cookbook, <em>You Got This!</em>: cooking is 90
              percent confidence and 10 percent being able to read a recipe.
              No fancy techniques, no 12-ingredient grocery lists &mdash; just
              real food, simple enough that you actually make it again.
            </p>
            <p>
              These days I&apos;m still testing every recipe in my own
              kitchen in Trumbull, Connecticut, with my husband and six kids
              (mostly grown now) as the toughest critics I&apos;ve got.
            </p>
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
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <PlaceholderImage
              alt="Diane's family at the dinner table"
              label="Family dinner table photo"
              variant="tomato"
              fill
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <PlaceholderImage
              alt="Diane and family traveling in Italy"
              label="Italy travel photo"
              variant="olive"
              fill
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <PlaceholderImage
              alt="Diane and family traveling in Greece"
              label="Greece travel photo"
              variant="cream"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
