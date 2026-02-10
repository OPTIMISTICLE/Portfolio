export const projects = [
  {
    title: "Global E-Commerce Platform",
    category: "E-Commerce",
    description: "Architected a multi-region, microservices-based e-commerce platform serving 10M+ users across 50+ countries. Implemented event-driven architecture with CQRS pattern for high scalability.",
    challenge: "Handle Black Friday traffic spikes (10x normal load) while maintaining sub-second response times",
    solution: "Multi-region active-active deployment with auto-scaling, CDN integration, and database sharding",
    tech: ["AWS", "Kubernetes", "GraphQL", "PostgreSQL", "Redis", "Kafka"],
    metrics: {
      uptime: "99.99%",
      response: "50ms avg",
      users: "10M+",
      transactions: "5M+ daily"
    },
    year: "2024"
  },
  {
    title: "Real-Time Analytics Engine",
    category: "Big Data",
    description: "Designed and implemented an event-driven real-time analytics platform processing 1TB+ data daily from multiple sources, providing instant business insights.",
    challenge: "Process massive data streams in real-time while maintaining data consistency and low latency",
    solution: "Lambda architecture with stream processing layer and batch processing for accuracy reconciliation",
    tech: ["Azure", "Kafka", "Apache Spark", "MongoDB", "Databricks", "Power BI"],
    metrics: {
      latency: "<100ms",
      throughput: "1TB+ daily",
      streams: "200+ sources",
      insights: "Real-time"
    },
    year: "2023"
  },
  {
    title: "Healthcare Integration Platform",
    category: "Healthcare",
    description: "Built HIPAA-compliant integration platform connecting 50+ healthcare systems with centralized patient data management and secure API gateway.",
    challenge: "Integrate legacy systems while ensuring HIPAA compliance and zero-downtime migrations",
    solution: "Microservices with API gateway, service mesh for security, and phased migration strategy",
    tech: ["GCP", "Kubernetes", "FHIR", "HL7", "Vault", "Istio"],
    metrics: {
      systems: "50+ integrated",
      compliance: "HIPAA/SOC2",
      patients: "2M+ records",
      availability: "99.95%"
    },
    year: "2023"
  },
  {
    title: "Financial Trading Platform",
    category: "FinTech",
    description: "Architected low-latency trading platform with real-time market data processing, order management, and risk assessment for institutional traders.",
    challenge: "Achieve microsecond-level latency for trade execution while maintaining regulatory compliance",
    solution: "Event sourcing architecture with in-memory caching, optimized networking, and distributed processing",
    tech: ["AWS", "C++", "Rust", "TimescaleDB", "WebSocket", "FIX Protocol"],
    metrics: {
      latency: "<5ms",
      trades: "100K+ daily",
      uptime: "99.999%",
      compliance: "MiFID II"
    },
    year: "2022"
  },
  {
    title: "IoT Fleet Management System",
    category: "IoT",
    description: "Designed scalable IoT platform for managing 100K+ connected vehicles with real-time telemetry, predictive maintenance, and fleet optimization.",
    challenge: "Handle millions of IoT messages per second with reliable delivery and real-time processing",
    solution: "Event-driven architecture with MQTT protocol, stream processing, and machine learning for predictive analytics",
    tech: ["Azure IoT Hub", "Cosmos DB", "Stream Analytics", "ML Studio", "SignalR"],
    metrics: {
      devices: "100K+",
      messages: "5M+ per second",
      accuracy: "95% predictions",
      cost: "40% reduction"
    },
    year: "2022"
  },
  {
    title: "Multi-Tenant SaaS Platform",
    category: "SaaS",
    description: "Built enterprise-grade multi-tenant SaaS platform with tenant isolation, white-labeling, and flexible subscription management serving 500+ enterprise clients.",
    challenge: "Provide strong tenant isolation while optimizing resource utilization and maintaining performance",
    solution: "Hybrid isolation model with shared infrastructure, tenant-specific databases, and intelligent resource allocation",
    tech: ["AWS", "EKS", "RDS Aurora", "Cognito", "CloudFront", "Terraform"],
    metrics: {
      tenants: "500+",
      isolation: "100%",
      provisioning: "<5 min",
      cost: "30% savings"
    },
    year: "2021"
  }
];

export const featuredProjects = [
  {
    title: "Global E-Commerce Platform",
    description: "Architected a multi-region, microservices-based platform handling 10M+ daily transactions",
    tech: ["AWS", "Kubernetes", "GraphQL", "PostgreSQL"],
    metrics: ["99.99% uptime", "50ms avg response", "10M+ users"]
  },
  {
    title: "Real-Time Analytics Engine",
    description: "Designed event-driven architecture processing 1TB+ data daily with real-time insights",
    tech: ["Azure", "Kafka", "Spark", "MongoDB"],
    metrics: ["<100ms latency", "1TB+ daily", "Real-time dashboards"]
  }
];