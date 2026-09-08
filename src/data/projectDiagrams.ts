import type { LocalizedText } from './portfolioProjects';

export interface ProjectDiagram {
  src: string;
  alt: LocalizedText;
  caption: LocalizedText;
}

const localized = (en: string, fr: string): LocalizedText => ({ en, fr });

export const projectDiagrams: Record<string, ProjectDiagram> = {
  buildow: {
    src: '/images/buildow-architecture.svg',
    alt: localized('BuildOw conceptual architecture diagram.', 'Diagramme conceptuel de l’architecture BuildOw.'),
    caption: localized('Domain ownership, workflow execution, data, and infrastructure boundaries.', 'Frontières du domaine, de l’exécution des workflows, des données et de l’infrastructure.'),
  },
  taskflow: {
    src: '/images/taskflow-architecture.svg',
    alt: localized('TaskFlow conceptual architecture diagram.', 'Diagramme conceptuel de l’architecture TaskFlow.'),
    caption: localized('Role-separated collaboration, policy enforcement, and private data access.', 'Collaboration par rôles, application des politiques et accès privé aux données.'),
  },
  agentforge: {
    src: '/images/agentforge-architecture.svg',
    alt: localized('AgentForge conceptual architecture diagram.', 'Diagramme conceptuel de l’architecture AgentForge.'),
    caption: localized('Typed blueprint pipeline from product discovery to reviewed engineering exports.', 'Pipeline de blueprint typé, de la découverte produit aux exports techniques validés.'),
  },
  'iot-energy-management': {
    src: '/images/iot-energy-management-architecture.svg',
    alt: localized('IoT Energy Management conceptual architecture diagram.', 'Diagramme conceptuel de l’architecture de gestion énergétique IoT.'),
    caption: localized('Device telemetry, event processing, storage, and operational monitoring.', 'Télémétrie des équipements, traitement des événements, stockage et supervision.'),
  },
  'photovoltaic-optimization': {
    src: '/images/photovoltaic-optimization-architecture.svg',
    alt: localized('Photovoltaic Optimization conceptual architecture diagram.', 'Diagramme conceptuel de l’architecture d’optimisation photovoltaïque.'),
    caption: localized('Forecasting, optimization, control, and measured feedback across the energy system.', 'Prévision, optimisation, contrôle et retour mesuré à travers le système énergétique.'),
  },
};
