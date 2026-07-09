import { useState } from 'react';
import { Link } from 'react-router-dom';
import { plans, faqs } from '../data/pricing.js';
import CTABand from '../components/CTABand.jsx';

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <h1>Simple, transparent pricing</h1>
          <p className="lede">Start free, scale as you grow. No per-seat fees, no surprise bills.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-toggle">
            <span className={!annual ? 'active' : ''}>Monthly</span>
            <button className={`toggle-switch${annual ? ' on' : ''}`} onClick={() => setAnnual(!annual)} aria-label="Toggle annual pricing">
              <span className="toggle-knob" />
            </button>
            <span className={annual ? 'active' : ''}>Annual</span>
            {annual && <span className="badge badge-green">Save 20%</span>}
          </div>

          <div className="grid-4">
            {plans.map((plan) => (
              <div key={plan.id} className={`card pricing-card${plan.popular ? ' card-highlight popular' : ''}`}>
                {plan.popular && (
                  <div className="popular-badge">
                    <span className="badge badge-blue">Most popular</span>
                  </div>
                )}
                <p className="pricing-tier">{plan.name}</p>
                <div className="pricing-price">
                  {plan.monthly === null ? (
                    'Custom'
                  ) : plan.monthly === 0 ? (
                    <>$0<span>/mo</span></>
                  ) : (
                    <>${annual ? plan.annual : plan.monthly}<span>/mo</span></>
                  )}
                </div>
                <p className="pricing-desc">{plan.description}</p>
                <ul className="pricing-features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', justifyContent: 'center' }}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <div className="section-header center">
            <h2>Frequently asked questions</h2>
          </div>
          <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 style={{ marginBottom: '0.5rem' }}>{faq.q}</h3>
                <p className="text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CTABand
            title="Start building today"
            description="Deploy your first app for free. Upgrade when you need more power."
          />
        </div>
      </section>
    </>
  );
}
