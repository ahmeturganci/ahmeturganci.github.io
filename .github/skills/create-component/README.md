# Create Component Skill

Scaffolds a new reusable HTML/Liquid component (include) for the Jekyll blog.

## Usage

Invoke this skill when you need a new `_includes/` partial.

## Template

```liquid
{%- comment -%}
  _includes/<component-name>.html
  Usage: {% include <component-name>.html %}
{%- endcomment -%}

<section data-testid="<component-name>">
  <!-- component markup here -->
</section>
```

## Steps

1. Create `_includes/<component-name>.html` using the template above.
2. Add corresponding styles to the appropriate `_sass/` partial.
3. Include the component in the target layout or page:
   ```liquid
   {% include <component-name>.html %}
   ```
4. Run `npm run lint:html` and `npm run lint:css` to validate.

## Conventions

- Use semantic HTML5 elements.
- Add a `data-testid` attribute to the root element.
- Keep logic minimal — data should come from front matter or `_data/` files.
