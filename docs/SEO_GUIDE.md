# Portfolio SEO Maintenance Guide

Reviewed: 12 October 2026. Scope: `https://bibalefai.site`, English and French portfolio pages. This guide separates crawl/indexing checks from search visibility: a technically valid page can be indexed without ranking for a particular query.

## 1. Identity and search intent

Present Boli Bi Balefai Mondesir consistently as a software engineer in Abidjan and a full-stack developer at Synelia Group. Keep employment and education in `src/data/portfolioExperience.ts`; keep identity, profile URLs and schema in `src/seo.ts`. Use the full name naturally in Home and About copy and metadata. Describe project-specific responsibilities without converting them into unsupported seniority or consulting claims.

For each page, identify its audience and purpose before choosing wording: personal-name discovery for Home/About, technical evidence for case studies, and contact information for Contact. Maintain accurate profile links on GitHub and LinkedIn. Do not manufacture endorsements or links. [Google’s people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) supports original, useful information grounded in experience.

## 2. Sitemap

`scripts/prerender.mjs` generates `/sitemap.xml` from `indexableSeoRoutes`. Include only canonical, indexable pages that return HTTP 200. Currently this is 26 URLs: five general pages and eight projects, each in two languages. Exclude the root redirect, empty Notes pages, unknown routes, PDFs and retired hosts.

