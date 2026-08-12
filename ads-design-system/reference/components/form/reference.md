<!-- AUTO-GENERATED from oms-yeti-ui app/src/docs/ads/components/form/form.mdx -->
<!-- Do not edit. Regenerate: npm run skills:sync-components (oms-yeti-ui repo root) -->

# Form

Composable pieces for create/edit flows: **`Form`** wraps fields and actions with built-in vertical spacing between form inputs, plus **`FormTitle`** and **`FormDescription`** for page-level heading and intro copy. You do not need margin utilities on each **`Field`**. Pair with **`Field`** and **`Input`** for controls.

For the full application page (navigation, sidebar, scrollable column), see [Form layout](/ads/layouts/form).

---

## Getting Started

```tsx
import { Form, FormDescription, FormTitle } from '@ads/components';
```

## Basic Usage

Place **`FormTitle`** and **`FormDescription`** at the top of **`Form`**, then **`Field`** blocks and an actions row. **`Form`** provides spacing between form inputs and other sections consistently.

```tsx
import { useId } from 'react';

import {
  Button,
  Card,
  Field,
  FieldDescription,
  FieldLabel,
  FieldRequired,
  Form,
  FormDescription,
  FormTitle,
  InputText,
  InputTextGroup,
} from '@ads/components';

export const CreateCampaignForm = () => {
  const nameId = useId();

  return (
    <Card>
      <Form onSubmit={(event) => event.preventDefault()}>
        <FormTitle>Create campaign</FormTitle>
        <FormDescription>
          Add a new campaign to your workspace. Required fields are marked.
        </FormDescription>
        <Field>
          <FieldLabel htmlFor={nameId}>
            Campaign name <FieldRequired />
          </FieldLabel>
          <InputTextGroup>
            <InputText id={nameId} name="campaignName" required />
          </InputTextGroup>
          <FieldDescription>Shown on reports and exports.</FieldDescription>
        </Field>
        <div className="flex justify-end gap-16 pt-8">
          <Button type="button" variant="secondary">
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Create campaign
          </Button>
        </div>
      </Form>
    </Card>
  );
};
```

---

## API Reference

### Form

The main wrapper for create/edit flows. Provides vertical layout and consistent spacing between form inputs and other stacked sections (title, description, actions). Accepts standard form props such as `onSubmit`.

### FormTitle

Page-level heading for the form (for example, “Create campaign”). Not used for individual field labels.

### FormDescription

Supporting intro copy below the title. Use **`FieldDescription`** for help text tied to a specific input.

---

## Related

- [Form layout](/ads/layouts/form) — full-page create/edit pattern
- [Field](/ads/components/field) — labels, required/optional, horizontal layout
- [Input](/ads/components/input) — text and textarea controls
