import type { LocalizedText } from './portfolioProjects';

const l = (en: string, fr: string): LocalizedText => ({ en, fr });

export const experience = [
  {
    company: 'Synelia Group', role: l('Full-stack Developer', 'Développeur full-stack'), period: l('October 2026 — Present', 'Octobre 2026 — Aujourd’hui'),
    summary: l('Full-stack development with Spring Boot and Angular.', 'Développement full-stack avec Spring Boot et Angular.'),
    tech: ['Spring Boot', 'Angular'],
  },
  {
    company: 'QUANTECH.SOLUTIONS', role: l('Software Engineer', 'Ingénieur logiciel'), period: l('March 2026 — October 2026', 'Mars 2026 — Octobre 2026'),
    summary: l('Designed and developed BuildOw, a multi-organization workflow platform. Worked on the modular architecture, data models, REST APIs, dynamic forms, assignment policies, access rules, and audit trails.', 'Conception et développement de BuildOw, plateforme de workflows multi-organisation : architecture modulaire, modèles de données, API REST, formulaires dynamiques, affectations, droits d’accès et traçabilité.'),
    tech: ['Java 21', 'Spring Boot', 'Spring Security', 'Angular', 'PostgreSQL', 'Docker'],
  },
  {
    company: 'Orange Digital Center', role: l('Software Engineer', 'Ingénieur logiciel'), period: l('April 2024 — November 2024', 'Avril 2024 — Novembre 2024'),
    summary: l('Contributed to an IoT energy management system connecting sensors, backend services, databases, and a mobile application. Designed real-time REST APIs and data collection flows within an Agile team.', 'Contribution à un système IoT de gestion énergétique reliant capteurs, services backend, bases de données et application mobile. Conception d’API REST temps réel et de flux de collecte au sein d’une équipe Agile.'),
    tech: ['Node.js', 'Express', 'Arduino', 'Flutter', 'MySQL', 'MongoDB', 'REST'],
  },
];

export const currentEmployment = experience[0];

export const education = [
  {
    institution: 'ESATIC',
    degree: l('Master’s in Information Systems and Software Engineering', 'Master en Systèmes d’Information et Génie Logiciel'),
    period: l('September 2024 — September 2026', 'Septembre 2024 — Septembre 2026'),
    summary: l('Software development, systems analysis, project management, and information-system and database modeling.', 'Développement logiciel, analyse des systèmes, gestion de projet, modélisation des systèmes d’information et des bases de données.'),
  },
  {
    institution: 'ESATIC',
    degree: l('Bachelor’s in Computer Networks and Telecommunications', 'Licence en Systèmes, Réseaux Informatiques et Télécommunications'),
    period: l('September 2021 — September 2024', 'Septembre 2021 — Septembre 2024'),
    summary: l('Foundations in mathematics, physics, computer science, and computer networks.', 'Fondamentaux en mathématiques, physique, informatique et réseaux.'),
  },
];

export const academicProject = {
  title: l('Agentic AI for photovoltaic stations', 'IA agentique pour centrales photovoltaïques'),
  institution: 'ESATIC',
  period: l('October 2025 — February 2026', 'Octobre 2025 — Février 2026'),
  summary: l('Designed and developed a multi-agent system for photovoltaic station optimization and data exchange.', 'Conception et développement d’un système multi-agent pour l’optimisation photovoltaïque et l’échange de données.'),
  tech: ['Python', 'SPADE', 'LangChain', 'MQTT', 'InfluxDB', 'Redis', 'Docker'],
  projectId: 'photovoltaic-optimization',
};

export const resumes = [
  { title: l('Software architecture CV (French)', 'CV architecture logicielle (français)'), href: '/cv/boli-mondesir-software-architecture-fr.pdf' },
  { title: l('Digital transformation CV (French)', 'CV transformation digitale (français)'), href: '/cv/boli-mondesir-digital-transformation-fr.pdf' },
];

export const certifications = [
  { name: 'Python Pro Bootcamp', year: '2026', url: 'https://www.udemy.com/certificate/UC-b614166c-9511-4575-85a3-9d46b268e676/' },
  { name: 'AWS Cloud Quest — Cloud Practitioner', year: '2025', url: 'https://www.credly.com/badges/96340afe-5826-4e0a-9b5b-2d3050b34236' },
];
