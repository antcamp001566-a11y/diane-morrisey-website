# Content Guide

This site is built so Diane (or whoever's helping her) can swap in real
content without needing to understand React or Next.js. Almost everything
lives in a handful of plain data files under `src/data/`.

## Quick map: where things live

| What you want to change | File |
| --- | --- |
| Site name, tagline, contact emails, domain | `src/data/site.ts` |
| Social handles and follower count | `src/data/social.ts` |
| About page story, pull-quote, gallery captions | `src/data/about.ts` |
| Recipes (add/edit/remove) | `src/data/recipes.ts` |
| Press mentions and press logos | `src/data/press.ts` |
| Book details, buy links, author quote, reviews | `src/data/book.ts` |
| Home page hero copy / section order | `src/app/page.tsx` |

None of the page files (`src/app/**/page.tsx`) should need editing for a
routine content update — if you find yourself editing JSX to change a
fact, something's wrong and it should probably move into `src/data/`.

## Full audit — what's real, what isn't

This table is the honest status of every section, as of this pass. Re-run
this exercise any time content changes significantly.

| Section | Status | Notes |
| --- | --- | --- |
| Book facts (title, subtitle, publisher, date, pages) | **REAL** | Verified against public retailer/publisher listings, ISBN 9781668033401. |
| Diane's quote ("Cooking is 90 percent confidence...") | **REAL** | Her own stated philosophy, found via interview/press research. |
| About page career history (catering, Whole Foods, Monroe/Trumbull CT) | **REAL** | Confirmed via public profiles and local news coverage. |
| About page Instagram origin story (posted a cake, dad the basketball coach) | **REAL** | Confirmed via multiple independent interviews/press pieces. |
| Press mentions (AARP, Moffly, AOL, Daily Voice, CT Post, Cookbook Love) | **REAL** | All 6 are real articles/episodes about her; links go to the actual pieces. |
| Press `description` text under each headline | **REASONABLY-SOURCED** | A factual summary from public search results, not a verbatim quote — none of the full articles were read start to finish. |
| Instagram/TikTok/Facebook handles | **REAL** | Confirmed to exist under these exact handles. |
| Instagram follower count ("1.5M+") | **UNVERIFIED** | Sources found ranged 1.5M–2M+ depending on date. |
| Pinterest account | **UNVERIFIED** | Not found in research — may not exist. Confirm before publishing that link. |
| YouTube channel URL | **UNVERIFIED** | A channel exists but no vanity URL was confirmed. |
| Contact emails (`hello@`, `partnerships@dianemorrisey.com`) | **PLACEHOLDER** | Invented addresses — replace with real ones before launch. |
| All 6 recipes (text, ingredients, steps) | **PLACEHOLDER** | Invented to demonstrate the page format. Each has `verified: false` in `src/data/recipes.ts` and a visible on-page disclaimer. Not real Diane Morrisey recipes. |
| Book reader/press reviews | **PLACEHOLDER — currently empty** | Two fabricated "reader review" quotes were removed entirely rather than kept as fake social proof. `book.testimonials` is an empty array; add real ones there when available. |
| All photography (hero, about, book cover, recipes, family/travel) | **PLACEHOLDER — clearly labeled** | Every image is a labeled gradient card, never disguised as a real photo. See the image table below. |
| Book buy links (Amazon, B&N, Target, Bookshop.org) | **PLACEHOLDER** | All point to `#` — no real retailer links were fabricated; add the real ones when known. |
| Navigation, footer, mobile menu | **READY FOR PRODUCTION** | Fully functional, responsive, tested. |
| Recipe search + category filter + clear filters | **FUNCTIONAL** | Client-side filtering, tested with empty states. |
| Recipe print / share buttons | **FUNCTIONAL** | `window.print()` and `navigator.share` (with clipboard-copy fallback). |
| Email signup form (footer + home + contact) | **VISUAL-ONLY** | Validates input and shows a success state, but isn't connected to a real email service yet. See "Forms" below. |
| Contact form | **VISUAL-ONLY** | Same as above — not connected to a real inbox yet. |
| SEO: metadata, Open Graph/Twitter cards, sitemap, robots.txt | **READY FOR PRODUCTION** | Implemented sitewide; see "SEO" below. |
| SEO: favicon / social preview image | **FUNCTIONAL, TEXT-BASED** | A generated branded card (monogram + name + tagline), not a real photo — intentional until real photography exists. |
| Recipe/Book structured data (JSON-LD) | **READY FOR PRODUCTION** | Book schema always renders (real data). Recipe schema only renders for recipes with `verified: true` — none currently qualify, so it silently does nothing until real recipes are added. This is deliberate: emitting recipe rich-result markup for invented recipes would get fake content indexed as real. |

## Adding a real photo

Every photo on the site is currently a warm gradient placeholder labeled
with what should go there (e.g. "Diane in the kitchen, candid photo"). To
replace one:

1. Drop the image file into the matching subfolder of `public/images/`
   (see the table below for exactly which folder and filename).
2. Add a `src="/images/..."` prop to that `<SiteImage>` component call, or
   (for recipes) add an `image` field to the recipe's entry in
   `src/data/recipes.ts`. The real photo replaces the placeholder
   automatically — no other changes needed.

```ts
// src/data/recipes.ts
{
  slug: "shrimp-parm",
  title: "Shrimp Parm",
  image: "/images/recipes/shrimp-parm.jpg",
  // ...
}
```

### Image spec table

| Placement | Suggested filename | Folder | Aspect ratio | Min dimensions |
| --- | --- | --- | --- | --- |
| Home hero (Diane + book) | `hero-diane.jpg` | `public/images/home/` | 4:5 | 1000×1250px |
| Home book callout cover | `book-cover.jpg` | `public/images/home/` | 3:4 | 900×1200px |
| About portrait | `diane-portrait.jpg` | `public/images/about/` | 4:5 | 1000×1250px |
| About family dinner table | `family-dinner.jpg` | `public/images/about/` | 1:1 | 1000×1000px |
| About Italy travel photo | `italy.jpg` | `public/images/about/` | 1:1 | 1000×1000px |
| About Greece travel photo | `greece.jpg` | `public/images/about/` | 1:1 | 1000×1000px |
| The Book page cover (front+back) | `cover-full.jpg` | `public/images/book/` | 3:4 | 1200×1600px |
| Each recipe photo | `<recipe-slug>.jpg` | `public/images/recipes/` | 4:3 | 1200×900px |
| Press outlet logos (optional, if licensed) | `<outlet-slug>.png` | `public/images/press/` | any, transparent bg | 400px tall |
| Anything reused across pages | — | `public/images/shared/` | — | — |

Every folder above already exists in the repo (with a `.gitkeep` so git
tracks the empty directory) — just drop files in.

## Adding a new recipe

Open `src/data/recipes.ts` and copy an existing recipe object, then edit
the fields. Set `verified: true` once the text actually comes from Diane
(this removes the on-page "sample recipe" disclaimer and turns on the
Recipe rich-result markup for search engines). The recipe will
automatically show up on `/recipes`, get its own page at
`/recipes/your-slug`, and appear in `sitemap.xml`. No other file needs to
change.

## Adding a press mention

Open `src/data/press.ts` and add an entry to `pressMentions` (and to
`pressLogos` if it's a new outlet). Set `type` to `"podcast"` for audio
coverage or `"article"` otherwise.

## Forms: what's wired up and what isn't

Three forms on the site (email signup in the footer, home page, and
contact page; the contact form itself) currently work client-side
only — they validate input and show a success message, but **do not
actually send anywhere yet**. Look for the `TODO` comments in:

- `src/components/EmailSignupForm.tsx`
- `src/components/ContactForm.tsx`

Before launch, connect these to:

- An email service provider (Mailchimp, ConvertKit, Flodesk, etc.) for the
  signup forms — this is the most valuable thing this site can do that
  Instagram can't: it builds an owned list.
- A form backend (Formspree, Netlify Forms, or a simple serverless
  function) for the contact form, so business inquiries land in an inbox.

## SEO

Implemented sitewide, driven by `src/data/site.ts` (`site.url` in
particular — **update this the moment a real domain is confirmed**, it
feeds every canonical URL, sitemap entry, and social preview link):

- Per-page `<title>`/description, Open Graph, and Twitter card metadata
  via the `buildMetadata()` helper in `src/lib/metadata.ts`.
- `src/app/sitemap.ts` and `src/app/robots.ts` — auto-generate
  `/sitemap.xml` and `/robots.txt`, including every recipe page.
- `src/app/icon.svg` — a simple branded "DM" monogram favicon (replace
  with a real logo mark whenever one exists).
- `src/app/opengraph-image.tsx` — a generated, text-based social preview
  card (name + tagline on brand colors). This is intentional, not a
  stand-in for a real photo — swap it for a photo-based one once real
  hero photography exists, by replacing this file's contents with an
  `<Image>`-based version or a static file.
- JSON-LD structured data: a `Book` schema always renders on `/the-book`
  (real data). A `Recipe` schema renders per recipe page **only when
  `recipe.verified` is `true`** — see the audit table above for why.

## Domain

The site currently has no confirmed domain. `src/data/site.ts` uses
`https://dianemorrisey.com` as a placeholder for `site.url` (this feeds
SEO/social metadata sitewide) — confirm whether Diane's team owns that
domain before launch, and update it there if not.

## Running the site locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Pre-launch checklist

- [ ] Confirm the real domain and update `site.url` in `src/data/site.ts`.
- [ ] Confirm real contact emails and update `site.contactEmail` /
      `site.businessEmail`.
- [ ] Confirm the exact current Instagram follower count in `src/data/social.ts`.
- [ ] Confirm or remove the Pinterest link; confirm the real YouTube URL.
- [ ] Wire `EmailSignupForm` to a real email service provider.
- [ ] Wire `ContactForm` to a real form backend.
- [ ] Replace placeholder photos per the image spec table above.
- [ ] Replace placeholder recipes with Diane's real recipes, setting
      `verified: true` on each as they're added.
- [ ] Add real book buy links (replace the `#` placeholders in
      `src/data/book.ts`).
- [ ] Add real reader/press reviews to `book.testimonials` in
      `src/data/book.ts` once available (kept empty deliberately rather
      than filled with invented quotes).
