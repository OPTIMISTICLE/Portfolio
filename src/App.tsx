import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './layout/Layout';
import { isLocale, preferredLocale } from './i18n';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Architectures from './pages/Architectures';
import About from './pages/About';
import Notes from './pages/Notes';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const RootRedirect = () => <Navigate to={`/${preferredLocale()}`} replace />;

function LegacyRedirect() {
  const location = useLocation();
  const path = location.pathname === '/blog' ? '/notes' : location.pathname;
  return <Navigate to={`/${preferredLocale()}${path}`} replace />;
}

function LocaleGate() {
  const location = useLocation();
  const locale = location.pathname.split('/')[1];
  return isLocale(locale) ? <Layout /> : <Navigate to={`/${preferredLocale()}`} replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      {['projects', 'architectures', 'about', 'blog', 'contact'].map((path) => (
        <Route key={path} path={`/${path}`} element={<LegacyRedirect />} />
      ))}
      <Route path="/:locale" element={<LocaleGate />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="architectures" element={<Architectures />} />
        <Route path="about" element={<About />} />
        <Route path="notes" element={<Notes />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<RootRedirect />} />
    </Routes>
  );
}
