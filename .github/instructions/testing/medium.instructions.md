---
applyTo: "**"
---

# Medium Testing Instructions

For **moderate changes** (e.g., adding a new blog post, updating an include, modifying a layout):

## Required Checks

1. Run all linters and format checks:
   ```bash
   npm run format:check
   npm run lint:html
   npm run lint:css
   ```
2. Build the site: `npm run build`
3. Start dev server: `npm run dev`
4. Manually test:
   - The specific page(s) affected by the change.
   - The homepage to ensure nothing regressed.
   - Navigation and footer links.
5. Check mobile layout (Chrome DevTools device emulation at 375px).

## Scope

Apply these checks when:
- A new post or page is added.
- An `_includes/` partial is modified.
- A layout file (`_layouts/`) is updated.
- Multiple SCSS partials are changed.
- A new entry is added to `_config.yml` navigation or data files.
