# Architecture and Design Decisions

## 2026-08-31: Adopt the Slate and Pacific Cyan Palette

### Status

Accepted

### Decision

The site will use this five-color palette as its default visual foundation:

- Alabaster Grey: `#dcdcdd`
- Pale Slate: `#c5c3c6`
- Iron Grey: `#46494c`
- Blue Slate: `#4c5c68`
- Pacific Cyan: `#1985a1`

### Rationale

The palette gives the site a coherent neutral base with a focused cyan accent. It supports readable dark surfaces, calm supporting tones, and a clear visual signal for interactive elements without relying on the previous accent direction.

### Consequences

- New UI work must use the palette documented in `spec.md`.
- Shared style tokens should be introduced before adding repeated color literals.
- Existing screens can be migrated incrementally to avoid unnecessary layout churn.
- Contrast must be checked for text, controls, hover states, and focus states.
- A new brand color requires an explicit update to this decision record.

## 2026-08-31: Keep Removed Third-Party Integrations Out

### Status

Accepted

### Decision

Sanity, Prisma, and Stripe remain removed from the project. The site continues to use static or demo-safe behavior where those integrations previously supplied data or actions.

### Rationale

The current deployment target requires a build that succeeds without service credentials or build-time external integration setup.

### Consequences

Do not add imports, packages, environment variables, routes, or configuration for those services without a new explicit product decision.
