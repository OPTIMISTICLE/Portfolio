import { expect, test } from 'vitest';
import { indexableSeoRoutes, renderSeoHead, seoRoutes, siteIdentity } from '../seo';

test('defines complete bilingual SEO metadata for every public route', () => {
  expect(seoRoutes).toHaveLength(28);
  expect(indexableSeoRoutes).toHaveLength(26);
  expect(new Set(seoRoutes.map((route) => route.path)).size).toBe(seoRoutes.length);
  expect(new Set(seoRoutes.map((route) => route.canonical)).size).toBe(seoRoutes.length);

  (['en', 'fr'] as const).forEach((locale) => {
    const localizedRoutes = seoRoutes.filter((route) => route.locale === locale);
    expect(new Set(localizedRoutes.map((route) => route.title)).size).toBe(localizedRoutes.length);
    expect(new Set(localizedRoutes.map((route) => route.description)).size).toBe(localizedRoutes.length);
  });

  seoRoutes.forEach((route) => {
    expect(route.title.length).toBeGreaterThan(20);
    expect(route.description.length).toBeGreaterThan(70);
    expect(route.canonical).toBe(`${siteIdentity.url}${route.path}`);
    expect(route.alternates.xDefault).toBe(route.alternates.en);
    expect(route.image.startsWith(`${siteIdentity.url}/images/`)).toBe(true);
  });
});

test('keeps localized alternates reciprocal and excludes empty notes from indexing', () => {
  seoRoutes.forEach((route) => {
    const otherLocale = route.locale === 'en' ? 'fr' : 'en';
    const alternate = seoRoutes.find((candidate) => candidate.canonical === route.alternates[otherLocale]);
    expect(alternate?.alternates[route.locale]).toBe(route.canonical);
  });

  expect(seoRoutes.filter((route) => route.path.endsWith('/notes')).every((route) => !route.index)).toBe(true);
  expect(indexableSeoRoutes.some((route) => route.path.endsWith('/notes'))).toBe(false);
});

test('renders canonical, language, social, robots, and structured-data head tags', () => {
  const home = seoRoutes.find((route) => route.path === '/en');
  expect(home).toBeDefined();
  const head = renderSeoHead(home!);

  expect(head).toContain('<link data-seo="route" rel="canonical" href="https://bibalefai.site/en"');
  expect(head).toContain('hreflang="fr"');
  expect(head).toContain('property="og:image"');
  expect(head).toContain('name="twitter:card"');
  expect(head).toContain('name="robots" content="index,follow,max-image-preview:large"');
  expect(head).toContain('type="application/ld+json"');
});
