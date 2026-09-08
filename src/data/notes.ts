import type { LocalizedText } from './portfolioProjects';

export interface Note { title: LocalizedText; excerpt: LocalizedText; url: string; publishedAt: string; tags: string[] }

// Add only publications with a direct, verified article URL.
export const notes: Note[] = [];
