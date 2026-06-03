---
applyTo: "**"
---

# Architecture Instructions

## Overview

This is a **Jekyll-based static site** hosted on GitHub Pages. It serves as Ahmet Urgancı's personal blog and portfolio.

## Directory Structure

| Path | Purpose |
|---|---|
| `_config.yml` | Site-wide settings, plugins, navigation, social links |
| `_layouts/` | Full-page Liquid templates (`default`, `post`, etc.) |
| `_includes/` | Reusable HTML partials (header, footer, menu, timeline) |
| `_posts/` | Blog posts in Markdown (`YYYY-MM-DD-slug.md`) |
| `_sass/` | SCSS/SASS partials (imported via `_sass/index.sass`) |
| `assets/` | Static assets: images, compiled CSS, JavaScript |
| `_data/` | Structured YAML/JSON data consumed via Liquid |
| `scripts/` | Node.js helper scripts (e.g., cover image generator) |

## Build Pipeline

- **Development**: `npm run dev` → `bundle exec jekyll serve --livereload`
- **Production**: `npm run build` → `JEKYLL_ENV=production bundle exec jekyll build`
- **Output**: compiled site emitted to `_site/` (excluded from git)

## Plugins

- `jekyll-feed` — generates `/feed.xml`
- `jekyll-seo-tag` — injects `<meta>` SEO tags
- `jekyll-sitemap` — generates `/sitemap.xml`

## Key Conventions

- All pages have YAML front matter (`layout`, `title`).
- Posts must follow the `YYYY-MM-DD-slug.md` filename format.
- Navigation is configured in `_config.yml` under `navigation`.
- Social links are configured in `_config.yml` under `external`.
