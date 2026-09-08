import type { Locale } from './data/portfolioProjects';

export interface ContactMessage { name: string; email: string; company?: string; message: string }

export function buildMailto(locale: Locale, input: ContactMessage, recipient = 'bibalefai@gmail.com') {
  const company = input.company?.trim();
  const subject = locale === 'fr'
    ? `Projet — ${input.name}${company ? ` / ${company}` : ''}`
    : `Project enquiry — ${input.name}${company ? ` / ${company}` : ''}`;
  const body = `${input.name}\n${input.email}${company ? `\n${company}` : ''}\n\n${input.message}`;
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

