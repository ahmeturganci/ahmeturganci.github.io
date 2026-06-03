# Create Slice Skill

Creates a new content **slice** — a self-contained section of a page with its own HTML partial and SCSS styles.

## What is a Slice?

A "slice" is a full-width page section (e.g., hero, about, blog feed, series grid) that can be independently styled and placed within a layout.

## Steps

1. Create `_includes/<slice-name>.html`:
   ```liquid
   <section class="<slice-name>" data-testid="<slice-name>">
     <!-- slice content -->
   </section>
   ```

2. Add a new SCSS partial `_sass/_<slice-name>.sass` (or add to `classes.sass` for smaller slices):
   ```sass
   .<slice-name>
     // styles
   ```

3. Import the partial in `_sass/index.sass`:
   ```sass
   @use '<slice-name>'
   ```

4. Insert the include into the relevant layout file:
   ```liquid
   {% include <slice-name>.html %}
   ```

5. Validate: `npm run lint:html && npm run lint:css && npm run build`
