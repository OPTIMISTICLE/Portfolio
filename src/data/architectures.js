export const architectures = [
  {
  title: "Multi-Agent AI System for Photovoltaic Optimization",
  description: "Distributed artificial intelligence system using autonomous BDI agents to monitor, predict, and optimize photovoltaic installations in real time, improving energy yield through coordinated decision-making.",
  diagram: ["/images/MutliAgentComponentDiagram1.png", "/images/MutliAgentSequence.png"],
  components: [
    "Monitoring Agent",
    "Prediction Agent (LSTM)",
    "Optimization Agent",
    "Maintenance Agent",
    "Weather Agent",
    "Coordinator Agent",
    "MQTT Broker",
    "Time-Series Database",
    "Distributed Cache"
  ],
  patterns: [
    "Multi-Agent Architecture (BDI)",
    "Event-Driven Architecture",
    "Publish / Subscribe Messaging",
    "Distributed Decision-Making",
    "Time-Series Analytics"
  ]
}
,
  {
  title: "IoT Energy Management System",
  description: "End-to-end IoT energy management platform combining embedded energy sensors and a cloud backend to collect, process, and expose real-time consumption data through RESTful APIs for mobile applications.",
  diagram: ["/images/EnergyManagementUseCase.png", "/images/EnergyManagementClass.png"],
  components: [
    "Arduino Energy Sensors",
    "Data Acquisition Layer",
    "REST API Gateway",
    "Backend Services",
    "Relational & NoSQL Databases",
    "Mobile Application"
  ],
  patterns: [
    "Two-Tier Architecture",
    "RESTful API Design",
    "Asynchronous Data Ingestion",
    "Time-Series Data Storage"
  ]
}
,

];