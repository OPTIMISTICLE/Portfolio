export type Locale = 'en' | 'fr';
export type LocalizedText = Record<Locale, string>;

export interface ProjectMedia {
  src: string;
  alt: LocalizedText;
  caption: LocalizedText;
  kind: 'verified-screen' | 'verified-photo' | 'concept-visual';
}

export interface ProjectItem { title: LocalizedText; description: LocalizedText }

export interface Project {
  id: string;
  number: string;
  year: string;
  featured: boolean;
  category: LocalizedText;
  title: string;
  headline: LocalizedText;
  summary: LocalizedText;
  role: LocalizedText;
  scope: LocalizedText[];
  status: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  flow: ProjectItem[];
  decisions: ProjectItem[];
  architecture: { summary: LocalizedText; nodes: LocalizedText[]; patterns: LocalizedText[] };
  reliability: LocalizedText[];
  outcomes: LocalizedText[];
  tech: string[];
  media: ProjectMedia[];
}

const l = (en: string, fr: string): LocalizedText => ({ en, fr });
const item = (titleEn: string, titleFr: string, descriptionEn: string, descriptionFr: string): ProjectItem => ({
  title: l(titleEn, titleFr), description: l(descriptionEn, descriptionFr),
});
const concept = (en: string, fr: string): ProjectMedia => ({
  src: '/images/portfolio/systems-hero.png', alt: l(en, fr),
  caption: l('Conceptual system view created for this portfolio.', 'Vue conceptuelle du système créée pour ce portfolio.'),
  kind: 'concept-visual',
});

