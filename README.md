# Bibal-Efai Portfolio

A bilingual software engineering portfolio built with React, TypeScript, Vite, and Tailwind CSS. The site presents professional experience, project case studies, and conceptual architecture diagrams in English and French.

Professional experience, education, and CV downloads are defined in `src/data/portfolioExperience.ts`. The current role is shared by Home, About, and the SEO Person schema. Both downloadable CVs are French versions, focused on software architecture and digital transformation.

The complete training list is defined in `src/data/portfolioCredentials.ts`, with original PDF evidence in `public/credentials/`. About displays all 14 entries in both languages, grouped into completed courses, guided projects, and training badges. Preserve these distinctions when adding credentials; a course completion or Cloud Quest badge is not a professional certification.

## Local development

```bash
npm ci
npm run dev
```

The development command optimizes portfolio images before starting Vite. Other useful checks are:

- `npm test` — run the Vitest component and SEO tests.
- `npm run typecheck` — validate application TypeScript.
- `npm run lint` — run ESLint.
- `npm run build` — optimize images, build the client and SSR bundle, prerender every localized route, and verify the SEO output.
- `npm run preview` — inspect the generated site locally.

## SEO and static output

`src/seo.ts` is the source of truth for titles, descriptions, canonical URLs, language alternates, social cards, and structured data. The build prerenders 28 English and French pages as flat HTML files in `dist/`; 26 content pages are included in `sitemap.xml`, while the empty Notes routes remain accessible with `noindex`.

Project images are generated as AVIF and WebP variants under `public/images/optimized/`. These derived files are ignored by Git and rebuilt from the original assets.

## Cloudflare deployment

`wrangler.jsonc` serves `dist/` through Cloudflare Workers Static Assets. `worker/index.js` redirects the root and legacy unlocalized routes to English, and the asset configuration returns `404.html` for unknown URLs.

Before production release, configure Cloudflare to redirect HTTP to HTTPS and `www.bibalefai.site` to `https://bibalefai.site`. After deployment, verify `/robots.txt`, `/sitemap.xml`, one route in each language, a project diagram, and a nonexistent URL.
