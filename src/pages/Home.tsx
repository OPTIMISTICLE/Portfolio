import { ArrowRight, Braces, Boxes, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects } from '../data/portfolioProjects';
import { useLocale } from '../i18n';

export default function Home() {
  const { locale, d } = useLocale();
  const icons = [Workflow, Boxes, Braces];
  return (
    <>
      <section className="hero page-section">
        <div className="hero-copy">
          <p className="eyebrow">{d.position}</p>
          <h1>{locale === 'fr' ? <><span>L’architecture</span><span>logicielle,</span><span>rendue tangible.</span></> : <><span>Software</span><span>architecture,</span><span>made tangible.</span></>}</h1>
          <p className="hero-intro">{d.intro}</p>
          <div className="button-row">
            <Link className="button button--primary" to={`/${locale}/projects`}>{d.viewProjects}<ArrowRight /></Link>
            <Link className="button button--ghost" to={`/${locale}/contact`}>{d.contactMe}</Link>
          </div>
          <dl className="hero-stats">
            <div><dt>08</dt><dd>{d.projects}</dd></div>
            <div><dt>08</dt><dd>{d.architectures}</dd></div>
            <div><dt>02</dt><dd>{d.experience}</dd></div>
          </dl>
        </div>
        <figure className="hero-visual">
          <div className="figure-label"><span>FEATURED SYSTEM</span><b>A.01</b></div>
          <img src="/images/portfolio/systems-hero.png" alt="Conceptual software system made of connected product, workflow, and data layers." />
          <figcaption>Architecture / Product / Delivery</figcaption>
        </figure>
      </section>

      <section className="page-section selected-work">
        <header className="section-heading">
          <div><p className="eyebrow">01 / {d.projects}</p><h2>{d.selectedWork}</h2></div>
          <Link to={`/${locale}/projects`}>{d.viewAll}<ArrowRight size={18} /></Link>
        </header>
        <div className="featured-grid">
          {featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} large={index === 0} />)}
        </div>
      </section>

      <section className="page-section practice-section">
        <header className="section-heading"><div><p className="eyebrow">02 / METHOD</p><h2>{d.practice}</h2></div><p>{d.practiceIntro}</p></header>
        <div className="principle-grid">
          {d.principles.map((principle, index) => {
            const Icon = icons[index];
            return <article key={principle}><Icon /><span>0{index + 1}</span><h3>{principle}</h3></article>;
          })}
        </div>
      </section>
    </>
  );
}
