# Product & Tech: Diane Morrisey Recipe Site, Email, Ask Diane

## 1) Findings with sources
- **WordPress + WP Recipe Maker (WPRM)**: the free version includes recipe JSON-LD schema and jump-to-recipe ([recipecard.io](https://recipecard.io/blog/best-wordpress-recipe-plugins/)). Premium costs $49/yr, Pro $99/yr (adds nutrition) and Elite $149/yr, and all renew automatically ([recipecard.io](https://recipecard.io/blog/best-wordpress-recipe-plugins/)). It has Cook Mode, which keeps the screen awake ([WPRM help](https://help.bootstrapped.ventures/docs/wp-recipe-maker/user-ratings/)). Star ratings come through a confirm modal, and since v9.4 each rating needs a comment, name and email ([WPRM help](https://help.bootstrapped.ventures/docs/wp-recipe-maker/user-ratings/)). Print is a standard feature, but we could not confirm which tier includes it.
- **Hosting**: Kinsta Starter costs $35/mo, covers 1 site and 25K visits ([northiscale](https://northiscale.com/guides/kinsta-pricing)). WP Engine is quoted at about $20–26/mo, but sources conflict ([stackcoast](https://stackcoast.com/wpengine-vs-kinsta-vs-siteground/)). SiteGround starts at $2.99 and renews at $17.99, which is a **hidden-cost flag** ([stackcoast](https://stackcoast.com/wpengine-vs-kinsta-vs-siteground/)).
- **Squarespace/Wix**: Squarespace runs about $19–99/mo with no free plan, and Wix about $17–159/mo ([tech.co](https://tech.co/website-builders/wix-vs-squarespace), [cybernews](https://website-builders.cybernews.com/wix-vs-squarespace/)). We found no native Recipe schema on either, so it would need custom code. That makes rich results risky.
- **Google rich results**: a page missing required properties is not eligible. `image` is required, and ingredients, instructions and ratings are recommended ([Google](https://developers.google.com/search/docs/appearance/structured-data/recipe)).
- **Email**: Kit is free up to 10K subscribers but shows Kit branding. Creator costs $39/mo at 1K subscribers, $199/mo at 25K and about $379/mo at 50K ([sendx](https://www.sendx.io/blog/convertkit-pricing), [emailvendorselection](https://www.emailvendorselection.com/kit-pricing/), [sendbroadcast](https://sendbroadcast.net/compare/kit-pricing)). Beehiiv is free up to 2,500 subscribers, then $49–99+/mo. Substack takes 10% of paid revenue. Ghost(Pro) starts at about $15–18/mo, has no free tier, and we found no recipe-card plugin for it ([toolvaults](https://toolvaults.net/guides/substack-vs-ghost-vs-beehiiv/)).
- **Claude API** (Nov 2026): Haiku 5.5 costs $0.10 per 1M input tokens and $0.50 per 1M output tokens. Sonnet 5.5 costs $2 / $10 ([reflektlab](https://reflektlab.ai/blog/claude-api-pricing/), [aipricing.guru](https://www.aipricing.guru/anthropic-pricing/)).
- **Freelance build costs**: Upwork chatbot developers charge about $30–61/hr ([Upwork](https://www.upwork.com/hire/chatbot-developers/)). A custom RAG bot runs $4K–15K ([sprintx](https://sprintx.net/blogs/chatbot-development-cost)). The no-code option, Chatbase, costs $40–150/mo for 700–4,000 credits ([costbench](https://costbench.com/software/ai-chatbot-platforms/chatbase/)).
- **Instagram export**: "Download Your Information" gives HTML or JSON, including captions and timestamps ([Instagram help](https://help.instagram.com/ipad-app/181231772500920), [redact](https://redact.dev/blog/instagram-data-file-download)). The Graph API only works for professional accounts. It is limited to about 200 calls/hr, and `/media` returns at most the 10K most recent items ([postzen](https://www.postzen.dev/blog/instagram-api-integration-guide), [upload-post](https://www.upload-post.com/instagram-api/)).
- **Analytics**: Plausible costs $9/mo for 10K pageviews. Fathom costs $15/mo for 100K pageviews. Both are cookieless ([getopen](https://getopen.so/blog/plausible-vs-fathom)).
- **Safety and accessibility**: USDA safe internal temperatures are 165°F for poultry and 160°F for ground meat ([FoodSafety.gov](https://www.foodsafety.gov/print/pdf/node/10), [FSIS](https://www.fsis.usda.gov/es/node/3293)). An accessible chat needs a polite aria-live log, keyboard access, and labeled buttons ([Telerik](https://www.telerik.com/kendo-react-ui/components/conversationalui/chat/accessibility/wai-aria-support), [BOIA](https://www.boia.org/blog/five-key-accessibility-considerations-for-chatbots)).

## 2) Recommended stack and cost
We recommend **WordPress + WPRM Premium on Kinsta, Kit for email, and Fathom for analytics.** This is the only option with proven Recipe schema, ratings, print and Cook Mode, and Diane's VA can edit it in a form-like editor.

| Item | Launch $/mo | At scale $/mo |
|---|---|---|
| Kinsta Starter (25K visits) | $35 | $70–115 (est.; she will likely outgrow 25K visits) |
| WPRM Premium $49/yr | $4 | $4 |
| Domain | ~$1.50 (est.) | $1.50 |
| Kit | $0 (up to 10K) | $199 (25K subs) |
| Fathom | $15 | $15+ |
| Ask Diane (API + hosting) | — | $15–45 (est., §3) |
| **Total** | **~$56** | **~$305–380 (est.)** |

## 3) Ask Diane architecture and cost math
**Flow:** chat widget on the recipe page → small server, such as a serverless function, est. $10–20/mo → retrieval of (a) this recipe's card and (b) rows from the **Approved Swaps sheet** (Google Sheet with columns: recipe, swap, ratio, note, approved_by, date) → **Claude Haiku 5.5** with structured output → answer plus the swap ID it used. A rule in the code blocks any answer that does not cite an approved swap ID. In that case Ask Diane says "Diane hasn't approved a swap for that yet" and offers the handoff form.

**Guardrails**
- Show "AI helper, not Diane" in the header and on every reply.
- Never say a swap is allergen-safe. Any allergy question gets a fixed reply: check labels and your doctor.
- Temperature questions get the USDA chart values only, with a link.
- "Talk to a person" is a button on every reply and sends a VA ticket.
- Log the question text only. No login, no names or emails, 90-day retention.
- WCAG 2.2 AA: keyboard path, aria-live log, focus return, contrast.

**Monthly cost (est.):** we assume each question uses 3,000 input tokens and 300 output tokens.
- Haiku: 3,000 × $0.10/1M + 300 × $0.50/1M = **$0.00045 per question**.
  - 5,000 questions/mo = **$2.25**
  - 50,000 questions/mo = **$22.50**
- Sonnet 5.5, for comparison: $0.006 + $0.003 = $0.009 per question.
  - 5,000 questions/mo = $45
  - 50,000 questions/mo = $450

**Totals:**
- Ongoing, with hosting: **$12–43/mo (est.)**.
- One-time freelancer build: **$3–8K (est.)**. That is 60–120 hrs × $50/hr, inside the $4–15K range ([sprintx](https://sprintx.net/blogs/chatbot-development-cost)).
- Chatbase is faster to set up. But each reply uses credits, so 50K questions would mean Pro at $500/mo or more, and it is harder to enforce the approved-swaps-only rule. Use it only for a prototype.

## 4) 12-week build plan (Week 1 = Nov 23, 2026)
1. **Nov 23**: Request the Instagram JSON export. Buy the domain, Kinsta and WPRM. Pick the top 50 recipes by saves in Insights.
2. **Nov 30**: Theme, recipe-card template (print, jump, Cook Mode, ratings). Set up Kit.
3. **Dec 7**: Migration agent turns captions into WPRM JSON, 10-recipe pilot. VA review checklist.
4. **Dec 14**: Migrate 25 recipes. Diane approves a batch.
5. **Dec 21**: Migrate all 50. Rich Results Test on every page.
6. **Dec 28**: Fathom and the metrics dashboard. Welcome email.
7. **Jan 4**: Soft launch. Link in bio. First "What's for Dinner" email.
8. **Jan 11**: Turn the D4 log into the Approved Swaps sheet, about 100 rows. Hire the freelancer.
9. **Jan 18**: Ask Diane prototype on 5 recipes, internal testing.
10. **Jan 25**: Red-team test: allergens, temperatures, "are you Diane?". Accessibility audit.
11. **Feb 1**: Beta on all 50 recipes, with a hard cap on the number of questions.
12. **Feb 8**: Review metrics. Go/no-go for full launch.

**Migration time (est.):** 20 min of VA review per recipe (quantities, times, servings, photo, schema), so 50 × 20 = about 17 hrs. Diane's sign-off at 5 min each adds about 4 hrs.

**Metrics:**
1. Returning visitors, in Fathom.
2. Prints and saves per recipe, as Fathom events.
3. "It worked" ratings, from WPRM.
4. Email subscribers and open rate, in Kit.
5. Ask Diane questions resolved without handoff.

## 5) What this changes (by card ID)
- **D1**: the platform is fixed as WordPress + WPRM on Kinsta. Launch moves to Week 7.
- **D2**: link in bio goes live in Week 7.
- **D3**: use Kit, free up to 10K. Budget $199/mo at 25K subscribers.
- **D4**: the log now feeds the Approved Swaps sheet (P4).
- **Recipe migration agent**: keep Weeks 1–4 but extend to Week 5. Add a VA estimate of about 17 hrs.
- **Ask Diane**: the prototype moves earlier, to Weeks 8–12. Revise the build cost to $3–8K (est.) and the running cost to $12–43/mo (est.) on Haiku.

## 6) New action cards
### P1 — Launch WordPress + WP Recipe Maker Premium on Kinsta
- Owner (role): Tech lead + VA
- First step this week (under 2 hrs): buy the domain, Kinsta Starter and WPRM Premium. Install the theme.
- Start → due: Nov 23 → Jan 4
- Cost: ~$56/mo
- Done when: 50 recipe pages pass Google's Rich Results Test.
- 90-day metric: 30% returning visitors.
- Depends on: P3
- Scores: V4/R4/C2 · Red flags: none (note that WPRM renews automatically; set a reminder) · Verdict: Win-win · Tier: 2 · Priority: 4.0

### P2 — Set up the Kit free plan with signup and the weekly template
- Owner (role): VA
- First step this week (under 2 hrs): create the Kit account, the signup form and the welcome email.
- Start → due: Nov 30 → Jan 4
- Cost: $0 up to 10K subscribers
- Done when: the form is embedded on every recipe page and the first email is sent.
- 90-day metric: 5,000 subscribers and a 45% open rate.
- Depends on: P1
- Scores: V4/R4/C1 · Red flags: none · Verdict: Win-win · Tier: 1 · Priority: 6.0

### P3 — Run caption-to-recipe-card migration with VA review
- Owner (role): Tech lead + VA
- First step this week (under 2 hrs): request the Instagram JSON export and list the top 50 recipes by saves.
- Start → due: Nov 23 → Dec 27
- Cost: ~17 VA hrs + under $5 in API (est.)
- Done when: all 50 recipes are approved by Diane.
- 90-day metric: an error rate under 2% in reader-reported recipe errors.
- Depends on: none
- Scores: V4/R4/C2 · Red flags: none · Verdict: Win-win · Tier: 2 · Priority: 4.0

### P4 — Build the Approved Swaps sheet with Diane's sign-off
- Owner (role): VA + Diane
- First step this week (under 2 hrs): set up the sheet columns and enter the 10 swaps Diane already answers most often.
- Start → due: Dec 7 → Jan 17
- Cost: about 6 Diane hrs (est.)
- Done when: about 100 swaps are approved.
- 90-day metric: 80% of Ask Diane questions are covered by an approved swap.
- Depends on: D4
- Scores: V5/R3/C1 · Red flags: none · Verdict: Win-win · Tier: 1 · Priority: 6.5

### P5 — Install Fathom and the 5-metric dashboard
- Owner (role): Tech lead
- First step this week (under 2 hrs): install the Fathom script and set up print and save events.
- Start → due: Dec 28 → Jan 3
- Cost: $15/mo
- Done when: the weekly metrics email reaches Diane.
- 90-day metric: the dashboard is reviewed every week.
- Depends on: P1
- Scores: V3/R4/C1 · Red flags: none · Verdict: Win-win · Tier: 1 · Priority: 5.0

### P6 — Build the Ask Diane beta (Haiku, approved-swaps only, human handoff)
- Owner (role): Freelancer + Tech lead
- First step this week (under 2 hrs): write a one-page spec covering the guardrails and the handoff.
- Start → due: Jan 11 → Feb 14
- Cost: $3–8K once + $12–43/mo (est.)
- Done when: it passes 50 red-team prompts (allergens, temperatures, "are you Diane?") and the WCAG 2.2 AA audit.
- 90-day metric: 70% of questions resolved without handoff and 0 unsafe answers.
- Depends on: P4
- Scores: V4/R3/C3 · Red flags: none if the guardrails ship · Verdict: Win-win · Tier: 2 · Priority: 2.75

## 7) Questions for Diane
1. Do you own your photos, and does Simon & Schuster limit how you can use the cookbook recipes online?
2. Can we use your professional account's Insights to rank recipes by saves?
3. Who handles Ask Diane handoffs, and what response time can we promise?
4. Do you want to cut ads from the print view?
5. Should nutrition data come in now (Pro, $99/yr) or later?
