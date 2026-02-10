import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`mt-20 py-12 ${darkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-white border-t border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com" className={`p-3 rounded-lg transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" className={`p-3 rounded-lg transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
            <Linkedin size={24} />
          </a>
          <a href="mailto:architect@example.com" className={`p-3 rounded-lg transition-colors ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>
            <Mail size={24} />
          </a>
        </div>
        <p className={`font-mono text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          © 2025 Solution Architect Portfolio. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;