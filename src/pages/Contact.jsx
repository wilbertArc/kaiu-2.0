import React, { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">Get in Touch</div>
        <h1>Let's talk about your next surface</h1>
      </section>

      <section id="contact">
        <div className="contact-grid">
          <div>
            <p>Request samples, discuss a project, or visit our showroom — our team responds within one business day.</p>
            <div className="contact-detail"><div className="eyebrow">Showroom</div><div>Pluit Blok No. 1, Jakarta, Indonesia</div></div>
            <div className="contact-detail"><div className="eyebrow">Phone</div><div>+62 813 1234 5678</div></div>
            <div className="contact-detail"><div className="eyebrow">Email</div><div>kaiuveneers@gmail.com</div></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="field"><label>Name</label><input type="text" name="name" placeholder="Your full name" required /></div>
            <div className="field"><label>Email</label><input type="email" name="email" placeholder="you@company.com" required /></div>
            <div className="field"><label>Enquiry Type</label><input type="text" name="project_type" placeholder="Sample request, project quote, partnership…" /></div>
            <div className="field"><label>Message</label><textarea name="message" placeholder="Tell us about your project" /></div>
            <button type="submit" className="btn-primary">Send Message</button>
            <p className={`form-note${sent ? ' visible' : ''}`}>Thanks — your message has been received. Our team will respond within one business day.</p>
          </form>
        </div>
      </section>
    </>
  );
}
