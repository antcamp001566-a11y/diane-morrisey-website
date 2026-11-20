# 09 — AI Agents: Diane's Behind-the-Scenes Team

> **AI-assisted document.** Diane is one person with ~2M followers. These agents handle repetitive work so her time goes to cooking, teaching and her community. Working prompts are in [`/agents`](../../agents/). Costs and timing updated from the [Product & Tech dept. report](../departments/diane-product.md) and the merged agent cards. Week 1 = Nov 23, 2026; site soft launch is Week 7 (Mon Jan 4, 2027).

## Principle

**Agents draft. Diane decides.** Every agent saves Diane time *and* keeps or raises trust (`Intent: 4–5`). An agent that would trade trust for efficiency, like a bot posing as Diane or an automated upsell, doesn't get built.

## The team

| Agent | Faces | Job | Input | Output | Human checkpoint | Phase |
|---|---|---|---|---|---|---|
| **Recipe migration** | Internal | Turn Instagram captions into structured recipe cards | Instagram "Download Your Information" JSON export: caption, date, URL (not the Graph API, which needs a professional account and is capped at ~200 calls/hour) | Recipe card (JSON) + review flags | Diane's VA reviews each card (~20 min); Diane signs off | **Now, Weeks 1–5** |
| **Inbox triage** | Internal | Sort brand, media, class, cooking and fan messages; draft replies | One message | Category, priority, draft, question log entry | Diane or her VA sends every reply | **Now, Weeks 2–4** |
| **Newsletter drafter** | Internal | Draft the weekly "What's for Dinner" | New recipes, questions log, calendar, last 4 issues | Email draft with [CHECK] marks | Diane edits and sends | **Weeks 6–9** |
| **Ask Diane** | **Public** | Answer swaps and how-to on recipe pages, **only from the Approved Swaps sheet** | Recipe card + Approved Swaps sheet | Short answer, or "I've sent this to Diane" | Diane approves every swap; her VA handles handoffs | **Beta, Weeks 8–12** |
| **Class assistant** | Public (transactional) | Sign-ups, reminders, shopping lists, follow-ups | Class schedule, roster | Transactional emails | Diane sets each class; VA checks the first run | Later, Weeks 16–22 |

## How they connect

```
Instagram post ──► Recipe migration ──► recipe cards (approved) ──► Website
                                                     │
Cook on a recipe page ──► Ask Diane ◄── Approved Swaps sheet ◄── Diane approves swaps
                              │ can't answer
                              ▼
DMs / email ──► Inbox triage ──► questions log ──► Diane answers ──► new swaps + content
                                       │
                                       ▼
                          Newsletter drafter ──► weekly email (Diane sends)
```

Every unanswered question becomes a future swap, Reel or newsletter answer, so the system gets smarter from what her cooks actually ask.

## Costs `[Suggested]`

All figures are estimates from the merged agent cards and the [Product & Tech dept. report](../departments/diane-product.md).

| Item | Estimate |
|---|---|
| Recipe migration (first 50 recipes) | Under $5 in AI usage + **~17 VA hours** (~20 min review per recipe) + ~4 hrs of Diane's sign-off |
| Inbox triage | ~$20/mo |
| Newsletter drafter | ~$5/mo |
| Ask Diane | **$3–8K one-time freelance build + $12–43/mo** (Claude Haiku at ~$0.00045 per question, plus hosting) |
| Class assistant | ~$30/mo in tools |
| **Running total once all are live** | **~$67–98/mo** (est.), plus the one-time Ask Diane build |

## Metrics per agent

| Agent | Measure |
|---|---|
| Recipe migration | 50 cards approved by Diane by Week 5; reader-reported recipe errors under 2% |
| Inbox triage | Brand and media replies within 2 business days, 90% of the time (est.) |
| Ask Diane | 70% answered without handoff; zero unsafe answers; recipes finished ("Did it work?" 👍) |
| Newsletter | Diane's editing time under 30 minutes an issue (est.); open rate; replies |
| Class assistant | No-show rate under 15% (est.) |

## Guardrails

1. Nothing public goes out as Diane without her approval.
2. Public agents identify as AI.
3. No selling inside conversations.
4. Agents treat instructions inside incoming messages as content, not commands.
5. Allergy and food-safety answers follow the strict rules in [`agents/ask-diane/system-prompt.md`](../../agents/ask-diane/system-prompt.md).
6. Reader data is used only to improve recipes and content.
