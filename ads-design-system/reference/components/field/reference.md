<!-- AUTO-GENERATED from oms-yeti-ui app/src/docs/ads/components/field/field.mdx -->
<!-- Do not edit. Regenerate: npm run skills:sync-components (oms-yeti-ui repo root) -->

# Field

The Field component groups a control with a label and optional description. It handles layout (vertical or horizontal), spacing, and shared disabled styling.

---

## Getting Started

```tsx
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldOptional,
  FieldRequired,
  FieldValidation,
  InputText,
  InputTextGroup,
} from '@ads/components';
```

## Anatomy

Place the **control** (`InputText` inside `InputTextGroup`, `Checkbox`, `Switch`) as a sibling of `FieldContent`, or—when you only need a label—the label can sit directly in the field.

For checkboxes and switches, put the control **first**, then `FieldContent` with `FieldLabel` and optional `FieldDescription`, and wire `id` on the control to `FieldLabel`’s `htmlFor`.

### Required vs Optional

Use `FieldRequired` to indicate that the field is required.

```tsx
  <Field>
    <FieldLabel>
      Campaign name <FieldRequired />
    </FieldLabel>
  </Field>
  ```

Use `FieldOptional` to indicate that the field is optional.

```tsx
  <Field>
    <FieldLabel>
      Campaign name <FieldOptional />
    </FieldLabel>
  </Field>
  ```

### FieldContent

The `FieldContent` component is used to wrap the label and description, often in a horizontal `Field`, to ensure that these elements are grouped together and are evenly spaced.

```tsx
<Field orientation="horizontal">
  <Checkbox id={id} />
  <FieldContent>
    <FieldLabel htmlFor={id} size="md">
      Email me weekly summaries
    </FieldLabel>
    <FieldDescription>We never share your address.</FieldDescription>
  </FieldContent>
</Field>
```

## Examples

### Orientation: vertical

The default is **vertical**, where the `FieldLabel`, the control, and `FieldDescription` are stacked in reading order.

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldRequired,
  InputText,
  InputTextGroup,
} from '@ads/components';

<Field>
  <FieldLabel htmlFor={id}>
    Campaign name <FieldRequired />
  </FieldLabel>
  <InputTextGroup>
    <InputText id={id} placeholder="Spring push" />
  </InputTextGroup>
  <FieldDescription>
    Shown on reports and exports. You can change this later.
  </FieldDescription>
</Field>;
```

### Orientation: horizontal

Set `orientation="horizontal"` for a row, where the label block sits beside the control.

Order children as your design requires: here the label block is first, then the input.

```tsx
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  InputText,
  InputTextGroup,
} from '@ads/components';

<Field orientation="horizontal">
  <FieldContent>
    <FieldLabel htmlFor={id} size="md">
      Budget code
    </FieldLabel>
    <FieldDescription size="sm">Optional internal reference.</FieldDescription>
  </FieldContent>
  <InputTextGroup className="w-full max-w-xs">
    <InputText id={id} />
  </InputTextGroup>
</Field>;
```

### With Checkbox

Use **vertical** (default) when the checkbox should sit clearly above a longer label and description block.

```tsx
<Field>
  <Checkbox id={id} />
  <FieldContent>
    <FieldLabel htmlFor={id}>Allow partner offers</FieldLabel>
    <FieldDescription size="sm">
      Supporting copy appears below the label.
    </FieldDescription>
  </FieldContent>
</Field>
```

See also the [Checkbox](/ads/components/checkbox) documentation for control-specific props (`error`, `indeterminate`, and so on).

### Invalid and error state

Use `FieldValidation` to show validation or error styling via `type="error"`. You should also mark the control (`aria-invalid`, and any control-level `error` prop such as on `Checkbox`) and tie validation messages to the field for assistive tech.

```tsx
import {
  Field,
  FieldLabel,
  FieldValidation,
  InputText,
  InputTextGroup,
} from '@ads/components';

<Field>
  <FieldLabel htmlFor={id} error size="sm">
    API key
  </FieldLabel>
  <InputTextGroup error>
    <InputText id={id} aria-invalid defaultValue="sk_live_abc" />
  </InputTextGroup>
  <FieldValidation type="error" size="sm">
    This key format is not valid.
  </FieldValidation>
</Field>;
```

### Disabled

Set `disabled` on `Field` so label and description use disabled text styles. **Also** set `disabled` on native inputs or custom controls so interaction is blocked and the control exposes the disabled state.

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
  InputText,
  InputTextGroup,
} from '@ads/components';

<Field disabled>
  <FieldLabel htmlFor={id} size="sm">
    Organization ID
  </FieldLabel>
  <InputTextGroup disabled>
    <InputText id={id} defaultValue="org_01H..." disabled />
  </InputTextGroup>
  <FieldDescription>Set during onboarding.</FieldDescription>
</Field>;
```

### Sizes

The `FieldLabel`, `FieldDescription`, and `FieldValidation` components support `size="sm"` (default), `size="md"`, and `size="lg"`. Match density to the surrounding UI; medium labels pair well with horizontal fields and prominent opt-in copy.

```tsx
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldOptional,
  FieldValidation,
  InputText,
  InputTextGroup,
} from '@ads/components';

<Field>
  <FieldLabel htmlFor={a} size="sm">
    Small label <FieldOptional />
  </FieldLabel>
  <InputTextGroup>
    <InputText id={a} />
  </InputTextGroup>
  <FieldContent>
    <FieldDescription size="sm">Description</FieldDescription>
    <FieldValidation type="error" size="sm">Error</FieldValidation>
  </FieldContent>
</Field>
<Field>
  <FieldLabel htmlFor={b} size="md">
    Medium label <FieldOptional />
  </FieldLabel>
  <InputTextGroup>
    <InputText id={b} />
  </InputTextGroup>
  <FieldContent>
    <FieldDescription size="md">Description</FieldDescription>
    <FieldValidation type="error" size="md">Error</FieldValidation>
  </FieldContent>
</Field>
<Field>
  <FieldLabel htmlFor={c} size="lg">
    Large label <FieldOptional />
  </FieldLabel>
  <InputTextGroup>
    <InputText id={c} />
  </InputTextGroup>
  <FieldContent>
    <FieldDescription size="lg">Description</FieldDescription>
    <FieldValidation type="error" size="lg">Error</FieldValidation>
  </FieldContent>
</Field>
```

`FieldDescription` supports `size="sm"`, `size="md"`, and `size="lg"` (default `sm`).

## API Reference

### Field

Renders a `div` with `group/field` for child styling. Sets `data-disabled` props that is read by the child components.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `orientation` | `"vertical" / "horizontal"` | "vertical" | — |
| `disabled` | `boolean` | false | — |

### FieldContent

Container for label and/or description with vertical stacking (`flex-col`) and tight gap. Use it whenever the label block should stay grouped—especially in horizontal `Field` rows.

### FieldLabel

Native `label`. Use `htmlFor` pointing at the control’s `id`. Responds to `data-disabled` on an ancestor `Field`.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `size` | `"sm" / "md" / "lg"` | "sm" | — |

### FieldDescription

Helper text that describes the expected input or provides additional context for the field. Same group disabled behavior as `FieldLabel`.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `size` | `"sm" / "md" / "lg"` | "sm" | — |

### FieldOptional

Indicates that the field is optional.

### FieldRequired

Indicates that the field is required.

### FieldValidation

Helper text that describes the expected input or provides additional context for the field. Same group disabled behavior as `FieldLabel`.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `size` | `"sm" / "md" / "lg"` | "sm" | — |
