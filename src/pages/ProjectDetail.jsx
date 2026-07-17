import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { PROJECTS } from '../projectsData.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="page-hero">
        <div className="eyebrow">Not Found</div>
        <h1>We couldn't find that project</h1>
        <Link to="/projects" className="btn-ghost" style={{ marginTop: 24, display: 'inline-block' }}>← Back to Projects</Link>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="eyebrow">{project.eyebrow}</div>
        <h1>{project.title}</h1>
      </section>

      <section id="project-detail">
        <Link to="/projects" className="btn-ghost">← Back to Projects</Link>
        <div className="project-detail-visual" style={{ marginTop: 40 }}>
          <div className="grain-overlay" />
          <div className="shade" />
        </div>
        <div className="project-detail-grid">
          <div>
            <div className="eyebrow">About This Project</div>
            <h2 style={{ marginTop: 18, maxWidth: 560 }}>{project.title}</h2>
            <p style={{ marginTop: 22, maxWidth: 560, fontSize: 17, color: 'rgba(33,26,20,0.75)' }}>{project.longDesc}</p>
          </div>
          <div className="project-detail-facts">
            <div className="fact"><div className="eyebrow">Location</div><div>{project.location}</div></div>
            <div className="fact"><div className="eyebrow">Veneer Used</div><div>{project.veneer}</div></div>
            <div className="fact"><div className="eyebrow">Scope</div><div>{project.scope}</div></div>
          </div>
        </div>
      </section>
    </>
  );
}
