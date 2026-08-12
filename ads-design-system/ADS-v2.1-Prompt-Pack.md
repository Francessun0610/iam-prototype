# ADS v2.1 Engineering Prompt Pack

Cursor-ready prompt library. Six high-leverage prompts for the most common ADS-adjacent engineering tasks.

**Setup:** drop `.cursorrules` and `ads-components.json` into your repo root. Cursor and Windsurf will pick them up automatically. Then use these prompts as starting points.

For each prompt: copy/paste, edit the bracketed inputs, run.

---

## Prompt 1: Scaffold an ADS component

```
You have access to the Disney Ads Design System v2.1. The component knowledge base is at `ads-components.json`. The conventions are in `.cursorrules`.

Scaffold a [COMPONENT_NAME] for the following use case:

[USE CASE: 2-3 sentences describing what the component is for, what it composes, and what state transitions matter]

Requirements:
- Use real ADS components from the package. Do not hand-build children.
- State names: rest / hover / active / disabled / focus (Radix Primitives).
- Bind every color, spacing, and radius to a token. No hardcoded values.
- Use Open Sans for body text, MultiplaneTWDC for display.
- Close buttons (if any) are neutral, never tinted by status.
- No em dashes in any string literal or comment.

Generate the JSX, the Tailwind classes (using the ADS preset), and the TypeScript prop types. If you need to author a new token, stop and ask first; tokens follow implementation.
```

---

## Prompt 2: Convert hardcoded values to tokens

