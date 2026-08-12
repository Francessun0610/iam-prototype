# ADS component reference (imported 2026-08-09)

Curated from three ZIP files the user uploaded for the Users List layout
task: `ads-vite-ui-scaffold (1).zip`, `ads-prototyping.zip`,
`ads-components.zip`. This folder holds only the parts of those archives
that are actual **design-system documentation** — component contracts
(props, variants, states, a11y notes) generated from ADS's own React
library (`@ads/components`, `oms-yeti-ui`). It supplements, and does not
replace, `../ads-components.json` and `../ADS-v2.1-Prompt-Pack.md`.

## What was inspected

| ZIP | Contents | Verdict |
| --- | --- | --- |
| `ads-components.zip` | `ads-components/<name>/{SKILL.md,reference.md}` — API-doc pairs for ~30 ADS components (accordion, alert, breadcrumb, button, card, checkbox, chip, date-picker, dropdown, error, field, file-upload, form, icon, input, modal, navigation, pagination, popover, progress-bar, radio, search, select, sheet, skeleton, table, tabs, time-picker, toast, toggle, toggle-group, tooltip) | Reference docs only — no compiled CSS/JS/tokens. Relevant subset copied in (see below). |
| `ads-prototyping.zip` | Same `ads-components/*` docs, plus `ads-prototyping/*` and `scaffold-*/SKILL.md` — Claude Agent Skill instructions for scaffolding **new React/TSX routes, tables, and forms** against `@ads/components` | Component docs overlap with the above (already covered). The `scaffold-*` recipes are React/Vite code-generation instructions — not applicable to this repo's vanilla HTML/CSS/JS stack. **Not copied in.** |
| `ads-vite-ui-scaffold (1).zip` | A full React + TypeScript + Vite application: `src/components/*` (BreadcrumbLink, DropdownSelect, MultiSelect, Navigation, Table/EmptyState/ErrorState/LoadingState, Toast, Tooltip, …), `src/pages/*`, test files, coverage reports, `.husky`, `package.json`, `commitlint.config.js`, etc. | This is a **different runtime** (React/TS/Vite/npm) from this repo (static HTML + vanilla JS + no bundler). Copying its source would introduce a second language/framework and a build pipeline this repo doesn't have — explicitly out of scope ("use the project's existing language, framework, type system, and file structure"). Used only to cross-check interaction conventions while implementing the Users List (e.g. confirming ADS's own `Table` marks a selected row via a `checked` prop rather than a color-only cue). **Not copied in.** Its `src/assets/img/disney-advertising.svg` was also compared against, but not swapped in for, this repo's existing navbar brand asset — the two already matched closely enough that changing assets was out of scope for this task. |

## What was copied in, and why

`reference/components/<name>/reference.md` for the components most
relevant to IAM's remaining/near-term ADS work: `checkbox`, `table`,
`pagination`, `search`, `button`, `field`, `form`, `dropdown`, `select`,
`tooltip`, `toast`, `alert`. Plus the top-level component index
(`reference/components/README.md`).

These directly informed the Users List selection/export implementation:
- **Checkbox** — confirmed the `indeterminate` prop pattern the header
  select-all checkbox already needed to match.
- **Table** — confirmed ADS's own convention for a selected row
  (`TableBodyRow checked` → highlighted background), which is exactly
  what this repo's existing `.tbl tbody tr.is-selected` /
  `[aria-selected="true"]` rule (already present in `styles.css` before
  this task) already implements — reused as-is, no new CSS pattern
  introduced.

Not copied: the ~20 remaining component folders from the zips (accordion,
chip, date-picker, file-upload, modal, navigation, popover, progress-bar,
radio, sheet, skeleton, tabs, toggle, toggle-group, icon, input,
breadcrumb, card, error) — none were needed for this task, and dumping
every component "just in case" would bloat this reference folder without
a concrete consumer. They remain available in the original ZIPs/extracted
folder on the user's Desktop if a future task needs them; re-run the same
copy pattern (`cp .../ads-components/<name>/reference.md
ads-design-system/reference/components/<name>/`) rather than re-copying
everything at once.

## What this does *not* change

- No existing IAM component was replaced by a ZIP-provided implementation
  — there is no ZIP-provided *implementation* usable here, only docs.
- `ads-components.json` / `ADS-v2.1-Prompt-Pack.md` / `design.md` are
  unchanged; this folder is additive, standalone reference material.
- No React/TS/npm tooling, coverage reports, OS metadata, or nested ZIPs
  were brought into the repo.
