import { Link } from 'react-router-dom';
import { jobs, benefits } from '../data/careers.js';
import CTABand from '../components/CTABand.jsx';

export default function Careers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Careers</p>
          <h1>Help us build the future of cloud infrastructure</h1>
          <p className="lede">
            We're a remote-first team of 45 engineers, designers, and operators.
            Join us and work on problems that affect millions of developers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Open positions</h2>
            <p className="text-muted">{jobs.length} open roles across engineering, design, and go-to-market.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {jobs.map((job) => (
              <div key={job.id} className="card job-card">
                <div>
                  <h3>{job.title}</h3>
                  <p className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>{job.description}</p>
                  <div className="job-meta">
                    <span className="job-tag">{job.team}</span>
                    <span className="job-tag">{job.location}</span>
                    <span className="job-tag">{job.type}</span>
                  </div>
                </div>
                <Link to="/contact" className="btn btn-secondary">Apply</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <div className="section-header center">
            <h2>Benefits & perks</h2>
            <p className="lede">We invest in our team so they can do their best work.</p>
          </div>
          <div className="grid-4">
            {benefits.map((b) => (
              <div key={b} className="card" style={{ textAlign: 'center', padding: '1.25rem' }}>
                <p style={{ fontSize: '0.875rem' }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CTABand
            title="Don't see your role?"
            description="We're always looking for exceptional people. Send us your resume and tell us how you'd contribute."
            primaryLabel="Get in touch"
            secondaryLabel="Learn about us"
            secondaryHref="/about"
          />
        </div>
      </section>
    </>
  );
}
