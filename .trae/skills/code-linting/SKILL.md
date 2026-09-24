---
name: "code-linting"
description: "Checks code quality, lint issues, and refactor hygiene. Invoke when refactoring code, cleaning up implementation details, or reviewing code for maintainability."
---

# Code Linting

Use this skill to improve code quality during refactors and cleanup work.

Invoke this skill when:
- the user asks to refactor code
- the user wants cleaner, more maintainable code
- you are finishing an implementation and want to check code hygiene
- a change needs lint-minded review for readability, consistency, and small correctness risks

## Goals

- Reduce noise and duplication
- Improve naming, structure, and readability
- Spot obvious code smells and maintainability issues
- Encourage targeted validation after changes
- Prefer small, safe refactors over broad rewrites

## Workflow

1. Read the relevant files before changing anything.
2. Identify the highest-value cleanup opportunities first.
3. Prefer extracting reusable helpers or components when it reduces duplication.
4. Keep behavior unchanged unless the task explicitly allows functional changes.
5. After edits, run available diagnostics or builds to confirm the refactor is clean.

## Refactoring Heuristics

- Remove duplicated logic when a shared abstraction is clearer than repetition.
- Simplify overly large components by moving shared UI into focused subcomponents.
- Replace unclear names with direct, intention-revealing names.
- Keep props and data structures small and well-scoped.
- Avoid premature abstraction when a pattern only appears once.
- Preserve existing user-facing behavior unless asked to change it.

## Validation

- Run diagnostics on edited files when possible.
- Run the project build or relevant checks after substantive edits.
- If a refactor introduces layout or runtime risk, do a targeted verification pass.

## Output Style

- Summarize the structural improvements clearly.
- Call out any residual code quality issues if they were intentionally left alone.
- Mention what was verified after the refactor.
