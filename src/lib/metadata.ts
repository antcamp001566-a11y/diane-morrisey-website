import type { Metadata } from "next";
import { site } from "@/data/site";

// ---------------------------------------------------------------------------
// Shared per-page metadata builder — every page gets consistent
// title/description PLUS matching Open Graph and Twitter card data (Next.js
// does not deep-merge the `openGraph`/`twitter` objects from a parent
// layout, so each page needs to set its own here).
//
// `title` should be the bare page name (e.g. "About", not "About | Diane
// Morrisey") — the root layout's title template appends the site name for
// the <title> tag automatically. Open Graph/Twitter titles don't get that
// template applied, so this builds the full string for those explicitly.
// `path` is the page's route (e.g. "/about") and feeds the canonical URL.
// ---------------------------------------------------------------------------

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
