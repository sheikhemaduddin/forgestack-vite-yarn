import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: 'general', message: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Get in touch</h1>
          <p className="lede">Questions about pricing, enterprise plans, or partnerships? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>Talk to our team</h2>
            <p>Most inquiries get a response within one business day. Enterprise customers get priority support.</p>

            <div className="contact-detail">
              <div className="contact-detail-icon">📧</div>
              <div>
                <strong>General inquiries</strong>
                <span>hello@forgestack.io</span>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">💼</div>
              <div>
                <strong>Enterprise sales</strong>
                <span>sales@forgestack.io</span>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">🛟</div>
              <div>
                <strong>Support</strong>
                <span>support@forgestack.io</span>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">📍</div>
              <div>
                <strong>Headquarters</strong>
                <span>548 Market St, San Francisco, CA 94104</span>
              </div>
            </div>
          </div>

          <div className="card">
            {submitted ? (
              <div className="form-success">
                Thanks for reaching out! We'll get back to you within one business day.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jane Developer" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Work email</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Acme Inc." />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                      <option value="general">General inquiry</option>
                      <option value="sales">Enterprise sales</option>
                      <option value="support">Technical support</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press & media</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required value={form.message} onChange={handleChange} placeholder="Tell us about your project or question..." />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
