<!-- AUTO-GENERATED from oms-yeti-ui app/src/docs/ads/components/table/table.mdx -->
<!-- Do not edit. Regenerate: npm run skills:sync-components (oms-yeti-ui repo root) -->

# Table

Semantic table primitives with fixed layout and themed header and body rows. Use `TableHeaderSortButton` inside a header cell when you need sort affordances (see package exports).

---

## Getting Started

```tsx
import {
  Table,
  TableBody,
  TableBodyRow,
  TableData,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableHeaderSortButton,
} from '@ads/components';
```

## Basic Usage

```tsx
import { TrashIcon } from '@phosphor-icons/react';

import {
  Icon,
  Table,
  TableBody,
  TableBodyRow,
  TableData,
  TableHead,
  TableHeader,
  TableHeaderRow,
  TableHeaderSortButton
} from '@ads/components';

export const TableExample = () => {
  const columns = [...];
  const data = [...];

  return (
    <Table>
      <TableHead>
        <TableHeaderRow>
          <TableHeader className="w-40">
            <Checkbox />
          </TableHeader>
          {columns.map((c) => (
            <TableHeader className="text-left" key={c.key}>
              <TableHeaderSortButton>{c.name}</TableHeaderSortButton>
            </TableHeader>
          ))}
          <TableHeader className="w-48" />
        </TableHeaderRow>
      </TableHead>
      <TableBody>
        {data.map((d) => (
          <TableBodyRow key={d.id}>
            <TableData>
              <Checkbox />
            </TableData>
            <TableData>{d.name}</TableData>
            <TableData>{d.publishers.join(', ')}</TableData>
            <TableData>{d.format}</TableData>
            <TableData>{d.demandChannels.join(', ')}</TableData>
            <TableData>
              <Button variant="ghost" size="compact" square>
                <Icon icon={TrashIcon} />
              </Button>
            </TableData>
          </TableBodyRow>
        ))}
      </TableBody>
    </Table>
  );
};
```

## Variants

ADS offers three variants of the table: `default`, `compact`, and `comfortable`.

### Compact

Pass variant prop with value `compact` to Table to reduce row height.

```tsx
<Table variant="compact">
  <TableBody>
    <TableBodyRow>...</TableBodyRow>
  </TableBody>
</Table>
```

### Comfortable

Pass variant prop with value `comfortable` to Table to increase row height.

```tsx
<Table variant="comfortable">
  <TableBody>
    <TableBodyRow>...</TableBodyRow>
  </TableBody>
</Table>
```

## Examples

### Sticky Column

Pass sticky prop with value `true` to TableHeader and TableData to pin the header cell and data cell for horizontal scroll (e.g. sticky thead + first column). The TableHead is sticky by default, so will be pinned for vertical scroll.

```tsx
<Table>
  <TableHead>
    <TableHeaderRow>
      <TableHeader sticky>...</TableHeader>
    </TableHeaderRow>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableData sticky>...</TableData>
      <TableData>...</TableData>
      <TableData>...</TableData>
    </TableBodyRow>
  </TableBody>
</Table>
```

### Selected

Pass checked prop with value `true` to TableData to highlight the row. Use this in conjunction with the `useBulkSelections` hook to highlight the selected rows. See [useBulkSelections](/ads/utilities/useBulkSelections) for more details.

```tsx
<Table>
  <TableBody>
    <TableBodyRow checked>...</TableBodyRow>
  </TableBody>
</Table>
```

### Sorting

Pass variant prop with value `asc` or `desc` to TableHeaderSortButton to indicate the sort direction. Use `null` to reset the sort direction. Use this in conjunction with the `useSort` hook to handle the sorting state. See [useSort](/ads/utilities/useSort) for more details.

```tsx
<Table>
  <TableHead>
    <TableHeaderRow>
      <TableHeader>
        <TableHeaderSortButton variant="asc">Name</TableHeaderSortButton>
      </TableHeader>
      <TableHeader>
        <TableHeaderSortButton>Publishers</TableHeaderSortButton>
      </TableHeader>
      <TableHeader>
        <TableHeaderSortButton>Format</TableHeaderSortButton>
      </TableHeader>
      <TableHeader>
        <TableHeaderSortButton>Demand Channels</TableHeaderSortButton>
      </TableHeader>
    </TableHeaderRow>
  </TableHead>
  <TableBody>
    <TableBodyRow>...</TableBodyRow>
  </TableBody>
</Table>
```

## API Reference

### Table

A container element that visually represents tabular data, providing structure for rows and columns.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `variant` | `"default" / "compact" / "comfortable"` | "default" | — |

### TableHead

A section element that groups together the header rows of the table.

### TableBody

A section element that groups together the body rows of the table.

### TableHeaderRow

A row element within the table header, used to organize header cells horizontally.

### TableHeader

A cell element within the header row, used to indicate column titles.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `sticky` | `boolean` | false | If true, pins the header cell for horizontal scroll (e.g. sticky thead + first column). |

### TableBodyRow

A row element within the table body, used to organize data cells horizontally. May have visual variants (e.g., compact, spacious).

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `checked` | `boolean` | false | — |
| `disabled` | `boolean` | false | — |

### TableData

A cell element within a body row, used to display individual pieces of data.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `sticky` | `boolean` | false | If true, pins the cell to the left of the scroll container (first column). |

### TableHeaderSortButton

A button element within a header cell, visually indicating that the column can be sorted.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `loading` | `boolean` | false | — |
| `variant` | `"asc" / "desc"` | "asc" | — |
