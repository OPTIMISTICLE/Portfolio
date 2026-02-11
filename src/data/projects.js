export const projects = [
  {
  title: "IoT Energy Management System",
  category: "IoT / Energy / Backend",
  description: "Designed and implemented an end-to-end IoT energy management system combining embedded systems and cloud backend. Real-time energy data is collected from Arduino-based sensors and exposed via RESTful APIs to mobile clients.",
  challenge: "Ensure reliable real-time data ingestion and low-latency API access while coordinating embedded systems, backend services, and mobile interfaces.",
  solution: "Two-tier architecture separating embedded data collection from cloud backend. Optimized REST APIs and database interactions to handle concurrent IoT devices with low latency.",
  tech: [
    "NodeJS",
    "ExpressJS",
    "MySQL",
    "MongoDB",
    "Arduino",
    "Flutter",
    "REST APIs"
  ],
  metrics: {
    latency: "<50ms",
    devices: "5 simultaneous equipments",
    delivery: "Production-ready system",
    documentation: "Complete technical documentation"
  },
  year: "2024",
  enterprise: "Personal project"
}
,
  {
  title: "Multi-Agent AI System for Photovoltaic Optimization",
  category: "Artificial Intelligence / Multi-Agent Systems / Energy",
  description: "Developed a distributed multi-agent AI system to optimize photovoltaic installations through real-time monitoring, production forecasting, intelligent orientation adjustment, and predictive maintenance.",
  challenge: "Improve solar energy yield in African photovoltaic installations lacking intelligent optimization while maintaining real-time decision-making constraints.",
  solution: "Six autonomous BDI agents coordinated via MQTT, combining LSTM-based forecasting, anomaly detection, and decision arbitration to dynamically optimize system performance.",
  tech: [
    "Python",
    "SPADE",
    "LangChain",
    "LSTM",
    "Scikit-Learn",
    "MQTT",
    "Redis",
    "InfluxDB",
    "Docker",
    "GitHub Actions"
  ],
  metrics: {
    decision_latency: "<500ms",
    data_points: "50K+ time-series entries",
    codebase: "~5000 lines",
    documentation: "50+ pages"
  },
  year: "2025–2026",
  enterprise: "Personal project"
}
,

];

export const featuredProjects = [
  {
    title: "IoT Energy Management System",
    description: "Designed and implemented an end-to-end IoT energy management system combining embedded systems and cloud backend. Real-time energy data is collected from Arduino-based sensors and exposed via RESTful APIs to mobile clients.",
    tech: ["NodeJS",
    "ExpressJS",
    "MySQL",
    "MongoDB",
    "Arduino",
    "Flutter",
    "REST APIs"],
    metrics: ["50ms avg response", "Production-ready system"]
  },
  {
    title: "Multi-Agent AI System for Photovoltaic Optimization",
    description: "Developed a distributed multi-agent AI system to optimize photovoltaic installations through real-time monitoring, production forecasting, intelligent orientation adjustment, and predictive maintenance.",
    tech: ["Python",
    "SPADE",
    "LangChain",
    "LSTM",
    "Scikit-Learn",
    "MQTT",
    "Redis",
    "InfluxDB",
    "Docker",
    "GitHub Actions"],
    metrics: ["<100ms latency", "Real-time dashboards"]
  }
];