export const projects: Project[] = [
  {
    id: 'buildow', number: '01', year: '2026', featured: true, title: 'BuildOw',
    category: l('Workflow platform', 'Plateforme de workflow'),
    headline: l('Business workflows, without the BPMN burden.', 'Des workflows métier, sans la complexité du BPMN.'),
    summary: l('A form-first platform for modeling, publishing, executing, and monitoring business processes.', 'Une plateforme centrée sur les formulaires pour modéliser, publier, exécuter et superviser les processus métier.'),
    role: l('Product & Software Architect', 'Architecte produit et logiciel'),
    scope: [l('Backend architecture', 'Architecture backend'), l('Workflow model', 'Modèle de workflow'), l('Security', 'Sécurité'), l('Product UX', 'UX produit')],
    status: l('In development', 'En développement'),
    challenge: l('Make workflow automation accessible to nontechnical users while preserving deterministic execution, version integrity, tenant isolation, and contextual confidentiality.', 'Rendre l’automatisation accessible aux utilisateurs non techniques tout en garantissant l’exécution déterministe, l’intégrité des versions, l’isolation des organisations et la confidentialité contextuelle.'),
    solution: l('A modular monolith owns the canonical business model and authorization rules, while Flowable manages process and task execution. Dynamic assignment connects responsibilities to the organization structure.', 'Un monolithe modulaire porte le modèle métier canonique et les règles d’autorisation, tandis que Flowable gère l’exécution. L’affectation dynamique relie les responsabilités à la structure organisationnelle.'),
    flow: [item('Design', 'Concevoir', 'Compose forms, steps, actors, and rules.', 'Composer formulaires, étapes, acteurs et règles.'), item('Validate', 'Valider', 'Check structure and assignment readiness.', 'Vérifier la structure et les affectations.'), item('Publish', 'Publier', 'Create an immutable executable version.', 'Créer une version exécutable immuable.'), item('Execute', 'Exécuter', 'Route work through personalized worklists.', 'Distribuer le travail dans des listes personnalisées.'), item('Audit', 'Auditer', 'Trace business and security events.', 'Tracer les événements métier et de sécurité.')],
    decisions: [item('Modular monolith', 'Monolithe modulaire', 'Clear boundaries without premature distributed complexity.', 'Des frontières claires sans complexité distribuée prématurée.'), item('Canonical model', 'Modèle canonique', 'The product stays independent from the engine representation.', 'Le produit reste indépendant de la représentation du moteur.'), item('Immutable publication', 'Publication immuable', 'Instances keep the exact definition under which they started.', 'Les instances conservent leur définition de démarrage.')],
    architecture: { summary: l('Business ownership stays in BuildOw; Flowable is a replaceable execution capability.', 'La maîtrise métier reste dans BuildOw ; Flowable demeure une capacité d’exécution remplaçable.'), nodes: [l('Angular workspace', 'Espace Angular'), l('IAM & organization', 'IAM et organisation'), l('Process model', 'Modèle de processus'), l('Runtime & audit', 'Runtime et audit'), l('Flowable engine', 'Moteur Flowable'), l('PostgreSQL & Redis', 'PostgreSQL et Redis')], patterns: [l('Tenant isolation', 'Isolation des tenants'), l('Dynamic assignment', 'Affectation dynamique'), l('Contextual authorization', 'Autorisation contextuelle')] },
    reliability: [l('Published workflow versions are immutable.', 'Les versions publiées sont immuables.'), l('Authorization uses organization and process context.', 'L’autorisation tient compte de l’organisation et du processus.'), l('Business and security events remain auditable.', 'Les événements métier et de sécurité restent auditables.')],
    outcomes: [l('A coherent domain model for workflows, forms, actors, and versions.', 'Un modèle cohérent pour workflows, formulaires, acteurs et versions.'), l('A role-aware experience for designers and participants.', 'Une expérience adaptée aux concepteurs et participants.'), l('An architecture able to evolve independently of Flowable.', 'Une architecture évolutive indépendamment de Flowable.')],
    tech: ['Java 21', 'Spring Boot', 'Angular', 'Flowable', 'PostgreSQL', 'Redis', 'Liquibase', 'Docker'],
    media: [{ src: '/images/portfolio/buildow-case-study.png', alt: l('BuildOw workflow studio and architecture overview.', 'Studio de workflow et architecture BuildOw.'), caption: l('Concept interface and architecture view based on the BuildOw model.', 'Vue conceptuelle fondée sur le modèle BuildOw.'), kind: 'concept-visual' }],
  },
  {
    id: 'taskflow', number: '02', year: '2026', featured: true, title: 'TaskFlow',
    category: l('Enterprise collaboration', 'Collaboration d’entreprise'),
    headline: l('Daily collaboration with security built into every boundary.', 'La collaboration quotidienne avec la sécurité à chaque frontière.'),
    summary: l('A secure task platform with clear responsibilities for administrators, managers, and collaborators.', 'Une plateforme de tâches sécurisée avec des responsabilités claires pour administrateurs, managers et collaborateurs.'),
    role: l('Full-stack Architect & Engineer', 'Architecte et ingénieur full-stack'),
    scope: [l('Product flows', 'Parcours produit'), l('Application security', 'Sécurité applicative'), l('File access', 'Accès aux fichiers'), l('Deployment', 'Déploiement')],
    status: l('Delivered project', 'Projet livré'),
    challenge: l('Support fast collaboration while protecting sessions, attachments, and business data across distinct roles.', 'Soutenir une collaboration rapide tout en protégeant sessions, pièces jointes et données métier entre rôles distincts.'),
    solution: l('Angular connects to a Spring Boot API secured with role boundaries, HttpOnly sessions, CSRF protection, MFA, revocation, and private storage.', 'Angular communique avec une API Spring Boot sécurisée par les rôles, sessions HttpOnly, protection CSRF, MFA, révocation et stockage privé.'),
    flow: [item('Invite', 'Inviter', 'Create accounts without exposing task content.', 'Créer les comptes sans exposer les tâches.'), item('Assign', 'Affecter', 'Managers define ownership and deadlines.', 'Les managers définissent responsables et échéances.'), item('Collaborate', 'Collaborer', 'Work with comments and secure files.', 'Travailler avec commentaires et fichiers sécurisés.'), item('Track', 'Suivre', 'Follow progress and overdue work.', 'Suivre progression et retards.')],
    decisions: [item('Role separation', 'Séparation des rôles', 'Account administration does not grant business-data access.', 'L’administration des comptes n’accorde pas l’accès métier.'), item('Cookie sessions', 'Sessions par cookie', 'HttpOnly JWTs are paired with CSRF controls.', 'Les JWT HttpOnly sont associés à une protection CSRF.'), item('Private attachments', 'Pièces jointes privées', 'Files are served only after application authorization.', 'Les fichiers sont servis après autorisation applicative.')],
    architecture: { summary: l('The API is the policy boundary between the Angular experience and every data or file service.', 'L’API constitue la frontière de politique entre Angular et les services de données ou fichiers.'), nodes: [l('Angular client', 'Client Angular'), l('Spring Security', 'Spring Security'), l('Task services', 'Services de tâches'), l('PostgreSQL', 'PostgreSQL'), l('Private storage', 'Stockage privé'), l('Transactional email', 'E-mail transactionnel')], patterns: [l('Least privilege', 'Moindre privilège'), l('Session revocation', 'Révocation de session'), l('Defense in depth', 'Défense en profondeur')] },
    reliability: [l('TOTP MFA and revocation protect account access.', 'La MFA TOTP et la révocation protègent les comptes.'), l('Flyway provides repeatable database evolution.', 'Flyway assure l’évolution reproductible de la base.'), l('Security events are recorded for investigation.', 'Les événements de sécurité sont enregistrés.')],
    outcomes: [l('One workspace for assignment, execution, and follow-up.', 'Un espace pour l’affectation, l’exécution et le suivi.'), l('Explicit boundaries between administration and business work.', 'Des frontières explicites entre administration et travail métier.'), l('A deployment split suited to managed platforms.', 'Un déploiement adapté aux plateformes managées.')],
    tech: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Supabase', 'Docker'],
    media: [concept('Conceptual layers of the TaskFlow platform.', 'Couches conceptuelles de la plateforme TaskFlow.')],
  },
  {
    id: 'agentforge', number: '03', year: '2026', featured: true, title: 'AgentForge',
    category: l('AI developer tools', 'Outils de développement IA'),
    headline: l('Turn an agent idea into an engineering-ready blueprint.', 'Transformer une idée d’agent en blueprint prêt à développer.'),
    summary: l('A guided product that structures capabilities, data, permissions, risks, tests, and delivery work before implementation.', 'Un produit guidé qui structure capacités, données, permissions, risques, tests et livraison avant le développement.'),
    role: l('Product Architect & AI Engineer', 'Architecte produit et ingénieur IA'),
    scope: [l('Product strategy', 'Stratégie produit'), l('Generation workflow', 'Workflow de génération'), l('Data contracts', 'Contrats de données'), l('Human review', 'Validation humaine')],
    status: l('Working prototype', 'Prototype fonctionnel'),
    challenge: l('Convert ambiguous agent requests into specifications teams can estimate, review, test, and secure.', 'Convertir des demandes d’agents ambiguës en spécifications que les équipes peuvent estimer, réviser, tester et sécuriser.'),
    solution: l('Progressive clarification feeds a typed Django and Pydantic pipeline. Provider abstraction, deterministic tests, and human review keep output inspectable.', 'La clarification progressive alimente un pipeline typé Django et Pydantic. Abstraction, tests déterministes et validation humaine rendent les résultats inspectables.'),
    flow: [item('Describe', 'Décrire', 'Capture the agent goal and context.', 'Capturer l’objectif et le contexte.'), item('Clarify', 'Clarifier', 'Resolve actors, data, and boundaries.', 'Résoudre acteurs, données et frontières.'), item('Generate', 'Générer', 'Build a structured, scored blueprint.', 'Construire un blueprint structuré et évalué.'), item('Review', 'Réviser', 'Validate decisions and unresolved risks.', 'Valider décisions et risques.'), item('Export', 'Exporter', 'Hand engineering an actionable package.', 'Transmettre un dossier exploitable.')],
    decisions: [item('Structured generation', 'Génération structurée', 'Pydantic contracts produce reviewable artifacts.', 'Les contrats Pydantic produisent des artefacts révisables.'), item('Provider abstraction', 'Abstraction des modèles', 'Cloud and local models share one boundary.', 'Les modèles cloud et locaux partagent une frontière.'), item('Human validation', 'Validation humaine', 'Automation stops before engineering commitment.', 'L’automatisation s’arrête avant l’engagement technique.')],
    architecture: { summary: l('A typed blueprint is the contract between discovery, generation, review, and export.', 'Un blueprint typé relie découverte, génération, révision et export.'), nodes: [l('Next.js workspace', 'Espace Next.js'), l('Django API', 'API Django'), l('Pydantic blueprint', 'Blueprint Pydantic'), l('Generation providers', 'Fournisseurs IA'), l('Review & scoring', 'Révision et scoring'), l('Exports', 'Exports')], patterns: [l('Progressive disclosure', 'Divulgation progressive'), l('Provider abstraction', 'Abstraction fournisseurs'), l('Human in the loop', 'Humain dans la boucle')] },
    reliability: [l('Deterministic mode makes generation testable.', 'Le mode déterministe rend la génération testable.'), l('Quality scoring surfaces incomplete sections.', 'Le scoring révèle les sections incomplètes.'), l('Audit records preserve decisions.', 'Les audits conservent les décisions.')],
    outcomes: [l('A shared artifact connecting intent and delivery.', 'Un artefact partagé reliant intention et livraison.'), l('Permissions and data boundaries become explicit early.', 'Permissions et données deviennent explicites tôt.'), l('Exports support planning, testing, and handoff.', 'Les exports soutiennent planification, tests et transfert.')],
    tech: ['Python', 'Django', 'Next.js', 'Pydantic', 'PostgreSQL', 'Gemini', 'Ollama', 'Docker'],
    media: [
      { src: '/images/portfolio/agentforge-intake.png', alt: l('AgentForge blueprint intake.', 'Saisie de blueprint AgentForge.'), caption: l('Verified screen: guided intake.', 'Écran vérifié : saisie guidée.'), kind: 'verified-screen' },
      { src: '/images/portfolio/agentforge-workspace.png', alt: l('AgentForge project workspace.', 'Espace projet AgentForge.'), caption: l('Verified screen: blueprint workspace.', 'Écran vérifié : espace blueprint.'), kind: 'verified-screen' },
      { src: '/images/portfolio/agentforge-review.png', alt: l('AgentForge review queue.', 'File de révision AgentForge.'), caption: l('Verified screen: human review.', 'Écran vérifié : validation humaine.'), kind: 'verified-screen' },
      { src: '/images/portfolio/agentforge-integrations.png', alt: l('AgentForge integrations.', 'Intégrations AgentForge.'), caption: l('Verified screen: integration catalogue.', 'Écran vérifié : catalogue d’intégrations.'), kind: 'verified-screen' },
    ],
  },
  {
    id: 'woody', number: '04', year: '2026', featured: false, title: 'WOODY',
    category: l('E-commerce', 'E-commerce'), headline: l('A slow-fashion identity translated into an operable product.', 'Une identité slow fashion traduite en produit exploitable.'),
    summary: l('A commerce foundation connecting brand, catalogue, customer journeys, administration, and delivery.', 'Une fondation reliant marque, catalogue, parcours client, administration et livraison.'),
    role: l('Solution Architect & Product Designer', 'Architecte solution et designer produit'),
    scope: [l('Requirements', 'Besoins'), l('Brand system', 'Système de marque'), l('Commerce flows', 'Parcours e-commerce'), l('API design', 'Conception API')],
    status: l('Implementation handoff prepared', 'Dossier d’implémentation préparé'),
    challenge: l('Preserve the brand while replacing prototype assumptions with an accurate catalogue, clear rules, and implementation-ready architecture.', 'Préserver la marque tout en remplaçant les hypothèses du prototype par un catalogue exact, des règles claires et une architecture prête.'),
    solution: l('A structured handoff aligns verified assets, product data, responsive journeys, API contracts, security, administration, and operations.', 'Un dossier structuré aligne assets vérifiés, données produit, parcours responsives, contrats API, sécurité, administration et opérations.'),
    flow: [item('Discover', 'Découvrir', 'Enter through brand and collection stories.', 'Entrer par la marque et les collections.'), item('Choose', 'Choisir', 'Compare references, colors, and sizes.', 'Comparer références, couleurs et tailles.'), item('Order', 'Commander', 'Quote delivery, pay, and confirm.', 'Calculer la livraison, payer et confirmer.'), item('Operate', 'Opérer', 'Manage products, orders, and settings.', 'Gérer produits, commandes et paramètres.')],
    decisions: [item('Source hierarchy', 'Hiérarchie des sources', 'The approved catalogue overrides prototype data.', 'Le catalogue approuvé remplace le prototype.'), item('Server-owned totals', 'Totaux côté serveur', 'Pricing and order totals remain authoritative.', 'Prix et totaux restent autoritaires.'), item('Operational back office', 'Back-office opérationnel', 'Administration is part of the core product.', 'L’administration fait partie du produit.')],
    architecture: { summary: l('A responsive storefront consumes controlled commerce APIs backed by catalogue, order, payment, and content services.', 'Une vitrine responsive consomme des API contrôlées pour catalogue, commandes, paiement et contenu.'), nodes: [l('Storefront', 'Vitrine'), l('Commerce API', 'API commerce'), l('Catalogue', 'Catalogue'), l('Orders & payments', 'Commandes et paiements'), l('Administration', 'Administration'), l('Operations', 'Opérations')], patterns: [l('API-first contract', 'Contrat API-first'), l('Server authority', 'Autorité serveur'), l('Traceable delivery', 'Livraison traçable')] },
    reliability: [l('Prototype claims and demo data are excluded.', 'Les affirmations et données de démo sont exclues.'), l('Security, testing, and deployment guidance are documented.', 'Sécurité, tests et déploiement sont documentés.'), l('Open client decisions remain tracked.', 'Les décisions client ouvertes restent suivies.')],
    outcomes: [l('A source-of-truth hierarchy for product and brand.', 'Une hiérarchie de référence produit et marque.'), l('A complete screen and API inventory.', 'Un inventaire complet des écrans et API.'), l('A delivery package connecting product and engineering.', 'Un dossier reliant produit et ingénierie.')],
    tech: ['React', 'TypeScript', 'Java', 'Spring Boot', 'OpenAPI', 'PostgreSQL', 'Docker'],
    media: [{ src: '/images/portfolio/woody-hero.jpg', alt: l('Verified WOODY campaign photography.', 'Photographie de campagne WOODY vérifiée.'), caption: l('Verified asset from the approved 2026 catalogue handoff.', 'Asset vérifié issu du catalogue 2026 approuvé.'), kind: 'verified-photo' }],
  },
  {
    id: 'autonomous-ai-development', number: '05', year: '2026', featured: false, title: 'Autonomous AI Development Workflow',
    category: l('Engineering workflow', 'Workflow d’ingénierie'), headline: l('Agent speed, bounded by engineering control.', 'La vitesse des agents, encadrée par le contrôle technique.'),
    summary: l('An experimental delivery workflow separating planning, implementation, testing, and review across isolated Git worktrees.', 'Un workflow expérimental séparant planification, implémentation, tests et révision dans des worktrees Git isolés.'),
    role: l('Workflow Architect', 'Architecte du workflow'),
    scope: [l('Agent roles', 'Rôles des agents'), l('Isolation', 'Isolation'), l('Quality gates', 'Contrôles qualité'), l('Human approval', 'Validation humaine')],
    status: l('Experimental workflow', 'Workflow expérimental'),
    challenge: l('Automate delivery without granting agents uncontrolled access to the main branch, credentials, or publishing actions.', 'Automatiser la livraison sans donner aux agents un accès incontrôlé à la branche principale, aux secrets ou à la publication.'),
    solution: l('A planner/reviewer and implementation agent use structured tasks, isolated worktrees, bounded repairs, evidence checks, and a human merge decision.', 'Un planificateur-réviseur et un agent d’implémentation utilisent tâches structurées, worktrees isolés, réparations bornées, preuves et fusion humaine.'),
    flow: [item('Plan', 'Planifier', 'Define a decision-complete task.', 'Définir une tâche sans décision restante.'), item('Isolate', 'Isoler', 'Create a dedicated worktree.', 'Créer un worktree dédié.'), item('Implement', 'Implémenter', 'Execute inside bounded permissions.', 'Exécuter avec permissions limitées.'), item('Verify', 'Vérifier', 'Run tests and limited repairs.', 'Exécuter tests et réparations limitées.'), item('Review', 'Réviser', 'Keep merge human-controlled.', 'Conserver la fusion sous contrôle humain.')],
    decisions: [item('Role separation', 'Séparation des rôles', 'Planning and implementation target different risks.', 'Planification et implémentation ciblent des risques différents.'), item('Worktree isolation', 'Isolation par worktree', 'Parallel tasks cannot overwrite the primary workspace.', 'Les tâches parallèles ne peuvent écraser l’espace principal.'), item('Bounded autonomy', 'Autonomie bornée', 'Repair limits prevent endless or unsafe loops.', 'Les limites évitent les boucles infinies ou risquées.')],
    architecture: { summary: l('Plans, diffs, test evidence, and review decisions are explicit delivery artifacts.', 'Plans, diffs, preuves et décisions sont des artefacts explicites.'), nodes: [l('Structured brief', 'Brief structuré'), l('Planner / reviewer', 'Planificateur / réviseur'), l('Isolated worktree', 'Worktree isolé'), l('Implementation agent', 'Agent d’implémentation'), l('Verification gate', 'Contrôle de vérification'), l('Human merge', 'Fusion humaine')], patterns: [l('Separation of duties', 'Séparation des responsabilités'), l('Least privilege', 'Moindre privilège'), l('Evidence-based delivery', 'Livraison fondée sur les preuves')] },
    reliability: [l('Agents cannot automatically push or merge.', 'Les agents ne peuvent pousser ou fusionner automatiquement.'), l('Credential access is prohibited.', 'L’accès aux secrets est interdit.'), l('Repair attempts are limited and auditable.', 'Les réparations sont limitées et auditables.')],
    outcomes: [l('A repeatable contract for delegated software work.', 'Un contrat reproductible pour déléguer le travail.'), l('Clear evidence at every quality gate.', 'Des preuves claires à chaque contrôle.'), l('Human ownership of irreversible actions.', 'La maîtrise humaine des actions irréversibles.')],
    tech: ['Codex CLI', 'Antigravity', 'Git', 'Git Worktree', 'Shell'],
    media: [concept('Conceptual AI-assisted delivery architecture.', 'Architecture conceptuelle de livraison assistée par IA.')],
  },
  {
    id: '8-americain', number: '06', year: '2026', featured: false, title: '8 Américain Playing Bot',
    category: l('Machine learning', 'Machine learning'), headline: l('Learn to rank the move, not merely imitate it.', 'Apprendre à classer le coup, au-delà de l’imitation.'),
    summary: l('A simulation and ML pipeline evaluating legal moves through reproducible game experiments.', 'Un pipeline de simulation et ML évaluant les coups légaux par des expériences reproductibles.'),
    role: l('ML Engineer', 'Ingénieur ML'), scope: [l('Simulation', 'Simulation'), l('Feature design', 'Conception des features'), l('Training', 'Entraînement'), l('Evaluation', 'Évaluation')],
    status: l('Research prototype', 'Prototype de recherche'),
    challenge: l('Generate useful simulated data and evaluate decisions when several legal moves may be reasonable.', 'Générer des données simulées utiles et évaluer les décisions lorsque plusieurs coups peuvent être raisonnables.'),
    solution: l('A JSONL pipeline connects seeded simulation, vectorization, supervised models, candidate-value scoring, and matched-seed gameplay.', 'Un pipeline JSONL relie simulation déterministe, vectorisation, modèles supervisés, scoring des candidats et parties comparables.'),
    flow: [item('Simulate', 'Simuler', 'Generate reproducible trajectories.', 'Générer des trajectoires reproductibles.'), item('Vectorize', 'Vectoriser', 'Encode state, hand, and legal actions.', 'Encoder état, main et actions légales.'), item('Train', 'Entraîner', 'Compare three modeling strategies.', 'Comparer trois stratégies de modélisation.'), item('Rank', 'Classer', 'Score each legal candidate.', 'Évaluer chaque candidat légal.'), item('Evaluate', 'Évaluer', 'Measure accuracy, regret, and win rate.', 'Mesurer précision, regret et taux de victoire.')],
    decisions: [item('Candidate value', 'Valeur des candidats', 'Ranking legal moves matches the real decision.', 'Classer les coups correspond au problème réel.'), item('Matched seeds', 'Graines comparables', 'Bots face comparable randomness.', 'Les bots affrontent un hasard comparable.'), item('Multiple metrics', 'Métriques multiples', 'Accuracy is supplemented by regret and gameplay.', 'La précision est complétée par regret et parties.')],
    architecture: { summary: l('Simulation, learning, and gameplay evaluation remain replaceable and reproducible.', 'Simulation, apprentissage et évaluation restent remplaçables et reproductibles.'), nodes: [l('Game simulator', 'Simulateur'), l('JSONL datasets', 'Données JSONL'), l('Feature pipeline', 'Pipeline de features'), l('Model experiments', 'Expériences modèles'), l('Move ranker', 'Classement des coups'), l('Bot evaluation', 'Évaluation du bot')], patterns: [l('Seeded simulation', 'Simulation déterministe'), l('Offline evaluation', 'Évaluation hors ligne'), l('Candidate ranking', 'Classement des candidats')] },
    reliability: [l('Seeded games make comparisons repeatable.', 'Les graines rendent les comparaisons répétables.'), l('Legal-action filtering prevents impossible predictions.', 'Le filtrage empêche les prédictions impossibles.'), l('Serialized models preserve experiments.', 'Les modèles sérialisés préservent les expériences.')],
    outcomes: [l('A complete path from simulation to playable bot.', 'Un parcours complet de la simulation au bot.'), l('Comparable baselines for three strategies.', 'Des références comparables pour trois stratégies.'), l('Evaluation grounded in prediction and gameplay.', 'Une évaluation fondée sur prédiction et jeu.')],
    tech: ['Python', 'HistGradientBoosting', 'JSONL', 'Joblib', 'Monte Carlo'],
    media: [concept('Conceptual ML pipeline for the card-game bot.', 'Pipeline ML conceptuel du bot de cartes.')],
  },
  {
    id: 'iot-energy-management', number: '07', year: '2024', featured: false, title: 'IoT Energy Management',
    category: l('IoT & energy', 'IoT et énergie'), headline: l('From physical current to useful mobile insight.', 'Du courant physique à l’information mobile utile.'),
    summary: l('An end-to-end system connecting Arduino sensors, cloud services, data stores, and a mobile application.', 'Un système de bout en bout reliant capteurs Arduino, services cloud, bases et application mobile.'),
    role: l('Backend & IoT Engineer', 'Ingénieur backend et IoT'), scope: [l('Devices', 'Équipements'), l('Data ingestion', 'Ingestion'), l('REST APIs', 'API REST'), l('Mobile integration', 'Intégration mobile')],
    status: l('Delivered project', 'Projet livré'),
    challenge: l('Ingest equipment readings reliably and expose them with low enough latency for an operational mobile experience.', 'Ingérer fiablement les mesures et les exposer avec une latence adaptée à une expérience mobile opérationnelle.'),
    solution: l('A two-tier device-to-cloud design separates acquisition, backend services, platform data, readings, and mobile APIs.', 'Une conception appareil-cloud sépare acquisition, services backend, données plateforme, mesures et API mobiles.'),
    flow: [item('Sense', 'Mesurer', 'Capture equipment readings.', 'Capturer les mesures.'), item('Ingest', 'Ingérer', 'Transmit and normalize telemetry.', 'Transmettre et normaliser la télémétrie.'), item('Store', 'Stocker', 'Separate platform and reading data.', 'Séparer plateforme et mesures.'), item('Serve', 'Servir', 'Expose secure, low-latency APIs.', 'Exposer des API sécurisées et rapides.'), item('Understand', 'Comprendre', 'Present consumption on mobile.', 'Présenter la consommation sur mobile.')],
    decisions: [item('Two-tier boundary', 'Frontière à deux niveaux', 'Acquisition stays independent from product APIs.', 'L’acquisition reste indépendante des API.'), item('Purpose-fit storage', 'Stockage adapté', 'Relational and document stores serve different shapes.', 'Les stockages répondent à des formes différentes.'), item('API optimization', 'Optimisation API', 'Queries prioritize concurrent visibility.', 'Les requêtes privilégient la visibilité simultanée.')],
    architecture: { summary: l('A controlled acquisition boundary turns physical telemetry into secure mobile information.', 'Une frontière contrôlée transforme la télémétrie en information mobile sécurisée.'), nodes: [l('Energy equipment', 'Équipements'), l('Arduino sensors', 'Capteurs Arduino'), l('Acquisition gateway', 'Passerelle'), l('Node.js services', 'Services Node.js'), l('MySQL & MongoDB', 'MySQL et MongoDB'), l('Flutter application', 'Application Flutter')], patterns: [l('Device-to-cloud', 'Appareil vers cloud'), l('Asynchronous ingestion', 'Ingestion asynchrone'), l('REST boundary', 'Frontière REST')] },
    reliability: [l('Acquisition and API responsibilities are isolated.', 'Acquisition et API sont isolées.'), l('The design supports simultaneous equipment.', 'La conception supporte plusieurs équipements.'), l('Documentation covers the complete system.', 'La documentation couvre le système complet.')],
    outcomes: [l('A working device-to-mobile data path.', 'Un parcours fonctionnel du capteur au mobile.'), l('REST access designed for low-latency readings.', 'Un accès REST conçu pour des lectures rapides.'), l('Documented hardware, backend, and mobile integration.', 'Une intégration matériel, backend et mobile documentée.')],
    tech: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'Arduino', 'Flutter', 'REST'],
    media: [concept('Conceptual device-to-cloud energy architecture.', 'Architecture énergétique appareil-cloud conceptuelle.')],
  },
  {
    id: 'photovoltaic-optimization', number: '08', year: '2025–2026', featured: false, title: 'Photovoltaic Optimization',
    category: l('Multi-agent AI', 'IA multi-agents'), headline: l('Six agents coordinating one physical energy system.', 'Six agents coordonnés autour d’un système énergétique physique.'),
    summary: l('A distributed BDI system for monitoring, forecasting, orientation optimization, and predictive maintenance.', 'Un système BDI distribué pour surveillance, prévision, orientation et maintenance prédictive.'),
    role: l('AI & System Architect', 'Architecte IA et système'), scope: [l('Agent design', 'Conception agents'), l('Forecasting', 'Prévision'), l('Event backbone', 'Bus événementiel'), l('Operations', 'Opérations')],
    status: l('Research and engineering project', 'Projet de recherche et d’ingénierie'),
    challenge: l('Coordinate predictions and physical actions in real time while keeping responsibilities, conflicts, and operating data understandable.', 'Coordonner prédictions et actions physiques en temps réel tout en gardant responsabilités, conflits et données compréhensibles.'),
    solution: l('Six BDI agents communicate through MQTT and combine shared time-series data, LSTM forecasts, anomaly detection, arbitration, and actuator commands.', 'Six agents BDI communiquent via MQTT et combinent séries temporelles, prévisions LSTM, détection d’anomalies, arbitrage et actionneurs.'),
    flow: [item('Observe', 'Observer', 'Collect solar, equipment, and weather signals.', 'Collecter les signaux solaires, équipements et météo.'), item('Predict', 'Prédire', 'Forecast production and conditions.', 'Prévoir production et conditions.'), item('Propose', 'Proposer', 'Recommend orientation and maintenance.', 'Recommander orientation et maintenance.'), item('Arbitrate', 'Arbitrer', 'Resolve priorities and constraints.', 'Résoudre priorités et contraintes.'), item('Act', 'Agir', 'Apply commands and measure feedback.', 'Appliquer les commandes et mesurer le retour.')],
    decisions: [item('BDI responsibilities', 'Responsabilités BDI', 'Each agent owns a coherent goal and action boundary.', 'Chaque agent porte une frontière cohérente.'), item('MQTT backbone', 'Bus MQTT', 'Publish/subscribe decouples live services.', 'Le publish/subscribe découple les services.'), item('Coordinator arbitration', 'Arbitrage central', 'Conflicts are resolved before physical action.', 'Les conflits sont résolus avant l’action.')],
    architecture: { summary: l('An event-driven loop converts live context into coordinated optimization and maintenance.', 'Une boucle événementielle transforme le contexte en optimisation et maintenance coordonnées.'), nodes: [l('Sensors & weather', 'Capteurs et météo'), l('MQTT broker', 'Broker MQTT'), l('Monitoring agent', 'Agent de surveillance'), l('Prediction agent', 'Agent de prédiction'), l('Coordinator agent', 'Agent coordinateur'), l('Actuators & maintenance', 'Actionneurs et maintenance')], patterns: [l('BDI multi-agent system', 'Système multi-agents BDI'), l('Event-driven feedback', 'Boucle événementielle'), l('Time-series analytics', 'Analyse temporelle')] },
    reliability: [l('A coordinator resolves competing recommendations.', 'Un coordinateur résout les recommandations concurrentes.'), l('Redis shares operational context.', 'Redis partage le contexte opérationnel.'), l('InfluxDB preserves time-series observations.', 'InfluxDB conserve les observations temporelles.')],
    outcomes: [l('A six-agent model spanning monitoring to action.', 'Un modèle à six agents de la surveillance à l’action.'), l('A reusable event protocol for decisions.', 'Un protocole événementiel réutilisable.'), l('A platform for forecasting and maintenance experiments.', 'Une plateforme d’expérimentation pour prévision et maintenance.')],
    tech: ['Python', 'SPADE', 'LSTM', 'MQTT', 'Redis', 'InfluxDB', 'Docker'],
    media: [concept('Conceptual event-driven photovoltaic agent system.', 'Système photovoltaïque multi-agents conceptuel.')],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const getProject = (id: string) => projects.find((project) => project.id === id);
