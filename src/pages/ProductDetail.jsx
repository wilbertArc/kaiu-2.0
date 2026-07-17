import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { KAIU_GRAINS } from '../grainsData.js';

export default function ProductDetail() {
  const { slug } = useParams();
  const grain = KAIU_GRAINS.find((g) => g.slug === slug);

  if (!grain) {
    return (
      <section className="page-hero">
        <div className="eyebrow">Not Found</div>
        <h1>We couldn't find that grain</h1>
        <Link to="/products" className="btn-ghost" style={{ marginTop: 24, display: 'inline-block' }}>← Back to Collection</Link>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">{grain.line} Line</div>
        <h1>{grain.name}</h1>
      </section>

      <section id="product-detail">
        <Link to="/products" className="btn-ghost">← Back to Collection</Link>
        <div className="product-detail-grid">
          <div className="product-detail-visual">
            <div className="grain" style={{ background: grain.gradient }} />
          </div>
          <div>
            <div className="eyebrow">{grain.line} Line</div>
            <h2 style={{ marginTop: 18 }}>{grain.name}</h2>
            <p style={{ marginTop: 22, fontSize: 17, color: 'rgba(33,26,20,0.75)', maxWidth: 480 }}>{grain.desc}</p>
            <p style={{ marginTop: 16, fontSize: 14, color: 'rgba(33,26,20,0.55)' }}>Samples are cut from live inventory — grain and tone may vary naturally between sheets, a mark of authenticity rather than inconsistency.</p>
            <Link to="/contact" className="btn-primary" style={{ marginTop: 30, display: 'inline-block' }}>Request a Sample</Link>
          </div>
        </div>
      </section>
    </>
  );
}
