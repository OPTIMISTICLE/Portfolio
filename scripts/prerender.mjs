import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = path.join(root, 'dist');
const template = await readFile(path.join(dist, 'index.html'), 'utf8');
const serverEntry = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);
const { indexableSeoRoutes, render, renderSeoHead, seoRoutes, siteIdentity } = serverEntry;

const assetNames = await readdir(path.join(dist, 'assets'));
const criticalFontNames = ['manrope-latin-wght-normal', 'newsreader-latin-wght-normal'];
const fontPreloads = criticalFontNames
  .map((fontName) => assetNames.find((asset) => asset.includes(fontName) && asset.endsWith('.woff2')))
  .filter(Boolean)
  .map((asset) => `/assets/${asset}`);

const renderDocument = (route) => template
  .replace('<html lang="en">', `<html lang="${route.locale}">`)
  .replace('<!--seo-head-->', renderSeoHead(route, fontPreloads))
  .replace('<!--app-html-->', render(route.path));

for (const route of seoRoutes) {
  const outputPath = path.join(dist, `${route.path.replace(/^\//, '')}.html`);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, renderDocument(route), 'utf8');
}

const escapeXml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const sitemapEntries = indexableSeoRoutes.map((route) => `  <url>
    <loc>${escapeXml(route.canonical)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(route.alternates.en)}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${escapeXml(route.alternates.fr)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(route.alternates.xDefault)}" />
  </url>`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries}
</urlset>
`;

await writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf8');

const redirectDocument = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex,follow" />
    <link rel="canonical" href="${siteIdentity.url}/en" />
    <meta http-equiv="refresh" content="0;url=/en" />
    <title>Redirecting to Boli Bi Balefai Mondesir</title>
  </head>
  <body><p><a href="/en">Continue to the English portfolio</a> · <a href="/fr">Accéder au portfolio français</a></p></body>
</html>
`;
await writeFile(path.join(dist, 'index.html'), redirectDocument, 'utf8');

const notFoundDocument = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex,nofollow" />
    <title>Page not found | Boli Bi Balefai Mondesir</title>
  </head>
  <body>
    <main>
      <h1>Page not found / Page introuvable</h1>
      <p><a href="/en">English portfolio</a> · <a href="/fr">Portfolio français</a></p>
    </main>
  </body>
</html>
`;
await writeFile(path.join(dist, '404.html'), notFoundDocument, 'utf8');

console.log(`Prerendered ${seoRoutes.length} localized routes; ${indexableSeoRoutes.length} included in sitemap.xml.`);
