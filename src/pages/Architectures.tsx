import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import ArchitectureFlow from '../components/ArchitectureFlow';
import TechTag from '../components/TechTag';
import { projects } from '../data/portfolioProjects';
import { useLocale } from '../i18n';

export default function Architectures() {
  const { locale, text, d } = useLocale();
  return (
    <section className="page-section page-intro">
      <p className="eyebrow">02 / SYSTEMS</p><h1>{d.architectureIndex}</h1><p className="page-lead">{d.architectureIntro}</p>
      <div className="architecture-index">{projects.map((project) => <article key={project.id}>
        <header><div><p className="eyebrow">SYSTEM / {project.number}</p><h2>{project.title}</h2><p>{text(project.architecture.summary)}</p></div><Link to={`/${locale}/projects/${project.id}`}>{d.exploreProject}<ArrowUpRight /></Link></header>
        <ArchitectureDiagram project={project} />
        <ArchitectureFlow project={project} />
        <div className="pattern-list">{project.architecture.patterns.map((pattern) => <TechTag key={pattern.en}>{text(pattern)}</TechTag>)}</div>
      </article>)}</div>
    </section>
  );
}
