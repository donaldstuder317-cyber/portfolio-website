import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

/**
 * Flat config. Next.js 16 removed `next lint`, so linting runs through the
 * ESLint CLI directly (`npm run lint`) against eslint-config-next's own
 * flat-config export.
 */
const config = [
  {
    ignores: ['.next/**', 'next-env.d.ts', 'node_modules/**'],
  },
  ...nextCoreWebVitals,
];

export default config;
