import { Link } from 'react-router-dom';
import { site, stats, logos } from '../data/site.js';
import { homeFeatures } from '../data/features.js';
import { testimonials } from '../data/company.js';
import { posts } from '../data/blog.js';
import CTABand from '../components/CTABand.jsx';

export default function Home() {
  const recentPosts = posts.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div className="hero-content">
              <p className="eyebrow">Cloud platform · Now on v3.0</p>
              <h1>{site.tagline}</h1>
              <p className="lede">
                Deploy, monitor, and scale your applications with zero DevOps overhead.
                From git push to global production in under 60 seconds.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">Start free — no card required</Link>
                <Link to="/docs/quickstart" className="btn btn-secondary btn-lg">Read the docs</Link>
              </div>
              <div className="hero-stats">
                {stats.map((s) => (
                  <div key={s.label} className="stat-item">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="terminal">
              <div className="terminal-bar">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span style={{ marginLeft: '0.5rem', color: 'var(--ink-dim)', fontSize: '0.75rem' }}>forgestack deploy</span>
              </div>
              <div className="terminal-body">
                <div><span className="prompt">$</span> <span className="cmd">forge deploy --message "Ship it"</span></div>
                <div className="out">Building my-api...</div>
                <div className="out">  ✓ Dependencies installed (3.2s)</div>
                <div className="out">  ✓ Build complete (8.1s)</div>
                <div className="out">  ✓ Health check passed</div>
                <div className="out">  ✓ Deployed to production</div>
                <div>&nbsp;</div>
                <div className="ok">→ https://my-api.forgestack.app</div>
                <div className="out">  Deploy time: 14.2s · Region: us-east-1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <p className="text-dim" style={{ textAlign: 'center', marginBottom: '1rem' }}>Trusted by engineering teams at</p>
          <div className="logo-cloud">
            {logos.map((name) => <span key={name}>{name}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <p className="eyebrow">Platform</p>
            <h2>Everything you need to ship</h2>
            <p className="lede">One platform for deployment, scaling, monitoring, and security. No duct tape required.</p>
          </div>
          <div className="grid-3">
            {homeFeatures.map((f) => (
              <div key={f.title} className="card feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/features" className="btn btn-secondary">Explore all features →</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <div className="section-header center">
            <p className="eyebrow">Testimonials</p>
            <h2>Teams love ForgeStack</h2>
          </div>
          <div className="grid-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card testimonial-card">
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div className="author-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">From the blog</p>
            <h2>Latest insights</h2>
          </div>
          <div className="blog-grid">
            {recentPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="card blog-card">
                <div className="blog-card-image">{post.emoji}</div>
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="badge badge-blue">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="read-more">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/blog" className="btn btn-secondary">View all posts</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CTABand
            title="Ready to ship faster?"
            description="Join 14,000+ teams deploying on ForgeStack. Start free, scale when you're ready."
          />
        </div>
      </section>
    </>
  );
}
