---
mode: agent
tools:
  - codebase
  - editFiles
  - runCommands
description: Scaffold a new feature or page section for the Jekyll blog site.
---

# New Feature

Implement the following new feature:

**Feature description**: $SELECTION_OR_INPUT

## Steps to Follow

1. **Plan** — identify which files need to be created or modified (`_layouts/`, `_includes/`, `_sass/`, `_data/`, `_config.yml`).
2. **Implement** — make the changes following the conventions in `.github/instructions/`.
3. **Style** — add SCSS to the appropriate `_sass/` partial.
4. **Validate** — run the full linter + build pipeline:
   ```bash
   npm run format
   npm run lint:html
   npm run lint:css
   npm run build
   ```
5. **Document** — briefly summarise what was added and how to use it.

## Constraints

- Reuse existing `_includes/` partials before creating new ones.
- Do not add new npm or Ruby dependencies unless essential.
- Keep the site build reproducible on GitHub Pages.
