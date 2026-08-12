<!-- AUTO-GENERATED from oms-yeti-ui app/src/docs/ads/components/toast/toast.mdx -->
<!-- Do not edit. Regenerate: npm run skills:sync-components (oms-yeti-ui repo root) -->

# Toast

The Toast component surfaces brief, transient feedback. Compose it with `ToastIcon`, `ToastContent`, `ToastTitle`, `ToastDescription`, `ToastActions`, and `ToastCloseButton` as children of `Toast`.

---

## Getting Started

```tsx
import {
  Toast,
  ToastActions,
  ToastCloseButton,
  ToastContent,
  ToastDescription,
  ToastIcon,
  ToastTitle,
} from '@ads/components';
```

## Basic Usage

Set `variant` for semantic color (`info`, `success`, `warning`, or `error`). Place the icon in `ToastIcon`, body copy in `ToastContent`, and optional actions in `ToastActions`. Use `ToastCloseButton` when dismissal should be explicit.

```tsx
import { InfoIcon, XIcon } from '@phosphor-icons/react';

import {
  Button,
  Icon,
  Toast,
  ToastActions,
  ToastCloseButton,
  ToastContent,
  ToastDescription,
  ToastIcon,
  ToastTitle,
} from '@ads/components';

export const ToastExample = () => (
  <Toast variant="info">
    <ToastIcon>
      <Icon icon={InfoIcon} size="xl" />
    </ToastIcon>
    <ToastContent>
      <ToastTitle>Information</ToastTitle>
      <ToastDescription>
        This is a short system toast. Use descriptions for supporting detail;
        add actions when the user should respond.
      </ToastDescription>
      <ToastActions>
        <Button size="compact" variant="ghost">
          Secondary
        </Button>
        <Button size="compact" variant="primary">
          Primary
        </Button>
      </ToastActions>
    </ToastContent>
    <ToastCloseButton type="button" aria-label="Dismiss">
      <Icon icon={XIcon} />
    </ToastCloseButton>
  </Toast>
);
```

## Examples

### Variants

The Toast component comes in four variants:

- `error` calls attention to problems that need immediate attention; use it sparingly so it stays meaningful.
- `warning` highlights information that might have a negative impact but is not critical.
- `success` indicates successful actions.
- `info` provides relevant information.

```tsx
<div className="flex flex-col gap-16">
  <Toast variant="info">...</Toast>
  <Toast variant="success">...</Toast>
  <Toast variant="warning">...</Toast>
  <Toast variant="error">...</Toast>
</div>
```

## API Reference

### Toast

A container element that visually groups toast content. It provides styling based on `variant` (`info`, `success`, `warning`, `error`).

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `variant` | `"info" / "success" / "warning" / "error"` | "info" | — |

### ToastIcon

A container element for the toast icon and provides styling based on the `variant` of the toast.

### ToastContent

A container element for the toast body, which typically includes `ToastTitle`, `ToastDescription`, and `ToastActions`.

### ToastTitle

A text element for the toast title, styled to pair with the toast message tone.

### ToastDescription

A text element for supplementary information or details about the toast.

### ToastActions

A container used to display action buttons within the toast.

### ToastCloseButton

A button element for dismissing the toast, styled as a compact ghost control with variant-aware icon color.
