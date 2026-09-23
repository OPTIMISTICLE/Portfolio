import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const serverEntry = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);
const { indexableSeoRoutes, seoRoutes } = serverEntry;

assert.equal(seoRoutes.length, 28, 'Expected 28 localized output routes.');
assert.equal(indexableSeoRoutes.length, 26, 'Expected 26 indexable routes.');

for (const route of seoRoutes) {
  const outputPath = path.join(dist, `${route.path.replace(/^\//, '')}.html`);
  const html = await readFile(outputPath, 'utf8');
  assert.match(html, new RegExp(`<html lang="${route.locale}">`), `${route.path} has the wrong document language.`);
  assert.match(html, /<h1[\s>]/, `${route.path} has no server-rendered H1.`);
  assert.ok(html.includes(`rel="canonical" href="${route.canonical}"`), `${route.path} has the wrong canonical URL.`);
  assert.ok(html.includes('hreflang="en"') && html.includes('hreflang="fr"') && html.includes('hreflang="x-default"'), `${route.path} is missing language alternates.`);
  assert.ok(html.includes('type="application/ld+json"'), `${route.path} is missing JSON-LD.`);
  assert.equal(html.includes('content="noindex,nofollow"'), !route.index, `${route.path} has the wrong robots directive.`);
}

const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
assert.equal((sitemap.match(/<url>/g) ?? []).length, 26, 'Sitemap URL count is incorrect.');
assert.ok(!sitemap.includes('workers.dev'), 'Sitemap still references the old Workers domain.');
assert.ok(!sitemap.includes('/notes</loc>'), 'Empty Notes pages must not appear in the sitemap.');

const robots = await readFile(path.join(dist, 'robots.txt'), 'utf8');
assert.ok(robots.startsWith('User-agent: *'), 'robots.txt is not plain crawler policy text.');
assert.ok(robots.includes('Sitemap: https://bibalefai.site/sitemap.xml'), 'robots.txt points to the wrong sitemap.');

const notFound = await readFile(path.join(dist, '404.html'), 'utf8');
assert.ok(notFound.includes('noindex,nofollow'), '404 page must be excluded from indexing.');

const originalHero = await stat(path.join(root, 'public/images/portfolio/systems-hero.png'));
const optimizedHero = await stat(path.join(root, 'public/images/optimized/systems-hero-1440.webp'));
assert.ok(optimizedHero.size < originalHero.size, 'Optimized hero should be smaller than its source.');

console.log(`SEO verification passed: ${seoRoutes.length} prerendered routes, ${indexableSeoRoutes.length} sitemap URLs.`);
