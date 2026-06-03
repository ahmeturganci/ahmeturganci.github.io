---
applyTo: "**/*.html"
---

# Data Test ID Instructions

## Purpose

`data-testid` attributes make HTML elements reliably selectable in automated tests and accessibility audits without coupling to CSS classes or text content.

## Naming Convention

- Format: `data-testid="<component>-<element>"`
- Use lowercase hyphenated strings.
- Be descriptive and stable — do not use dynamic values.

### Examples

```html
<nav data-testid="main-nav">
<ul data-testid="nav-links">
<article data-testid="blog-post">
<header data-testid="post-header">
<section data-testid="about-section">
<div data-testid="timeline-entry">
<ul data-testid="series-grid">
<footer data-testid="site-footer">
```

## When to Add

- Add `data-testid` to **key structural elements** (navigation, post container, section headers).
- Do **not** add to every element — only those likely to be targeted in tests or audits.
- Liquid includes that render a discrete UI component should expose at least one `data-testid`.

## When Not to Add

- Decorative elements (icons, spacers).
- Inline text spans.
- Elements with no meaningful interactive or structural role.
