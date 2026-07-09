import { Link } from 'react-router-dom';

export default function CTABand({ title, description, primaryLabel = 'Start free', primaryHref = '/contact', secondaryLabel = 'View pricing', secondaryHref = '/pricing' }) {
  return (
    <div className="cta-band">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="hero-actions">
        <Link to={primaryHref} className="btn btn-primary btn-lg">{primaryLabel}</Link>
        <Link to={secondaryHref} className="btn btn-secondary btn-lg">{secondaryLabel}</Link>
      </div>
    </div>
  );
}
