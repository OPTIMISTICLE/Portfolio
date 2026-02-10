import { useTheme } from '../context/ThemeContext';
import { architectures } from '../data/architectures';

const Architectures = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen py-20 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h1 className={`text-5xl font-bold mb-6 animate-fade-in ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Architecture Samples
        </h1>
        <p className={`text-xl mb-12 animate-fade-in delay-100 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          System designs, infrastructure diagrams, and architectural patterns
        </p>

        <div className="space-y-12">
          {architectures.map((arch, idx) => (
            <div
              key={idx}
              className={`rounded-xl overflow-hidden ${
                darkMode ? 'bg-slate-900' : 'bg-white'
              } shadow-lg animate-fade-in delay-${Math.min((idx + 1) * 100, 400)}`}
            >
              <img src={arch.diagram} alt={arch.title} className="w-full h-auto" />
              <div className="p-8">
                <h2 className={`text-3xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {arch.title}
                </h2>
                <p className={`text-lg mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {arch.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className={`text-sm font-bold mb-3 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      KEY COMPONENTS
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {arch.components.map((comp, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-lg text-sm ${
                            darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold mb-3 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                      DESIGN PATTERNS
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {arch.patterns.map((pattern, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-lg text-sm ${
                            darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {pattern}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Architectures;