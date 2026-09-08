import { Maximize2 } from 'lucide-react';
import type { Project } from '../data/portfolioProjects';
import { projectDiagrams } from '../data/projectDiagrams';
import { useLocale } from '../i18n';

export default function ArchitectureDiagram({ project }: { project: Project }) {
  const { locale, text } = useLocale();
  const diagram = projectDiagrams[project.id];

  if (!diagram) return null;

  const openLabel = locale === 'fr' ? 'Ouvrir le diagramme en grand' : 'Open full-size diagram';

  return (
    <figure className="architecture-diagram">
      <a href={diagram.src} target="_blank" rel="noreferrer" aria-label={openLabel + ': ' + project.title}>
        <img src={diagram.src} alt={text(diagram.alt)} loading="lazy" />
      </a>
      <figcaption>
        <div><span>{locale === 'fr' ? 'Vue conceptuelle' : 'Conceptual overview'}</span>{text(diagram.caption)}</div>
        <a href={diagram.src} target="_blank" rel="noreferrer">{openLabel}<Maximize2 /></a>
      </figcaption>
    </figure>
  );
}
