/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import type { Locale, LocalizedText } from './data/portfolioProjects';

type Dictionary = { [K in keyof typeof dictionaries.en]: (typeof dictionaries.en)[K] extends readonly string[] ? readonly string[] : string };

const dictionaries = {
  en: {
    home: 'Home', projects: 'Projects', architectures: 'Architectures', about: 'About', notes: 'Notes', contact: 'Contact',
    skip: 'Skip to content', menu: 'Open menu', close: 'Close menu', language: 'Français', available: 'Based in Abidjan · Working internationally',
    position: 'Software Engineer · Backend Systems & Architecture', hero: 'Software architecture, made tangible.',
    intro: 'Boli Bi Balefai Mondesir — software engineer based in Abidjan. I build backend systems, business workflow platforms, and applied AI products, from requirements and data models to full-stack implementation.',
    viewProjects: 'View project index', contactMe: 'Contact me', selectedWork: 'Selected work', viewAll: 'View all projects',
    capabilities: 'What I build', capabilitiesIntro: 'Business workflows, backend platforms, and applied AI products shaped by explicit models, APIs, and delivery decisions.', location: 'Based in Abidjan, Côte d’Ivoire · Working internationally', viewEvidence: 'View related case study', breadcrumbs: 'Breadcrumbs', currentRole: 'Current role', domains: 'Backend systems · Business workflows · Applied AI',
    practice: 'Architecture practice', practiceIntro: 'How I turn uncertain product needs into systems teams can build, operate, and evolve.',
    principles: ['Start with the business model', 'Make boundaries and trade-offs explicit', 'Design operations with the product'],
    projectIndex: 'Project index', projectIndexIntro: 'Eight case studies connecting product intent, architecture decisions, and delivery evidence.',
    all: 'All', openCase: 'Open case study', caseStudy: 'Case study', backProjects: 'Projects', role: 'Role', scope: 'Scope', status: 'Status', year: 'Year',
    problem: 'The problem', response: 'The response', productFlow: 'Product flow', decisions: 'Architecture decisions', system: 'System architecture', reliability: 'Security & reliability', outcomes: 'Outcomes & evidence', stack: 'Technology stack', gallery: 'Product evidence', next: 'Next project',
    architectureIndex: 'Architecture index', architectureIntro: 'Conceptual views of the boundaries, flows, and decisions behind every product.', patterns: 'Design patterns', exploreProject: 'Explore the project',
    aboutTitle: 'Building software, thinking in systems.', aboutIntro: 'I am a software engineer based in Abidjan. My work connects full-stack development, backend architecture, business process digitalization, and applied AI.',
    approach: 'Working principles', experience: 'Professional experience', certifications: 'Training & credentials', education: 'Education', academicProject: 'Academic project', languages: 'Languages', languageSkills: 'French: native · English: C1', resumes: 'Download a CV', progression: 'My experience spans connected-system APIs at Orange Digital Center, workflow platform engineering at QUANTECH.SOLUTIONS, and my current full-stack role at Synelia Group.',
    notesTitle: 'Notes', notesIntro: 'Verified writing on architecture, AI systems, and product engineering.', notesEmpty: 'No verified publication is listed yet. Project case studies currently hold the detailed technical writing.',
    contactTitle: 'Let’s make the system clear.', contactIntro: 'Get in touch about software engineering, backend systems, business workflows, or applied AI. I am based in Abidjan and currently work as a full-stack developer at Synelia Group.',
    name: 'Name', email: 'Email', company: 'Company', message: 'Project or challenge', compose: 'Compose email', copyEmail: 'Copy email address', copied: 'Email copied', required: 'Please complete the required fields.',
    notFound: 'This page is outside the blueprint.', returnHome: 'Return home', verified: 'Verified source', conceptual: 'Conceptual view', footer: 'Designing systems. Delivering impact.',
  },
  fr: {
    home: 'Accueil', projects: 'Projets', architectures: 'Architectures', about: 'À propos', notes: 'Notes', contact: 'Contact',
    skip: 'Aller au contenu', menu: 'Ouvrir le menu', close: 'Fermer le menu', language: 'English', available: 'Basé à Abidjan · Actif à l’international',
    position: 'Ingénieur logiciel · Systèmes backend & architecture', hero: 'L’architecture logicielle, rendue tangible.',
    intro: 'Boli Bi Balefai Mondesir — ingénieur logiciel basé à Abidjan. Je construis des systèmes backend, plateformes de workflow et produits d’IA appliquée, des besoins et modèles de données à l’implémentation full-stack.',
    viewProjects: 'Voir les projets', contactMe: 'Me contacter', selectedWork: 'Projets sélectionnés', viewAll: 'Voir tous les projets',
    capabilities: 'Ce que je construis', capabilitiesIntro: 'Workflows métier, plateformes backend et produits d’IA appliquée, structurés par des modèles explicites, des API et des décisions de livraison.', location: 'Basé à Abidjan, Côte d’Ivoire · Actif à l’international', viewEvidence: 'Voir l’étude de cas associée', breadcrumbs: 'Fil d’Ariane', currentRole: 'Poste actuel', domains: 'Systèmes backend · Workflows métier · IA appliquée',
    practice: 'Pratique de l’architecture', practiceIntro: 'Ma façon de transformer des besoins incertains en systèmes que les équipes peuvent construire, exploiter et faire évoluer.',
    principles: ['Partir du modèle métier', 'Rendre explicites les frontières et compromis', 'Concevoir les opérations avec le produit'],
    projectIndex: 'Index des projets', projectIndexIntro: 'Huit études de cas reliant intention produit, décisions d’architecture et preuves de livraison.',
    all: 'Tous', openCase: 'Ouvrir l’étude de cas', caseStudy: 'Étude de cas', backProjects: 'Projets', role: 'Rôle', scope: 'Périmètre', status: 'Statut', year: 'Année',
    problem: 'Le problème', response: 'La réponse', productFlow: 'Parcours produit', decisions: 'Décisions d’architecture', system: 'Architecture système', reliability: 'Sécurité et fiabilité', outcomes: 'Résultats et preuves', stack: 'Stack technique', gallery: 'Preuves produit', next: 'Projet suivant',
    architectureIndex: 'Index des architectures', architectureIntro: 'Vues conceptuelles des frontières, flux et décisions derrière chaque produit.', patterns: 'Patterns de conception', exploreProject: 'Explorer le projet',
    aboutTitle: 'Construire le logiciel, penser le système.', aboutIntro: 'Je suis ingénieur logiciel basé à Abidjan. Mon travail relie développement full-stack, architecture backend, digitalisation des processus métier et IA appliquée.',
    approach: 'Principes de travail', experience: 'Expériences professionnelles', certifications: 'Formations et badges', education: 'Formation académique', academicProject: 'Projet académique', languages: 'Langues', languageSkills: 'Français : langue maternelle · Anglais : C1', resumes: 'Télécharger un CV', progression: 'Mon parcours relie les API de systèmes connectés chez Orange Digital Center, le développement d’une plateforme de workflow chez QUANTECH.SOLUTIONS et mon poste actuel de développeur full-stack chez Synelia Group.',
    notesTitle: 'Notes', notesIntro: 'Publications vérifiées sur l’architecture, les systèmes IA et l’ingénierie produit.', notesEmpty: 'Aucune publication vérifiée n’est encore listée. Les études de cas rassemblent actuellement les analyses techniques détaillées.',
    contactTitle: 'Rendons le système clair.', contactIntro: 'Échangeons sur l’ingénierie logicielle, les systèmes backend, les workflows métier ou l’IA appliquée. Basé à Abidjan, je suis actuellement développeur full-stack chez Synelia Group.',
    name: 'Nom', email: 'E-mail', company: 'Entreprise', message: 'Projet ou défi', compose: 'Préparer l’e-mail', copyEmail: 'Copier l’adresse e-mail', copied: 'E-mail copié', required: 'Veuillez remplir les champs obligatoires.',
    notFound: 'Cette page est hors du blueprint.', returnHome: 'Retour à l’accueil', verified: 'Source vérifiée', conceptual: 'Vue conceptuelle', footer: 'Concevoir des systèmes. Livrer de l’impact.',
  },
} as const;

interface LocaleContextValue { locale: Locale; d: Dictionary; text: (value: LocalizedText) => string; switchLocale: () => void }
const LocaleContext = createContext<LocaleContextValue | null>(null);
export const isLocale = (value?: string): value is Locale => value === 'en' || value === 'fr';

export function preferredLocale(): Locale {
  const saved = window.localStorage.getItem('portfolio-locale');
  if (isLocale(saved ?? undefined)) return saved as Locale;
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const { locale: rawLocale } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const locale: Locale = isLocale(rawLocale) ? rawLocale : 'en';

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem('portfolio-locale', locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => ({
    locale,
    d: dictionaries[locale],
    text: (copy) => copy[locale],
    switchLocale: () => {
      const next: Locale = locale === 'en' ? 'fr' : 'en';
      const segments = location.pathname.split('/');
      segments[1] = next;
      navigate(segments.join('/') + location.search + location.hash);
    },
  }), [locale, location.hash, location.pathname, location.search, navigate]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error('useLocale must be used inside LocaleProvider');
  return context;
}




