<!-- AUTO-GENERATED from oms-yeti-ui app/src/docs/ads/components/checkbox/checkbox.mdx -->
<!-- Do not edit. Regenerate: npm run skills:sync-components (oms-yeti-ui repo root) -->

# Checkbox

The Checkbox component is a control that allows users to select items from a list of options. The selection can be a few, many, all, or no items.

---

## Getting Started

```tsx
import {
  Checkbox,
  Field,
  FieldContent,
  FieldLabel,
  FieldDescription,
} from '@ads/components';
```

## Basic usage with Field

For labelled options with optional helper text, compose it with `Field`, `FieldContent`, `FieldLabel`, and `FieldDescription` so spacing, error states, and disabled styling stay consistent. Give the checkbox and `FieldLabel` the same `id` / `htmlFor` pair for an accessible label. See the [Field](/ads/components/field) documentation for more details.

```tsx
import {
  Checkbox,
  Field,
  FieldContent,
  FieldLabel,
  FieldDescription,
} from '@ads/components';

export function Example() {
  const id = 'terms-checkbox';

  return (
    <Field orientation="horizontal">
      <Checkbox id={id} />
      <FieldContent>
        <FieldLabel htmlFor={id} size="md">
          Option label
        </FieldLabel>
        <FieldDescription>
          Supporting text explains what this choice does.
        </FieldDescription>
      </FieldContent>
    </Field>
  );
}
```

## Examples

### Error

Use `error` to show validation or error styling in conjunction with `FieldValidation`.

```tsx
  <Field orientation="horizontal">
    <Checkbox id={id} error />
    <FieldContent>
      <FieldLabel htmlFor={id} size="md">
        Accept terms
      </FieldLabel>
      <FieldValidation type="error" size="sm">
        This field is required.
      </FieldValidation>
    </FieldContent>
  </Field>
  ```

### Disabled

Set `disabled` on `Field` to dim the label and description. Disable the `Checkbox` itself to prevent interaction.

```tsx
  <Field orientation="horizontal" disabled>
    <Checkbox id="disabled-example" disabled checked />
    <FieldContent>
      <FieldLabel htmlFor="disabled-example" size="md">
        Unavailable option
      </FieldLabel>
      <FieldDescription>
        Description inherits disabled styling from the field.
      </FieldDescription>
    </FieldContent>
  </Field>
  ```

### Indeterminate

Use `indeterminate` for a mixed selection state (for example a table header when only some rows are selected).

```tsx
  <Checkbox indeterminate />
  ```

## API Reference

### Checkbox

`Checkbox` accepts the props below in addition to standard HTML `input` attributes for checkboxes (for example `checked`, `defaultChecked`, `disabled`, `onChange`, `name`, `value`, and `aria-*`).

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `error` | `boolean` | — | Provides error styling to the checkbox. |
| `indeterminate` | `boolean` | — | Sets the checkbox to an indeterminate state. |
