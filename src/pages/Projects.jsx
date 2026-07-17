import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../projectsData.js';

export default function Projects() {
  return (
    <>
      {/* <section className="page-hero">
        <div className="eyebrow">Selected Work</div>
        <h1>Spaces finished in KAIU</h1>
      </section> */}

      <section id="projects">
        <div className="section-head">
          <div>
            <div className="eyebrow">Selected Work</div>
            <h2 style={{ marginTop: 18 }}>Spaces finished in KAIU</h2>
          </div>
          <p>From private residences to hospitality interiors, our veneer finds its place wherever material honesty matters.</p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
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
      </section>
    </>
  );
}
