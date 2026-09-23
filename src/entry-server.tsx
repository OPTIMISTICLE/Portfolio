import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export { getSeoForPath, indexableSeoRoutes, renderSeoHead, seoRoutes, siteIdentity } from './seo';

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );
}
