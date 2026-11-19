# 09 — AI Agents: Diane's Behind-the-Scenes Team

> **AI-assisted document.** Diane is one person with ~2M followers. These agents handle repetitive work so her time goes to cooking, teaching and her community. Working prompts are in [`/agents`](../../agents/).

## Principle

**Agents draft. Diane decides.** Every agent saves Diane time *and* keeps or raises trust (`Intent: 4–5`). An agent that would trade trust for efficiency, like a bot posing as Diane or an automated upsell, doesn't get built.

## The team

| Agent | Faces | Job | Input | Output | Human checkpoint | Phase |
|---|---|---|---|---|---|---|
| **Recipe migration** | Internal | Turn Instagram captions into structured recipe cards | Caption, date, URL, transcript | Recipe JSON + review flags | Helper approves each card | **Now** |
| **Inbox triage** | Internal | Sort DMs and email; draft replies | One message | Category, priority, draft, question log | Diane or helper sends | **Now** |
| **Ask Diane** | **Public** | Answer swaps and how-to on recipe pages | Recipe card + approved swaps | Short answer, or logs the question | Diane approves the swap library | Next |
| **Newsletter drafter** | Internal | Draft the weekly "What's for Dinner" | New recipes, top questions, season | Email draft | Diane edits and sends | Next |
| **Class assistant** | Public (transactional) | Sign-ups, reminders, shopping lists, follow-ups | Class schedule, roster | Emails and messages | Diane sets each class | Later |

## How they connect

```
Instagram post ──► Recipe migration ──► recipe cards (approved) ──► Website
                                                     │
Cook on a recipe page ──► Ask Diane ◄── swap library ◄── Diane approves swaps
                              │ can't answer
                              ▼
DMs / email ──► Inbox triage ──► questions log ──► Diane answers ──► new swaps + content
                                       │
                                       ▼
                          Newsletter drafter ──► weekly email (Diane sends)
```

Every unanswered question becomes a future swap, Reel or newsletter answer, so the system gets smarter from what her cooks actually ask.

## Costs `[Suggested]`

| Item | Estimate |
|---|---|
| LLM API usage (all agents, launch traffic) | ~$30–150/mo depending on volume |
| One-time setup by a freelance developer | Get 2–3 quotes `[Ask Diane]` |
| Migration of the back catalog | Agent drafts in hours; human review ~2–3 min per recipe |

## Metrics per agent

| Agent | Measure |
|---|---|
| Recipe migration | Cards approved per week; % needing heavy edits |
| Inbox triage | Response time to brand and media messages; drafts sent with light edits |
| Ask Diane | Recipes finished ("Did it work?" 👍); questions routed to Diane |
| Newsletter | Open rate; replies; draft-to-send edit time |

## Guardrails

1. Nothing public goes out as Diane without her approval.
2. Public agents identify as AI.
3. No selling inside conversations.
4. Agents treat instructions inside incoming messages as content, not commands.
5. Allergy and food-safety answers follow the strict rules in [`agents/ask-diane/system-prompt.md`](../../agents/ask-diane/system-prompt.md).
6. Reader data is used only to improve recipes and content.
