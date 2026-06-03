# Generate Endpoint Skill

For a static Jekyll site, "endpoints" are **generated URLs** — pages, feeds, and data files served by GitHub Pages.

## Usage

Use this skill to scaffold a new public URL (page, collection, or feed).

## Page / Endpoint Types

| Type | How to create | Resulting URL |
|---|---|---|
| Standalone page | Create `<name>.html` or `<name>.md` at root | `/<name>/` |
| Blog post | Add `_posts/YYYY-MM-DD-<slug>.md` | `/<slug>/` |
| Collection | Configure in `_config.yml`, add `_<collection>/` folder | `/<collection>/<item>/` |
| Custom feed | Add a Liquid file with `permalink` front matter | `/<path>.xml` or `/<path>.json` |

## Scaffold a New Page

1. Create `<page-name>.html` at the repository root:
   ```html
   ---
   layout: default
   title: "<Page Title>"
   permalink: /<page-name>/
   ---

   <article>
     <h2>{{ page.title }}</h2>
     <!-- content -->
   </article>
   ```

2. Add it to navigation in `_config.yml` if needed:
   ```yaml
   navigation:
     - { file: "<page-name>.html" }
   ```

3. Run `npm run build` to verify the page is generated in `_site/`.
