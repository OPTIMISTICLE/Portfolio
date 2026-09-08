import { ArrowRight } from 'lucide-react';
import type { Project } from '../data/portfolioProjects';
import { useLocale } from '../i18n';

export default function ArchitectureFlow({ project }: { project: Project }) {
  const { text } = useLocale();
  return (
    <div className="architecture-flow" role="img" aria-label={text(project.architecture.summary)}>
      {project.architecture.nodes.map((node, index) => (
        <div className="architecture-step" key={node.en}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{text(node)}</strong>
          {index < project.architecture.nodes.length - 1 && <ArrowRight aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}
