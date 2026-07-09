import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { site, nav } from '../data/site.js';

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-icon">F</span>
          {site.name}
        </Link>

        <nav className="nav-desktop">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={location.pathname.startsWith(item.href) ? 'active' : ''}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-ghost btn-sm">Log in</Link>
          <Link to="/contact" className="btn btn-primary btn-sm">Start free</Link>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <nav className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        {nav.map((item) => (
          <Link key={item.href} to={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => setMenuOpen(false)}>
          Start free
        </Link>
      </nav>
    </header>
  );
}
