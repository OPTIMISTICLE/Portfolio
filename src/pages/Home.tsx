import { Link } from 'react-router-dom';
import { ChevronRight, Cloud, Server, Shield, Database, GitBranch, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { featuredProjects } from '../data/projects';
import TechTag from '../components/TechTag';

const Home = () => {
  const { darkMode } = useTheme();

  const coreCompetencies = [
    {
      icon: <Cloud size={32} />,
      title: "Cloud Architecture",
      skills: ["AWS", "Azure", "GCP", "Multi-Cloud Strategy"]
    },
    {
      icon: <Server size={32} />,
      title: "System Design",
      skills: ["Microservices", "API Design", "Event-Driven", "Serverless"]
    },
    {
      icon: <Shield size={32} />,
      title: "Security & Compliance",
      skills: ["Zero Trust", "IAM", "Encryption", "GDPR/SOC2"]
    },
    {
      icon: <Database size={32} />,
      title: "Data Architecture",
      skills: ["SQL/NoSQL", "Data Lakes", "Real-time Streaming", "ETL"]
    },
    {
      icon: <GitBranch size={32} />,
      title: "DevOps & CI/CD",
      skills: ["Kubernetes", "Docker", "Jenkins", "GitLab CI"]
    },
    {
      icon: <Code size={32} />,
      title: "Integration",
      skills: ["REST APIs", "GraphQL", "Message Queues", "ESB"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={`min-h-screen flex items-center relative overflow-hidden ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-6xl md:text-7xl font-bold mb-6 animate-fade-in ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Solution<br />
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Architect
                </span>
              </h1>
              <p className={`text-xl mb-8 animate-fade-in delay-100 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Young, capable of Designing scalable, resilient, and innovative cloud architectures for enterprise solutions. Hands on project experience in cloud architecture, system design, and DevOps.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in delay-200">
                <Link
                  to="/projects"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                >
                  View Projects
                </Link>
                <Link
                  to="/contact"
                  className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                    darkMode
                      ? 'bg-slate-800 text-white hover:bg-slate-700'
                      : 'bg-white text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in delay-300">
              <div className={`p-8 rounded-2xl ${darkMode ? 'bg-slate-900' : 'bg-white'} shadow-2xl`}>
                <div className={`font-mono text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-xs md:text-sm">
{`const architect = {
  name: "BOLI BI BALEFAI MONDESIR",
  role: "Solution Architect",
  experience: "lifetime",
  specialization: [
    "Cloud Architecture",
    "Microservices",
    "System Design",
    "DevOps"
  ],
};`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center animate-fade-in ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreCompetencies.map((item, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl gradient-border animate-fade-in delay-${(idx + 1) * 100} ${
                  darkMode ? 'bg-slate-800' : 'bg-slate-50'
                }`}
              >
                <div className="text-indigo-500 mb-4">{item.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode ? 'bg-slate-700 text-slate-300' : 'bg-white text-slate-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={`py-20 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Featured Projects
            </h2>
            <Link
              to="/projects"
              className="flex items-center gap-2 text-indigo-500 hover:text-indigo-400 font-semibold transition-colors"
            >
              View All <ChevronRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className={`project-card p-8 rounded-xl ${
                  darkMode ? 'bg-slate-900' : 'bg-white'
                } shadow-lg animate-fade-in delay-${(idx + 1) * 200}`}
              >
                <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <TechTag key={i} tech={tech} />
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className={`text-sm font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
                    >
                      ✓ {metric}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;