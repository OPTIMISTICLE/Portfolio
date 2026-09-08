import type { LocalizedText } from './portfolioProjects';

const l = (en: string, fr: string): LocalizedText => ({ en, fr });

export const experience = [
  {
    company: 'ESATIC', role: l('Backend Engineer', 'Ingénieur backend'), period: l('October 2025 — February 2026', 'Octobre 2025 — Février 2026'),
    summary: l('Designed modular and agent-oriented backend services, integrated AI models and real-time data, and supported automated delivery.', 'Conception de services backend modulaires et orientés agents, intégration de modèles IA et de données temps réel, et automatisation de la livraison.'),
    tech: ['Python', 'LangChain', 'SPADE', 'InfluxDB', 'Redis', 'MQTT', 'LSTM', 'Docker'],
  },
  {
    company: 'Orange Digital Center Abidjan-Plateau', role: l('Backend Engineer', 'Ingénieur backend'), period: l('April 2024 — November 2024', 'Avril 2024 — Novembre 2024'),
    summary: l('Built backend architecture and secure APIs connecting embedded energy devices, cloud services, and mobile experiences.', 'Conception de l’architecture backend et d’API sécurisées reliant équipements énergétiques embarqués, services cloud et expériences mobiles.'),
    tech: ['Node.js', 'Express', 'Arduino', 'Flutter', 'MySQL', 'MongoDB', 'REST'],
  },
];

export const certifications = [
  { name: 'Python Pro Bootcamp', year: '2026', url: 'https://www.udemy.com/certificate/UC-b614166c-9511-4575-85a3-9d46b268e676/' },
  { name: 'AWS Cloud Quest — Cloud Practitioner', year: '2025', url: 'https://www.credly.com/badges/96340afe-5826-4e0a-9b5b-2d3050b34236' },
];
