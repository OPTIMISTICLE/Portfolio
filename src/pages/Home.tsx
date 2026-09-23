import { ArrowRight, Braces, Boxes, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ResponsiveImage from '../components/ResponsiveImage';
import { featuredProjects } from '../data/portfolioProjects';
import { useLocale } from '../i18n';

export default function Home() {
  const { locale, d } = useLocale();
  const icons = [Workflow, Boxes, Braces];
  const consultingServices = locale === 'fr' ? [
    { title: 'Stratégie et frontières', copy: 'Clarifier les responsabilités, invariants métier, risques et compromis avant l’implémentation.', project: 'buildow', proof: 'BuildOw' },
    { title: 'Workflows et backends sécurisés', copy: 'Concevoir les modèles, API, autorisations et opérations qui soutiennent le produit.', project: 'taskflow', proof: 'TaskFlow' },
    { title: 'IA appliquée et livrable', copy: 'Transformer un cas d’usage IA en pipeline explicable, testable et exploitable par les équipes.', project: 'agentforge', proof: 'AgentForge' },
  ] : [
    { title: 'Strategy and boundaries', copy: 'Clarify responsibilities, business invariants, risks, and trade-offs before implementation.', project: 'buildow', proof: 'BuildOw' },
    { title: 'Secure workflows and backends', copy: 'Design the models, APIs, authorization, and operations that support the product.', project: 'taskflow', proof: 'TaskFlow' },
    { title: 'Applied AI teams can deliver', copy: 'Turn an AI use case into an explainable, testable pipeline engineering teams can operate.', project: 'agentforge', proof: 'AgentForge' },
  ];
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
          <ResponsiveImage
            src="/images/portfolio/systems-hero.png"
            alt={locale === 'fr' ? 'Système logiciel conceptuel composé de couches produit, workflow et données.' : 'Conceptual software system made of connected product, workflow, and data layers.'}
            sizes="(max-width: 820px) calc(100vw - 40px), (max-width: 1180px) 70vw, 46vw"
            priority
          />
          <figcaption>Architecture / Product / Delivery</figcaption>
        </figure>
      </section>

      <section className="page-section consulting-section">
        <header className="section-heading">
          <div><p className="eyebrow">01 / CONSULTING</p><h2>{d.consulting}</h2></div>
          <p>{d.consultingIntro}</p>
        </header>
        <div className="consulting-grid">
          {consultingServices.map((service, index) => {
            const Icon = icons[index];
            return <article key={service.title}><Icon /><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.copy}</p><Link to={`/${locale}/projects/${service.project}`}>{d.viewEvidence}: {service.proof}<ArrowRight /></Link></article>;
          })}
        </div>
        <p className="location-line">{d.location}</p>
      </section>

      <section className="page-section selected-work">
        <header className="section-heading">
          <div><p className="eyebrow">02 / {d.projects}</p><h2>{d.selectedWork}</h2></div>
          <Link to={`/${locale}/projects`}>{d.viewAll}<ArrowRight size={18} /></Link>
        </header>
        <div className="featured-grid">
          {featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} large={index === 0} />)}
        </div>
      </section>

      <section className="page-section practice-section">
        <header className="section-heading"><div><p className="eyebrow">03 / METHOD</p><h2>{d.practice}</h2></div><p>{d.practiceIntro}</p></header>
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
