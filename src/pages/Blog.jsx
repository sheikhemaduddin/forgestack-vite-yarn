import { Link } from 'react-router-dom';
import { posts } from '../data/blog.js';

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h1>Engineering insights & product updates</h1>
          <p className="lede">Deep dives into infrastructure, product announcements, and DevOps best practices from the ForgeStack team.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="card blog-card">
                <div className="blog-card-image">{post.emoji}</div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="badge badge-blue">{post.category}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="read-more">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
