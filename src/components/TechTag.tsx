import React from 'react';

interface TechTagProps {
  tech: string;
  variant?: 'primary' | 'secondary';
}

const TechTag: React.FC<TechTagProps> = React.memo(({ tech, variant = 'primary' }) => {
  const baseClasses = "tech-tag px-4 py-2 rounded-lg font-semibold transition-all duration-300";
  const variantClasses = variant === 'primary' 
    ? "bg-indigo-500/10 text-indigo-500" 
    : "px-3 py-1 text-sm bg-slate-700 text-slate-300";

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      {tech}
    </span>
  );
});

TechTag.displayName = 'TechTag';

export default TechTag;