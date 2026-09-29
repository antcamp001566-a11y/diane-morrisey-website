// ---------------------------------------------------------------------------
// PRESS — real coverage of Diane Morrisey, found via research (see links).
// `description` is a factual one-line summary of what each piece covers,
// NOT a verbatim quote pulled from the article — none of these have been
// read in full, only their headlines/summaries. Read the linked piece and
// swap in a real pull-quote once you have one. `date` is left approximate
// or blank where the exact publish date wasn't confirmed — fill in the
// real date once you have it.
// ---------------------------------------------------------------------------

export type PressMention = {
  outlet: string;
  headline: string;
  description: string;
  date: string;
  link: string;
};

export const pressMentions: PressMention[] = [
  {
    outlet: "AARP",
    headline: "How Food Influencer Diane Morrisey Created a Massive Instagram Platform",
    description:
      "A look at how Diane built her following and turned it into her debut, New York Times best-selling cookbook.",
    date: "2025",
    link: "https://www.aarp.org/entertainment/books/diane-morrisey-you-got-this-cookbook/",
  },
  {
    outlet: "Moffly Lifestyle Media",
    headline: "Empowering Home Cooks with Confidence, Flavor, and Heart",
    description:
      "A Connecticut lifestyle feature on Diane's cooking philosophy and the story behind You Got This!",
    date: "2025",
    link: "https://mofflylifestylemedia.com/empowering-home-cooks-with-confidence-flavor-and-heart/",
  },
  {
    outlet: "AOL / Yahoo Lifestyle",
    headline: "Food Influencer Diane Morrisey Shares Smart + Simple Cooking Tips",
    description:
      "An interview covering Diane's practical, no-fuss approach to weeknight cooking.",
    date: "2025",
    link: "https://www.aol.com/lifestyle/food-influencer-diane-morrisey-shares-130058322.html",
  },
  {
    outlet: "Daily Voice (Trumbull-Monroe)",
    headline: "Move Over Martha: Trumbull's Diane Morrisey Is Social Media's Rising Foodie Star",
    description:
      "A hometown profile on Diane's rise as a food influencer from Trumbull, Connecticut.",
    date: "",
    link: "https://dailyvoice.com/connecticut/trumbull/lifestyle/move-over-martha-trumbulls-diane-morrisey-is-social-medias-rising-foodie-star/779507/",
  },
  {
    outlet: "Connecticut Post",
    headline: "Trumbull Food Influencer Builds Toward 1 Million Followers on Instagram",
    description:
      "Local coverage of Diane's early Instagram growth and how it started as a way to keep tabs on her six kids.",
    date: "",
    link: "https://www.ctpost.com/news/article/trumbull-food-influencer-diane-morrisey-1m-follow-17862816.php",
  },
  {
    outlet: "Cookbook Love Podcast",
    headline: "You Got This! Feeding People, Writing Cookbooks, and Staying Real with Diane Morrisey",
    description:
      "A podcast conversation about writing her first cookbook and staying true to her voice.",
    date: "2025",
    link: "https://cookbooklove.libsyn.com/episode-343-you-got-this-feeding-people-writing-cookbooks-and-staying-real-with-diane-morrisey",
  },
];

// TODO: swap these for real outlet logo images once available (public/images/press/).
export const pressLogos: string[] = [
  "AARP",
  "Moffly Lifestyle Media",
  "AOL",
  "Daily Voice",
  "Connecticut Post",
  "Cookbook Love",
];
