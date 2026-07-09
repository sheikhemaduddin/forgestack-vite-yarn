import { featureCategories, comparisonRows } from '../data/features.js';
import CTABand from '../components/CTABand.jsx';

export default function Features() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Platform</p>
          <h1>Built for modern engineering teams</h1>
          <p className="lede">
            From your first deploy to your millionth request — ForgeStack handles the infrastructure so you can focus on product.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {featureCategories.map((cat) => (
            <div key={cat.id} className="feature-category">
              <h2>{cat.title}</h2>
              <p>{cat.description}</p>
              <div className="feature-detail-grid">
                {cat.features.map((f) => (
                  <div key={f.title} className="feature-detail">
                    <span className="feature-detail-icon">{f.icon}</span>
                    <div>
                      <h3>{f.title}</h3>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <div className="section-header center">
            <p className="eyebrow">Compare</p>
            <h2>How ForgeStack stacks up</h2>
            <p className="lede">See why teams are switching from Heroku and raw AWS.</p>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>ForgeStack</th>
                  <th>Heroku</th>
                  <th>AWS</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td><strong style={{ color: 'var(--ink)' }}>{row.forge}</strong></td>
                    <td>{row.heroku}</td>
                    <td>{row.aws}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CTABand
            title="See it in action"
            description="Deploy your first app in under 5 minutes. No credit card, no commitment."
            primaryLabel="Start free"
            secondaryLabel="Read the docs"
            secondaryHref="/docs/quickstart"
          />
        </div>
      </section>
    </>
  );
}
