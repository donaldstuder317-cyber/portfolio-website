# Project Instructions

## Visual System

Use the color palette in `spec.md` for all new site UI and for modifications to existing UI:

```css
--alabaster-grey: #dcdcdd;
--pale-slate: #c5c3c6;
--iron-grey: #46494c;
--blue-slate: #4c5c68;
--pacific-cyan: #1985a1;
```

Treat these tokens as the project's visual source of truth. Prefer semantic names and shared CSS variables over hard-coded colors.

## Design Rules

- Use Alabaster Grey for primary light text and Pale Slate for secondary text.
- Use Iron Grey as the main dark neutral and Blue Slate for supporting dark layers.
- Use Pacific Cyan for primary actions, links, focus states, and active indicators.
- Check contrast whenever a color is used on a new background or interactive state.
- Preserve the existing component patterns and keep changes focused.
- Do not reintroduce removed Sanity, Prisma, or Stripe integrations.

## Engineering Rules

- This is a Next.js project using TypeScript and React.
- Keep the production command working with `npm run build`.
- Use existing dependencies and local conventions before adding new ones.
- Avoid unrelated refactors, generated-file churn, or changes to user-authored work.
- Keep public APIs and component behavior stable unless the task requires a change.
- Add focused validation for behavior touched by an edit.
