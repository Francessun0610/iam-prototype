<!-- AUTO-GENERATED from oms-yeti-ui app/src/docs/ads/components/search/search.mdx -->
<!-- Do not edit. Regenerate: npm run skills:sync-components (oms-yeti-ui repo root) -->

# Search

Pill-shaped search field with an icon slot and optional actions.

---

## Getting started

```tsx
import {
  SearchButton,
  SearchGroup,
  SearchIcon,
  SearchInputText,
} from '@ads/components';
```

## Basic usage

Compose `SearchGroup` with `SearchIcon` (decorative icon slot), `SearchInputText`, and optional `SearchButton` children for actions such as clear.

```tsx
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

import {
  Icon,
  SearchGroup,
  SearchIcon,
  SearchInputText,
} from '@ads/components';

<div className="w-full max-w-md">
  <SearchGroup>
    <SearchIcon aria-hidden>
      <Icon icon={MagnifyingGlassIcon} size="sm" />
    </SearchIcon>
    <SearchInputText
      placeholder="Search..."
      aria-label="Search"
      id="search-field"
    />
  </SearchGroup>
</div>;
```

## Examples

### Filled value and clear

Pass `filled` on `SearchGroup` when the input has text. Render a clear `SearchButton` only when there is a value.

```tsx
import { useState } from 'react';

import { MagnifyingGlassIcon, XIcon } from '@phosphor-icons/react';

import {
  Icon,
  SearchButton,
  SearchGroup,
  SearchIcon,
  SearchInputText,
} from '@ads/components';

export function SearchWithClear() {
  const [value, setValue] = useState('');
  const filled = value.length > 0;

  return (
    <div className="w-full max-w-md">
      <SearchGroup filled={filled}>
        <SearchIcon aria-hidden>
          <Icon icon={MagnifyingGlassIcon} size="sm" />
        </SearchIcon>
        <SearchInputText
          placeholder="Search..."
          aria-label="Search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        {filled && (
          <SearchButton
            type="button"
            aria-label="Clear search"
            onClick={() => setValue('')}
          >
            <Icon icon={XIcon} size="sm" />
          </SearchButton>
        )}
      </SearchGroup>
    </div>
  );
}
```

### Disabled

Set `disabled` on both `SearchGroup` and `SearchInputText`.

```tsx
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

import {
  Icon,
  SearchGroup,
  SearchIcon,
  SearchInputText,
} from '@ads/components';

<div className="w-full max-w-md">
  <SearchGroup disabled>
    <SearchIcon aria-hidden>
      <Icon icon={MagnifyingGlassIcon} size="sm" />
    </SearchIcon>
    <SearchInputText placeholder="Search..." disabled aria-label="Search" />
  </SearchGroup>
</div>;
```

## API Reference

### SearchGroup

Wraps the icon slot, field, and trailing actions. Standard HTML `div` attributes apply.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `disabled` | `boolean` | false | Disables the group and coordinates disabled styling with nested controls. |
| `filled` | `boolean` | false | When true, uses filled/rest styling (for example when the input has a value). |

### SearchInputText

Single-line text field. Standard HTML `input` attributes apply, except `size` is omitted from the prop type.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `type` | `string` | "text" | Forwarded to the underlying `<input>` (`type` attribute). |
| `autoComplete` | `string` | "off" | — |

### SearchIcon

Icon slot next to the search field (leading or trailing depending on order of children). Standard HTML `span` attributes apply.

### SearchButton

Icon-sized action control for use inside `SearchGroup`. Built on [Button](/ads/components/button); defaults to compact square ghost styling. Standard HTML `button` attributes apply.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `variant` | `"primary" / "secondary" / "tertiary" / "ghost"` | "ghost" | — |
| `size` | `"compact" / "default" / "large"` | "compact" | — |
| `square` | `boolean` | true | — |
