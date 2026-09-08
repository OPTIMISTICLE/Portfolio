import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioProjects';
import { useLocale } from '../i18n';

export default function Projects() {
  const { text, d } = useLocale();
  const [filter, setFilter] = useState('all');
  const categories = useMemo(() => Array.from(new Map(projects.map((p) => [p.category.en, p.category])).values()), []);
  const visible = filter === 'all' ? projects : projects.filter((project) => project.category.en === filter);
  return (
    <section className="page-section page-intro">
      <p className="eyebrow">01 / PORTFOLIO</p>
      <h1>{d.projectIndex}</h1>
      <p className="page-lead">{d.projectIndexIntro}</p>
      <div className="filter-bar" aria-label="Project filters">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>{d.all}</button>
        {categories.map((category) => <button className={filter === category.en ? 'active' : ''} key={category.en} onClick={() => setFilter(category.en)}>{text(category)}</button>)}
      </div>
      <div className="project-index-grid">{visible.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
    </section>
  );
}
