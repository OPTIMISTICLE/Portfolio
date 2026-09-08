import { beforeEach, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { projects } from '../data/portfolioProjects';
import { projectDiagrams } from '../data/projectDiagrams';
import { buildMailto } from '../utils-contact';

beforeEach(() => window.localStorage.clear());

test('renders all eight projects from the localized project contract', () => {
  render(<MemoryRouter initialEntries={['/en/projects']}><App /></MemoryRouter>);
  expect(projects).toHaveLength(8);
  projects.forEach((project) => expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument());
});

test('renders a complete case study and switches locale without losing the route', () => {
  render(<MemoryRouter initialEntries={['/en/projects/buildow']}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: 'Business workflows, without the BPMN burden.' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /Français/i }));
  expect(screen.getByRole('heading', { name: 'Des workflows métier, sans la complexité du BPMN.' })).toBeInTheDocument();
});

test('every project contains bilingual architecture and evidence content', () => {
  projects.forEach((project) => {
    expect(project.architecture.nodes.length).toBeGreaterThanOrEqual(5);
    expect(project.decisions.length).toBeGreaterThanOrEqual(3);
    expect(project.outcomes.length).toBeGreaterThanOrEqual(3);
    expect(project.media[0].alt.en).toBeTruthy();
    expect(project.media[0].alt.fr).toBeTruthy();
  });
});

test('renders every available conceptual diagram in the architecture index', () => {
  render(<MemoryRouter initialEntries={['/en/architectures']}><App /></MemoryRouter>);
  Object.values(projectDiagrams).forEach((diagram) => {
    expect(screen.getByRole('img', { name: diagram.alt.en })).toHaveAttribute('src', diagram.src);
  });
  expect(screen.getAllByRole('link', { name: /Open full-size diagram:/ })).toHaveLength(5);
});

test('builds a correctly encoded bilingual contact email', () => {
  const href = buildMailto('fr', { name: 'Ada', email: 'ada@example.com', company: 'ACME', message: 'Parlons architecture.' });
  expect(href).toContain('mailto:bibalefai@gmail.com');
  expect(decodeURIComponent(href)).toContain('Projet — Ada / ACME');
  expect(decodeURIComponent(href)).toContain('Parlons architecture.');
});




test('filters the project index by product domain', () => {
  render(<MemoryRouter initialEntries={['/en/projects']}><App /></MemoryRouter>);
  fireEvent.click(screen.getByRole('button', { name: 'Workflow platform' }));
  expect(screen.getByRole('heading', { name: 'BuildOw' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'TaskFlow' })).not.toBeInTheDocument();
});

