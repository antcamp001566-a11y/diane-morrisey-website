import type { Metadata } from "next";
import SiteImage from "@/components/SiteImage";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { book } from "@/data/book";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "The Book",
  description: book.description,
  path: "/the-book",
});

export default function TheBookPage() {
  return (
    <div className="container-page py-14">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Book",
          name: book.title,
          alternateName: book.subtitle,
          description: book.description,
          author: { "@type": "Person", name: site.name },
          publisher: book.publisher,
          datePublished: book.releaseDateISO,
          numberOfPages: book.pages.replace(/\D/g, ""),
          url: `${site.url}/the-book`,
        }}
      />
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
          <SiteImage
            alt={`${book.title} book cover`}
            fallbackLabel="Book cover art (front + back)"
            variant="tomato"
            fill
            priority
          />
        </div>
        <div>
          <p className="mb-2 font-body text-sm font-bold uppercase tracking-widest text-tomato">
            New York Times Best Seller
          </p>
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            {book.title}
          </h1>
          <p className="mt-2 font-body text-xl font-semibold text-olive-dark">
            {book.subtitle}
          </p>
          <p className="mt-5 font-body text-lg text-ink-light">
            {book.description}
          </p>
          <div className="mt-4 flex gap-6 font-body text-sm text-ink-light">
            <span>{book.releaseDate}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{book.pages}</span>
          </div>

          <div className="mt-8">
            <p className="mb-3 font-body text-sm font-bold uppercase tracking-wide text-ink">
              Buy Your Copy
            </p>
            <div className="flex flex-wrap gap-3">
              {book.buyLinks.map((link) => (
                <Button
                  key={link.retailer}
                  href={link.url}
                  external
                  variant={link.retailer === "Amazon" ? "primary" : "outline"}
                >
                  {link.retailer}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Author's philosophy — a real, sourced quote from Diane */}
      <div className="mt-20 rounded-3xl bg-cream-dark px-8 py-14 text-center">
        <p className="font-body text-sm font-bold uppercase tracking-widest text-tomato">
          In Diane&apos;s Words
        </p>
        <blockquote className="mx-auto mt-4 max-w-2xl font-display text-2xl font-medium italic text-ink sm:text-3xl">
          &ldquo;{book.authorQuote.quote}&rdquo;
        </blockquote>
        <p className="mt-4 font-body text-sm font-bold text-ink-light">
          &mdash; {book.authorQuote.attribution}
        </p>
      </div>

      {/* Real reader/press reviews go here once available — see book.testimonials in src/data/book.ts */}
      {book.testimonials.length > 0 && (
        <div className="mt-20">
          <SectionHeading
            align="center"
            eyebrow="What Readers Are Saying"
            title="Loved by home cooks and critics alike"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {book.testimonials.map((testimonial) => (
              <figure
                key={testimonial.attribution}
                className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5"
              >
                <blockquote className="font-body text-ink-light">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-body text-sm font-bold text-ink">
                  &mdash; {testimonial.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-20 rounded-3xl bg-olive px-8 py-12 text-center text-cream">
        <h2 className="font-display text-3xl font-bold">
          Ready to cook something real tonight?
        </h2>
        <p className="mx-auto mt-3 max-w-xl font-body text-cream/90">
          Grab your copy of {book.title} and get 100+ recipes {site.name.split(" ")[0]} actually makes for her own family.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href={book.buyLinks[0].url} external variant="primary">
            Buy the Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
