import { Link } from 'react-router-dom';
import { site } from '../data/site.js';

const footerLinks = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Changelog', href: '/blog/forgestack-3-0-launch' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  Resources: [
    { label: 'Quickstart', href: '/docs/quickstart' },
    { label: 'API Reference', href: '/docs/api-auth' },
    { label: 'Status Page', href: '/contact' },
    { label: 'Security', href: '/blog/security-best-practices-2026' },
  ],
};

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-icon">F</span>
              {site.name}
            </Link>
            <p>{site.description}</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="footer-col">
              <h4>{title}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
