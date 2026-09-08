import { Clipboard, Github, Linkedin, Mail, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useLocale } from '../i18n';
import { buildMailto } from '../utils-contact';

const EMAIL = 'bibalefai@gmail.com';

export default function Contact() {
  const { locale, d } = useLocale();
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    if (!name || !email || !message) { setError(true); return; }
    setError(false);
    const company = String(data.get('company') ?? '').trim();
    window.location.href = buildMailto(locale, { name, email, company, message }, EMAIL);
  };
  const copy = async () => { await navigator.clipboard.writeText(EMAIL); setCopied(true); window.setTimeout(() => setCopied(false), 1800); };
  return <section className="page-section page-intro contact-page">
    <p className="eyebrow">05 / CONTACT</p><h1>{d.contactTitle}</h1><p className="page-lead">{d.contactIntro}</p>
    <div className="contact-grid"><form onSubmit={submit} noValidate>
      <label>{d.name} *<input name="name" autoComplete="name" /></label>
      <label>{d.email} *<input name="email" type="email" autoComplete="email" /></label>
      <label>{d.company}<input name="company" autoComplete="organization" /></label>
      <label>{d.message} *<textarea name="message" rows={7} /></label>
      {error && <p className="form-error" role="alert">{d.required}</p>}
      <button className="button button--primary" type="submit">{d.compose}<Send /></button>
    </form><aside>
      <p className="eyebrow">DIRECT CHANNELS</p><a href={`mailto:${EMAIL}`}><Mail />{EMAIL}</a>
      <a href="https://www.linkedin.com/in/bi-balefai-mondesir-boli-a62a41222/" target="_blank" rel="noreferrer"><Linkedin />LinkedIn</a>
      <a href="https://github.com/OPTIMISTICLE" target="_blank" rel="noreferrer"><Github />GitHub</a>
      <button type="button" onClick={copy}><Clipboard />{copied ? d.copied : d.copyEmail}</button>
    </aside></div>
  </section>;
}
