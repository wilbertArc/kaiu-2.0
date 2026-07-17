import React from 'react';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">About KAIU</div>
        <h1>Material honesty, shaped by craft</h1>
      </section>

      <section id="about">
        <div className="about-grid">
          <div className="about-visual">
            <div className="tag">Est. in the workshop, not the factory</div>
          </div>
          <div className="about-copy">
            <div className="eyebrow">ABOUT KAIU</div>
            <h2 style={{ margin: '18px 0 26px', fontSize: 'clamp(28px,3.4vw,44px)', maxWidth: 480 }}>
              Crafted by nature. <br />Refined by design.
            </h2>
            <p>KAIU began with a simple belief: that the most luxurious surface is one grown, not manufactured. Every sheet of veneer we release carries its own grain, its own history — sliced thin enough to reveal the character of the tree beneath.</p>
            <p>We work with architects and interior studios who see wood not as a finish, but as a material with a voice of its own — quiet, warm, and permanent.</p>
            <div className="about-stats">
              <div className="stat"><h3>200+</h3><span>Veneer Collection</span></div>
              <div className="stat"><h3>30+</h3><span>Projects Delivered</span></div>
              <div className="stat"><h3>100%</h3><span>Natural Material</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
