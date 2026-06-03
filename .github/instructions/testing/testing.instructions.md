---
applyTo: "**"
---

# Testing Instructions

## Overview

This is a Jekyll static site. Testing focuses on:

1. **HTML validation** (`htmlhint`)
2. **CSS/SCSS linting** (`stylelint`)
3. **Formatting** (`prettier`)
4. **Visual / manual browser testing**

## Running Tests & Linters

```bash
npm run format:check   # Prettier formatting check
npm run lint:html      # HTMLHint — validates HTML files
npm run lint:css       # Stylelint — validates SCSS/SASS files
```

Fix all issues before committing:

```bash
npm run format         # Auto-fix formatting
```

## Build Verification

Always verify the site builds without errors before pushing:

```bash
npm run build
```

Check `_site/` output for unexpected missing pages or broken assets.

## Manual Testing Checklist

- [ ] Homepage loads correctly at `localhost:4000`
- [ ] Navigation links work on all pages
- [ ] Blog post pages render Markdown correctly
- [ ] Images load (no broken `src` paths)
- [ ] Responsive layout works on mobile (375px) and desktop (1280px)
- [ ] RSS feed at `/feed.xml` is valid XML
- [ ] No console errors in browser DevTools
