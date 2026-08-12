<!-- AUTO-GENERATED from oms-yeti-ui app/src/docs/ads/components/button/button.mdx -->
<!-- Do not edit. Regenerate: npm run skills:sync-components (oms-yeti-ui repo root) -->

# Button

A button triggers an event or action. They let users know what will happen next.

---

## Getting Started

```tsx
import { Button } from '@ads/components';
```

## Basic Usage

Use buttons to communicate actions users can take and to allow users to interact with the page. Each page should have only one primary button. Any remaining calls to action should be represented as lower emphasis buttons.

```tsx
import { Button } from '@ads/components';

export const ButtonExample = () => {
  return <Button>Button Text</Button>;
};
```

## Examples

### Variants

The Button component comes in four variants: `primary`, `secondary`, `tertiary`, and `ghost`.

- The `primary` variant is used for the most important or frequently used actions
- The `secondary` variant is used for secondary actions
- The `tertiary` variant is used for less prominent, and sometimes independent, actions
- The `ghost` variant is used for the least pronounced actions; often used in conjunction with a primary button

```tsx
  <div className="flex justify-center items-center gap-16">
    <Button variant="primary">Button Text</Button>
    <Button variant="secondary">Button Text</Button>
    <Button variant="tertiary">Button Text</Button>
    <Button variant="ghost">Button Text</Button>
  </div>
  ```

### Sizes

The Button component comes in three sizes: `compact`, `default`, and `large`.

```tsx
  <div className="flex justify-center items-center gap-16">
    <Button size="compact">Button Text</Button>
    <Button size="default">Button Text</Button>
    <Button size="large">Button Text</Button>
  </div>
  ```

### Square

The Button component can be rendered as a square by setting the `square` prop to `true`.

```tsx
import { ImageIcon } from '@phosphor-icons/react';

import { Button, Icon } from '@ads/components';

<Button square>
  <Icon icon={ImageIcon} />
</Button>;
```

### Button link

Anchor behavior is to expand by default; using `w-fit` is recommended.

```tsx
<a className={getButtonClassName({ className: 'w-fit' })}>Button Text</a>
```

### Button with icon

Use icons within buttons to reinforce the action and provide context. Place `Icon` components as `children` in document order—before the label for a leading icon, after for a trailing icon. The button lays out children in a row with tokenized gap spacing.

```tsx
import { ArrowRightIcon, PlusIcon } from '@phosphor-icons/react';

import { Button, Icon } from '@ads/components';

<div className="flex justify-center items-center gap-16">
  <Button>
    <Icon icon={PlusIcon} />
    Leading & Trailing
    <Icon icon={ArrowRightIcon} />
  </Button>
  <Button>
    Trailing Icon
    <Icon icon={ArrowRightIcon} />
  </Button>
  <Button>
    <Icon icon={PlusIcon} />
    Leading Icon
  </Button>
</div>;
```

## API Reference

### Button

A single `button` element with variants for emphasis and size. It accepts the props below in addition to standard HTML `button` attributes (for example `type`, `disabled`, `onClick`, `className`, and `children`). To style an anchor like a button, apply `getButtonClassName` (anchors grow to full width by default; `w-fit` is often appropriate), as in the button link example above.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `variant` | `"primary" / "secondary" / "tertiary" / "ghost"` | "promoted" | — |
| `size` | `"compact" / "default" / "large"` | "md" | — |
| `square` | `boolean` | false | — |
