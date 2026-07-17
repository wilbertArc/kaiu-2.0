import React from 'react';
import { Link } from 'react-router-dom';
import { KAIU_GRAINS } from '../grainsData.js';
import { PROJECTS } from '../projectsData.js';

export default function Home() {
  const featuredGrains = KAIU_GRAINS.slice(0, 4);
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <>
      <section id="top" className="hero">
        <div className="grain-canvas" />
        <div className="hero-content">
          <div className="eyebrow">Natural Wood Veneer, Refined</div>
          <h1>Grain is<br /><em>the</em> language<br />of luxury</h1>
          <p>KAIU sources and crafts fine wood veneer surfaces — where the honesty of natural material meets the precision of contemporary design.</p>
          <div className="btn-row">
            <Link to="/products" className="btn-primary">Explore Collection</Link>
            <Link to="/about" className="btn-ghost">Our Story</Link>
          </div>
        </div>
        <div className="hero-scroll">Scroll</div>
      </section>

      <section id="products">
        <div className="section-head">
          <div>
            <div className="eyebrow">The Collection</div>
            <h2 style={{ marginTop: 18 }}>Five grains, one philosophy</h2>
          </div>
          <p>A glimpse of the full catalog — each veneer cut, matched, and finished to hold both warmth and precision.</p>
        </div>
        <div className="home-grain-row">
          {featuredGrains.map((g) => (
            <Link className="home-grain-card" key={g.id} to={`/products/${g.slug}`}>
              <div className="grain" style={{ background: g.gradient }} />
              <div className="card-tag">
                <div className="eyebrow">{g.line} Line</div>
                <h3>{g.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="section-foot">
          <Link to="/products" className="btn-outline">See More Products</Link>
        </div>
      </section>

      <section id="home-story">
        <div className="home-story-grid">
          <div>
            <div className="eyebrow">Crafted by Nature</div>
            <h2 style={{ marginTop: 18, maxWidth: 480 }}>Every panel begins as a story told by the tree.</h2>
            <p>We select premium veneer logs, slice them with precision, and pair each face for architects, designers, and homeowners who want authenticity without compromise — grain, colour, and character we simply refine, never invent.</p>
            <Link to="/about" className="btn-ghost home-story-cta">Our Story</Link>
          </div>
          <div className="home-story-visual">
            <div className="grain-overlay" />
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="section-head">
          <div>
            <div className="eyebrow">Selected Work</div>
            <h2 style={{ marginTop: 18 }}>Spaces finished in KAIU</h2>
          </div>
          <p>From private residences to hospitality interiors, our veneer finds its place wherever material honesty matters.</p>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((p) => (
            <Link className="project-card" key={p.slug} to={`/projects/${p.slug}`}>
              <div className="grain-overlay" />
              <div className="shade" />
              <div className="meta">
                <div className="eyebrow">{p.eyebrow}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="section-foot">
          <Link to="/projects" className="btn-outline-1">See More Projects</Link>
        </div>
      </section>
{/* 
      <section id="home-cta">
        <div className="eyebrow">Start a Project</div>
        <h2>Bring the warmth of natural wood into your next space.</h2>
        <Link to="/contact" className="btn-primary">Talk to Our Team</Link>
      </section> */}
    </>
  );
}
