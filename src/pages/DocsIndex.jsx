import { Link, useLocation } from 'react-router-dom';
import { docSections } from '../data/docs.js';

export default function DocsIndex() {
  const location = useLocation();

  return (
    <div className="container docs-layout">
      <aside className="docs-sidebar">
        {docSections.map((section) => (
          <div key={section.title}>
            <h4>{section.title}</h4>
            <ul>
              {section.pages.map((page) => (
                <li key={page.slug}>
                  <Link
                    to={`/docs/${page.slug}`}
                    className={location.pathname === `/docs/${page.slug}` ? 'active' : ''}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
      <div className="docs-content">
        <h1>Documentation</h1>
        <p className="doc-meta">Guides, tutorials, and API reference for ForgeStack.</p>

        {docSections.map((section) => (
          <div key={section.title} style={{ marginBottom: '2.5rem' }}>
            <h2>{section.title}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
              {section.pages.map((page) => (
                <Link
                  key={page.slug}
                  to={`/docs/${page.slug}`}
                  className="card"
                  style={{ display: 'block', padding: '1rem 1.25rem' }}
                >
                  <strong>{page.title}</strong>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
