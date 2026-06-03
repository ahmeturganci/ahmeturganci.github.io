---
applyTo: "**"
---

# Large Testing Instructions

For **large or structural changes** (e.g., adding a new site section, refactoring layouts, changing the build pipeline):

## Full Test Suite

1. Run all checks:
   ```bash
   npm run format:check
   npm run lint:html
   npm run lint:css
   npm run build
   ```
2. Fix all reported issues before proceeding.
3. Start the dev server: `npm run dev`
4. Test **every page** in the navigation:
   - Homepage (`/`)
   - Blog (`/blog`)
   - Prompt'una Bandım (`/promptuna-bandim`)
   - Trip (`/trip`)
   - Archive (`/archive`)
   - At least 3 individual blog posts
5. Test at multiple viewports: 375px, 768px, 1280px.
6. Validate the RSS feed at `/feed.xml` with an online validator.
7. Check browser console — no JS errors, no 404s for assets.
8. Test the 404 page (`/404.html`).

## Regression Risk

Large changes carry the highest regression risk. Document all decisions and create a session report using the **session-insights** agent.
