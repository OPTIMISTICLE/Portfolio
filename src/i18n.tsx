/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import type { Locale, LocalizedText } from './data/portfolioProjects';

type Dictionary = { [K in keyof typeof dictionaries.en]: (typeof dictionaries.en)[K] extends readonly string[] ? readonly string[] : string };

const dictionaries = {
  en: {
    home: 'Home', projects: 'Projects', architectures: 'Architectures', about: 'About', notes: 'Notes', contact: 'Contact',
    skip: 'Skip to content', menu: 'Open menu', close: 'Close menu', language: 'Français', available: 'Based in Abidjan · Working internationally',
    position: 'Software Architecture Consultant & Product Engineer', hero: 'Software architecture, made tangible.',
    intro: 'I help product teams clarify, design, and deliver secure workflow platforms, applied AI products, and backend systems.',
    viewProjects: 'View project index', contactMe: 'Contact me', selectedWork: 'Selected work', viewAll: 'View all projects',
    consulting: 'Software architecture consulting', consultingIntro: 'Focused engagements that turn complex product constraints into clear boundaries, delivery decisions, and systems teams can operate.', location: 'Based in Abidjan, Côte d’Ivoire · Working internationally', viewEvidence: 'View related case study', breadcrumbs: 'Breadcrumbs',
    practice: 'Architecture practice', practiceIntro: 'How I turn uncertain product needs into systems teams can build, operate, and evolve.',
    principles: ['Start with the business model', 'Make boundaries and trade-offs explicit', 'Design operations with the product'],
    projectIndex: 'Project index', projectIndexIntro: 'Eight case studies connecting product intent, architecture decisions, and delivery evidence.',
    all: 'All', openCase: 'Open case study', caseStudy: 'Case study', backProjects: 'Projects', role: 'Role', scope: 'Scope', status: 'Status', year: 'Year',
    problem: 'The problem', response: 'The response', productFlow: 'Product flow', decisions: 'Architecture decisions', system: 'System architecture', reliability: 'Security & reliability', outcomes: 'Outcomes & evidence', stack: 'Technology stack', gallery: 'Product evidence', next: 'Next project',
    architectureIndex: 'Architecture index', architectureIntro: 'Conceptual views of the boundaries, flows, and decisions behind every product.', patterns: 'Design patterns', exploreProject: 'Explore the project',
    aboutTitle: 'Architecture with delivery responsibility.', aboutIntro: 'I am a software architecture consultant and product engineer based in Abidjan, working internationally across product discovery, backend architecture, applied AI, and delivery.',
    approach: 'Working principles', experience: 'Experience', certifications: 'Certifications',
    notesTitle: 'Notes', notesIntro: 'Verified writing on architecture, AI systems, and product engineering.', notesEmpty: 'No verified publication is listed yet. Project case studies currently hold the detailed technical writing.',
    contactTitle: 'Let’s make the system clear.', contactIntro: 'Share the workflow, AI, backend, or product architecture challenge you need to resolve. I work from Abidjan with teams internationally.',
    name: 'Name', email: 'Email', company: 'Company', message: 'Project or challenge', compose: 'Compose email', copyEmail: 'Copy email address', copied: 'Email copied', required: 'Please complete the required fields.',
    notFound: 'This page is outside the blueprint.', returnHome: 'Return home', verified: 'Verified source', conceptual: 'Conceptual view', footer: 'Designing systems. Delivering impact.',
  },
  fr: {
    home: 'Accueil', projects: 'Projets', architectures: 'Architectures', about: 'À propos', notes: 'Notes', contact: 'Contact',
    skip: 'Aller au contenu', menu: 'Ouvrir le menu', close: 'Fermer le menu', language: 'English', available: 'Basé à Abidjan · Actif à l’international',
    position: 'Consultant en architecture logicielle & ingénieur produit', hero: 'L’architecture logicielle, rendue tangible.',
    intro: 'J’aide les équipes produit à clarifier, concevoir et livrer des plateformes de workflow, produits IA et systèmes backend sécurisés.',
    viewProjects: 'Voir les projets', contactMe: 'Me contacter', selectedWork: 'Projets sélectionnés', viewAll: 'Voir tous les projets',
    consulting: 'Conseil en architecture logicielle', consultingIntro: 'Des interventions ciblées qui transforment des contraintes produit complexes en frontières claires, décisions de livraison et systèmes exploitables.', location: 'Basé à Abidjan, Côte d’Ivoire · Actif à l’international', viewEvidence: 'Voir l’étude de cas associée', breadcrumbs: 'Fil d’Ariane',
    practice: 'Pratique de l’architecture', practiceIntro: 'Ma façon de transformer des besoins incertains en systèmes que les équipes peuvent construire, exploiter et faire évoluer.',
    principles: ['Partir du modèle métier', 'Rendre explicites les frontières et compromis', 'Concevoir les opérations avec le produit'],
    projectIndex: 'Index des projets', projectIndexIntro: 'Huit études de cas reliant intention produit, décisions d’architecture et preuves de livraison.',
    all: 'Tous', openCase: 'Ouvrir l’étude de cas', caseStudy: 'Étude de cas', backProjects: 'Projets', role: 'Rôle', scope: 'Périmètre', status: 'Statut', year: 'Année',
    problem: 'Le problème', response: 'La réponse', productFlow: 'Parcours produit', decisions: 'Décisions d’architecture', system: 'Architecture système', reliability: 'Sécurité et fiabilité', outcomes: 'Résultats et preuves', stack: 'Stack technique', gallery: 'Preuves produit', next: 'Projet suivant',
    architectureIndex: 'Index des architectures', architectureIntro: 'Vues conceptuelles des frontières, flux et décisions derrière chaque produit.', patterns: 'Patterns de conception', exploreProject: 'Explorer le projet',
    aboutTitle: 'L’architecture avec la responsabilité de livrer.', aboutIntro: 'Je suis consultant en architecture logicielle et ingénieur produit basé à Abidjan. J’interviens à l’international de la découverte produit à l’architecture backend, l’IA appliquée et la livraison.',
    approach: 'Principes de travail', experience: 'Expérience', certifications: 'Certifications',
    notesTitle: 'Notes', notesIntro: 'Publications vérifiées sur l’architecture, les systèmes IA et l’ingénierie produit.', notesEmpty: 'Aucune publication vérifiée n’est encore listée. Les études de cas rassemblent actuellement les analyses techniques détaillées.',
    contactTitle: 'Rendons le système clair.', contactIntro: 'Partagez le défi de workflow, d’IA, de backend ou d’architecture produit à résoudre. Je travaille depuis Abidjan avec des équipes internationales.',
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




