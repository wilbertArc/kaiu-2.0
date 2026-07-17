import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { KAIU_GRAINS } from '../grainsData.js';

const INITIAL_COUNT = 10;
const PAGE_SIZE = 20;

export default function Products() {
  const [shown, setShown] = useState(INITIAL_COUNT);
  const visible = KAIU_GRAINS.slice(0, shown);
  const hasMore = shown < KAIU_GRAINS.length;

  return (
    <section id="products">
      <div className="section-head">
        <div>
          <div className="eyebrow">The Collection</div>
          <h2 style={{ marginTop: 18 }}>Five grains, one philosophy</h2>
        </div>
        <p>Each veneer is cut, matched, and finished to hold both warmth and precision — suited for panelling, furniture, and architectural surfaces.</p>
      </div>

      <div className="swatch-strip">
        {visible.map((g) => (
          <Link className="swatch" key={g.id} to={`/products/${g.slug}`}>
            <div className="grain" style={{ background: g.gradient }} />
            <div className="info">
              <div className="eyebrow">{g.line} Line</div>
              <h3>{g.name}</h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="products-toolbar">
        <p className="products-note">Samples are cut from live inventory — grain and tone may vary naturally between sheets, a mark of authenticity rather than inconsistency.</p>
        <div className="products-count">Showing {shown} of {KAIU_GRAINS.length} grains</div>
      </div>

      {hasMore && (
        <div className="load-more-wrap">
          <button type="button" className="btn-outline" onClick={() => setShown((s) => Math.min(KAIU_GRAINS.length, s + PAGE_SIZE))}>
            Load More Grains
          </button>
        </div>
      )}
    </section>
  );
}
