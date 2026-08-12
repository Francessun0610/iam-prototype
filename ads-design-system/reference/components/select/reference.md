<!-- AUTO-GENERATED from oms-yeti-ui app/src/docs/ads/components/select/select.mdx -->
<!-- Do not edit. Regenerate: npm run skills:sync-components (oms-yeti-ui repo root) -->

# Select

Build field-style pickers by composing [`Field`](/ads/components/field), a read-only [`InputTextGroup`](/ads/components/input#inputtextgroup), `Popover`, and cmdk menu primitives (`SelectMenu`, `SelectMenuList`, `SelectOption`). Use [`InputButtons`](/ads/components/input#inputbuttons) for the chevron (or other trailing icons) and `SelectMessage` for empty states. The optional `Select` wrapper adds vertical spacing when you are not using `Field`.

---

## Getting started

```tsx
import {
  Field,
  FieldLabel,
  Icon,
  InputButtons,
  InputText,
  InputTextGroup,
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
  SelectOption,
  SelectMenu,
  SelectMenuList,
  SelectMessage,
} from '@ads/components';
```

## Basic usage

Wrap the label and control in `Field`. Keep `InputText` `readOnly` and show the chosen option label in `value`.

Use `PopoverContent` to render the `SelectMenu`, which handles keyboard navigation (↑/↓, Enter) and `value` to sync the active item with your selection. Each `SelectOption` needs a `value` and `onSelect`.

Show the current choice with an optional leading `Icon` (`CheckIcon`) inside the selected row.

```tsx
import { useId, useState } from 'react';

import { CaretDownIcon, CheckIcon } from '@phosphor-icons/react';

import {
  Field,
  FieldLabel,
  Icon,
  InputButtons,
  InputText,
  InputTextGroup,
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
  SelectOption,
  SelectMenu,
  SelectMenuList,
} from '@ads/components';

type Option = { id: string; label: string };

export function SingleSelect() {
  const inputId = useId();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Option | undefined>();

  return (
    <Field>
      <FieldLabel htmlFor={inputId} size="sm">
        Sport
      </FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <InputTextGroup>
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
                      setValue(option);
                      setOpen(false);
                    }}
                  >
                    {value?.id === option.id && (
                      <Icon icon={CheckIcon} size="sm" />
                    )}
                    {option.label}
                  </SelectOption>
                ))}
              </SelectMenuList>
            </SelectMenu>
          </PopoverContent>
        </PopoverPortal>
      </Popover>
    </Field>
  );
}
```

## Examples

### Multi select

Track an array in state and render a `Checkbox` beside each `SelectOption`.

```tsx
import { useId, useState } from 'react';

import { CaretDownIcon } from '@phosphor-icons/react';

import {
  Checkbox,
  Field,
  FieldLabel,
  Icon,
  InputButtons,
  InputText,
  InputTextGroup,
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
  SelectOption,
  SelectMenu,
  SelectMenuList,
  SelectMessage,
} from '@ads/components';

type Option = { id: string; label: string };

export function MultiSelect() {
  const inputId = useId();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Option[]>([]);

  return (
    <Field>
      <FieldLabel htmlFor={inputId} size="sm">
        Sports
      </FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <InputTextGroup>
            <InputText
              id={inputId}
              readOnly
              placeholder="Choose options"
              value={value.length ? `${value.length} selected` : ''}
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
            <SelectMenu>
              <SelectMenuList>
                {options.map((option) => (
                  <SelectOption
                    key={option.id}
                    value={option.id}
                    selected={isSelected(option)}
                    onSelect={() => toggle(option)}
                  >
                    <Checkbox
                      checked={isSelected(option)}
                      readOnly
                      tabIndex={-1}
                    />
                    <span>{option.label}</span>
                  </SelectOption>
                ))}
              </SelectMenuList>
            </SelectMenu>
          </PopoverContent>
        </PopoverPortal>
      </Popover>
    </Field>
  );
}
```

### Empty state

Render `SelectMessage` inside `PopoverContent` to display a message when there are no options.

```tsx
import { useId, useState } from 'react';

import { CaretDownIcon } from '@phosphor-icons/react';

import {
  Field,
  FieldLabel,
  Icon,
  InputButtons,
  InputText,
  InputTextGroup,
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
  SelectMessage,
} from '@ads/components';

export function EmptySelect() {
  const inputId = useId();
  const [open, setOpen] = useState(false);

  return (
    <Field>
      <FieldLabel htmlFor={inputId} size="sm">
        Sport
      </FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <InputTextGroup>
            <InputText id={inputId} readOnly placeholder="Choose one" />
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
          <PopoverContent sideOffset={4}>
            <SelectMessage>No options available</SelectMessage>
          </PopoverContent>
        </PopoverPortal>
      </Popover>
    </Field>
  );
}
```

### Select with search

Add a search input to the `SelectMenu` to filter the options.

```tsx
'use client';

import React, { useId, useMemo, useState } from 'react';

import {
  Button,
  Checkbox,
  cnMerge,
  Field,
  FieldLabel,
  Icon,
  InputButton,
  InputButtons,
  InputButtonsDivider,
  InputSize,
  InputTextGroup,
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
  SelectMenu,
  SelectMenuList,
  SelectMessage,
  SelectOption,
} from '@ads/components';
import { CaretDownIcon, XIcon } from '@phosphor-icons/react';

import { FIELD_INPUT_GROUP_CLASS } from '@/components/InputField/inputFieldClasses';
import InputText from '@/components/InputText';
import {
  SELECT_MENU_LIST_CLASS,
  SELECT_POPOVER_CONTENT_CLASS,
  SELECT_POPOVER_MENU_CLASS,
} from '@/components/Select/selectPopoverClasses';
import type { SelectOption as SelectOptionModel } from '@/models/SelectOption';

export interface MultiSelectProps {
  className?: string;
  inputGroupClassName?: string;
  label?: string;
  options: SelectOptionModel[];
  placeholder?: string;
  size?: InputSize;
  value?: SelectOptionModel[];
  onChange?: (options: SelectOptionModel[]) => void;
}

export function MultiSelect({
  className,
  inputGroupClassName,
  label = 'Select',
  options,
  placeholder = 'Select',
  size = 'default',
  value = [],
  onChange,
}: MultiSelectProps) {
  const inputId = useId();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const selectedOptions = Array.isArray(value) ? value : [];
  const selectedIds = useMemo(
    () => new Set(selectedOptions.map((option) => String(option.id))),
    [selectedOptions],
  );

  const displayText =
    selectedOptions.length > 0 ? `${selectedOptions.length} selected` : '';

  const hasSelection = selectedOptions.length > 0;

  const filteredOptions = useMemo(() => {
    if (!query.trim()) return [...options];
    const normalizedQuery = query.trim().toLowerCase();
    return options.filter((option) =>
      option.label.toLowerCase().includes(normalizedQuery),
    );
  }, [options, query]);

  const showDeselectAll =
    options.length > 0 &&
    options.every((option) => value.some(({ id }) => id === option.id));

  const handleToggle = (option: SelectOptionModel) => {
    if (!onChange) return;
    const optionId = String(option.id);
    const nextSelectedOptions = selectedIds.has(optionId)
      ? selectedOptions.filter(
          (selectedOption) => String(selectedOption.id) !== optionId,
        )
      : [...selectedOptions, option];
    onChange(nextSelectedOptions);
  };

  const handleClear = () => {
    onChange?.([]);
  };

  const handleSelectAll = () => {
    if (typeof onChange === 'function') {
      const selectedOptionIds = new Set(value.map(({ id }) => id));
      const unselectedDisplayedOptions = options.filter(
        ({ id }) => !selectedOptionIds.has(id),
      );
      onChange([...value, ...unselectedDisplayedOptions]);
    }
  };

  const handleDeselectAll = () => {
    if (typeof onChange === 'function') {
      const displayedOptionIds = new Set(options.map(({ id }) => id));
      onChange(value.filter(({ id }) => !displayedOptionIds.has(id)));
    }
  };

  const handleCloseAutoFocus = () => {
    setQuery('');
  };

  return (
    <Field className={className}>
      {label && (
        <FieldLabel htmlFor={inputId} size="sm">
          {label}
        </FieldLabel>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <InputTextGroup
            size={size}
            className={cnMerge(
              'min-w-60',
              FIELD_INPUT_GROUP_CLASS,
              inputGroupClassName,
            )}
          >
            <InputText
              id={inputId}
              readOnly
              placeholder={placeholder}
              value={displayText}
              onClick={() => setOpen(true)}
            />
            <InputButtons>
              <InputButton
                type="button"
                aria-hidden={!hasSelection}
                aria-label="Clear selection"
                className={cnMerge(
                  !hasSelection && 'invisible pointer-events-none',
                )}
                tabIndex={hasSelection ? 0 : -1}
                onClick={(event) => {
                  event.stopPropagation();
                  handleClear();
                }}
              >
                <Icon icon={XIcon} />
              </InputButton>
              <InputButtonsDivider
                className={cnMerge(!hasSelection && 'invisible')}
              />
              <Icon
                aria-hidden
                icon={CaretDownIcon}
                size="sm"
                className="text-text-tertiary"
              />
            </InputButtons>
          </InputTextGroup>
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverContent
            className={SELECT_POPOVER_CONTENT_CLASS}
            onCloseAutoFocus={handleCloseAutoFocus}
            sideOffset={4}
            side="bottom"
            onWheel={(event) => event.stopPropagation()}
            onMouseDown={(event) => event.preventDefault()}
          >
            <SelectMenu
              shouldFilter={false}
              className={SELECT_POPOVER_MENU_CLASS}
            >
              <div className="px-12 py-8">
                <InputTextGroup size={size}>
                  <InputText
                    autoFocus
                    placeholder="Search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </InputTextGroup>
              </div>
              {options.length > 0 && (
                <div className="px-12 pb-8">
                  <Button
                    className="justify-center w-full"
                    size="compact"
                    variant="tertiary"
                    onClick={
                      showDeselectAll ? handleDeselectAll : handleSelectAll
                    }
                  >
                    {showDeselectAll ? 'Deselect All' : 'Select All'}
                  </Button>
                </div>
              )}
              <SelectMenuList className={SELECT_MENU_LIST_CLASS}>
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option) => (
                    <SelectOption
                      key={String(option.id)}
                      value={String(option.id)}
                      selected={selectedIds.has(String(option.id))}
                      onSelect={() => handleToggle(option)}
                    >
                      <Checkbox
                        checked={selectedIds.has(String(option.id))}
                        readOnly
                        tabIndex={-1}
                      />
                      <span className="truncate">{option.label}</span>
                    </SelectOption>
                  ))
                ) : (
                  <SelectMessage>No options</SelectMessage>
                )}
              </SelectMenuList>
            </SelectMenu>
          </PopoverContent>
        </PopoverPortal>
      </Popover>
    </Field>
  );
}

export default MultiSelect;
```

## API Reference

### SelectMenu

Re-export of cmdk `Command`. Keyboard navigation (↑/↓, Home, End, Enter) runs on `[cmdk-root]`.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `string` | — | Controlled active item id (single select). Matches the selected SelectOption value. |
| `shouldFilter` | `boolean` | true | Set false for static option lists. |
| `loop` | `boolean` | — | Wrap keyboard selection from last item to first. |

### SelectMenuList

Re-export of cmdk `CommandList`. Wraps option rows. Put scrolling on a parent `div`, not on this element.

### SelectOption

Styled cmdk `CommandItem`. Active keyboard row uses `data-selected`. Accepts standard cmdk item props.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `string` | — | Required. Unique id for the item. |
| `onSelect` | `() => void` | — | Called when the item is chosen (click or Enter). |
| `disabled` | `boolean` | — | — |
| `className` | `string` | — | — |

### SelectMessage

Centered empty-state or helper text
