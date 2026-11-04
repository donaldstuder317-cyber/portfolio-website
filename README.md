# Donald Studer — Portfolio

A single-page developer portfolio built with Next.js 16 and React 19, featuring a
scroll-linked canvas background and a working contact form.

**Live:** [donaldstuder.com](https://donaldstuder.com)

---

## About this project

This is my personal portfolio site. It began as a commercial SaaS template and
has since been stripped back to its foundations and rebuilt — the repository now
contains only code that the site actually runs, with the colour system, the
background animation, and the contact pipeline all built from scratch.

The interesting parts are the scroll-driven background and the contact form, both
written out below.

## Stack

| Layer     | Choice                  | Why                                                                               |
| --------- | ----------------------- | --------------------------------------------------------------------------------- |
| Framework | Next.js 16 (App Router) | Server Components keep the page's static content off the client bundle            |
| Language  | TypeScript 5.9          | Strict mode, no `any` in application code                                         |
| UI        | React 19                | Five components are client-side; every page section but one renders on the server |
| Styling   | Tailwind CSS 4          | Design tokens declared in CSS via `@theme`, not a JS config                       |
| Email     | Resend HTTP API         | One `fetch` call, no SDK dependency                                               |
| Hosting   | Vercel                  | Static prerender plus one serverless function for the form                        |

Nine runtime dependencies in total. The site ships four routes: the page itself,
the contact endpoint, a sitemap, and a 404.

## Architecture

```
src/
├── app/
│   ├── layout.tsx            Root layout: fonts, metadata, header/footer
│   ├── page.tsx              Server Component — composes the five sections
│   ├── sitemap.ts
│   └── api/contact/route.ts  Contact form handler
├── components/
│   ├── icons/                SVG sets: brand, social, card, tech
│   ├── layout/               Header, footer, scroll-to-top
│   ├── scroll-frames/        Canvas backdrop + its animation hook
│   ├── sections/             Hero, about, highlights, projects, contact
│   └── ui/                   Reusable primitives (see its README)
├── data/                     Page content as typed modules
├── lib/
└── styles/
    └── tailwind.css          Design tokens + the handful of custom utilities
```

`page.tsx` is a 22-line Server Component. Five components opt into
`'use client'` — the header's mobile menu, scroll-to-top, the canvas backdrop,
the contact form, and the flip-text animation. Every other section, including
all of its markup and content, renders on the server.

Content lives in `src/data` as typed modules rather than being inlined in JSX,
which means adding a project is a single object in `projects.ts`.

### The scroll-linked background

`useScrollFrames` drives a 53-frame image sequence on a `<canvas>` tied to scroll
position. Two details were worth getting right:

**Frames load lazily, around both indices that matter.** Loading all 53 frames up
front would be an 8 MB burst for something purely decorative, so the hook fetches
only a small window. The subtlety is that there are _two_ positions in play — the
scroll target, and the frame currently rendered, which trails behind it during
easing. Preloading around only the target leaves the renderer walking through
frames that were never fetched. The hook preloads around both, and falls back to
the nearest decoded frame rather than freezing when there's a gap.

**Easing is time-based, not per-tick.** Advancing a fixed fraction per animation
frame makes the animation settle twice as fast on a 120 Hz display as on a 60 Hz
one. Smoothing against elapsed time instead gives identical behaviour everywhere.
A gap larger than eight frames is treated as a discontinuity — a keyboard `End`
or a scrollbar drag — and cuts straight to the target instead of crawling.

Profiling drove these choices. Canvas settle time after a half-page jump went
from 825 ms to 7 ms, while frame pacing stayed at 59 fps. Two optimisations I
expected to need — `createImageBitmap` and capping `devicePixelRatio` — turned out
to be unnecessary once measured: `drawImage` already costs 0.42 ms per frame
against a 16.7 ms budget, and `createImageBitmap` would have _added_ 8.8 ms.

### The contact form

`POST /api/contact` validates the payload, escapes it, and hands it to Resend.
It returns distinct status codes for a bad payload (400), missing server
configuration (500), and an upstream rejection (502), so the client can tell the
visitor something accurate rather than a generic failure. The form is
uncontrolled — `FormData` reads the values on submit — and reports status through
an `aria-live` region.

### Design system

Five tokens in `docs/spec.md` are the single source of truth, declared once in
`tailwind.css` under `@theme` and consumed as Tailwind utilities:

| Token                    | Hex       | Role                                 |
| ------------------------ | --------- | ------------------------------------ |
| `--color-alabaster-grey` | `#dcdcdd` | Primary text                         |
| `--color-pale-slate`     | `#c5c3c6` | Secondary text, low-emphasis borders |
| `--color-iron-grey`      | `#46494c` | Dark neutral surfaces                |
| `--color-blue-slate`     | `#4c5c68` | Supporting surfaces, default border  |
| `--color-pacific-cyan`   | `#1985a1` | Actions, links, focus rings          |

There are no hard-coded colour literals in the markup. The only hex values left
in `src/` are the official brand colours inside the technology logos.

## Running locally

Requires Node.js 20 or newer.

```bash
git clone https://github.com/donaldstuder317-cyber/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

The site runs at `http://localhost:3000`. The contact form needs the environment
variables below; without them it returns a 500 and the UI shows an error, which
is the intended behaviour rather than a crash.

### Environment variables

Create `.env.local`:

```bash
RESEND_API_KEY=re_xxxxxxxx        # https://resend.com/api-keys
CONTACT_EMAIL=you@example.com     # where enquiries are delivered
RESEND_FROM_EMAIL=site@yourdomain # a verified Resend sender
NEXT_PUBLIC_SITE_URL=https://donaldstuder.com   # canonical URL for the sitemap
```

`NEXT_PUBLIC_SITE_URL` is optional. Without it the sitemap falls back to Vercel's
per-deployment URL, which is not canonical.

### Scripts

| Command             | Purpose                           |
| ------------------- | --------------------------------- |
| `npm run dev`       | Development server with Turbopack |
| `npm run build`     | Production build                  |
| `npm start`         | Serve the production build        |
| `npm run lint`      | ESLint (flat config)              |
| `npm run typecheck` | `tsc --noEmit`                    |

## Featured work

- **[Online Coffee Shop](https://the-bean-place-8-10-2026.vercel.app/)** —
  interactive storefront with a responsive shopping cart.
- **Collaborative task manager** — in progress.
- **Real-time cryptocurrency dashboard** — in progress.

## Deployment

Deployed on Vercel, built on every push to `main`. The page is prerendered as
static HTML; only `/api/contact` runs as a function. Set the environment
variables above in the Vercel project before the contact form will work in
production.

## Accessibility and motion

Section anchors are keyboard reachable, focus rings use Pacific Cyan against the
dark surfaces, and form status is announced via `aria-live`. Every transform
animation is wrapped in `motion-reduce:` variants, and the flip-text effect is
disabled entirely under `prefers-reduced-motion`.

---

Built by [Donald Studer](https://github.com/donaldstuder317-cyber) — U.S. Army
veteran and full-stack developer.
