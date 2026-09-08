# Repository Guidelines

## Project Structure & Module Organization

This portfolio uses React, TypeScript, Vite, and Tailwind CSS. `src/main.tsx` initializes the application; `src/App.tsx` defines routes.

- `src/pages/`: routed pages, including Home, Projects, and Architectures.
- `src/components/`: reusable UI components.
- `src/layout/` and `src/context/`: shared layout and theme state.
- `src/data/`: JavaScript datasets for projects, architectures, experience, and posts.
- `src/styles/global.css`: active global styles and animations.
- `public/images/`: architecture diagrams, referenced as `/images/filename.png`.

No automated test suite or dedicated test directory is configured.

## Build, Test, and Development Commands

Run commands from the repository root:

- `npm ci`: install dependencies using the committed lockfile.
- `npm run dev`: start the Vite development server.
- `npm run build`: generate production assets in `dist/`.
- `npm run preview`: serve the production build locally.
- `npm run lint`: run ESLint.
- `npm run typecheck`: check application TypeScript without emitting files.

The build does not replace the separate TypeScript check.

## Coding Style & Naming Conventions

Use two-space indentation, semicolons, and existing local formatting. Prefer TypeScript for new application code, PascalCase component filenames such as `ProjectCard.tsx`, and camelCase variables and functions.

Use functional React components, Tailwind utilities, and the shared theme context. Keep portfolio content in `src/data/` and reusable presentation logic in components. ESLint enforces TypeScript and React Hooks rules; no dedicated formatter is configured.

## Testing Guidelines

No test runner, coverage threshold, or test naming convention is established. Run lint, typecheck, and build checks; report pre-existing failures separately from regressions.

For UI changes, manually check affected routes at mobile and desktop widths in both themes. Verify navigation, links, diagram loading, and consistent project information across pages.

## Commit & Pull Request Guidelines

Existing commits use descriptive English messages without a standardized prefix. Write concise, action-oriented summaries, such as `Add AgentForge project details`, and keep changes focused.

PR descriptions should explain the change, list validation results, link relevant issues, and include screenshots for visible updates.

## Content & Configuration

Keep public-facing copy in English unless translation is requested. Support project metrics with evidence. Never commit secrets, `.env`, `node_modules/`, or generated `dist/` files.
