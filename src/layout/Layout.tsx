import { Outlet } from 'react-router-dom';
import { LocaleProvider } from '../i18n';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <LocaleProvider>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-frame">
        <Navbar />
        <div className="site-content">
          <main id="main-content"><Outlet /></main>
          <Footer />
        </div>
      </div>
    </LocaleProvider>
  );
}
