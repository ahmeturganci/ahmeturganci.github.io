# Generate Mock Skill

Creates mock data and stub content for testing layouts and includes during development.

## Usage

Use this skill when you need placeholder content to test a new layout, component, or data-driven include.

## Mock Blog Post

Create `_posts/YYYY-MM-DD-mock-post.md`:

```markdown
---
layout: post
title: "Mock Post Title"
date: 2026-01-01
categories: [test]
tags: [mock]
---

This is mock content for layout testing.

Lorem ipsum dolor sit amet, consectetur adipiscing elit.


Excerpt ends here (triple blank line above).

Rest of the post body goes here.
```

> **Note**: Remove mock posts before merging to the main branch.

## Mock Data File

Create `_data/mock-<name>.yml`:

```yaml
- title: Mock Item 1
  description: Placeholder description
  url: "#"

- title: Mock Item 2
  description: Another placeholder
  url: "#"
```

Access in Liquid: `{% for item in site.data.mock-<name> %}`

## Cleanup

Always delete mock files and data before pushing to production. Mock files should be created in a development branch only.
