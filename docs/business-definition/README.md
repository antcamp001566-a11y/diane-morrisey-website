# Business Definition: Diane Morrisey Website

> **AI-assisted.** Drafted with Claude (AI) to support the MK-320 Consumer Research Project (Phase 2). Under the course rules, the team develops its recommendations itself first and labels anything that came from AI. Everything tagged `[Suggested]` is a starting point to check against the team's Phase 1 findings.

## Executive summary

> **Updated after the department research (Nov 2026).** These docs were first drafted before the Market, Product & Tech and Revenue departments reported. They now follow the merged action cards and the reports in **[`docs/departments/`](../departments/)**: [Market](../departments/diane-market.md) · [Product & Tech](../departments/diane-product.md) · [Revenue](../departments/diane-revenue.md). Week 1 = Nov 23, 2026.

**Who:** Diane Morrisey is a home cook and food creator from Trumbull, CT: mother of six, former Whole Foods prepared-foods executive, Instagram @dianemorrisey, and author of *You Got This!: Recipes Anyone Can Make and Everyone Will Love* (Simon & Schuster, 2025). **Follower counts conflict:** 1.4M (AARP, Mar 2025), 1.5M (Sep 2025), ~2M (undated profile snapshot). The "NYT bestseller" claim is **unverified**; no list week was found ([Market dept.](../departments/diane-market.md)). `[Verify]` both before presenting (card M4).

**The problem:** her recipes live only in Instagram captions and Reels. Followers can't search, filter, print or reliably find them again, and Diane doesn't own the channel.

**What this site is:** **the home for every Diane recipe.** A searchable recipe library, built to get cooks to the food fast, plus a free weekly "What's for Dinner" email, a cookbook hub and a Work with Diane page.

**Business model:** *value-first, three buckets* (doc 07). **Free** content earns trust. **The cookbook builds the relationship.** It isn't the money engine: royalties are small and paid only after the advance earns out, and free videos of book recipes cannibalize it. **Services generate revenue:** Year 1 ≈ **$160K gross (est.)**, of which brand work (disclosed partnerships + recipe development) is ~$90K ([Revenue dept.](../departments/diane-revenue.md)). Prices: live online classes $35 per household; in-person demos $85; corporate events $150–200 per person ($3K minimum); meal-plan membership $7/mo with one-click cancel; recipe-development rate card $2.5K / $7.5K / $15K (est.). Every partnership follows a written FTC policy: disclosure **spoken and on screen**. Ads come only later, under strict rules.

**Governing principle:** every recommendation is checked for **intent**, meaning what it's *for*. See [00-intent-standard.md](00-intent-standard.md). The big fork is ad-heavy versus clean recipe pages (doc 05).

**Signature feature:** **Ask Diane**, an AI kitchen helper on every recipe that answers "what can I use instead?" in Diane's style, so cooks finish the meal instead of leaving. Honestly labeled as AI, and it answers **only from the Approved Swaps sheet** Diane signs off. Beta in Weeks 8–12; $3–8K freelance build + $12–43/mo on Claude Haiku (est.) (doc 08). Until then, an "Out of it? Swap it" box on every recipe and "Cook with what you have" filters cover the same need.

**Primary metric:** returning visitors per month, plus recipes saved, printed and made, email subscribers, and Ask Diane questions resolved without handoff (tracked in Fathom, WP Recipe Maker and Kit).

**Current repo state:** no code yet. **Platform decided** (doc 05; [Product & Tech dept.](../departments/diane-product.md)): WordPress + WP Recipe Maker Premium on Kinsta, Kit email (free up to 10K subscribers) and Fathom analytics, **~$56/mo at launch**. Squarespace and Wix were rejected: no built-in recipe markup. The 50 most-saved recipes move over from Instagram's "Download Your Information" export, with ~20 min of VA review per recipe. **Soft launch: Mon Jan 4, 2027 (Week 7).**

## Documents

