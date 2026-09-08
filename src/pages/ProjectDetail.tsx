import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import ArchitectureFlow from '../components/ArchitectureFlow';
import TechTag from '../components/TechTag';
import { getProject, projects } from '../data/portfolioProjects';
import { useLocale } from '../i18n';
import NotFound from './NotFound';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { locale, text, d } = useLocale();
  const project = getProject(slug ?? '');
  if (!project) return <NotFound />;
  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  return (
    <article className="case-study">
      <header className="case-hero page-section">
        <Link className="back-link" to={`/${locale}/projects`}><ArrowLeft />{d.backProjects}</Link>
        <div className="case-title-row">
          <div><p className="eyebrow">{d.caseStudy} / {project.number}</p><h1>{text(project.headline)}</h1><p className="page-lead">{text(project.summary)}</p></div>
          <strong className="case-number">{project.number}</strong>
        </div>
        <dl className="case-facts">
          <div><dt>{d.role}</dt><dd>{text(project.role)}</dd></div>
          <div><dt>{d.scope}</dt><dd>{project.scope.map(text).join(' · ')}</dd></div>
          <div><dt>{d.status}</dt><dd>{text(project.status)}</dd></div>
          <div><dt>{d.year}</dt><dd>{project.year}</dd></div>
        </dl>
        <figure className="case-cover">
          <img src={project.media[0].src} alt={text(project.media[0].alt)} />
          <figcaption><span>{project.media[0].kind === 'concept-visual' ? d.conceptual : d.verified}</span>{text(project.media[0].caption)}</figcaption>
        </figure>
      </header>

      <section className="page-section split-narrative">
        <div><p className="eyebrow">01 / CONTEXT</p><h2>{d.problem}</h2><p>{text(project.challenge)}</p></div>
        <div><p className="eyebrow">02 / RESPONSE</p><h2>{d.response}</h2><p>{text(project.solution)}</p></div>
      </section>

      <section className="page-section">
        <header className="section-heading"><div><p className="eyebrow">03 / EXPERIENCE</p><h2>{d.productFlow}</h2></div></header>
        <ol className="flow-grid">{project.flow.map((step, i) => <li key={step.title.en}><span>0{i + 1}</span><h3>{text(step.title)}</h3><p>{text(step.description)}</p></li>)}</ol>
      </section>

      {project.media.length > 1 && <section className="page-section"><header className="section-heading"><div><p className="eyebrow">04 / PRODUCT</p><h2>{d.gallery}</h2></div></header><div className="media-gallery">{project.media.slice(1).map((media) => <figure key={media.src}><img src={media.src} alt={text(media.alt)} loading="lazy" /><figcaption><span>{d.verified}</span>{text(media.caption)}</figcaption></figure>)}</div></section>}

      <section className="page-section architecture-section">
        <header className="section-heading"><div><p className="eyebrow">05 / SYSTEM</p><h2>{d.system}</h2></div><p>{text(project.architecture.summary)}</p></header>
        <ArchitectureDiagram project={project} />
        <ArchitectureFlow project={project} />
        <div className="pattern-list">{project.architecture.patterns.map((pattern) => <TechTag key={pattern.en}>{text(pattern)}</TechTag>)}</div>
      </section>

      <section className="page-section">
        <header className="section-heading"><div><p className="eyebrow">06 / TRADE-OFFS</p><h2>{d.decisions}</h2></div></header>
        <div className="decision-grid">{project.decisions.map((decision, i) => <article key={decision.title.en}><span>0{i + 1}</span><h3>{text(decision.title)}</h3><p>{text(decision.description)}</p></article>)}</div>
      </section>

      <section className="page-section evidence-grid">
        <div><p className="eyebrow"><ShieldCheck />07 / QUALITY</p><h2>{d.reliability}</h2><ul>{project.reliability.map((entry) => <li key={entry.en}><CheckCircle2 />{text(entry)}</li>)}</ul></div>
        <div><p className="eyebrow"><CheckCircle2 />08 / EVIDENCE</p><h2>{d.outcomes}</h2><ul>{project.outcomes.map((entry) => <li key={entry.en}><CheckCircle2 />{text(entry)}</li>)}</ul></div>
      </section>

      <section className="page-section stack-section"><p className="eyebrow">09 / STACK</p><h2>{d.stack}</h2><div>{project.tech.map((tech) => <TechTag key={tech}>{tech}</TechTag>)}</div></section>
      <Link className="next-project" to={`/${locale}/projects/${next.id}`}><span>{d.next}</span><strong>{next.title}</strong><ArrowRight /></Link>
    </article>
  );
}

