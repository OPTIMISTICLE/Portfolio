import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen py-20 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h1 className={`text-5xl font-bold mb-6 animate-fade-in ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Project Portfolio
        </h1>
        <p className={`text-xl mb-12 animate-fade-in delay-100 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          Comprehensive case studies of enterprise solutions across industries
        </p>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              delay={Math.min((idx + 1) * 100, 600)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;