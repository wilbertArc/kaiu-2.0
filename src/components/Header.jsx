import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV = [
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Product' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Service' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <Link to="/" className="logo" onClick={() => setOpen(false)}><img src="/images/kaiu-logo-dark.png" alt="KAIU" /></Link>
      {open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}
      <nav className={open ? 'nav-open' : ''}>
        <button type="button" className="nav-close" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
        <ul>
          {NAV.map((n) => (
            <li key={n.to}>
              <Link to={n.to} className={pathname === n.to ? 'active' : ''} onClick={() => setOpen(false)}>{n.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <a className="nav-cta">EN</a>
        <button
          type="button"
          className={`mobile-toggle${open ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
