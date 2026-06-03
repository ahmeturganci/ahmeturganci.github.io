# AI Learnings

A running log of AI tools, prompts, and workflows that have proved useful when working on this Jekyll blog.

## Prompt Patterns

| Pattern | Description |
|---|---|
| `$SELECTION_OR_INPUT` | Use in `.prompt.md` files to allow the user to provide context inline. |
| Front matter `applyTo` glob | Scopes instruction files to specific file types automatically. |

## Useful Copilot Workflows

- **Explain + Refactor**: Use `explain-code` first, then `refactor` for unfamiliar components.
- **Planner → Orchestrator**: For multi-file changes, start with the planner agent to get a checklist before implementing.

## Jekyll-Specific Learnings

- Liquid `include` tags accept variables: `{% include timeline.html items=site.data.experience %}`.
- `excerpt_separator` in `_config.yml` controls where post excerpts are cut.
- GitHub Pages only supports a subset of Jekyll plugins — always check compatibility.

## Notes

Add new learnings here as you discover them during Copilot sessions.
