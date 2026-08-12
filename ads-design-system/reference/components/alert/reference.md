<!-- AUTO-GENERATED from oms-yeti-ui app/src/docs/ads/components/alert/alert.mdx -->
<!-- Do not edit. Regenerate: npm run skills:sync-components (oms-yeti-ui repo root) -->

# Alert

The Alert component displays important messages to users. It supports info, success, warning, and error states. Compose it with `AlertIcon`, `AlertContent`, `AlertTitle`, `AlertDescription`, `AlertLink`, `AlertActions`, and `AlertCloseButton` as children of `Alert`.

---

## Getting Started

```tsx
import {
  Alert,
  AlertActions,
  AlertContent,
  AlertCloseButton,
  AlertDescription,
  AlertIcon,
  AlertLink,
  AlertTitle,
} from '@ads/components';
```

## Basic Usage

Set `variant` for semantic color and `size` for layout (`compact` for a single-row summary or `full` when you need more text or multiple actions). Add optional actions and a dismiss control as needed.

```tsx
import {
  InfoIcon,
  XIcon
} from '@phosphor-icons/react';

import {
  Alert,
  AlertActions,
  AlertCloseButton,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertLink,
  AlertTitle,
  Icon,
} from '@ads/components';

export const AlertExample = () => (
  <Alert size="compact" variant="info">
    <AlertIcon>
      <Icon icon={InfoIcon} size="xl" />
    </AlertIcon>
    <AlertContent>
      <AlertTitle>Information:</AlertTitle>
      <AlertDescription>This is a system message. On compact alerts this message will not wrap and uses an elipses with a tootip to view the entire message. For longer messages use the Full Size Alert.</AlertDescription>
      <AlertActions>
        <AlertLink href="#">Learn more</AlertLink>
      </AlertActions>
    </AlertContent>
    <AlertCloseButton type="button" aria-label="Dismiss">
      <Icon icon={XIcon} />
    </AlertCloseButton>
  </Alert>
);
```

## Examples

### Variants

The Alert component comes in four variants:

- `error` calls attention to problems that need immediate attention; use it sparingly so it stays meaningful.
- `warning` highlights information that might have a negative impact but is not critical.
- `success` indicates successful actions.
- `info` provides relevant information.

```tsx
  <div className="flex flex-col gap-16">
    <Alert variant="info">...</Alert>
    <Alert variant="warning">...</Alert>
    <Alert variant="error">...</Alert>
    <Alert variant="success">...</Alert>
  </div>
  ```

### Sizes

The Alert component comes in two sizes:

- `compact` is used for lightweight, horizontal alerts to communicate system messages with minimal disruption. Content flows in a row (horizontal): icon, text, and controls sit on one line.
- `full` is used for content-heavy alerts when additional context or user action is required. It supports longer descriptions and multiple actions. Content flows in a column (vertical): sections stack top to bottom.

```tsx
import {
  InfoIcon,
  XIcon
} from '@phosphor-icons/react';

import { Icon } from '@ads/components';

export const CompactAlert = () => (
  <Alert variant="info" size="compact">
    <AlertIcon>
      <Icon icon={InfoIcon} size="xl" />
    </AlertIcon>
    <AlertContent>
      <AlertTitle>Headline</AlertTitle>
      <AlertDescription>
        This is a system message. On compact alerts this message will not wrap
        and uses an elipses with a tootip to view the entire message. For longer
        messages use the Full Size Alert.
      </AlertDescription>
      <AlertActions>
        <AlertLink href="#">Learn more</AlertLink>
      </AlertActions>
    </AlertContent>
    <AlertCloseButton>
      <Icon icon={XIcon} />
    </AlertCloseButton>
  </Alert>
);

export const FullAlert = () => (
  <Alert variant="info" size="full">
    <AlertIcon>
      <Icon icon={InfoIcon} size="xl" />
    </AlertIcon>
    <AlertContent>
      <AlertTitle>Headline</AlertTitle>
      <AlertDescription>
        This is a system message. On compact alerts this message will not wrap
        and uses an elipses with a tootip to view the entire message. For longer
        messages use the Full Size Alert.
      </AlertDescription>
      <AlertActions>
        <Button variant="tertiary">Primary</Button>
        <Button variant="ghost">Secondary</Button>
      </AlertActions>
    </AlertContent>
    <AlertCloseButton>
      <Icon icon={XIcon} />
    </AlertCloseButton>
  </Alert>
);
```

## API Reference

### Alert

A container element that visually groups alert content. It provides styling based on `variant` (`info`, `success`, `warning`, `error`) and `size` (`compact`, `full`).

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `size` | `"compact" / "full"` | "compact" | — |
| `variant` | `"info" / "success" / "warning" / "error"` | "info" | — |

### AlertIcon

A container element for the alert icon and provides styling based on the `variant` of the alert.

### AlertContent

A container element for the alert body, which typically includes the `AlertTitle`, `AlertDescription`, `AlertLink`, and `AlertActions`.

### AlertTitle

A text element for the alert title, styled to pair with the active variant—for example labels such as information, warning, or error.

### AlertDescription

A text element for supplementary information or details about the alert.

### AlertLink

A styled anchor element for including a call-to-action or related link within the alert. It provides styling based on the `variant` of the alert.

### AlertActions

A container used to display action buttons within the alert and provides styling based on the `size` of the alert.

### AlertCloseButton

A button element visually indicating a dismiss action, depending on the use case.
