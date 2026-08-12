<!-- AUTO-GENERATED from oms-yeti-ui app/src/docs/ads/components/dropdown/dropdown.mdx -->
<!-- Do not edit. Regenerate: npm run skills:sync-components (oms-yeti-ui repo root) -->

# Dropdown

An accessible dropdown menu for actions or navigation. Compose `DropdownTrigger`, `DropdownPortal`, and `DropdownContent` with items, group headers, and separators. Use `selected` on `DropdownItem` for single-select patterns.

---

## Getting Started

```tsx
import {
  Dropdown,
  DropdownContent,
  DropdownGroupHeader,
  DropdownItem,
  DropdownPortal,
  DropdownSeparator,
  DropdownTrigger,
} from '@ads/components';
```

## Basic Usage

```tsx
import {
  Button,
  Dropdown,
  DropdownContent,
  DropdownGroupHeader,
  DropdownItem,
  DropdownPortal,
  DropdownSeparator,
  DropdownTrigger,
} from '@ads/components';

export const DropdownExample = () => (
  <Dropdown>
    <DropdownTrigger asChild>
      <Button className="w-72">Open Menu</Button>
    </DropdownTrigger>
    <DropdownPortal>
      <DropdownContent sideOffset={6}>
        <DropdownGroupHeader>Sports</DropdownGroupHeader>
        <DropdownItem>Football</DropdownItem>
        <DropdownItem>Tennis</DropdownItem>
      </DropdownContent>
    </DropdownPortal>
  </Dropdown>
);
```

### Selected item

Pass `selected` on `DropdownItem` to highlight the current choice in a list.

```tsx
import { useState } from 'react';
import {
  Button,
  Dropdown,
  DropdownContent,
  DropdownGroupHeader,
  DropdownItem,
  DropdownPortal,
  DropdownTrigger,
} from '@ads/components';
export const SelectedItemExample = () => {
  const [selected, setSelected] = useState<string | undefined>('Football');
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button className="w-72">Open Menu</Button>
      </DropdownTrigger>
      <DropdownPortal>
        <DropdownContent sideOffset={6}>
          <DropdownGroupHeader>Sports</DropdownGroupHeader>
          {['Football', 'Tennis'].map((sport) => (
            <DropdownItem
              key={sport}
              selected={sport === selected}
              onClick={() => {
                setSelected(sport === selected ? undefined : sport);
              }}
            >
              {sport}
            </DropdownItem>
          ))}
          <DropdownItem>Soccer</DropdownItem>
        </DropdownContent>
      </DropdownPortal>
    </Dropdown>
  );
};
```

### Submenu

Use `DropdownSub`, `DropdownSubTrigger`, and `DropdownSubContent` for a nested menu. `getDropdownItemClassName` helps align submenu trigger styling with `DropdownItem`.

```tsx
import { ChevronRight } from 'react-feather';

import {
  Button,
  Dropdown,
  DropdownContent,
  DropdownGroupHeader,
  DropdownItem,
  DropdownPortal,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownTrigger,
  getDropdownItemClassName,
} from '@ads/components';

export const SubmenuExample = () => (
  <Dropdown>
    <DropdownTrigger asChild>
      <Button className="w-72">Open Menu</Button>
    </DropdownTrigger>
    <DropdownPortal>
      <DropdownContent sideOffset={6}>
        <DropdownGroupHeader>Sports</DropdownGroupHeader>
        <DropdownItem>Football</DropdownItem>
        <DropdownItem>Tennis</DropdownItem>
        <DropdownSub>
          <DropdownSubTrigger className={getDropdownItemClassName()}>
            <span className="w-full">Page</span>
            <ChevronRight size={16} className="text-neutral-40" />
          </DropdownSubTrigger>
          <DropdownPortal>
            <DropdownSubContent>
              <DropdownItem>Sub Menu Item 1</DropdownItem>
              <DropdownItem>Sub Menu Item 2</DropdownItem>
            </DropdownSubContent>
          </DropdownPortal>
        </DropdownSub>
      </DropdownContent>
    </DropdownPortal>
  </Dropdown>
);
```

## API Reference

### Dropdown

The root container for the dropdown, providing context for triggers, content, and submenus.

### DropdownTrigger

Wrapper for the control (for example a `Button`) that opens the menu. Use `asChild` to merge props into a custom element.

### DropdownPortal

Renders the menu surface in a portal (layering and focus behavior).

### DropdownContent

The main panel: group headers, items, separators, and nested `DropdownSub` blocks.

### DropdownGroupHeader

Non-interactive label row for grouping items.

### DropdownSeparator

Visual divider between groups.

### DropdownItem

A menu row. Supports `selected`, and `disabled`, in addition to the underlying [Radix DropdownMenu item](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item) props.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `compact` | `boolean` | — | — |
| `selected` | `boolean` | — | — |

### DropdownSub

Container for a nested submenu.

### DropdownSubTrigger

The control that opens the nested menu. Often uses `className={getDropdownItemClassName()}` (or the same options as `DropdownItem`) so it matches item height and highlight styles.

### DropdownSubContent

The panel for nested items, shown when the submenu is open.
