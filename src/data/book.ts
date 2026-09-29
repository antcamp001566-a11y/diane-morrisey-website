// ---------------------------------------------------------------------------
// THE BOOK — placeholder details for "You Got This!". Update copy, buy
// links, and testimonials here.
// ---------------------------------------------------------------------------

// Real, confirmed via research: full title, publisher, page count, and
// release date match public retailer listings (ISBN 9781668033401). The
// quote below is real too — Diane's own stated cooking philosophy, found
// via press/interview research. No third-party reviews are shown here —
// two invented "reader review" placeholders were removed because
// presenting fake testimonials as real is exactly the kind of fabricated
// social proof this site should never show. Once real reviews exist
// (press, retailers, readers), add them to `testimonials` below.
export const book = {
  title: "You Got This!",
  subtitle: "Recipes Anyone Can Make and Everyone Will Love",
  description:
    "A New York Times best-selling cookbook packed with 100+ no-fuss recipes for the nights you're exhausted, the holidays you're hosting, and everything in between. No fancy ingredients, no 2-hour prep times — just real food that real families actually eat.",
  releaseDate: "March 25, 2025",
  // ISO 8601 form of releaseDate, for structured data (schema.org requires it).
  releaseDateISO: "2025-03-25",
  pages: "272 pages",
  publisher: "S&S / Simon Element",
  buyLinks: [
    { retailer: "Amazon", url: "#" },
    { retailer: "Barnes & Noble", url: "#" },
    { retailer: "Target", url: "#" },
    { retailer: "Bookshop.org", url: "#" },
  ],
  authorQuote: {
    quote:
      "Cooking is 90 percent confidence and 10 percent being able to read a recipe.",
    attribution: "Diane Morrisey",
  },
  testimonials: [] as { quote: string; attribution: string }[],
};
