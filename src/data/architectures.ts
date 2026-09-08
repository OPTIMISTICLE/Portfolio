export interface ArchitectureDiagram {
  src: string;
  alt: string;
  caption: string;
}

export interface Architecture {
  id: string;
  title: string;
  description: string;
  diagrams: ArchitectureDiagram[];
  components: string[];
  patterns: string[];
}

export const architectures: Architecture[] = [
  {
    id: 'buildow',
    title: 'BuildOw — Business Workflow Management Platform',
    description: 'A form-first SaaS platform built as a modular monolith. BuildOw owns workflow definitions, versions, forms, roles, and authorization rules; Flowable owns process and task execution. Dynamic assignment connects workflow responsibilities to the organization structure.',
    components: ['Angular Workspace', 'IAM', 'Process', 'Runtime', 'Audit', 'Flowable', 'PostgreSQL', 'Redis'],
    patterns: ['Modular Monolith', 'Multi-Tenant Isolation', 'Canonical Business Model', 'Immutable Published Versions', 'Dynamic Assignment', 'Contextual Authorization'],
    diagrams: [{
      src: '/images/buildow-architecture.svg',
      alt: 'Angular workspace above the BuildOw IAM, Process, Runtime, and Audit modules. BuildOw owns the business model; Flowable executes processes and tasks. PostgreSQL and Redis support the platform.',
      caption: 'Conceptual view based on the project description: business ownership stays in BuildOw, independently of the execution engine.'
    }]
  },
  {
    id: 'taskflow',
    title: 'TaskFlow — Secure Enterprise Task Management Platform',
    description: 'An Angular application connects to a Spring Boot REST API with Spring Security. Administrators manage accounts without accessing business data, managers assign work, and collaborators execute tasks. Private storage and security event logging support controlled collaboration.',
    components: ['Angular Frontend', 'Spring Boot REST API', 'Spring Security', 'PostgreSQL / Flyway', 'Supabase Private Storage', 'Gmail API', 'Vercel', 'Render'],
    patterns: ['Role Separation', 'HttpOnly JWT Cookies', 'CSRF Protection', 'TOTP MFA', 'Session Revocation', 'Private File Access'],
    diagrams: [{
      src: '/images/taskflow-architecture.svg',
      alt: 'Angular frontend hosted on Vercel communicates with a Spring Boot and Spring Security API hosted on Render. The API uses PostgreSQL with Flyway, private Supabase file storage, and Gmail API for transactional email.',
      caption: 'Conceptual view based on the project description: role boundaries and session security protect access to business data and attachments.'
    }]
  },
  {
    id: 'agentforge',
    title: 'AgentForge — AI Agent Blueprint Generator',
    description: 'A Next.js interface guides users through progressive blueprint generation handled by Django and structured with Pydantic. The workflow covers clarification, functional analysis, permissions, risks, tests, and implementation planning, with provider flexibility and human validation.',
    components: ['Next.js / React', 'Django', 'Pydantic', 'PostgreSQL', 'Gemini', 'Ollama', 'Human Review', 'Blueprint Exports'],
    patterns: ['Progressive Clarification', 'Structured Generation', 'Provider Abstraction', 'Deterministic Test Mode', 'Decision Traceability', 'Human Validation'],
    diagrams: [{
      src: '/images/agentforge-architecture.svg',
      alt: 'Next.js sends the agent idea and clarifications to Django and Pydantic. Blueprint generation covers capabilities, permissions, risks, tests, and backlog, using Gemini or Ollama and PostgreSQL. Human review precedes Markdown, JSON, ZIP, and CSV exports.',
      caption: 'Conceptual view based on the project description: progressive generation produces a structured blueprint for human validation and export.'
    }]
  },
  {
    id: 'photovoltaic-optimization',
    title: 'Multi-Agent AI System for Photovoltaic Optimization',
    description: 'Distributed artificial intelligence system using autonomous BDI agents to monitor, predict, and optimize photovoltaic installations in real time, improving energy yield through coordinated decision-making.',
    components: ['Monitoring Agent', 'Prediction Agent (LSTM)', 'Optimization Agent', 'Maintenance Agent', 'Weather Agent', 'Coordinator Agent', 'MQTT Broker', 'Time-Series Database', 'Distributed Cache'],
    patterns: ['Multi-Agent Architecture (BDI)', 'Event-Driven Architecture', 'Publish / Subscribe Messaging', 'Distributed Decision-Making', 'Time-Series Analytics'],
    diagrams: [{
      src: '/images/photovoltaic-optimization-architecture.svg',
      alt: 'Photovoltaic sensors and weather data flow through an MQTT event backbone to monitoring, prediction, weather, optimization, coordination, and maintenance agents. Shared data services support decisions that control physical actuators.',
      caption: 'Conceptual view: an event-driven feedback loop turns live operating context into coordinated optimization and maintenance actions.'
    }]
  },
  {
    id: 'iot-energy-management',
    title: 'IoT Energy Management System',
    description: 'End-to-end IoT energy management platform combining embedded energy sensors and a cloud backend to collect, process, and expose real-time consumption data through RESTful APIs for mobile applications.',
    components: ['Arduino Energy Sensors', 'Data Acquisition Layer', 'REST API Gateway', 'Backend Services', 'Relational & NoSQL Databases', 'Mobile Application'],
    patterns: ['Two-Tier Architecture', 'RESTful API Design', 'Asynchronous Data Ingestion', 'Time-Series Data Storage'],
    diagrams: [{
      src: '/images/iot-energy-management-architecture.svg',
      alt: 'Energy equipment and Arduino sensors send telemetry through a site gateway and asynchronous acquisition layer to Node.js backend services. MySQL and MongoDB store platform and consumption data, while REST APIs serve the Flutter mobile application.',
      caption: 'Conceptual view: a two-tier device-to-cloud pipeline turns energy telemetry into secure, low-latency mobile insights.'
    }]
  }
];
