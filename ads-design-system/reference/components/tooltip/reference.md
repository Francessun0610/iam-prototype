<!-- AUTO-GENERATED from oms-yeti-ui app/src/docs/ads/components/tooltip/tooltip.mdx -->
<!-- Do not edit. Regenerate: npm run skills:sync-components (oms-yeti-ui repo root) -->

# Tooltip

The Tooltip component displays additional information when the user hovers over or selects the element. The information is contextual, useful, and non-essential.

---

## Getting Started

```tsx
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '@ads/components';
```

## Basic Usage

Extra padding in the preview keeps the tooltip visible near the viewport edge in the docs layout. Pass the `side` prop to the `TooltipContent` component to adjust the position of the tooltip relative to the trigger element.

```tsx
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '@ads/components';

export const TooltipExample = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipPortal>
        <TooltipContent side="top" sideOffset={4}>
          Tooltip copy
          <TooltipArrow />
        </TooltipContent>
      </TooltipPortal>
    </Tooltip>
  </TooltipProvider>
);
```

## Content size

Pass `size` on `TooltipContent` to switch between compact padding (`small`, the default) and more spacious padding (`large`).

```tsx
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '@ads/components';

export const TooltipContentSizeExample = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Small padding</TooltipTrigger>
      <TooltipPortal>
        <TooltipContent side="top" sideOffset={4} size="small">
          Compact tooltip
          <TooltipArrow />
        </TooltipContent>
      </TooltipPortal>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger>Large padding</TooltipTrigger>
      <TooltipPortal>
        <TooltipContent side="top" sideOffset={4} size="large">
          Roomier tooltip
          <TooltipArrow />
        </TooltipContent>
      </TooltipPortal>
    </Tooltip>
  </TooltipProvider>
);
```

## Trigger with `hasEllipsis`

When the trigger must stay on one line inside a tight layout, pass `hasEllipsis` on `TooltipTrigger` so the label truncates with an ellipsis while the full string can still appear in the tooltip.

```tsx
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '@ads/components';

const longLabel =
'This label is intentionally long so the trigger truncates with an ellipsis when space is limited.';

export const TooltipHasElipsisExample = () => (
  <TooltipProvider>
    <div className="w-48 border border-border-subtle rounded-md px-2 py-3">
      <Tooltip>
        <TooltipTrigger hasEllipsis className="whitespace-nowrap text-text-primary">
          {longLabel}
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side="top" sideOffset={4} className="max-w-xs">
            {longLabel}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </div>
  </TooltipProvider>
);
```

## Rich content examples

You can render structured content inside `TooltipContent`, like labels, short descriptions, and compact data rows.

```tsx
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '@ads/components';

export const TooltipRichTextExample = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="rounded-md border border-border-subtle px-3 py-1.5 text-body-normal-sm text-text-primary">
        Hover rich text tooltip
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          side="top"
          align="end"
          sideOffset={8}
          className="max-w-[18rem] text-left"
        >
          <div className="flex flex-col gap-8 px-4 py-6">
            <p className="text-body-normal-md font-semibold">Label</p>
            <p className="text-body-normal-md text-text-on-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <TooltipArrow />
        </TooltipContent>
      </TooltipPortal>
    </Tooltip>
  </TooltipProvider>
);
```

```tsx
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '@ads/components';

const rows = [
{ colorClassName: 'bg-[#2F4F85]', label: 'Label', value: '#' },
{ colorClassName: 'bg-[#9A4452]', label: 'Label', value: '#' },
{ colorClassName: 'bg-[#3E6B52]', label: 'Label', value: '#' },
];

export const TooltipDataRowsExample = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="rounded-md border border-border-subtle px-3 py-1.5 text-body-normal-sm text-text-primary">
        Hover data rows tooltip
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          side="bottom"
          align="end"
          sideOffset={8}
          className="text-left"
        >
          <div className="flex min-w-36 flex-col gap-8 px-4 py-6">
            <p className="text-body-normal-md font-semibold">Label</p>
            <div className="flex justify-between text-body-normal-md">
              <span>Label Label</span>
            </div>
            <div className="flex flex-col gap-8">
              {dataRows.map((row) => (
                <div
                  key={`${row.label}-${row.value}-${row.colorClassName}`}
                  className="flex items-center justify-between text-body-normal-md"
                >
                  <span className="inline-flex items-center gap-4">
                    <span
                      className={`h-8 w-8 rounded-[1px] ${row.colorClassName}`}
                    />
                    {row.label}
                  </span>
                  <span className="font-semibold">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
          <TooltipArrow />
        </TooltipContent>
      </TooltipPortal>
    </Tooltip>
  </TooltipProvider>
);
```

## API Reference

### TooltipProvider

A context provider that wraps tooltip elements, ensuring consistent behavior and styling for all tooltips within its scope.

### Tooltip

The main container for the tooltip UI, grouping together the trigger and content elements.

### TooltipPortal

A wrapper that renders the tooltip content outside the normal DOM hierarchy, typically for layering and positioning.

### TooltipTrigger

An element (such as text or a button) that, when hovered or focused, displays the tooltip content.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `hasEllipsis` | `boolean` | — | — |

### TooltipContent

The visual container for the tooltip message, displaying the information or label when the trigger is active.

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `side` | `"top" / "right" / "bottom" / "left"` | "top" | Preferred edge of the trigger to place the tooltip against. |
| `sideOffset` | `number` | undefined | Gap in pixels between the tooltip and the trigger. |
| `align` | `"start" / "center" / "end"` | "center" | Alignment along the cross axis (perpendicular to `side`). |
| `size` | `"small" / "large"` | "small" | Padding preset for the bubble: compact (`small`) or more spacious (`large`). |

### TooltipArrow

A decorative arrow element that visually connects the tooltip content to its trigger.
