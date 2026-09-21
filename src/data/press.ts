// ---------------------------------------------------------------------------
// PRESS — placeholder mentions. Replace `outlet`, `quote`, and `link` with
// the real feature once you have it. `logo` is just a label used by the
// placeholder logo badge; swap in a real logo image path when available.
// ---------------------------------------------------------------------------

export type PressMention = {
  outlet: string;
  headline: string;
  quote: string;
  date: string;
  link: string;
};

export const pressMentions: PressMention[] = [
  {
    outlet: "The New York Times",
    headline: "The Home Cook Making Real Food Go Viral",
    quote:
      "Morrisey has built something rare: a following that trusts her not because her food is fussy, but because it isn't.",
    date: "March 2024",
    link: "#",
  },
  {
    outlet: "Woman's World",
    headline: "Meet the Mom of 6 Behind Your New Favorite Recipes",
    quote:
      "Her secret? Recipes that actually work for busy families — no special equipment, no 12-ingredient lists.",
    date: "January 2024",
    link: "#",
  },
  {
    outlet: "Good Morning America",
    headline: "You Got This! Author Shares Her Best Weeknight Dinner Tips",
    quote:
      "Diane brought her signature warmth (and a tray of her famous shrimp parm) to the GMA kitchen.",
    date: "November 2023",
    link: "#",
  },
  {
    outlet: "Parade",
    headline: "The Cookbook Every Busy Parent Needs This Year",
    quote:
      "You Got This! isn't just a cookbook — it's a permission slip to keep dinner simple.",
    date: "October 2023",
    link: "#",
  },
];

export const pressLogos: string[] = [
  "The New York Times",
  "Woman's World",
  "Good Morning America",
  "Parade",
  "TODAY",
];
