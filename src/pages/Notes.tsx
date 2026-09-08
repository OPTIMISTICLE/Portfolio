import { notes } from '../data/notes';
import { useLocale } from '../i18n';

export default function Notes() {
  const { text, d } = useLocale();
  return <section className="page-section page-intro"><p className="eyebrow">04 / WRITING</p><h1>{d.notesTitle}</h1><p className="page-lead">{d.notesIntro}</p>{notes.length === 0 ? <div className="empty-state"><strong>00</strong><p>{d.notesEmpty}</p></div> : <div className="notes-grid">{notes.map((note) => <a href={note.url} target="_blank" rel="noreferrer" key={note.url}><small>{note.publishedAt}</small><h2>{text(note.title)}</h2><p>{text(note.excerpt)}</p></a>)}</div>}</section>;
}
