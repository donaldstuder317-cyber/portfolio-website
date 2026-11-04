# Site Design Specification

## Purpose

This document defines the visual direction for the portfolio site. New and revised UI should use the palette below as its primary color system.

## Color Palette

| Token              | Hex       | Intended use                                                   |
| ------------------ | --------- | -------------------------------------------------------------- |
| `--alabaster-grey` | `#dcdcdd` | Primary light surfaces, high-contrast text on dark backgrounds |
| `--pale-slate`     | `#c5c3c6` | Secondary text, muted surfaces, borders                        |
| `--iron-grey`      | `#46494c` | Dark neutral surfaces, panels, navigation                      |
| `--blue-slate`     | `#4c5c68` | Secondary dark surfaces, supporting accents                    |
| `--pacific-cyan`   | `#1985a1` | Primary action color, links, focus states, active UI           |

The supplied `ff` alpha suffix is equivalent to full opacity and may be omitted in CSS hex values.

## Usage Rules

- Use `--iron-grey` and `--blue-slate` for the dark foundation and layered surfaces.
- Use `--alabaster-grey` for primary text and important light surfaces.
- Use `--pale-slate` for secondary text, supporting labels, and low-emphasis borders.
- Reserve `--pacific-cyan` for actions, links, selected states, and meaningful highlights.
- Do not introduce a competing purple, neon, or unrelated accent palette without recording a decision in `decisions.md`.
- Prefer CSS variables or existing design tokens over repeated raw color literals.
- Keep text and controls accessible. Verify contrast for every text/background combination, including hover and focus states.

## Component Direction

- Pages should feel focused, editorial, and technically capable rather than template-like.
- Use restrained borders and clear spacing to separate content on dark surfaces.
- Primary buttons should use Pacific Cyan with readable light text or a sufficiently dark text treatment after contrast checking.
- Focus indicators should remain visible and use Pacific Cyan or a higher-contrast equivalent.
- Motion should support hierarchy and feedback, not distract from content.

## Implementation Note

When adding the palette to styles, define the tokens in the shared stylesheet and map framework utilities to those tokens where practical. Existing components should be migrated incrementally; avoid broad unrelated restyling.