Retain absolute HTTPS URLs, UTF-8 XML and reciprocal language annotations. Set `lastModified` only after a significant content, structured-data or link change; use the reviewed date, never the build date. Unknown dates should remain absent. Project review dates also populate `CreativeWork.dateModified`. Do not add `priority` or `changefreq` for Google, which ignores them. After deployment, check the live XML, resubmit once in GSC, and inspect download errors. Submission is a discovery hint, not an indexing guarantee. [Google sitemap documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## 3. Titles and descriptions

Edit page definitions and project title overrides in `src/seo.ts`. Give every localized page one unique, descriptive title. Home leads with the full name and the accurate role; case studies lead with their project name. Avoid repetitive keyword lists and lengthy suffixes.

Descriptions should summarize the actual page, not promise results unsupported by its evidence. Include the name naturally on Home/About, and distinguish case studies by their problem and implementation. Review likely truncation visually; Google has no fixed character limit for titles or descriptions and may choose different search text. Do not treat an arbitrary 60/160-character rule as a build requirement. [Title guidance](https://developers.google.com/search/docs/appearance/title-link), [snippet guidance](https://developers.google.com/search/docs/appearance/snippet).

## 4. Canonicals and redirects

Keep `https://bibalefai.site` as the sole preferred host. Each English/French page has its own self-canonical. Redirect HTTP and www traffic consistently, and retain the Worker’s root/legacy-route redirects. A French translation should not canonicalize to English.

Check status, `Location`, canonical and final destination together when changing routes. Unknown paths must return 404 rather than a successful Home response. Existing slash/`.html` normalization belongs to Cloudflare static-asset routing; avoid extra redirect layers without evidence of a problem. [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

The retired `portfolio.bibalefai.workers.dev` host is disabled. Keep `workers_dev: false` in `wrangler.jsonc`: disabling it only in the dashboard can be reversed by a later Wrangler deployment. Verify the retired host remains unavailable after releases. [Cloudflare workers.dev documentation](https://developers.cloudflare.com/workers/configuration/routing/workers-dev/).

## 5. Languages and navigation

Retain `/en` and `/fr` routes, correct document `lang`, and matching `en`, `fr`, `x-default` alternates in HTML and XML. Every alternate must exist and return the reciprocal annotation. `x-default` points to the English equivalent.

Use real anchor links for language switching and project navigation. The language link preserves the project path, query and fragment, enabling both crawlers and visitors to follow it. Translate substantive case-study changes in both languages. Avoid forcing a different language on an explicitly requested localized URL. [Google localized-page guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).

## 6. Robots and indexability

`public/robots.txt` allows crawling and advertises the root sitemap. Use page-level robots metadata for empty Notes and the custom 404 page. Do not block a URL in robots.txt while expecting Google to fetch its `noindex` directive. Audit response headers too, especially `X-Robots-Tag`, for conflicts with HTML.

Publish Notes only after adding original substantive articles and their SEO descriptors. Decide separately whether public CV and credential PDFs should appear in search; if exclusion is wanted, apply an appropriate HTTP header, not an HTML meta tag inside a PDF. [Google robots meta and header documentation](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).

## 7. Prerendered HTML and internal links

The build generates full HTML for all 28 localized routes before client hydration. Confirm the initial response contains the heading, copy, links, canonical and JSON-LD without running JavaScript. Keep `SeoManager` synchronized during client navigation without duplicate tags.

Link work experience to relevant case studies and connect Home, Projects and Architectures through descriptive anchors. When adding a route, update both the router and SEO definitions; the generated sitemap must exactly match indexable routes. Test an unknown URL as well. [Google JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

## 8. Case-study evidence

BuildOw, TaskFlow and AgentForge now separate personal contribution from evidence and limitations. Continue this pattern for other projects: explain the problem, your scope, decisions and rejected trade-offs where documented, implementation, status and evidence.

Label conceptual diagrams and interfaces clearly. Screenshots demonstrate interface behavior; they do not establish adoption, accuracy, business gains or production reliability. Add measured outcomes only with the measurement method, timeframe and source. Keep confidential employer material private. The review date records a substantive editorial update, not a certification or project launch.

## 9. Structured data

Keep the stable Person identifier `https://bibalefai.site/#person`, accurate employer/role and verified `sameAs` profiles. Home defines WebSite/Person, About ProfilePage/Person, case studies CreativeWork/BreadcrumbList/Person, and collections use their relevant page types.

Schema must agree with visible content. Do not add ratings, awards, credentials or production metrics that the page cannot substantiate. Validate JSON syntax and schema semantics separately; generic CreativeWork does not guarantee a Google rich result. Use the [Schema.org validator](https://validator.schema.org/) and, for supported Google features, the Rich Results Test. [Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## 10. Social previews and images

Maintain matching Open Graph/Twitter titles, descriptions and canonical URLs. Social images are generated by `scripts/optimize-images.mjs`; the current JPEGs are 1200×630. Alt text must describe the actual selected image, including the generic fallback, rather than a different project screenshot. Verify image responses and preview crops after changing their source. These tags support sharing; they do not guarantee ranking improvements. [Open Graph protocol](https://ogp.me/).

Use meaningful HTML alt text, responsive AVIF/WebP assets, explicit dimensions and lazy loading below the fold. Keep the primary hero prioritized. An additional image sitemap is unnecessary while these small, crawlable galleries remain discoverable through HTML; reconsider if image discovery becomes difficult. [Google image SEO](https://developers.google.com/search/docs/appearance/google-images).

## 11. Performance and release checks

Measure before changing delivery. Assess mobile and desktop field data when available: p75 LCP ≤2.5 seconds, INP ≤200 milliseconds, CLS ≤0.1. Use lab diagnostics to find causes, while keeping lab results distinct from real-user measurements. GSC Wizard currently lacks a configured CrUX API key, so no field-performance conclusion has been established. [Core Web Vitals guidance](https://web.dev/articles/vitals).

Before release run `npm test`, `npm run lint`, `npm run typecheck`, `npm run build`, then `npx wrangler deploy --dry-run`. The build validates rendered metadata, reciprocal alternates, unique titles/descriptions, sitemap coverage, dates and local assets. Check changed pages at mobile/desktop widths and available themes. Deploy through an authenticated Cloudflare account, then repeat HTTP, redirect, canonical, robots and sitemap checks against production. Keep existing `AGENTS.md` unchanged.

## 12. Search Console monitoring

Track all 26 sitemap URLs. Compare indexed status, crawl dates and Google-selected canonicals; an unknown URL needs discovery and useful content, not repeated automated indexing requests. URL Inspection reports Google’s stored index state, not a live rendering test. Its API cannot request Google indexing for these portfolio pages.

Review performance weekly using consistent windows and brand variants such as the full name, `Boli Mondesir`, `Bi Balefai` and `bibalefai`. Separate host variants, languages and case studies. Keep release dates and private exports outside public Git history. Low-volume queries can be omitted for privacy, and daily fluctuations cannot establish causation. Recheck indexing after 7–14 days and trends after several weeks; these are monitoring intervals, not promises of recovery. [Search Console performance documentation](https://support.google.com/webmasters/answer/7576553), [URL Inspection documentation](https://support.google.com/webmasters/answer/9012289).

Investigate the existing `cv.bibalefai.site/sitemap.xml` error separately before removing its GSC submission or changing that subdomain. It is outside this portfolio’s route registry.
