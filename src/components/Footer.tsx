import { Github, Linkedin, Mail } from 'lucide-react';
import { useLocale } from '../i18n';

export default function Footer() {
  const { d } = useLocale();
  return (
    <footer className="site-footer">
      <p>{d.footer}</p>
      <div>
        <a href="mailto:bibalefai@gmail.com" aria-label="Email"><Mail /></a>
        <a href="https://github.com/OPTIMISTICLE" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
        <a href="https://www.linkedin.com/in/bi-balefai-mondesir-boli-a62a41222/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
      </div>
      <span>© 2026 Boli Bi Balefai Mondesir</span>
    </footer>
  );
}
