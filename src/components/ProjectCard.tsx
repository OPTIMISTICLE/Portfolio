import React from 'react';
import { useTheme } from '../context/ThemeContext';
import TechTag from './TechTag';

interface ProjectCardProps {
  project: {
    title: string;
    category?: string;
    description: string;
    challenge?: string;
    solution?: string;
    tech: string[];
    metrics: Record<string, string>;
    year?: string;
  };
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({ project, delay = 0 }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`project-card p-8 rounded-xl ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      } shadow-lg animate-fade-in delay-${delay}`}
    >
      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {project.title}
            </h2>
            {project.category && (
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-sm font-semibold">
                {project.category}
              </span>
            )}
          </div>
          {project.year && (
            <p className={`text-sm font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {project.year}
            </p>
          )}
        </div>
      </div>

      <p className={`text-lg mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
        {project.description}
      </p>

      {(project.challenge || project.solution) && (
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {project.challenge && (
            <div>
              <h3 className={`text-sm font-bold mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                CHALLENGE
              </h3>
              <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {project.challenge}
              </p>
            </div>
          )}
          {project.solution && (
            <div>
              <h3 className={`text-sm font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                SOLUTION
              </h3>
              <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {project.solution}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-sm font-bold mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          TECHNOLOGY STACK
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <TechTag key={i} tech={tech} />
          ))}
        </div>
      </div>

      <div>
        <h3 className={`text-sm font-bold mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          KEY METRICS
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(project.metrics).map(([key, value], i) => (
            <div key={i} className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
              <div className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {value}
              </div>
              <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {key.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;