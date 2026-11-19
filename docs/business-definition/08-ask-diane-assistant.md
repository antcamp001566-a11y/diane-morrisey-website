# 08 — "Ask Diane": AI Kitchen Helper

> **AI-assisted document.** Product spec for a substitution and help chatbot on Diane's recipe pages. Priority #2 in the MK-320 recommendations.

## Why it exists

**Phase 1 finding (team data):** people leave when they're missing something, like a stand mixer or butter. `[P__ @ mm:ss]` `[P__ @ mm:ss]`

When that happens today, a cook goes to Google and often ends up on someone else's recipe. **The person they trust, Diane, isn't there to help.**

**Motive (Intent: 5):** trust, and helping people **cook for themselves**. The helper exists so a cook can finish the meal with confidence. That's the *You Got This!* promise, delivered at the exact moment someone gets stuck.

## What it does

| Cook asks | Helper answers from |
|---|---|
| "No stand mixer. Can I still make this?" | Diane's tool swaps (hand mixer, speed, time; or by hand) |
| "Out of butter. Can I use oil?" | Diane's approved ingredient swaps, per recipe |
| "Can I make this dairy-free / smaller / ahead?" | Her scaling, make-ahead and diet notes |
| "My sauce is too thin." | Her troubleshooting tips |
| Something it doesn't know | **"Great question. I'm sending it to Diane."** Logged for Diane to answer. |

## Trust rules (non-negotiable)

1. **Honest identity.** It's labeled "Ask Diane, her AI kitchen helper." It **never claims to be Diane**, and never says "I" as if it were her in person. It speaks in her *style*: warm, plain and encouraging, with "You got this!".
2. **Her knowledge only.** Answers come from Diane's recipes and a **swap library she has tested or approved**. No made-up swaps presented as hers.
3. **Says "I don't know."** If there's no approved answer, it says so and routes the question to Diane. A wrong swap that ruins dinner breaks the promise.
4. **Allergy and safety caution.** It never guarantees a swap is allergen-safe. It says to check labels. Food-safety basics (temperatures, raw eggs and meat) come from standard guidance, not improvisation.
5. **No selling in the chat.** It helps people cook. It doesn't push products, classes or affiliate links mid-answer. That would make the helper a sales funnel (`Intent: 1–2`).
6. **Book recipes respected.** For cookbook-only recipes it helps with swaps but doesn't reprint the recipe (see doc 07).
7. **Privacy.** No account needed. Questions are stored without personal details and used only to improve recipes and content.

## How it's built `[Suggested]`

- **Knowledge base:** recipe cards from the site (structured data) + a **Swap Library** spreadsheet Diane approves: ingredient/tool → swap → amount/setting → notes → which recipes.
- **Model:** a hosted LLM API (e.g., Claude) with retrieval over that knowledge base, and a system prompt enforcing the trust rules above.
- **Placement:** an "Ask Diane" button on every recipe card, beside Print and Cook mode, so the recipe's context is passed in automatically.
- **Escalation inbox:** unanswered questions go to a simple queue (spreadsheet or email) for Diane or her helper to answer weekly. Approved answers get added to the Swap Library.
- **Cost:** roughly $20–100/mo in API usage at launch traffic `[Suggested; depends on volume]`, plus a one-time build by a freelance developer `[Ask Diane / get quotes]`.

## Rollout

| Phase | What |
|---|---|
| **Now** | Log every "what can I use instead?" question from comments, DMs and email. That's the seed of the Swap Library. |
| **Next (launch)** | Ask Diane on the top 50 recipes, with ~100 approved swaps |
| **Later** | Expand to the full library; turn the most-asked swaps into a free "Diane's Swap Guide" page and Reels |

## Metrics

| Measure | Why |
|---|---|
| **Recipes finished** after asking (a "Did it work?" thumbs-up) | The real goal: people cooking for themselves |
| Questions routed to Diane per week | Content ideas, and gaps in the library |
| Exit rate on recipe pages, before vs. after launch | Tests the Phase 1 finding directly |
| **Not:** chat volume or time in chat | Long chats can mean confusion, not success |

## Content flywheel

```
Cook gets stuck → asks → helper answers (or routes to Diane)
      ↑                                        ↓
New Reel / Swap Guide ← Diane answers the most-asked questions
```

Every question becomes evidence of what her audience actually needs, which feeds the newsletter, classes and Cookbook #2.
