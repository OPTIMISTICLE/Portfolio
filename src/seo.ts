import { projects, type Locale, type Project } from './data/portfolioProjects';
import { currentEmployment } from './data/portfolioExperience';

export const siteIdentity = {
  name: 'Boli Bi Balefai Mondesir',
  shortName: 'Boli Bi Balefai Mondesir',
  url: 'https://bibalefai.site',
  email: 'bibalefai@gmail.com',
  github: 'https://github.com/OPTIMISTICLE',
  linkedin: 'https://www.linkedin.com/in/bi-balefai-mondesir-boli-a62a41222/',
  defaultImage: '/images/optimized/og/default.jpg',
} as const;

export interface SeoDescriptor {
  path: string;
  locale: Locale;
  title: string;
  description: string;
  canonical: string;
  alternates: Record<Locale, string> & { xDefault: string };
  image: string;
  imageAlt: string;
  type: 'website' | 'article' | 'profile';
  index: boolean;
  lastModified?: string;
  structuredData: Record<string, unknown>;
}

interface PageDefinition {
  suffix: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  type?: SeoDescriptor['type'];
  index?: boolean;
  schemaType?: 'WebPage' | 'CollectionPage' | 'ContactPage';
  lastModified?: string;
}

const pageDefinitions: PageDefinition[] = [
  {
    suffix: '',
    title: {
      en: `${siteIdentity.name} | Software Engineer`,
      fr: `${siteIdentity.name} | Ingénieur logiciel`,
    },
    description: {
      en: `${siteIdentity.name}, software engineer in Abidjan and full-stack developer at Synelia Group. Explore backend, workflow and applied AI projects.`,
      fr: `${siteIdentity.name}, ingénieur logiciel à Abidjan : systèmes backend, workflows métier et IA appliquée. Développeur full-stack chez Synelia Group.`,
    },
  },
  {
    suffix: '/projects',
    title: {
      en: 'Project Case Studies | Boli Bi Balefai Mondesir',
      fr: 'Études de projets | Boli Bi Balefai Mondesir',
    },
    description: {
      en: 'Eight software architecture case studies covering workflow automation, AI products, enterprise platforms, IoT, and energy systems.',
      fr: 'Huit études de cas en architecture logicielle sur les workflows, produits IA, plateformes d’entreprise, IoT et systèmes énergétiques.',
    },
    schemaType: 'CollectionPage',
  },
  {
    suffix: '/architectures',
    title: {
      en: 'System Architectures | Boli Bi Balefai Mondesir',
      fr: 'Architectures système | Boli Bi Balefai Mondesir',
    },
    description: {
      en: 'Conceptual system views explaining boundaries, data flows, security decisions, and delivery trade-offs across eight software products.',
      fr: 'Vues système conceptuelles présentant frontières, flux de données, décisions de sécurité et compromis de livraison de huit produits logiciels.',
    },
    schemaType: 'CollectionPage',
  },
  {
    suffix: '/about',
    title: {
      en: `About ${siteIdentity.name} | Experience`,
      fr: `À propos de ${siteIdentity.name} | Parcours`,
    },
    description: {
      en: `${siteIdentity.name}’s engineering experience at Synelia Group, QUANTECH.SOLUTIONS and Orange Digital Center, ESATIC education and project case studies.`,
      fr: `Le parcours de ${siteIdentity.name} chez Synelia Group, QUANTECH.SOLUTIONS et Orange Digital Center, sa formation ESATIC et ses études de projets.`,
    },
    type: 'profile',
    lastModified: '2026-10-12',
  },
  {
    suffix: '/contact',
    title: {
      en: `Contact ${siteIdentity.name}`,
      fr: `Contacter ${siteIdentity.name}`,
    },
    description: {
      en: 'Discuss a workflow, AI, backend, or product architecture challenge with Boli Bi Balefai Mondesir. Based in Abidjan, available internationally.',
      fr: 'Échangez avec Boli Bi Balefai Mondesir sur un défi de workflow, d’IA, de backend ou d’architecture produit. Basé à Abidjan, disponible à l’international.',
    },
    schemaType: 'ContactPage',
  },
  {
    suffix: '/notes',
    title: { en: `Architecture Notes | ${siteIdentity.name}`, fr: `Notes d’architecture | ${siteIdentity.name}` },
    description: {
      en: 'Future writing on software architecture, AI systems, and product engineering.',
      fr: 'Futures publications sur l’architecture logicielle, les systèmes IA et l’ingénierie produit.',
    },
    index: false,
    schemaType: 'CollectionPage',
  },
];

const projectTitleOverrides: Partial<Record<Project['id'], Record<Locale, string>>> = {
  'autonomous-ai-development': {
    en: `Autonomous AI Development | ${siteIdentity.name}`,
    fr: `Développement IA autonome | ${siteIdentity.name}`,
  },
  'photovoltaic-optimization': {
    en: `Photovoltaic AI Project | ${siteIdentity.name}`,
    fr: `Projet IA photovoltaïque | ${siteIdentity.name}`,
  },
};

