import { team, values, milestones } from '../data/company.js';
import CTABand from '../components/CTABand.jsx';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>Building the cloud platform we always wished existed</h1>
          <p className="lede">
            ForgeStack started with a simple frustration: deploying to production shouldn't require a dedicated DevOps team.
            We're fixing that for 14,000+ engineering teams worldwide.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start', gap: '3rem' }}>
            <div>
              <h2>Our story</h2>
              <p className="text-muted" style={{ marginTop: '1rem', lineHeight: 1.8 }}>
                In 2022, Alex and Sarah were infrastructure engineers at fast-growing startups. They watched teams
                struggle with the same problems: complex deployment pipelines, surprise cloud bills, and observability
                tools that required their own dedicated team to maintain.
              </p>
              <p className="text-muted" style={{ marginTop: '1rem', lineHeight: 1.8 }}>
                They left to build what they wished existed — a platform where <code>git push</code> is the only
                deploy command you need, where monitoring is built in, and where pricing is transparent from day one.
              </p>
              <p className="text-muted" style={{ marginTop: '1rem', lineHeight: 1.8 }}>
                Today, ForgeStack powers everything from weekend side projects to platforms handling millions of
                requests per day. We're backed by Accel and a team of 45 engineers, designers, and operators
                who believe developer experience is a competitive advantage.
              </p>
            </div>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Timeline</h2>
              {milestones.map((m) => (
                <div key={m.year} style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <strong style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', minWidth: '3rem' }}>{m.year}</strong>
                  <span className="text-muted">{m.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-elevated)' }}>
        <div className="container">
          <div className="section-header center">
            <p className="eyebrow">Values</p>
            <h2>What we stand for</h2>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="card value-card">
                <span style={{ fontSize: '1.75rem' }}>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <p className="eyebrow">Team</p>
            <h2>The people behind ForgeStack</h2>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-avatar">{member.initials}</div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/careers" className="btn btn-primary">We're hiring →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CTABand
            title="Join us on the journey"
            description="Whether you're deploying your first app or migrating a legacy platform, we're here to help."
            primaryLabel="Get started free"
            secondaryLabel="Contact us"
          />
        </div>
      </section>
    </>
  );
}
