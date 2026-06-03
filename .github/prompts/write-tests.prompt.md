---
mode: agent
tools:
  - codebase
  - editFiles
  - runCommands
description: Write linting, formatting, and build verification tests for the Jekyll blog.
---

# Write Tests

Write tests or validation scripts for the following:

**Subject**: $SELECTION_OR_INPUT

## What to Generate

Since this is a static Jekyll site, "tests" take the form of:

1. **Linter configurations** — HTMLHint rules in `.htmlhintrc`, Stylelint rules in `.stylelintrc.json`.
2. **Prettier checks** — ensure `.prettierrc.json` and `.prettierignore` cover new file types.
3. **Build scripts** — add or update entries in `package.json` `"scripts"` if a new check is needed.
4. **Manual test checklist** — a Markdown checklist of steps to manually verify the feature works.

## Format for a Manual Checklist

```markdown
## Test: <feature name>

- [ ] Step 1
- [ ] Step 2
- [ ] Mobile layout looks correct at 375px
- [ ] No console errors
```

## Validation

After writing tests, run the full suite to confirm they pass:

```bash
npm run format:check
npm run lint:html
npm run lint:css
npm run build
```