const projectImages: Partial<Record<Project['id'], string>> = {
  buildow: '/images/optimized/og/buildow.jpg',
  agentforge: '/images/optimized/og/agentforge.jpg',
  woody: '/images/optimized/og/woody.jpg',
};

const defaultImageAlt = {
  en: 'Conceptual software system and architecture layers.',
  fr: 'Système logiciel conceptuel et couches d’architecture.',
};
const projectImageAlts: Partial<Record<Project['id'], Record<Locale, string>>> = {
  buildow: { en: 'Conceptual BuildOw workflow studio and architecture overview.', fr: 'Vue conceptuelle du studio de workflow et de l’architecture BuildOw.' },
  agentforge: { en: 'AgentForge guided blueprint intake screen.', fr: 'Écran de saisie guidée d’un blueprint AgentForge.' },
  woody: { en: 'Person wearing a red polo shirt against a wooden background.', fr: 'Personne portant un polo rouge devant un fond en bois.' },
};

const normalizePath = (value: string) => {
  const path = value.split(/[?#]/)[0] || '/';
  return path.length > 1 ? path.replace(/\/+$/, '') : path;
};

const absolute = (path: string) => new URL(path, siteIdentity.url).toString();
const localizedPath = (locale: Locale, suffix: string) => `/${locale}${suffix}`;

const personSchema = (locale: Locale) => ({
  '@type': 'Person',
  '@id': `${siteIdentity.url}/#person`,
  name: siteIdentity.name,
  url: absolute(localizedPath(locale, '/about')),
  email: `mailto:${siteIdentity.email}`,
  jobTitle: currentEmployment.role[locale],
  worksFor: { '@type': 'Organization', name: currentEmployment.company },
  homeLocation: { '@type': 'Place', name: 'Abidjan, Côte d’Ivoire' },
  sameAs: [siteIdentity.github, siteIdentity.linkedin],
  knowsAbout: ['Software architecture', 'Workflow automation', 'Applied AI', 'Backend systems', 'Product engineering', 'Software Engineering', 'Backend Architecture', 'Business Process Management', 'Spring Boot', 'Angular'],
});

function alternates(suffix: string) {
  return {
    en: absolute(localizedPath('en', suffix)),
    fr: absolute(localizedPath('fr', suffix)),
    xDefault: absolute(localizedPath('en', suffix)),
  };
}

function genericStructuredData(definition: PageDefinition, locale: Locale, canonical: string) {
  const language = locale === 'fr' ? 'fr-FR' : 'en';
  const person = personSchema(locale);
  const pageType = definition.schemaType ?? 'WebPage';

  if (definition.suffix === '') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${siteIdentity.url}/#website`,
          url: siteIdentity.url,
          name: siteIdentity.name,
          inLanguage: ['en', 'fr'],
          creator: { '@id': `${siteIdentity.url}/#person` },
        },
        person,
      ],
    };
  }

  if (definition.suffix === '/about') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfilePage',
          '@id': `${canonical}#profile`,
          url: canonical,
          inLanguage: language,
          mainEntity: { '@id': `${siteIdentity.url}/#person` },
          ...(definition.lastModified ? { dateModified: definition.lastModified } : {}),
        },
        person,
      ],
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': pageType,
    '@id': `${canonical}#page`,
    url: canonical,
    name: definition.title[locale],
    description: definition.description[locale],
    inLanguage: language,
    author: { '@id': `${siteIdentity.url}/#person` },
  };
}

function createPageSeo(definition: PageDefinition, locale: Locale): SeoDescriptor {
  const path = localizedPath(locale, definition.suffix);
  const canonical = absolute(path);
  return {
    path,
    locale,
    title: definition.title[locale],
    description: definition.description[locale],
    canonical,
    alternates: alternates(definition.suffix),
    image: absolute(siteIdentity.defaultImage),
    imageAlt: defaultImageAlt[locale],
    type: definition.type ?? 'website',
    index: definition.index ?? true,
    lastModified: definition.lastModified,
    structuredData: genericStructuredData(definition, locale, canonical),
  };
}

function projectStructuredData(project: Project, locale: Locale, canonical: string, image: string) {
  const homeName = locale === 'fr' ? 'Accueil' : 'Home';
  const projectsName = locale === 'fr' ? 'Projets' : 'Projects';
  const pathPrefix = `/${locale}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        '@id': `${canonical}#case-study`,
        url: canonical,
        name: project.title,
        headline: project.headline[locale],
        description: project.summary[locale],
        inLanguage: locale === 'fr' ? 'fr-FR' : 'en',
        creator: { '@id': `${siteIdentity.url}/#person` },
        image,
        ...(project.review ? { dateModified: project.review.date } : {}),
        keywords: [...project.tech, ...project.architecture.patterns.map((pattern) => pattern[locale])],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: homeName, item: absolute(pathPrefix) },
          { '@type': 'ListItem', position: 2, name: projectsName, item: absolute(`${pathPrefix}/projects`) },
          { '@type': 'ListItem', position: 3, name: project.title, item: canonical },
        ],
      },
      personSchema(locale),
    ],
  };
}

