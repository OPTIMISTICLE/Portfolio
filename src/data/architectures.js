export const architectures = [
  {
    title: "Microservices E-Commerce Architecture",
    description: "Multi-region deployment with event-driven communication",
    diagram: "https://via.placeholder.com/800x500/1e293b/6366f1?text=E-Commerce+Microservices+Architecture",
    components: ["API Gateway", "Service Mesh", "Event Bus", "Database Sharding", "CDN", "Cache Layer"],
    patterns: ["CQRS", "Event Sourcing", "Circuit Breaker", "Saga Pattern"]
  },
  {
    title: "Real-Time Data Pipeline",
    description: "Lambda architecture for batch and stream processing",
    diagram: "https://via.placeholder.com/800x500/1e293b/a855f7?text=Real-Time+Data+Pipeline+Architecture",
    components: ["Stream Ingestion", "Message Queue", "Stream Processing", "Batch Processing", "Data Lake", "Analytics"],
    patterns: ["Lambda Architecture", "Stream Processing", "Data Partitioning", "Time-Series Optimization"]
  },
  {
    title: "Zero Trust Security Architecture",
    description: "Defense-in-depth with zero trust principles",
    diagram: "https://via.placeholder.com/800x500/1e293b/ec4899?text=Zero+Trust+Security+Architecture",
    components: ["Identity Provider", "API Gateway", "Service Mesh", "Secrets Manager", "WAF", "SIEM"],
    patterns: ["Zero Trust", "Identity-Based Access", "Encryption at Rest/Transit", "Least Privilege"]
  },
  {
    title: "Hybrid Cloud Infrastructure",
    description: "Multi-cloud deployment with failover capabilities",
    diagram: "https://via.placeholder.com/800x500/1e293b/10b981?text=Hybrid+Cloud+Infrastructure",
    components: ["Cloud Gateway", "VPN", "Load Balancer", "Container Orchestration", "Monitoring", "Disaster Recovery"],
    patterns: ["Multi-Cloud", "Active-Active", "Data Replication", "Service Discovery"]
  }
];