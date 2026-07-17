import React from 'react';

const SERVICES = [
  { num: '01', title: 'Veneer Sourcing', desc: "Species and cut selection matched to your project's palette and budget." },
  { num: '02', title: 'Panel Fabrication', desc: 'Book-matched and slip-matched panels pressed to your substrate of choice.' },
  { num: '03', title: 'Finishing & Protection', desc: 'UV, lacquer, and oil finishes suited for residential and commercial use.' },
  { num: '04', title: 'Installation Support', desc: 'On-site consultation with our fabrication partners for a seamless finish.' },
];

export default function Services() {
  return (
    <section id="services">
      <div className="section-head">
        <div>
          <div className="eyebrow">What We Offer</div>
          <h2 style={{ marginTop: 18 }}>Service, end to end</h2>
        </div>
        <p>From raw material sourcing to on-site installation guidance, KAIU stays involved through every stage.</p>
      </div>
      <div className="service-list">
        {SERVICES.map((s) => (
          <div className="service-row" key={s.num}>
            <div className="service-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}
