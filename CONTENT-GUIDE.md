# Content Guide

This site is built so Diane (or whoever's helping her) can swap in real
content without needing to understand React or Next.js. Almost everything
lives in a few plain data files.

## Quick map: where things live

| What you want to change | File |
| --- | --- |
| Site name, tagline, social links, contact emails | `src/data/site.ts` |
| Recipes (add/edit/remove) | `src/data/recipes.ts` |
| Press mentions and press logos | `src/data/press.ts` |
| Book details, buy links, testimonials | `src/data/book.ts` |
| About page story text | `src/app/about/page.tsx` |
| Home page hero copy | `src/app/page.tsx` |

## Adding a real photo

Every photo on the site is currently a warm gradient placeholder labeled
with what should go there (e.g. "Diane in the kitchen, candid photo"). To
replace one:

1. Drop the image file into the `public/images/` folder (create it if it
   doesn't exist yet) — e.g. `public/images/diane-hero.jpg`.
2. Find where that placeholder is used (search the file for its label
   text, e.g. "Diane + book cover hero photo").
3. Add a `src="/images/diane-hero.jpg"` prop to that `<PlaceholderImage>`
   component. The real photo will replace the placeholder automatically —
   no other code changes needed.

For recipes specifically, you can also just add an `image` field to the
recipe's entry in `src/data/recipes.ts`, e.g.:

```ts
{
  slug: "shrimp-parm",
  title: "Shrimp Parm",
  image: "/images/recipes/shrimp-parm.jpg",
  // ...
}
```

## Adding a new recipe

Open `src/data/recipes.ts` and copy an existing recipe object, then edit
the fields. The recipe will automatically show up on `/recipes` and get
its own page at `/recipes/your-slug`. No other file needs to change.

## Adding a press mention

Open `src/data/press.ts` and add an entry to `pressMentions` (and to
`pressLogos` if it's a new outlet).

## Forms: what's wired up and what isn't

Two forms on the site (email signup, footer signup, and the contact form)
currently work client-side only — they validate input and show a success
message, but **do not actually send anywhere yet**. Look for the `TODO`
comments in:

- `src/components/EmailSignupForm.tsx`
- `src/components/ContactForm.tsx`

Before launch, connect these to:

- An email service provider (Mailchimp, ConvertKit, Flodesk, etc.) for the
  signup forms — this is the most valuable thing this site can do that
  Instagram can't: it builds an owned list.
- A form backend (Formspree, Netlify Forms, or a simple serverless
  function) for the contact form, so business inquiries land in an inbox.

## Domain

The site currently has no domain configured. Before launching, check
whether `dianemorrisey.com` (or a similar domain) is available and point
it at wherever this site gets deployed (Vercel, Netlify, etc.).

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
