import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/portfolioProjects';
import { useLocale } from '../i18n';

export default function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const { locale, text, d } = useLocale();
  return (
    <article className={`project-card ${large ? 'project-card--large' : ''}`}>
      <div className="project-number">{project.number}</div>
      <p className="eyebrow">{text(project.category)} · {project.year}</p>
      <h3>{project.title}</h3>
      <p>{text(project.summary)}</p>
      <div className="project-card__footer">
        <span>{project.tech.slice(0, 3).join(' · ')}</span>
        <Link to={`/${locale}/projects/${project.id}`}>{d.openCase}<ArrowUpRight size={18} /></Link>
      </div>
    </article>
  );
}
