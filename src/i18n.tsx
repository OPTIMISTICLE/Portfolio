/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import type { Locale, LocalizedText } from './data/portfolioProjects';

type Dictionary = { [K in keyof typeof dictionaries.en]: (typeof dictionaries.en)[K] extends readonly string[] ? readonly string[] : string };

const dictionaries = {
  en: {
    home: 'Home', projects: 'Projects', architectures: 'Architectures', about: 'About', notes: 'Notes', contact: 'Contact',
    skip: 'Skip to content', menu: 'Open menu', close: 'Close menu', language: 'Français', available: 'Open to architecture and product engineering opportunities',
    position: 'Software Architect & Product Engineer', hero: 'Software architecture, made tangible.',
    intro: 'I design and ship secure systems that connect business workflows, AI products, and real-world operations.',
    viewProjects: 'View project index', contactMe: 'Contact me', selectedWork: 'Selected work', viewAll: 'View all projects',
    practice: 'Architecture practice', practiceIntro: 'How I turn uncertain product needs into systems teams can build, operate, and evolve.',
    principles: ['Start with the business model', 'Make boundaries and trade-offs explicit', 'Design operations with the product'],
    projectIndex: 'Project index', projectIndexIntro: 'Eight case studies connecting product intent, architecture decisions, and delivery evidence.',
    all: 'All', openCase: 'Open case study', caseStudy: 'Case study', backProjects: 'Projects', role: 'Role', scope: 'Scope', status: 'Status', year: 'Year',
    problem: 'The problem', response: 'The response', productFlow: 'Product flow', decisions: 'Architecture decisions', system: 'System architecture', reliability: 'Security & reliability', outcomes: 'Outcomes & evidence', stack: 'Technology stack', gallery: 'Product evidence', next: 'Next project',
    architectureIndex: 'Architecture index', architectureIntro: 'Conceptual views of the boundaries, flows, and decisions behind every product.', patterns: 'Design patterns', exploreProject: 'Explore the project',
    aboutTitle: 'Architecture with delivery responsibility.', aboutIntro: 'I work across product discovery, backend architecture, applied AI, and delivery. My focus is making complex systems understandable enough to build and dependable enough to operate.',
    approach: 'Working principles', experience: 'Experience', certifications: 'Certifications',
    notesTitle: 'Notes', notesIntro: 'Verified writing on architecture, AI systems, and product engineering.', notesEmpty: 'No verified publication is listed yet. Project case studies currently hold the detailed technical writing.',
    contactTitle: 'Let’s make the system clear.', contactIntro: 'Share the product context, the constraints, and the decision you need to make. This form opens your email client with a structured message.',
    name: 'Name', email: 'Email', company: 'Company', message: 'Project or challenge', compose: 'Compose email', copyEmail: 'Copy email address', copied: 'Email copied', required: 'Please complete the required fields.',
    notFound: 'This page is outside the blueprint.', returnHome: 'Return home', verified: 'Verified source', conceptual: 'Conceptual view', footer: 'Designing systems. Delivering impact.',
  },
  fr: {
    home: 'Accueil', projects: 'Projets', architectures: 'Architectures', about: 'À propos', notes: 'Notes', contact: 'Contact',
    skip: 'Aller au contenu', menu: 'Ouvrir le menu', close: 'Fermer le menu', language: 'English', available: 'Ouvert aux opportunités en architecture et ingénierie produit',
    position: 'Architecte logiciel & ingénieur produit', hero: 'L’architecture logicielle, rendue tangible.',
    intro: 'Je conçois et livre des systèmes sécurisés qui relient workflows métier, produits IA et opérations réelles.',
    viewProjects: 'Voir les projets', contactMe: 'Me contacter', selectedWork: 'Projets sélectionnés', viewAll: 'Voir tous les projets',
    practice: 'Pratique de l’architecture', practiceIntro: 'Ma façon de transformer des besoins incertains en systèmes que les équipes peuvent construire, exploiter et faire évoluer.',
    principles: ['Partir du modèle métier', 'Rendre explicites les frontières et compromis', 'Concevoir les opérations avec le produit'],
    projectIndex: 'Index des projets', projectIndexIntro: 'Huit études de cas reliant intention produit, décisions d’architecture et preuves de livraison.',
    all: 'Tous', openCase: 'Ouvrir l’étude de cas', caseStudy: 'Étude de cas', backProjects: 'Projets', role: 'Rôle', scope: 'Périmètre', status: 'Statut', year: 'Année',
    problem: 'Le problème', response: 'La réponse', productFlow: 'Parcours produit', decisions: 'Décisions d’architecture', system: 'Architecture système', reliability: 'Sécurité et fiabilité', outcomes: 'Résultats et preuves', stack: 'Stack technique', gallery: 'Preuves produit', next: 'Projet suivant',
    architectureIndex: 'Index des architectures', architectureIntro: 'Vues conceptuelles des frontières, flux et décisions derrière chaque produit.', patterns: 'Patterns de conception', exploreProject: 'Explorer le projet',
    aboutTitle: 'L’architecture avec la responsabilité de livrer.', aboutIntro: 'J’interviens de la découverte produit à l’architecture backend, l’IA appliquée et la livraison. Mon objectif est de rendre les systèmes complexes assez clairs pour être construits et assez fiables pour être exploités.',
    approach: 'Principes de travail', experience: 'Expérience', certifications: 'Certifications',
    notesTitle: 'Notes', notesIntro: 'Publications vérifiées sur l’architecture, les systèmes IA et l’ingénierie produit.', notesEmpty: 'Aucune publication vérifiée n’est encore listée. Les études de cas rassemblent actuellement les analyses techniques détaillées.',
    contactTitle: 'Rendons le système clair.', contactIntro: 'Partagez le contexte produit, les contraintes et la décision à prendre. Ce formulaire ouvre votre client e-mail avec un message structuré.',
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




