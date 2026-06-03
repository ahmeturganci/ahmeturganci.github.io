---
mode: agent
tools:
  - codebase
  - editFiles
  - runCommands
description: Diagnose and fix a bug in the Jekyll blog site.
---

# Bug Fix

Investigate and fix the following bug:

**Bug description**: $SELECTION_OR_INPUT

## Steps to Follow

1. Reproduce the issue by reading the relevant files and understanding the current behaviour.
2. Identify the root cause — check `_includes/`, `_layouts/`, `_sass/`, and `_config.yml` as needed.
3. Apply the minimal change required to fix the bug.
4. Run linters and build to confirm no regressions:
   ```bash
   npm run format:check
   npm run lint:html
   npm run lint:css
   npm run build
   ```
5. Briefly describe what caused the bug and what you changed.
