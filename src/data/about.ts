// ---------------------------------------------------------------------------
// ABOUT — Diane's story, kept as data so it can be edited without touching
// the page's JSX/layout. Confidence per fact is noted in the comments;
// see CONTENT-GUIDE.md for the full audit.
// ---------------------------------------------------------------------------

// REAL (public record): catering business in Fairfield County, Whole Foods
// career overseeing prepared foods for NY/CT stores, joining Instagram to
// keep track of her six kids, her dad being a basketball coach as the
// source of "You got this," and her stated cooking philosophy.
export const aboutStory = [
  "Long before Instagram, I was already feeding a crowd. A Monroe, Connecticut native, I ran my own catering business in Fairfield County for years, then spent over a decade at Whole Foods, eventually overseeing the prepared foods business for stores across New York and Connecticut. Real food, made for real people — that was always the job.",
  "Then I got Instagram, mostly to keep an eye on my six kids. One day, just for fun, I posted a photo of a cake I'd made. I didn't expect much — but the questions started rolling in: What's the recipe? Can I really pull this off? I started answering the way my dad, a basketball coach, always answered me: \"You got this.\" Turns out that's exactly what people needed to hear.",
  "That's the whole philosophy behind my cooking, and behind my first cookbook, You Got This!: cooking is 90 percent confidence and 10 percent being able to read a recipe. No fancy techniques, no 12-ingredient grocery lists — just real food, simple enough that you actually make it again.",
  "These days I'm still testing every recipe in my own kitchen in Trumbull, Connecticut, with my husband and six kids (mostly grown now) as the toughest critics I've got.",
] as const;

// REAL (Diane's own stated philosophy, found via press/interview research).
export const aboutPullQuote = "Cooking is 90 percent confidence and 10 percent being able to read a recipe.";

// Client-provided theme, not yet confirmed against a specific real photo —
// treat the images below as placeholders until real ones are supplied.
export const aboutGallery = [
  {
    alt: "Diane's family at the dinner table",
    fallbackLabel: "Family dinner table photo",
    variant: "tomato" as const,
  },
  {
    alt: "Diane and family traveling in Italy",
    fallbackLabel: "Italy travel photo",
    variant: "olive" as const,
  },
  {
    alt: "Diane and family traveling in Greece",
    fallbackLabel: "Greece travel photo",
    variant: "cream" as const,
  },
];