function createProjectSeo(project: Project, locale: Locale): SeoDescriptor {
  const suffix = `/projects/${project.id}`;
  const path = localizedPath(locale, suffix);
  const canonical = absolute(path);
  const image = absolute(projectImages[project.id] ?? siteIdentity.defaultImage);
  const title = projectTitleOverrides[project.id]?.[locale]
    ?? (locale === 'fr' ? `${project.title} — Étude de cas | ${siteIdentity.name}` : `${project.title} Case Study | ${siteIdentity.name}`);

  return {
    path,
    locale,
    title,
    description: project.summary[locale],
    canonical,
    alternates: alternates(suffix),
    image,
    imageAlt: projectImageAlts[project.id]?.[locale] ?? defaultImageAlt[locale],
    type: 'article',
    index: true,
    lastModified: project.review?.date,
    structuredData: projectStructuredData(project, locale, canonical, image),
  };
}

export const seoRoutes: SeoDescriptor[] = [
  ...pageDefinitions.flatMap((definition) => (['en', 'fr'] as const).map((locale) => createPageSeo(definition, locale))),
  ...projects.flatMap((project) => (['en', 'fr'] as const).map((locale) => createProjectSeo(project, locale))),
];

export const indexableSeoRoutes = seoRoutes.filter((route) => route.index);

export function getSeoForPath(pathname: string): SeoDescriptor {
  const path = normalizePath(pathname);
  const existing = seoRoutes.find((route) => route.path === path);
  if (existing) return existing;

  const locale: Locale = path.startsWith('/fr') ? 'fr' : 'en';
  const fallbackPath = localizedPath(locale, '');
  return {
    ...createPageSeo(pageDefinitions[0], locale),
    path,
    title: locale === 'fr' ? 'Page introuvable | Boli Bi Balefai Mondesir' : 'Page not found | Boli Bi Balefai Mondesir',
    description: locale === 'fr' ? 'Cette page est introuvable.' : 'This page could not be found.',
    canonical: absolute(fallbackPath),
    index: false,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: locale === 'fr' ? 'Page introuvable' : 'Page not found',
      inLanguage: locale === 'fr' ? 'fr-FR' : 'en',
    },
  };
}

const escapeHtml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

export function renderSeoHead(seo: SeoDescriptor, fontPreloads: string[] = []) {
  const jsonLd = JSON.stringify(seo.structuredData).replace(/</g, '\\u003c');
  const ogLocale = seo.locale === 'fr' ? 'fr_FR' : 'en_US';
  const alternateLocale = seo.locale === 'fr' ? 'en_US' : 'fr_FR';
  const robots = seo.index ? 'index,follow,max-image-preview:large' : 'noindex,nofollow';
  const preloadTags = fontPreloads.map((href) => `<link data-seo="route" rel="preload" href="${escapeHtml(href)}" as="font" type="font/woff2" crossorigin />`);

  return [
    `<title data-seo="route">${escapeHtml(seo.title)}</title>`,
    `<meta data-seo="route" name="description" content="${escapeHtml(seo.description)}" />`,
    `<meta data-seo="route" name="author" content="${escapeHtml(siteIdentity.name)}" />`,
    `<meta data-seo="route" name="robots" content="${robots}" />`,
    `<link data-seo="route" rel="canonical" href="${escapeHtml(seo.canonical)}" />`,
    `<link data-seo="route" rel="alternate" hreflang="en" href="${escapeHtml(seo.alternates.en)}" />`,
    `<link data-seo="route" rel="alternate" hreflang="fr" href="${escapeHtml(seo.alternates.fr)}" />`,
    `<link data-seo="route" rel="alternate" hreflang="x-default" href="${escapeHtml(seo.alternates.xDefault)}" />`,
    `<meta data-seo="route" property="og:type" content="${seo.type}" />`,
    `<meta data-seo="route" property="og:site_name" content="${escapeHtml(siteIdentity.name)}" />`,
    `<meta data-seo="route" property="og:title" content="${escapeHtml(seo.title)}" />`,
    `<meta data-seo="route" property="og:description" content="${escapeHtml(seo.description)}" />`,
    `<meta data-seo="route" property="og:url" content="${escapeHtml(seo.canonical)}" />`,
    `<meta data-seo="route" property="og:locale" content="${ogLocale}" />`,
    `<meta data-seo="route" property="og:locale:alternate" content="${alternateLocale}" />`,
    `<meta data-seo="route" property="og:image" content="${escapeHtml(seo.image)}" />`,
    '<meta data-seo="route" property="og:image:width" content="1200" />',
    '<meta data-seo="route" property="og:image:height" content="630" />',
    `<meta data-seo="route" property="og:image:alt" content="${escapeHtml(seo.imageAlt)}" />`,
    '<meta data-seo="route" name="twitter:card" content="summary_large_image" />',
    `<meta data-seo="route" name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    `<meta data-seo="route" name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    `<meta data-seo="route" name="twitter:image" content="${escapeHtml(seo.image)}" />`,
    `<meta data-seo="route" name="twitter:image:alt" content="${escapeHtml(seo.imageAlt)}" />`,
    ...preloadTags,
    `<script data-seo="route" type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ');
}
