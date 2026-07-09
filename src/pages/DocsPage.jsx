import { Link, useLocation, useParams, Navigate } from 'react-router-dom';
import { docSections, getDoc } from '../data/docs.js';

function renderMarkdown(text) {
  const blocks = text.split('\n\n');
  return blocks.map((block, i) => {
    if (block.startsWith('## ')) return <h2 key={i}>{block.slice(3)}</h2>;
    if (block.startsWith('### ')) return <h3 key={i}>{block.slice(4)}</h3>;
    if (block.startsWith('```')) {
      const code = block.replace(/^```\w*\n?/, '').replace(/\n?```$/, '');
      return <pre key={i}><code>{code}</code></pre>;
    }
    if (block.startsWith('| ')) {
      const rows = block.split('\n').filter((r) => !r.match(/^\|[\s-|]+\|$/));
      return (
        <table key={i} className="compare-table" style={{ marginBottom: '1.5rem' }}>
          <tbody>
            {rows.map((row, ri) => {
              const cells = row.split('|').filter(Boolean).map((c) => c.trim());
              const Tag = ri === 0 ? 'th' : 'td';
              return (
                <tr key={ri}>
                  {cells.map((cell, ci) => <Tag key={ci}>{cell.replace(/\\`/g, '`')}</Tag>)}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    if (block.startsWith('- ')) {
      const items = block.split('\n').map((l) => l.replace(/^- /, ''));
      return (
        <ul key={i}>
          {items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />)}
        </ul>
      );
    }
    return <p key={i} dangerouslySetInnerHTML={{ __html: formatInline(block) }} />;
  });
}

function formatInline(text) {
  return text
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:var(--accent)">$1</a>');
}

export default function DocsPage() {
  const { slug } = useParams();
  const location = useLocation();
  const doc = getDoc(slug);

  if (!doc) return <Navigate to="/docs" replace />;

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
      <article className="docs-content">
        <h1>{doc.title}</h1>
        <p className="doc-meta">{doc.description} · Last updated {doc.updated}</p>
        {renderMarkdown(doc.body)}
      </article>
    </div>
  );
}
