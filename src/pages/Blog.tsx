import { useTheme } from '../context/ThemeContext';
import { posts } from '../data/posts';

const Blog = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen py-20 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h1 className={`text-5xl font-bold mb-6 animate-fade-in ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Technical Blog
        </h1>
        <p className={`text-xl mb-12 animate-fade-in delay-100 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          Insights on architecture, cloud technologies, and software engineering
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className={`p-8 rounded-xl ${
                darkMode ? 'bg-slate-900' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-shadow cursor-pointer animate-fade-in delay-${Math.min((idx + 1) * 100, 600)}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {post.date}
                </span>
                <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  • {post.readTime}
                </span>
              </div>
              <h2 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {post.title}
              </h2>
              <p className={`mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;