export type Project = {
  /** Two-digit label shown in the card's top-left corner. */
  id: string;
  name: string;
  description: string;
  /** A path under /public, or null to render the placeholder wireframe. */
  image: string | null;
  /** External link, or null while the project is unreleased. */
  url: string | null;
  /** Tailwind gradient classes, drawn from the palette (see spec.md). */
  accent: string;
};

export const projects: Project[] = [
  {
    id: '01',
    name: 'Online Coffee Shop',
    description: 'Interactive UI with Responsive Shopping Cart',
    image: '/coffee-shop.png',
    url: 'https://the-bean-place-8-10-2026.vercel.app/',
    accent: 'from-pacific-cyan/30 via-blue-slate/10 to-transparent',
  },
  {
    id: '02',
    name: 'COMING SOON',
    description: 'Collaborative task management application',
    image: null,
    url: null,
    accent: 'from-blue-slate/40 via-pacific-cyan/10 to-transparent',
  },
  {
    id: '03',
    name: 'COMING SOON',
    description: 'Real-time cryptocurrency tracking dashboard',
    image: null,
    url: null,
    accent: 'from-iron-grey/50 via-pacific-cyan/20 to-transparent',
  },
];
