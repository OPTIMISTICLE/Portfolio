import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/jetbrains-mono/wght.css';
import '@fontsource-variable/manrope/wght.css';
import '@fontsource-variable/newsreader/wght.css';
import App from './App.tsx';
import './styles/global.css';

const root = document.getElementById('root')!;
const application = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

if (root.hasChildNodes()) hydrateRoot(root, application);
else createRoot(root).render(application);
