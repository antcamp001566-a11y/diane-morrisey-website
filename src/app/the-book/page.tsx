import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { book } from "@/data/book";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `The Book | ${site.name}`,
  description: book.description,
};

export default function TheBookPage() {
  return (
    <div className="container-page py-14">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
          <PlaceholderImage
            alt={`${book.title} book cover`}
            label="Book cover art (front + back)"
            variant="tomato"
            fill
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

      {/* Testimonials */}
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
