import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`min-h-screen py-20 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-4xl mx-auto px-6">
        <h1 className={`text-5xl font-bold mb-6 animate-fade-in ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Get in Touch
        </h1>
        <p className={`text-xl mb-12 animate-fade-in delay-100 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          Let's discuss your next project or architecture challenge
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`animate-fade-in delay-200`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } border focus:border-indigo-500 focus:outline-none transition-colors`}
                />
              </div>

              <div>
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } border focus:border-indigo-500 focus:outline-none transition-colors`}
                />
              </div>

              <div>
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } border focus:border-indigo-500 focus:outline-none transition-colors`}
                />
              </div>

              <div>
                <label className={`block mb-2 font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? 'bg-slate-900 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } border focus:border-indigo-500 focus:outline-none transition-colors resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500 text-green-500 text-center animate-fade-in">
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className={`animate-fade-in delay-300`}>
            <div className={`p-8 rounded-xl ${darkMode ? 'bg-slate-900' : 'bg-white'} shadow-lg mb-6`}>
              <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-indigo-500" size={24} />
                  <div>
                    <div className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Email
                    </div>
                    <a href="mailto:bibalefai@gmail.com" className="text-indigo-500 hover:text-indigo-400">
                      bibalefai@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="text-indigo-500" size={24} />
                  <div>
                    <div className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      LinkedIn
                    </div>
                    <a href="https://www.linkedin.com/in/bi-balefai-mondesir-boli-a62a41222/" className="text-indigo-500 hover:text-indigo-400">
                      BI BALEFAI MONDESIR BOLI
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="text-indigo-500" size={24} />
                  <div>
                    <div className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      GitHub
                    </div>
                    <a href="https://github.com/OPTIMISTICLE" className="text-indigo-500 hover:text-indigo-400">
                      OPTIMISTICLE
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-xl ${darkMode ? 'bg-slate-900' : 'bg-white'} shadow-lg`}>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Availability
              </h3>
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Currently available for consulting and architecture advisory roles. Open to discussing enterprise projects and digital transformation initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;