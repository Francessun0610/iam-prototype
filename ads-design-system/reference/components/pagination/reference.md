<!-- AUTO-GENERATED from oms-yeti-ui app/src/docs/ads/components/pagination/pagination.mdx -->
<!-- Do not edit. Regenerate: npm run skills:sync-components (oms-yeti-ui repo root) -->

# Pagination

The pagination bar allows users to navigate through large data sets that are split across multiple pages. It provides clear controls to move between pages, indicates the current page, and communicates the total number of available pages or results.

---

## Getting Started

```tsx
import {
  Pagination,
  PaginationEllipsis,
  PaginationGroup,
  PaginationItem,
  PaginationLink,
  PaginationText,
} from '@ads/components';
```

## Basic Usage

```tsx
import { useState } from 'react';

import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';

import {
  Icon,
  Pagination,
  PaginationEllipsis,
  PaginationGroup,
  PaginationItem,
  PaginationLink,
} from '@ads/components';

export function PaginationBar() {
  const [selected, setSelected] = useState(1);

  return (
    <Pagination className="justify-center">
      <PaginationGroup>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Previous page">
            <Icon icon={CaretLeftIcon} />
          </PaginationLink>
        </PaginationItem>
        {[1, 2, 3].map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href="#" selected={page === selected}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" aria-label="Next page">
            <Icon icon={CaretRightIcon} />
          </PaginationLink>
        </PaginationItem>
      </PaginationGroup>
    </Pagination>
  );
}
```

## Examples

### With usePagination

The **`usePagination`** hook from **`@yeti/utilities`** derives **`pageButtons`**, prev/next handlers, and disabled flags from **`total`**, **`size`**, and the current **`page`**. See **[usePagination](/ads/utilities/usePagination)** for the full API.

```tsx
import { useState } from 'react';

import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';

import {
  Icon,
  Pagination,
  PaginationEllipsis,
  PaginationGroup,
  PaginationItem,
  PaginationLink,
} from '@ads/components';

import { ELLIPSIS, usePagination } from '@yeti/utilities';

export function PaginationExample() {
  const [page, setPage] = useState(1);

  const {
    pageButtons,
    onNextPageButtonClick,
    onPrevPageButtonClick,
    isNextPageButtonDisabled,
    isPrevPageButtonDisabled,
  } = usePagination({
    total: 47,
    size: 5,
    page,
    onPageChange: setPage,
    maxPageButtons: 5,
  });

  return (
    <Pagination className="justify-center">
      <PaginationGroup>
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Previous page"
            disabled={isPrevPageButtonDisabled}
            onClick={(e) => {
              e.preventDefault();
              onPrevPageButtonClick();
            }}
          >
            <Icon icon={CaretLeftIcon} />
          </PaginationLink>
        </PaginationItem>
        {pageButtons.map((btn, index) => (
          <PaginationItem key={`${btn.label}-${index}`}>
            {btn.label === ELLIPSIS ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                selected={btn.page === page}
                aria-current={btn.page === page ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  btn.onClick();
                }}
              >
                {btn.label}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationLink
            href="#"
            aria-label="Next page"
            disabled={isNextPageButtonDisabled}
            onClick={(e) => {
              e.preventDefault();
              onNextPageButtonClick();
            }}
          >
            <Icon icon={CaretRightIcon} />
          </PaginationLink>
        </PaginationItem>
      </PaginationGroup>
    </Pagination>
  );
}
```

### Composition

Compose `Pagination` with `PaginationGroup` and `PaginationText`, and optionally with a `Select` for extra controls.

```tsx
import { useId, useState } from 'react';

import {
  Icon,
  InputButtons,
  InputText,
  InputTextGroup,
  Pagination,
  PaginationEllipsis,
  PaginationGroup,
  PaginationItem,
  PaginationLink,
  PaginationText,
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
  SelectMenu,
  SelectMenuList,
  SelectOption,
} from '@ads/components';

type PaginationSelectProps = {
  className?: string;
  options: { id: string; label: string }[];
  value: { id: string; label: string };
  onChange: (value: { id: string; label: string }) => void;
};

const PaginationSelect = ({
  className,
  options,
  value,
  onChange,
}: PaginationSelectProps) => {
  const inputId = useId();
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <InputTextGroup className={className}>
          <InputText
            id={inputId}
            readOnly
            placeholder="Choose one"
            value={value?.label ?? ''}
          />
          <InputButtons aria-hidden>
            <Icon
              icon={CaretDownIcon}
              size="sm"
              className="text-text-tertiary"
            />
          </InputButtons>
        </InputTextGroup>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent sideOffset={4} asChild>
          <SelectMenu value={value?.id}>
            <SelectMenuList>
              {options.map((option) => (
                <SelectOption
                  key={option.id}
                  value={option.id}
                  selected={value?.id === option.id}
                  onSelect={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                >
                  {option.label}
                </SelectOption>
              ))}
            </SelectMenuList>
          </SelectMenu>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
};

export function PaginationWithControls() {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <Pagination>
      <PaginationGroup>
        <PaginationText>Show</PaginationText>
        <PaginationSelect
          className="w-70"
          value={{
            id: itemsPerPage.toString(),
            label: itemsPerPage.toString(),
          }}
          onChange={(value) => setItemsPerPage(Number(value.id))}
          options={[10, 20, 30, 40, 50].map((option) => ({
            id: option.toString(),
            label: option.toString(),
          }))}
        />
        <PaginationText>of 100 items</PaginationText>
      </PaginationGroup>
      <PaginationGroup>{/* middle group: page links */}</PaginationGroup>
      <PaginationGroup>
        <PaginationText>Go to page</PaginationText>
        <PaginationSelect
          className="w-70"
          value={{
            id: selected.toString(),
            label: selected.toString(),
          }}
          onChange={(value) => setPage(Number(value.id))}
          options={[1, 2, 3].map((option) => ({
            id: option.toString(),
            label: option.toString(),
          }))}
        />
      </PaginationGroup>
    </Pagination>
  );
}
```

## API Reference

### Pagination

The main container for the pagination bar, containing the pagination group and pagination text.

### PaginationText

A styled inline text element for any supplementary copy inside the pagination bar (labels, counts, hints, and so on).

### PaginationGroup

A container for grouping pagination controls, typically containing the previous and next page links.

### PaginationLink

A styled anchor element for pagination navigation, typically used for the previous and next page links.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `selected` | `boolean` | — | — |
| `disabled` | `boolean` | — | — |

### PaginationEllipsis

A component for displaying an ellipsis in the pagination bar.
