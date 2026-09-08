import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocale } from '../i18n';

export default function NotFound() {
  const { locale, d } = useLocale();
  return <section className="page-section not-found"><strong>404</strong><h1>{d.notFound}</h1><Link className="button button--ghost" to={`/${locale}`}><ArrowLeft />{d.returnHome}</Link></section>;
}
