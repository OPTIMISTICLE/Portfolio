import { ChevronRight, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { experience, certifications } from '../data/experience';

const About = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen py-20 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h1 className={`text-5xl font-bold mb-6 animate-fade-in ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          About Me
        </h1>
        <p className={`text-xl mb-12 animate-fade-in delay-100 max-w-3xl ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          Passionate solution architect with 12+ years of experience designing and implementing enterprise-scale systems. Specialized in cloud architecture, microservices, and digital transformation initiatives.
        </p>

        {/* Experience */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl ${
                  darkMode ? 'bg-slate-900' : 'bg-white'
                } shadow-lg animate-fade-in delay-${(idx + 1) * 100}`}
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {exp.role}
                    </h3>
                    <p className={`text-lg ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      {exp.company}
                    </p>
                  </div>
                  <span className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}>
                    {exp.period}
                  </span>
                </div>
                <ul className={`space-y-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight size={20} className="text-indigo-500 mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-slate-900' : 'bg-white'
                } shadow-lg animate-fade-in delay-${Math.min((idx + 1) * 100, 500)} flex items-center gap-4`}
              >
                <Award size={32} className="text-indigo-500 flex-shrink-0" />
                <div>
                  <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {cert.name}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Certified {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;