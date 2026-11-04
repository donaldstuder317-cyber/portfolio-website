import type { MetadataRoute } from 'next';

/**
 * Set NEXT_PUBLIC_SITE_URL in the Vercel project to pin the canonical
 * domain. The Vercel-injected values below are only a fallback, and
 * VERCEL_URL in particular is per-deployment rather than canonical.
 *
 * The previous version read an unset SITE_URL and shipped
 * "<loc>undefined</loc>" for four routes, three of which no longer exist.
 */
function baseUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL;
  if (explicit) {
    const trimmed = explicit.replace(/\/$/, '');
    return /^https?:\/\//.test(trimmed) ? trimmed : `https://${trimmed}`;
  }

  const fromVercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (fromVercel) return `https://${fromVercel}`;

  return 'http://localhost:3000';
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl()}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
