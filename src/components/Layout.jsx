import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { getPageMeta } from '../data/site.js';

export default function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    const meta = getPageMeta(location.pathname);
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta.description);
  }, [location.pathname]);

  return (
    <div className="app-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
