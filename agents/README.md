# Diane's AI Agents

> **AI-assisted.** Working drafts of the agents described in [`docs/business-definition/09-ai-agents.md`](../docs/business-definition/09-ai-agents.md). Each folder holds a system prompt and, where needed, an output schema. They're ready to drop into any LLM API (e.g., Claude) once Diane's real data is loaded.

| Agent | Faces | Folder | Phase |
|---|---|---|---|
| Recipe migration | Internal | [`recipe-migration/`](recipe-migration/) | Now |
| Inbox triage | Internal | [`inbox-triage/`](inbox-triage/) | Now |
| Ask Diane | **Public** | [`ask-diane/`](ask-diane/) | Next |
| Newsletter drafter | Internal | [`newsletter/`](newsletter/) | Next |

## Rules every agent follows

1. **A person approves anything public.** Agents draft; Diane or her helper publishes.
2. **Public agents say they're AI.** Ask Diane never claims to be Diane.
3. **No selling in conversations.** No product pushes, upsells or affiliate links mid-answer.
4. **Diane's knowledge only.** Agents use her recipes and her approved swap library, and say "I don't know" otherwise.
5. **Privacy.** Reader messages are used to improve recipes and content, never sold or used for ad targeting.

## Shared data the agents read

| File | What | Who maintains it |
|---|---|---|
| `data/recipes/*.json` | Recipe cards (schema: [`recipe-migration/recipe.schema.json`](recipe-migration/recipe.schema.json)) | Migration agent drafts, helper approves |
| `data/swaps.csv` | Approved substitutions: `item, swap, amount_or_setting, notes, recipes, approved_by, date` | Diane approves |
| `data/questions-log.csv` | Questions agents couldn't answer: `date, recipe, question, source, status` | Agents append, Diane answers |

The `data/` folder isn't created yet. It fills once the site's platform is chosen (doc 05).
