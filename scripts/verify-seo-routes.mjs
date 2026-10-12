import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { JSDOM } from 'jsdom';

export async function verifyRoutes({ seoRoutes, indexableSeoRoutes, siteIdentity }, dist) {
  const byCanonical = new Map(seoRoutes.map((route) => [route.canonical, route]));
  for (const key of ['path', 'canonical', 'title', 'description']) {
    assert.equal(new Set(seoRoutes.map((route) => route[key])).size, seoRoutes.length, `${key} must be unique.`);
  }
  const checkedAssets = new Set();
  async function checkAsset(value) {
    const url = new URL(value, siteIdentity.url);
    if (url.origin !== siteIdentity.url || checkedAssets.has(url.pathname)) return;
    assert.ok((await stat(path.join(dist, decodeURIComponent(url.pathname)))).isFile(), `Missing asset: ${url.pathname}`);
    checkedAssets.add(url.pathname);
  }
  for (const route of seoRoutes) {
    const html = await readFile(path.join(dist, `${route.path.slice(1)}.html`), 'utf8');
    const dom = new JSDOM(html);
    const doc = dom.window.document;
    const single = (selector) => {
      const nodes = doc.querySelectorAll(selector);
      assert.equal(nodes.length, 1, `${route.path}: expected one ${selector}`);
      return nodes[0];
    };
    assert.equal(single('title').textContent, route.title);
    assert.ok(single('h1').textContent.trim(), `${route.path}: empty heading`);
    assert.equal(single('meta[name="description"]').getAttribute('content'), route.description);
    assert.equal(single('link[rel="canonical"]').getAttribute('href'), route.canonical);
    assert.equal(single('meta[name="robots"]').getAttribute('content'), route.index ? 'index,follow,max-image-preview:large' : 'noindex,nofollow');
    for (const [selector, value] of [
      ['meta[property="og:title"]', route.title], ['meta[name="twitter:title"]', route.title],
      ['meta[property="og:description"]', route.description], ['meta[name="twitter:description"]', route.description],
      ['meta[property="og:url"]', route.canonical], ['meta[property="og:image"]', route.image],
      ['meta[property="og:image:alt"]', route.imageAlt], ['meta[name="twitter:image:alt"]', route.imageAlt],
    ]) assert.equal(single(selector).getAttribute('content'), value, `${route.path}: wrong ${selector}`);
    assert.deepEqual(JSON.parse(single('script[type="application/ld+json"]').textContent), route.structuredData);
    if (route.lastModified) {
      assert.match(route.lastModified, /^\d{4}-\d{2}-\d{2}$/);
      assert.equal(new Date(route.lastModified).toISOString().slice(0, 10), route.lastModified);
      assert.ok(route.lastModified <= new Date().toISOString().slice(0, 10), 'Modification date cannot be in the future.');
    }
    const alternates = { en: route.alternates.en, fr: route.alternates.fr, 'x-default': route.alternates.xDefault };
    for (const [language, href] of Object.entries(alternates)) {
      assert.equal(single(`link[rel="alternate"][hreflang="${language}"]`).getAttribute('href'), href);
      const other = byCanonical.get(href);
      assert.ok(other, `${route.path}: alternate does not exist`);
      assert.equal(other.alternates[route.locale], route.canonical, 'Alternates must be reciprocal.');
      assert.equal(other.index, route.index, 'Alternate indexability must match.');
    }
    const otherLanguage = route.locale === 'en' ? 'fr' : 'en';
    assert.equal(single('a.language-switch').getAttribute('href'), new URL(alternates[otherLanguage]).pathname);
    if (route.path.endsWith('/about')) assert.ok(doc.querySelector('main').textContent.includes(siteIdentity.name));
    await checkAsset(route.image);
    for (const img of doc.querySelectorAll('img[src]')) {
      assert.ok(img.hasAttribute('alt'), `${route.path}: missing image alt`);
      await checkAsset(img.getAttribute('src'));
    }
    for (const anchor of doc.querySelectorAll('a[href]')) {
      const href = new URL(anchor.getAttribute('href'), route.canonical);
      if (href.origin === siteIdentity.url && href.pathname !== '/' && !byCanonical.has(`${siteIdentity.url}${href.pathname}`)) await checkAsset(href.href);
    }
    dom.window.close();
  }
  const dom = new JSDOM(await readFile(path.join(dist, 'sitemap.xml'), 'utf8'), { contentType: 'text/xml' });
  const xml = dom.window.document;
  assert.equal(xml.documentElement.namespaceURI, 'http://www.sitemaps.org/schemas/sitemap/0.9');
  const entries = [...xml.getElementsByTagName('url')];
  const locations = entries.map((entry) => entry.getElementsByTagName('loc')[0]?.textContent);
  assert.equal(new Set(locations).size, entries.length, 'Duplicate sitemap locations.');
  assert.deepEqual(locations.sort(), indexableSeoRoutes.map((route) => route.canonical).sort(), 'Sitemap must exactly match indexable routes.');
  for (const entry of entries) {
    const route = byCanonical.get(entry.getElementsByTagName('loc')[0].textContent);
    const dates = entry.getElementsByTagName('lastmod');
    assert.equal(dates.length, route.lastModified ? 1 : 0);
    if (route.lastModified) assert.equal(dates[0].textContent, route.lastModified);
    const links = [...entry.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'link')];
    assert.equal(links.length, 3);
    for (const [language, href] of Object.entries({ en: route.alternates.en, fr: route.alternates.fr, 'x-default': route.alternates.xDefault })) {
      const matching = links.filter((link) => link.getAttribute('hreflang') === language);
      assert.equal(matching.length, 1);
      assert.equal(matching[0].getAttribute('rel'), 'alternate');
      assert.equal(matching[0].getAttribute('href'), href);
    }
  }
  dom.window.close();
  console.log(`Parsed SEO checks passed for ${seoRoutes.length} routes and ${checkedAssets.size} local assets.`);
}
