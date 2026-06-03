---
mode: agent
tools:
  - codebase
  - editFiles
  - runCommands
description: Refactor existing code in the Jekyll blog site for clarity or maintainability.
---

# Refactor

Refactor the following code:

**Target**: $SELECTION_OR_INPUT

## Goals

- Improve readability and maintainability without changing external behaviour.
- Eliminate duplication (e.g., repeated HTML blocks → shared `_includes/` partial).
- Simplify complex Liquid logic.
- Consolidate SCSS — remove unused styles, merge related rules.

## Steps to Follow

1. Read and understand the current implementation.
2. Identify specific refactoring opportunities (duplication, complexity, naming).
3. Apply changes incrementally.
4. Verify nothing broke:
   ```bash
   npm run format
   npm run lint:html
   npm run lint:css
   npm run build
   ```
5. Summarise what was improved and why.

## Constraints

- Do **not** change behaviour — only structure.
- Do **not** rename CSS classes that are used in multiple places without updating all references.
- Keep commits small and focused.
