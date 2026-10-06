export type CredentialKind = 'course' | 'guided-project' | 'training-badge';

interface Credential {
  id: string;
  title: string;
  issuer: string;
  completedOn: string;
  kind: CredentialKind;
  verificationUrl?: string;
}

export const credentials: Credential[] = [
  { id: 'data-analysis-with-python', title: 'Data Analysis with Python', issuer: 'IBM · Coursera', completedOn: '2026-07-25', kind: 'course' },
  { id: 'databases-and-sql', title: 'Databases and SQL for Data Science with Python', issuer: 'IBM · Coursera', completedOn: '2026-07-06', kind: 'course' },
  { id: 'python-project-for-data-science', title: 'Python Project for Data Science', issuer: 'IBM · Coursera', completedOn: '2026-06-20', kind: 'course' },
  { id: 'python-for-data-science', title: 'Python for Data Science, AI & Development', issuer: 'IBM · Coursera', completedOn: '2026-06-11', kind: 'course' },
  { id: 'data-science-methodology', title: 'Data Science Methodology', issuer: 'IBM · Coursera', completedOn: '2026-06-10', kind: 'course' },
  { id: 'tools-for-data-science', title: 'Tools for Data Science', issuer: 'IBM · Coursera', completedOn: '2026-05-20', kind: 'course' },
  { id: 'what-is-data-science', title: 'What is Data Science?', issuer: 'IBM · Coursera', completedOn: '2026-05-05', kind: 'course' },
  { id: 'python-pro-bootcamp', title: '100 Days of Code™: The Complete Python Pro Bootcamp', issuer: 'Udemy · Dr. Angela Yu', completedOn: '2026-02-12', kind: 'course', verificationUrl: 'https://www.udemy.com/certificate/UC-b614166c-9511-4575-85a3-9d46b268e676/' },
  { id: 'star-interview-techniques', title: 'Accomplishment STAR Techniques for Job Interviews', issuer: 'Coursera Project Network', completedOn: '2025-06-22', kind: 'guided-project' },
  { id: 'azure-virtual-machine', title: 'Azure: Create a Virtual Machine and Deploy a Web Server', issuer: 'Coursera Project Network', completedOn: '2025-06-21', kind: 'guided-project' },
  { id: 'aws-s3-basics', title: 'AWS S3 Basics', issuer: 'Coursera Project Network', completedOn: '2025-06-18', kind: 'guided-project' },
  { id: 'aws-virtual-private-cloud', title: 'Create a Virtual Private Cloud (VPC) Using AWS', issuer: 'Coursera Project Network', completedOn: '2025-06-15', kind: 'guided-project' },
  { id: 'breast-cancer-prediction', title: 'Breast Cancer Prediction Using Machine Learning', issuer: 'Coursera Project Network', completedOn: '2025-06-06', kind: 'guided-project' },
  { id: 'aws-cloud-quest', title: 'AWS Cloud Quest: Cloud Practitioner', issuer: 'AWS', completedOn: '2025-06-26', kind: 'training-badge', verificationUrl: 'https://www.credly.com/badges/96340afe-5826-4e0a-9b5b-2d3050b34236' },
];
