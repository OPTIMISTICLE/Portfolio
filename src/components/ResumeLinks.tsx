import { Download } from 'lucide-react';
import { resumes } from '../data/portfolioExperience';
import { useLocale } from '../i18n';

export default function ResumeLinks() {
  const { text } = useLocale();
  return (
    <div className="resume-links">
      {resumes.map((resume) => <a key={resume.href} href={resume.href} download><Download size={18} />{text(resume.title)}</a>)}
    </div>
  );
}
