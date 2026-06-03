---
applyTo: "**"
---

# Small Testing Instructions

For **quick, isolated changes** (e.g., fixing a typo, updating a colour variable, adding a social link):

## Minimum Checks

1. Run the formatter: `npm run format:check`
2. Run the CSS linter: `npm run lint:css`
3. Verify the build: `npm run build`
4. Open `_site/index.html` locally or run `npm run dev` and spot-check the changed page.

## Scope

These checks are sufficient when:
- Only one file is changed.
- The change is purely cosmetic or content-only (no structural HTML changes).
- No new Liquid tags, includes, or layouts are introduced.
