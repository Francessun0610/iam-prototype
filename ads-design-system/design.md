# design.md

A two-layer design context document for AI-grounded product work. Operationalizes the Mission Control AI VSM SOP §8.1 (Platform layer) and §8.2 (Project layer).

The file you're reading is the **template**. Per-pilot files are forked from it and live in each project's repo, populated by the embedded designer + PM.

---

## How this document is used

Cursor, Claude, and persona agents consume `design.md` at the start of any prototyping or spec session. It is the grounding context for:
- What components exist and what they're for
- What patterns the team has agreed on
- What the project is actually trying to do
- What the user constraints and personas are
- What "good" looks like for this specific project

Without `design.md`, AI tools fall back on generic web patterns. With it, AI produces output that lands on-system the first time.

The file has two layers because the platform layer (what ADS provides) is stable and centrally owned, while the project layer (what THIS pilot needs) is fluid and per-team.

---

## Layer 1: Platform (ADS, Jen Yee owns)

**Source of truth:** [`/Design Tokens/`](./) folder in this workspace, and the Figma file [CT24nhqKpHR5I72b4pR7yn](https://figma.com/design/CT24nhqKpHR5I72b4pR7yn).

### Components

Reference: [`ads-components.json`](./ads-components.json). Machine-readable; the ADS component set with states, tokens, interactions, do/don't.

The Platform layer answers: "what building blocks are available, and what are their shapes?"

### Tokens

Reference: ADS v2.1 token JSON (published with the consumer package).

- 9-hue color ramp (Indigo brand, Blue info, Gray neutral, plus Green, Red, Amber, Cyan, Orange, Pink)
- Spacing scale
- Radius scale
- Shadow scale
- Typography (Open Sans body, MultiplaneTWDC display)

### Conventions

Reference: [`.cursorrules`](./.cursorrules). The rules file every AI tool consumes.

- State names: rest / hover / active / disabled / focus (Radix Primitives)
- Compound components as default
- Components compose components, never hand-built children
- Close buttons are neutral
- Brand is Indigo, info is Blue (not the same)
- Body is Open Sans, display is MultiplaneTWDC
- Tokens follow implementation
- Parser: kebab-case, no spaces, no cross-type aliases
- No em dashes in any output

### Accessibility bar

WCAG AA contrast verified at creation, not after. Touch targets 44x44 minimum. Focus visible on every interactive element. The semantic focus-ring family is the only correct way.

### Quality rubric

PIES (Predictable, Intuitive, Efficient, Simple). Apply at design time, code review, and AI output review.

---

## Layer 2: Project (per-pilot, embedded designer + PM own)

This is the section you populate. Each pilot forks this template into their repo and fills it in.

### Project name

[NAME]

### Owner roles

- Embedded designer: [NAME]
- PM: [NAME]
- Engineering lead: [NAME]
- Design Systems liaison: Jen Yee (or designate)

### Problem statement

[1-2 paragraphs: what user problem are we solving, why now, what does success look like]

### User personas

[Names + brief description for each persona. Reference the persona library if it exists; otherwise define here.]

Example:
- **Sarah, Campaign Manager**: manages 12 active campaigns across two brands, switches contexts frequently, escalates to traffic ops when she hits the metadata wall
- **David, Trafficker**: owns 200+ creatives in flight, lives in the spreadsheet view, uses the platform 6 hours a day

### Critical user journeys (CUJs)

[Numbered list. Each CUJ is the start-to-finish path through the product that delivers value to one persona.]

Example:
1. Campaign Manager creates a new flight from a template, reviews the auto-generated creative slots, and approves the spend allocation
2. Trafficker uploads 14 creatives in bulk, verifies metadata, and resolves the 2 that flagged validation errors

### Design constraints

[Constraints that scope the design. Hardware, regulatory, integration, performance, etc.]

Example:
- Must work on 1440px and 1920px desktop widths; mobile not in scope for Phase 1
- Read-only API access for the first release; write-back ships in Phase 2
- WCAG AA compliant (inherited from Platform layer; reaffirmed here)
- Latency budget: 200ms p50, 800ms p95 on the main grid

### Components in use

[List the ADS components this project consumes. Reference by name from `ads-components.json`. Flag any NEW components or NEW variants the project needs.]

Example:
- Sheet (size MD, side right)
- Pagination
- Toggle Group (3-segment, default size)
- Table (Phase 2 sticky header)
- Multi-Select (4 of these in the filter rail)
- Date Range Picker (1 in the global filter)
- Tooltip Small (annotations on metric tiles)
- **Flagged for new component:** multi-step form indicator (1 of 4, 2 of 4...). Not in v2.1. Proposed to Jen 2026-06-15.

### Tokens in use

[List the project-specific token usage if any. Most projects don't need this section; only fill in if there's something atypical.]

### Interaction patterns specific to this project

[Anything that's unusual or worth documenting. Keyboard shortcuts, bulk actions, undo behavior, etc.]

### Edge cases the team has agreed on

[Decisions that came out of design review. Pin them here so they don't get re-litigated.]

Example:
- Empty grid state: show illustrated empty state, not just "No results"
- Bulk select over 50 items: confirm dialog before destructive action
- Stale data: show last-refresh timestamp; do not auto-refresh during editing

### Open questions

[Live tracker. Owner + question. Resolve and move to Decided.]

Example:
- @david: how do we handle the case where two users edit the same record simultaneously? Pessimistic lock vs optimistic merge?
- @sarah-pm: is the date range scoped to fiscal quarter or calendar quarter by default?

### Decided (frozen for this pilot)

[Decisions that are settled. AI tools should treat these as ground truth alongside the Platform layer.]

Example:
- 2026-06-10: filter rail is collapsible from the left; default state is expanded on first session, persisted to localStorage thereafter
- 2026-06-12: undo is a Toast with action button, not a separate Undo Bar; aligns with rest of the org

### AI prompting notes

[Anything specific to how this pilot wants AI tools to behave. Inherits from Platform `.cursorrules` but can extend.]

Example:
- When scaffolding a new view in this project, default to a 12-column grid with a left filter rail and a top action bar.
- Date ranges in this project are always calendar (not fiscal). If unsure, ask.
- This pilot has no Mobile scope; refuse to generate Mobile breakpoints.

---

## How to keep design.md alive

The biggest failure mode is `design.md` becoming a stale snapshot that no one reads. Three rules:

1. **Update in the same session as the decision.** If the design review settles a question, update `design.md` before closing the meeting. Per the ADS rule "always update doc frames in the same session as a component change." Same principle, applied here.
2. **Re-read at the start of every prototyping session.** Especially when handing off between designers, or when AI tools are about to generate something.
3. **Prune.** If a Decided item is no longer load-bearing (project moved past that phase), move it to an archive section, not delete. Future-you will want the receipts.

---

## AI consumption pattern

When you start a Cursor or Claude session:

1. Confirm `.cursorrules` is in the repo root.
2. Confirm `ads-components.json` is in the repo root.
3. Open `design.md` in your editor (or paste its content into the AI chat as context).
4. State the task: "scaffold the X view," "convert the Y spec to JSX," "write tests for Z."

The AI now has:
- Platform layer (what's available, what the conventions are)
- Project layer (what THIS project needs, what's been decided, what's open)
- Task statement (what to do right now)

Output quality is dramatically higher with all three than with just the task statement.

---

## Maturity model (where this file fits)

Per `project_ai_pilot_vsm.md`, the knowledge-base maturity model has three levels:

- **L1 (today):** Google Drive + markdown, teams copy `design.md` into AI tools manually
- **L2 (near-term):** GitHub-backed, Yeti repo `@ads/tokens`, `design.md` versioned with the code
- **L3 (in active build):** Next.js + Markdoc site, SSO, hosts agents (Arc pattern at design.twdc.com)

This template is L1-ready. The Platform layer (everything above the "Layer 2" header) is the part that scales to L2 and L3 without per-team customization.

---

## Help

- Teams: [General](https://teams.microsoft.com/l/channel/19%3A5T7yviPT3Wby6-xOLbMHoTMlJHmmAI7vhoTTowOllfI1%40thread.tacv2/General?groupId=60a3565d-2fd3-42c8-99ba-544514dd4e9e&tenantId=56b731a8-a2ac-4c32-bf6b-616810e913c6) channel on the ADS Design System team for Platform layer questions
- Per-pilot: tag your embedded designer + Design Systems liaison
- Jen Yee: Platform layer ownership, AI grounding strategy
