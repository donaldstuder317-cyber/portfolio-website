export type Project = {
  /** Two-digit label shown in the card's top-left corner. */
  id: string;
  name: string;
  description: string;
  /** A path under /public, or null to render the placeholder wireframe. */
  image: string | null;
  /** External link, or null while the project is unreleased. */
  url: string | null;
  /** Tailwind gradient classes, drawn from the palette (see docs/spec.md). */
  accent: string;
};

export const projects: Project[] = [
  {
    id: '01',
    name: 'BookWorm',
    description: 'Book Discovery App with Ratings and a Personal Library',
    image: '/images/bookworm.png',
    url: 'https://bookworm-gold.vercel.app/',
    accent: 'from-pacific-cyan/30 via-blue-slate/10 to-transparent',
  },
  {
    id: '02',
    name: 'FleetLog',
    description: 'Fleet Maintenance Logbook with Service Alerts and Exports',
    image: '/images/fleetlog.png',
    url: 'https://fleetlogmini.vercel.app/',
    accent: 'from-blue-slate/40 via-pacific-cyan/10 to-transparent',
  },
  {
    id: '03',
    name: 'COMING SOON',
    description: 'Collaborative task management application',
    image: null,
    url: null,
    accent: 'from-iron-grey/50 via-pacific-cyan/20 to-transparent',
  },
];
