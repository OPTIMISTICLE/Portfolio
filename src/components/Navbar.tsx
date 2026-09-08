import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Languages, Menu, X } from 'lucide-react';
import { notes } from '../data/notes';
import { useLocale } from '../i18n';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { locale, d, switchLocale } = useLocale();
  const links = [
    { path: '', label: d.home, end: true },
    { path: '/projects', label: d.projects },
    { path: '/architectures', label: d.architectures },
    { path: '/about', label: d.about },
    ...(notes.length ? [{ path: '/notes', label: d.notes }] : []),
    { path: '/contact', label: d.contact },
  ];

  return (
    <header className="site-rail">
      <div className="rail-topline">
        <Link className="monogram" to={`/${locale}`} aria-label={d.home}>{'<SE/>'}</Link>
        <button className="mobile-menu" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? d.close : d.menu}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`rail-body ${open ? 'is-open' : ''}`}>
        <div className="identity">
          <strong>BOLI BI<br />BALEFAI<br />MONDESIR</strong>
          <span>{d.position}</span>
        </div>
        <nav aria-label="Primary navigation">
          {links.map((link, index) => (
            <NavLink key={link.path} end={link.end} to={`/${locale}${link.path}`} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
              <span>{String(index + 1).padStart(2, '0')}</span>{link.label}
            </NavLink>
          ))}
        </nav>
        <button className="language-switch" type="button" onClick={switchLocale}><Languages size={17} /> {d.language}</button>
        <p className="availability"><i />{d.available}</p>
        <p className="rail-signature">{d.footer}</p>
      </div>
    </header>
  );
}