| # | Document | What it answers |
|---|---|---|
| 00 | [Intent Standard](00-intent-standard.md) | How to judge whether an idea serves cooks or just revenue. Read first. |
| 01 | [Lean Canvas](01-lean-canvas.md) | Who Diane is, the problem, segments, UVP, costs, revenue, metrics |
| 02 | [Mission, Vision, Values](02-mission-vision-values.md) | Mission built on "You Got This!", values with decision tests, pitches |
| 03 | [Brand Guidelines](03-brand-guidelines.md) | Personas, voice, messaging pillars, positioning |
| 04 | [Market & Competitors](04-market-and-competitors.md) | Recipe-site landscape, benchmarking template, differentiation |
| 05 | [Product & Pricing](05-product-and-pricing.md) | Site features, business developments ranked by intent, pricing, roadmap |
| 06 | [Core SOPs](06-core-sops.md) | Instagram→site acquisition, onboarding, content, support, intent review |
| 09 | [AI Agents](09-ai-agents.md) | The agent team (migration, inbox, Ask Diane, newsletter, classes), how they connect, costs, guardrails. Prompts in [`/agents`](../../agents/) |
| 08 | [Ask Diane Assistant](08-ask-diane-assistant.md) | AI kitchen helper for substitutions, with trust rules, build, rollout and metrics |
| 07 | [Content & Offer Model](07-content-and-offer-model.md) | Free vs. book vs. services; cannibalization rules; why the cookbook is a relationship builder; services catalog |
| — | [Department reports](../departments/) | Market, Product & Tech and Revenue research behind the numbers above: [Market](../departments/diane-market.md), [Product & Tech](../departments/diane-product.md), [Revenue](../departments/diane-revenue.md) |

## Tags

`[Suggested]` recommendation to review · `[Phase 1]` needs a real interview citation, **never invented** · `[Ask Diane]` only she can confirm · `[Team research]` the team must verify and cite · `[Verify]` public reporting, confirm before presenting · `Intent: N` level 1 (revenue-first) to 5 (value-first)

## For developers and AI agents entering this repo

- Every recipe uses **schema.org/Recipe** structured data, has a *Jump to Recipe* link, a print view and a screen-awake cook mode.
- **Mobile-first and fast.** Most visitors arrive from Instagram on phones.
- **No dark patterns:** no pop-ups before the recipe, no gated recipes, no ads between the cook and the recipe card, no undisclosed affiliate links.
- Instagram Reels embed on their matching recipe pages.
- Check new features against [00-intent-standard.md](00-intent-standard.md).

## Sources

Changed facts (platform, costs, prices, timing, follower counts) cite the department reports in [`docs/departments/`](../departments/), which list their own sources. Other public facts in these docs come from:
- [AARP: How Food Influencer Diane Morrisey Created a Massive Instagram Platform](https://www.aarp.org/entertainment/books/diane-morrisey-you-got-this-cookbook/)
- [WFSB: Trumbull mom's recipe Instagram page boasts 1 million followers (May 2023)](https://www.wfsb.com/2023/05/05/trumbull-moms-recipe-instagram-page-boasts-1-million-followers/)
- [CT Post: Trumbull food influencer builds toward 1 million followers](https://www.ctpost.com/news/article/trumbull-food-influencer-diane-morrisey-1m-follow-17862816.php)
- [CT Post / NewsTimes: Food influencer Diane Morrisey to release cookbook](https://www.newstimes.com/food/article/diane-morrisey-food-influencer-cookbook-ct-20206078.php)
- [Daily Voice: Move Over Martha: Trumbull's Diane Morrisey](https://dailyvoice.com/connecticut/trumbull/lifestyle/move-over-martha-trumbulls-diane-morrisey-is-social-medias-rising-foodie-star/779507/)
- [Simon & Schuster: You Got This!](https://www.simonandschuster.com/books/You-Got-This!/Diane-Morrisey/9781668033401) and [author page](https://www.simonandschuster.com/authors/Diane-Morrisey/206493564)
- [Cool Mom Eats: recipes from Diane Morrisey](https://coolmomeats.com/2022/03/11/diane-morrisey-food-bloggers-you-should-be-following/)
- [RJ Julia Booksellers: Diane Morrisey](https://rjjulia.com/diane-morrisey)
- [Instagram @dianemorrisey](https://www.instagram.com/dianemorrisey/) · [Facebook: Diane Morrisey Cooking](https://facebook.com/dianemorriseycooking/posts)

These were gathered through web search summaries, since direct page access was blocked from this environment. **Open and verify each one before citing it in the deck.**
