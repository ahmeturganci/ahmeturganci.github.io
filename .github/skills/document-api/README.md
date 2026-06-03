# Document API Skill

Documents a Jekyll data file, Liquid variable, or site configuration option.

## Usage

Use this skill to generate clear documentation for:
- `_data/` YAML/JSON files
- `_config.yml` settings
- Custom Liquid variables passed to `_includes/`

## Data File Documentation Template

```markdown
## `_data/<filename>.yml`

**Purpose**: <what this data represents>

**Structure**:
```yaml
- key: value
  key2: value2
```

**Used in**: `_includes/<file>.html`, `_layouts/<layout>.html`

**Liquid access**: `{{ site.data.<filename> }}`
```

## Config Option Documentation Template

```markdown
## `_config.yml` — `<option>`

**Type**: `<string | boolean | list>`
**Default**: `<value>`
**Purpose**: <what this option controls>
**Example**:
```yaml
<option>: <example value>
```
```

## Guidelines

- Keep documentation in the file itself as YAML comments, or in this `document-api/` skill folder.
- Reference the exact Liquid accessor so future contributors can find usage quickly.
