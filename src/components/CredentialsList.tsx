import { ArrowUpRight, Award } from 'lucide-react';
import { credentials, type CredentialKind } from '../data/portfolioCredentials';
import { useLocale } from '../i18n';

export default function CredentialsList() {
  const { locale, text } = useLocale();
  const groups: { kind: CredentialKind; title: { en: string; fr: string } }[] = [
    { kind: 'course', title: { en: 'Completed courses', fr: 'Cours suivis' } },
    { kind: 'guided-project', title: { en: 'Guided projects', fr: 'Projets guidés' } },
    { kind: 'training-badge', title: { en: 'Training badges', fr: 'Badges de formation' } },
  ];

  return <div className="credential-groups">
    {groups.map((group) => {
      const entries = credentials.filter((credential) => credential.kind === group.kind);
      return <section className="credential-group" key={group.kind}>
        <h3>{text(group.title)} <span>({entries.length})</span></h3>
        {group.kind === 'training-badge' && <p className="credential-note">{text({ en: 'Cloud Quest is a training badge, distinct from the AWS Certified Cloud Practitioner certification.', fr: 'Cloud Quest est un badge de formation, distinct de la certification AWS Certified Cloud Practitioner.' })}</p>}
        <div className="cert-grid">{entries.map((credential) => <article key={credential.id}>
          <Award aria-hidden="true" />
          <div>
            <h4>{credential.title}</h4>
            <p>{credential.issuer}</p>
            <time dateTime={credential.completedOn}>{new Date(`${credential.completedOn}T00:00:00Z`).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}</time>
            <div className="credential-links">
              <a href={`/credentials/${credential.id}.pdf`} target="_blank" rel="noreferrer" aria-label={`${text({ en: 'View certificate (PDF)', fr: 'Voir l’attestation (PDF)' })} — ${credential.title}`}>{text({ en: 'View certificate (PDF)', fr: 'Voir l’attestation (PDF)' })}<ArrowUpRight size={16} aria-hidden="true" /></a>
              {credential.verificationUrl && <a href={credential.verificationUrl} target="_blank" rel="noreferrer" aria-label={`${text({ en: 'Issuer record', fr: 'Lien de l’organisme' })} — ${credential.title}`}>{text({ en: 'Issuer record', fr: 'Lien de l’organisme' })}<ArrowUpRight size={16} aria-hidden="true" /></a>}
            </div>
          </div>
        </article>)}</div>
      </section>;
    })}
  </div>;
}
