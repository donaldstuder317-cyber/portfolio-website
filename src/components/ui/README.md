# `components/ui`

Reusable, presentation-only primitives that are not tied to any one section
of the page.

This is the directory the shadcn/ui CLI writes into — `components.json` maps
the `ui` alias here:

```json
"aliases": { "ui": "@/components/ui" }
```

Anything added by `npx shadcn@latest add <component>` lands in this folder.
`flip-text.tsx` is a hand-written primitive that follows the same convention:
it takes props, renders markup, and reaches for nothing outside
`@/lib/utils`.

## What belongs here

- Primitives used by more than one section, or plausibly reusable.
- Components with no knowledge of page content or site data.

## What does not

- Page sections — `components/sections/`
- Site chrome such as the header and footer — `components/layout/`
- Self-contained features that pair a component with its own hook —
  their own folder, for example `components/scroll-frames/`
- SVG icon sets — `components/icons/`
