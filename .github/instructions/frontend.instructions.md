---
applyTo: "**/*.html,**/*.sass,**/*.scss"
---

# Frontend Instructions

## HTML / Liquid

- Use **semantic HTML5** elements: `<article>`, `<section>`, `<aside>`, `<nav>`, `<header>`, `<footer>`.
- Keep Liquid logic minimal in templates; move complex logic to `_includes/` partials.
- Reuse existing includes before creating new ones (see `_includes/`).
- All `<img>` tags must have an `alt` attribute.
- External links: always add `target="_blank" rel="noopener noreferrer"`.

## SCSS / SASS

- Files live in `_sass/`; the entry point is `_sass/index.sass`.
- Follow the existing partial structure:

  | File | Purpose |
  |---|---|
  | `basic.sass` | Variables, resets, base element styles |
  | `layout.sass` | Grid, page layout, containers |
  | `classes.sass` | Utility and component classes |
  | `font.sass` | Font-face and typography |
  | `timeline.scss` | Timeline component styles |
  | `experinece.sass` | Experience section styles |

- Use **SASS variables** for colours and spacing — do not hardcode values.
- Write **mobile-first** styles; use `min-width` media queries.
- Use the indented `.sass` syntax for new files (or `.scss` only if a new partial is complex).

## Naming Conventions

- CSS class names: lowercase hyphenated (`about-header`, `series-grid`).
- Avoid deeply nested selectors (max 3 levels).

## Performance

- Optimise images before adding them to `assets/images/`.
- Avoid inline styles; use CSS classes instead.
