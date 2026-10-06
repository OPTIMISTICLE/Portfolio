import { ArrowUpRight, Award, Boxes, Compass, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResumeLinks from '../components/ResumeLinks';
import { academicProject, certifications, currentEmployment, education, experience } from '../data/portfolioExperience';
import { useLocale } from '../i18n';

export default function About() {
  const { locale, text, d } = useLocale();
  const principles = [
    { icon: Compass, title: d.principles[0], copy: text({ en: 'Architecture begins with actors, decisions, and business invariants.', fr: 'L’architecture commence par les acteurs, décisions et invariants métier.' }) },
    { icon: Boxes, title: d.principles[1], copy: text({ en: 'Each boundary carries an explicit responsibility and trade-off.', fr: 'Chaque frontière porte une responsabilité et un compromis explicites.' }) },
    { icon: ShieldCheck, title: d.principles[2], copy: text({ en: 'Security, observability, and delivery are designed from the start.', fr: 'Sécurité, observabilité et livraison sont conçues dès le départ.' }) },
  ];
  return <section className="page-section page-intro about-page">
    <p className="eyebrow">03 / PROFILE</p><h1>{d.aboutTitle}</h1><p className="page-lead">{d.aboutIntro}</p><p className="profile-location">{d.location}</p>
    <p className="profile-current"><span>{d.currentRole}</span>{text(currentEmployment.role)} · {currentEmployment.company}</p>
    <p className="profile-progression">{d.progression}</p>
    <ResumeLinks />
    <section><header className="section-heading"><div><p className="eyebrow">01 / METHOD</p><h2>{d.approach}</h2></div></header><div className="principle-grid">{principles.map(({ icon: Icon, title, copy }, i) => <article key={title}><Icon /><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section><header className="section-heading"><div><p className="eyebrow">02 / TIMELINE</p><h2>{d.experience}</h2></div></header><div className="timeline">{experience.map((entry) => <article key={entry.company}><span>{text(entry.period)}</span><div><h3>{text(entry.role)}</h3><strong>{entry.company}</strong><p>{text(entry.summary)}</p><div className="pattern-list">{entry.tech.map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}</div></div></article>)}</div></section>
    <section><header className="section-heading"><div><p className="eyebrow">03 / EDUCATION</p><h2>{d.education}</h2></div></header><div className="timeline">{education.map((entry) => <article key={entry.degree.en}><span>{text(entry.period)}</span><div><h3>{text(entry.degree)}</h3><strong>{entry.institution}</strong><p>{text(entry.summary)}</p></div></article>)}</div></section>
    <section><header className="section-heading"><div><p className="eyebrow">04 / RESEARCH</p><h2>{d.academicProject}</h2></div></header><div className="timeline"><article><span>{text(academicProject.period)}</span><div><h3>{text(academicProject.title)}</h3><strong>{academicProject.institution}</strong><p>{text(academicProject.summary)}</p><div className="pattern-list">{academicProject.tech.map((tech) => <span className="tech-tag" key={tech}>{tech}</span>)}</div><Link className="profile-project-link" to={`/${locale}/projects/${academicProject.projectId}`}>{d.exploreProject}<ArrowUpRight size={16} /></Link></div></article></div></section>
    <section><header className="section-heading"><div><p className="eyebrow">05 / CREDENTIALS</p><h2>{d.certifications}</h2></div></header><div className="cert-grid">{certifications.map((cert) => <a href={cert.url} target="_blank" rel="noreferrer" key={cert.name}><Award /><span><strong>{cert.name}</strong><small>{cert.year}</small></span><ArrowUpRight /></a>)}</div></section>
    <section><header className="section-heading"><div><p className="eyebrow">06 / LANGUAGES</p><h2>{d.languages}</h2></div></header><p>{d.languageSkills}</p></section>
  </section>;
}
