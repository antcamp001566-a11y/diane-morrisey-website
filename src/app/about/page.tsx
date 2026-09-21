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
              I&apos;m a mom of 6, which means my kitchen has seen every kind
              of chaos &mdash; picky eaters, spilled milk, a toddler
              &ldquo;helping,&rdquo; and dinner that needs to happen anyway.
              That&apos;s exactly why I started sharing recipes in the first
              place: not because I&apos;m a trained chef, but because I know
              what it&apos;s like to need dinner on the table in 30 minutes
              with whatever&apos;s in the fridge.
            </p>
            <p>
              What started as a way to keep track of my own family&apos;s
              favorite recipes turned into a community of over {site.instagramFollowers}{" "}
              home cooks who&apos;ve told me the same thing over and over:
              these recipes actually work for real life. No 15-ingredient
              lists, no equipment you don&apos;t own, no pretending your
              kids love kale.
            </p>
            <p>
              That philosophy became the heart of my first cookbook,{" "}
              <em>You Got This!</em> &mdash; recipes for the nights you&apos;re
              exhausted, the holidays you&apos;re hosting, and everything in
              between. I still test every recipe in my own kitchen, with my
              own six taste-testers keeping me honest.
            </p>
            <p>
              When I&apos;m not cooking, you&apos;ll find me chasing my kids
              around, planning our next family trip (Italy and Greece are
              on repeat), or convincing everyone that yes, we are having
              pasta again.
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
