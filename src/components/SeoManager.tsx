import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoForPath, renderSeoHead } from '../seo';

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(location.pathname);
    document.documentElement.lang = seo.locale;
    document.head.querySelectorAll('[data-seo="route"]').forEach((element) => element.remove());
    document.head.insertAdjacentHTML('beforeend', renderSeoHead(seo));
  }, [location.pathname]);

  return null;
}
