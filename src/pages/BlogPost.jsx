import { Link, useParams, Navigate } from 'react-router-dom';
import { getPost } from '../data/blog.js';

function renderArticle(text) {
  const blocks = text.split('\n\n');
  return blocks.map((block, i) => {
    if (block.startsWith('## ')) return <h2 key={i}>{block.slice(3)}</h2>;
    if (block.startsWith('### ')) return <h3 key={i}>{block.slice(4)}</h3>;
    if (block.startsWith('```')) {
      const code = block.replace(/^```\w*\n?/, '').replace(/\n?```$/, '');
      return <pre key={i}><code>{code}</code></pre>;
    }
    if (block.startsWith('- ')) {
      const items = block.split('\n').map((l) => l.replace(/^- /, ''));
      return (
        <ul key={i}>
          {items.map((item, j) => <li key={j}>{item.replace(/\*\*([^*]+)\*\*/g, '$1')}</li>)}
        </ul>
      );
    }
    if (block.match(/^\d+\. /)) {
      const items = block.split('\n').map((l) => l.replace(/^\d+\. /, ''));
      return (
        <ol key={i}>
          {items.map((item, j) => <li key={j}>{item.replace(/\*\*([^*]+)\*\*/g, '$1')}</li>)}
        </ol>
      );
    }
    return <p key={i}>{block.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/`([^`]+)`/g, '$1')}</p>;
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <div className="container">
        <div className="article-header">
          <Link to="/blog" className="text-dim" style={{ display: 'inline-block', marginBottom: '1rem' }}>← Back to blog</Link>
          <div className="blog-card-meta" style={{ marginBottom: '0.5rem' }}>
            <span className="badge badge-blue">{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime} read</span>
          </div>
          <h1>{post.title}</h1>
          <div className="article-meta">
            <span>By {post.author}, {post.role}</span>
          </div>
        </div>
        <div className="article-body">
          {renderArticle(post.content)}
        </div>
      </div>
    </>
  );
}
