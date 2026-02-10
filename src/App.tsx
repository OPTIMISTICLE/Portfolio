import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Architectures from './pages/Architectures';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="architectures" element={<Architectures />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;