---
applyTo: "**"
---

# Core Instructions

## Language

- Write all **code comments** in English.
- Blog post **content** may be in Turkish or English depending on the target audience.
- Front matter fields and Liquid variables are always in English.

## Formatting

- Use **Prettier** for HTML, SCSS, Markdown, JSON, and YAML: `npm run format`
- Indentation: 2 spaces (as configured in `.prettierrc.json` and `.editorconfig`)
- Max line length: 100 characters in code; no limit in Markdown prose.

## Commits

- Use short, imperative commit messages (e.g., `add timeline include`, `fix nav link`).
- Prefix with a type when relevant: `feat:`, `fix:`, `chore:`, `content:`, `style:`.

## Dependencies

- Do **not** add new Ruby gems without updating `Gemfile` and documenting the reason.
- Do **not** add new npm packages without a strong justification — this is a static site.
- Prefer built-in Jekyll/Liquid features over third-party plugins.

## Security

- Never commit secrets, API keys, or tokens.
- External links must use `rel="noopener noreferrer"` when `target="_blank"`.

## Accessibility

- All images require descriptive `alt` text.
- Use semantic HTML5 elements (`<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`).
- Ensure sufficient colour contrast (WCAG AA minimum).