```
Audit this file (or selected code) against the ADS v2.1 token system. The component knowledge base is at `ads-components.json`.

Find every:
- Hardcoded hex color → replace with the closest ADS token
- Hardcoded spacing value (px or rem) → replace with the closest `spacing/*` token
- Hardcoded radius → replace with the closest `radius/*` token
- Hardcoded shadow → replace with the closest `shadow/*` token
- v1 color reference (steel, teal, mint, old pink, violet, neutral) → replace with v2.1 equivalent
- v1 component reference (SegmentedControl, Tooltip Tooth, Tooltip Icon/Definition variant) → replace with v2.1 equivalent

For each replacement, show me the before/after with the token name. If you're not confident about a mapping, flag it instead of guessing.

After the diff, run a final summary: how many replacements, how many flagged for review.
```

---

## Prompt 3: Audit JSX for ADS violations

```
Review this [FILE / SELECTION / PR DIFF] against the ADS v2.1 conventions in `.cursorrules`.

Specifically flag:
- Hand-built children inside compound components (Sheet, Pagination, Toggle Group, Accordion). Should be real Instances.
- State name violations: `pressed`, `focused`, `default`. Should be `active`, `focus`, `rest`.
- Status-tinted close buttons. Close is always neutral.
- Transparent table rows. Should be opaque (`color/surface/default`).
- Em dashes in string literals, JSX text, or comments.
- Direct imports from internal ADS paths instead of the package root.
- Components consuming Popover that should not (Tooltip, Dropdown.Menu).
- Components NOT consuming Popover that should (Date Picker, Multi-Select, Select).

Output as a checklist with file:line references. Group by severity: blocker, suggest, nice-to-have.
```

---

## Prompt 4: Generate a Storybook story

```
Generate a Storybook story for [COMPONENT_NAME] using the ADS v2.1 component package.

Cover the full variant matrix:
- All states (rest, hover, active, disabled, focus where applicable)
- All Open/Closed combinations (if a popover-family component)
- All Size variants (sm, md, lg where applicable)
- All semantic variants (primary, secondary, ghost, danger, etc.)
- A composition example showing the component in its typical context

Use the ADS Storybook conventions:
- CSF 3 format
- TypeScript prop types from the component package
- args at the story level so the Controls panel works
- Decorator that wraps in the ADS theme provider if needed

Include a brief docs block above the default export explaining what the component is for and which other ADS components it commonly composes with.
```

---

## Prompt 5: Write a component test

```
Write Vitest + React Testing Library tests for [COMPONENT_NAME].

Cover:
- Rest state renders without errors
- All variants render with their distinguishing prop
- Disabled state: blocks pointer events, has aria-disabled
- Focus state: visible focus ring (verify via class or computed style)
- Hover state (if synthetic events are practical for this component)
- Open/Closed state transitions (if applicable)
- Keyboard interactions:
  - Enter and Space activate triggers
  - Escape closes overlays (Sheet, Modal, Popover)
  - Arrow keys navigate within compound components (Pagination, Toggle Group, Menu)
- Dismiss handlers fire correctly (close buttons, backdrop clicks)
- Accessibility:
  - role attributes match what Radix Primitives produces
  - aria-label or aria-labelledby is set
  - Color contrast is not tested at unit level (handled by accessibility audit skill)

Use the ADS component imports from the package, not from internal paths.
```

---

## Prompt 6: Migrate a v1 file to v2.1

```
Migrate this file from ADS v1 to v2.1. The migration guide is at `ADS-v2.1-Migration-Guide.md`. The component knowledge base is at `ads-components.json`.

Apply these renames in order:
1. Color hues: violet → indigo, neutral → gray, steel → blue (where info), removed: teal, mint, old pink
2. Semantic remappings: warning yellow → orange, info steel → blue
3. Token namespace: whitespace/* → spacing/*
4. Component renames: SegmentedControl → ToggleGroup, Tooltip Tooth → Tooltip Arrow, Tooltip Icon → Tooltip Small, Tooltip Definition → Tooltip Large

Apply these structural refactors:
1. Sheet: split into <Sheet> + <SheetHeader> + <SheetFooter> as real instances
2. Pagination: replace <PaginationNav> + <PaginationCell> with <PaginationItem variant="...">
3. Toggle Group: wrap segments in <ToggleGroupItem>
4. Date Picker: split into the family (Date Cell atom + composites) where the file uses different shapes
5. Popover: refactor bespoke floating panels (except Tooltip, except Dropdown.Menu) to consume the unified Popover

After the diff, run the verification checklist from §8 of the Migration Guide. Report:
- How many renames applied
- How many structural refactors applied
- How many items flagged for human review (ambiguous mappings)
- Whether the file passes the token-audit conceptually
```

---

## Bonus: Quick prompts (one-liners)

For the small, common asks. Each one is a single message you can paste.

### Find off-system colors
```
Audit this file for hardcoded colors. Replace each with the closest ADS v2.1 token from ads-components.json. Show me the diff.
```

### Generate Do/Don't list for a component
```
Generate a Do/Don't list for [COMPONENT] using the conventions in .cursorrules and the patterns in ads-components.json. 5 Do items, 5 Don't items. Prose style. No em dashes.
```

### Convert a v1 spec to v2.1 vocabulary
```
This spec was written against ADS v1. Rewrite it using v2.1 component names, state names, and token namespaces. Flag anything that needs new components or new tokens (do not invent).
```

### Write a PR description
```
Write a PR description for this diff. Sections: Summary (1 sentence), What changed (bullets, component names from ads-components.json), Token audit (any new/removed tokens), Testing notes (states verified), Migration impact (if breaking).
```

### Critique a component design via PIES
```
Review this component (or screenshot) using the PIES rubric (Predictable, Intuitive, Efficient, Simple). For each lens, give a one-line verdict and a one-line reason. End with the single most important thing to address.
```

---

## How to use this pack

1. **Start with Prompt 3 (audit)** on any existing file. It surfaces what you actually need to change.
2. **Use Prompt 2 (token conversion)** for the surface-level cleanup.
3. **Use Prompt 6 (full migration)** if the file is structurally v1.
4. **Use Prompt 1 (scaffold)** when starting a new component.
5. **Use Prompts 4 and 5** to round out the Storybook + test coverage as you go.

The prompts assume:
- You're in Cursor or Windsurf with `.cursorrules` loaded
- `ads-components.json` is in the repo root or referenced in your AI context
- You have the ADS v2.1 component package installed

If any of those isn't true, fix it before running prompts; the output quality drops sharply without the grounding files.

---

## Contributing back

If you discover a prompt that works particularly well, post it in [AI Tooling](https://teams.microsoft.com/l/channel/19%3A395b8cd7ca564fc9be3228eca9a755a5%40thread.tacv2/AI%20Tooling?groupId=60a3565d-2fd3-42c8-99ba-544514dd4e9e&tenantId=56b731a8-a2ac-4c32-bf6b-616810e913c6). We'll fold high-leverage ones into the next version of this pack.

Avoid: prompts that hardcode component-specific behavior (those drift). Favor: prompts that lean on the knowledge base and the rules file as ground truth.
