# 08 — "Ask Diane": AI Kitchen Helper

> **AI-assisted document.** Product spec for a substitution and help chatbot on Diane's recipe pages. Priority #2 in the MK-320 recommendations. Build, cost and rollout updated from the [Product & Tech dept. report](../departments/diane-product.md) and the merged action cards (agent-diane-askdiane, P4, D4). Week 1 = Nov 23, 2026.

## Why it exists

**Phase 1 finding (team data):** people leave when they're missing something, like a stand mixer or butter. `[P__ @ mm:ss]` `[P__ @ mm:ss]`

When that happens today, a cook goes to Google and often ends up on someone else's recipe. **The person they trust, Diane, isn't there to help.**

**Motive (Intent: 5):** trust, and helping people **cook for themselves**. The helper exists so a cook can finish the meal with confidence. That's the *You Got This!* promise, delivered at the exact moment someone gets stuck.

## What it does

| Cook asks | Helper answers from |
|---|---|
| "No stand mixer. Can I still make this?" | Diane's tool swaps on the Approved Swaps sheet (hand mixer, speed, time; or by hand) |
| "Out of butter. Can I use oil?" | Diane's approved ingredient swaps, per recipe |
| "Can I make this dairy-free / smaller / ahead?" | Her scaling, make-ahead and diet notes, if approved on the sheet |
| "My sauce is too thin." | Her troubleshooting tips, if approved on the sheet |
| Something it doesn't know | **"Diane hasn't approved a swap for that yet. I've sent this to Diane."** A "Talk to a person" handoff sends a VA ticket. |

## Trust rules (non-negotiable)

1. **Honest identity.** It's labeled "Ask Diane, her AI kitchen helper," with "AI helper, not Diane" in the header and on every reply. It **never claims to be Diane**, and never says "I" as if it were her in person. It speaks in her *style*: warm, plain and encouraging, with "You got this!".
2. **Approved swaps only.** Answers come from the recipe's card and the **Approved Swaps sheet** Diane has signed off (card P4). A rule in the code blocks any answer that doesn't cite an approved swap ID ([Product dept.](../departments/diane-product.md)). No made-up swaps presented as hers.
3. **Says "I don't know."** If there's no approved answer, it says so and offers the handoff. A wrong swap that ruins dinner breaks the promise.
4. **Allergy and safety caution.** It never says a swap is allergen-safe; any allergy question gets a fixed reply: check labels and your doctor. Temperature questions get the **USDA chart values only** (165°F poultry, 160°F ground meat), with a link.
5. **No selling in the chat.** It helps people cook. It doesn't push products, classes or affiliate links mid-answer. That would make the helper a sales funnel (`Intent: 1–2`).
6. **Book recipes respected.** For cookbook-only recipes it helps with swaps but doesn't reprint the recipe (see doc 07).
7. **Privacy.** No account needed. Only the question text is logged: no names or emails, 90-day retention. Used only to improve recipes and content.
8. **Accessible.** WCAG 2.2 AA: keyboard path, a polite aria-live log, focus return, labeled buttons, contrast.

## How it's built `[Suggested]`

Source: [Product & Tech dept. report](../departments/diane-product.md), §3.

- **Knowledge base:** the recipe's WP Recipe Maker card + the **Approved Swaps sheet** (Google Sheet: recipe, swap, ratio, note, approved_by, date). ~100 swaps, about 6 of Diane's hours (card P4, Weeks 3–8), seeded from the questions log (D4).
- **Flow:** chat widget on the recipe page → small serverless function (~$10–20/mo, est.) → retrieves this recipe's card and matching sheet rows → **Claude Haiku** with structured output → answer plus the swap ID it used. No approved swap ID, no answer.
- **Why Haiku:** ~$0.00045 per question (3,000 input + 300 output tokens, est.): **$2.25/mo at 5,000 questions, $22.50 at 50,000.** Sonnet would cost ~20× more ($45 / $450).
- **Placement:** an "Ask Diane" button on every recipe card, beside Print and Cook Mode, so the recipe's context is passed in automatically.
- **Handoff:** "Talk to a person" on every reply sends a ticket to Diane's VA. Diane's approved answers get added to the sheet.
- **Cost `[Suggested]`:** **$3–8K one-time freelance build** (60–120 hrs × ~$50/hr, inside the $4–15K market range) **+ $12–43/mo running** (API + hosting), all est. Chatbase is faster but costs $500+/mo at 50K questions and can't enforce the approved-swaps-only rule; prototype only. `[Ask Diane]` who handles handoffs and what response time to promise.

## Rollout

Week 1 = Nov 23, 2026. Site soft launch is Week 7 (Mon Jan 4, 2027).

| Phase | What |
|---|---|
| **Now (Weeks 1–12)** | Log every "what can I use instead?" question from comments, DMs and email (D4). Write "Out of it? Swap it" boxes on all 50 recipes (M1, Weeks 2–8), so cooks get answers even before Ask Diane exists. |
| **Weeks 3–8** | Build the Approved Swaps sheet: ~100 swaps signed off by Diane (P4) |
| **Week 8** | Hire the freelancer; one-page spec of guardrails and handoff |
| **Week 9** | Prototype on 5 recipes, internal testing |
| **Week 10** | Red-team test with 50 prompts (allergens, temperatures, "are you Diane?") and a WCAG 2.2 AA audit |
| **Week 11** | **Beta on all 50 recipes**, with a hard cap on questions |
| **Week 12** | Review metrics; go/no-go for full launch |
| **Later** | Expand to the full library; turn the most-asked swaps into a free "Diane's Swap Guide" page and Reels |

## Metrics

| Measure | Why |
|---|---|
| **Recipes finished** after asking (a "Did it work?" thumbs-up) | The real goal: people cooking for themselves |
| **Answered without handoff: 70%; unsafe answers: zero** (est. targets) | Beta pass/fail bar |
| Share of questions covered by an approved swap (target 80%) | Shows whether the sheet is complete enough |
| Questions routed to Diane per week | Content ideas, and gaps in the sheet |
| Exit rate on recipe pages, before vs. after launch | Tests the Phase 1 finding directly |
| **Not:** chat volume or time in chat | Long chats can mean confusion, not success |

## Content flywheel

```
Cook gets stuck → asks → helper answers (or routes to Diane)
      ↑                                        ↓
New Reel / Swap Guide ← Diane answers the most-asked questions
```

Every question becomes evidence of what her audience actually needs, which feeds the newsletter, classes and Cookbook #2.
