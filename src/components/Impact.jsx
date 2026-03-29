import React from 'react';
import { SectionShell } from './SectionShell';

const METRICS = [
  { key: 'lat', suffix: '%', target: 40, label: 'API latency reduced — profiled & shipped' },
  { key: 'trains', suffix: '+', target: 300, label: 'Trains in production — national food supply chain' },
  { key: 'fleet', suffix: '+', target: 500, label: 'Vehicles managed — Ethiopian Electric Power' },
  { key: 'pub', suffix: '×', target: 3, label: 'Research published — Emerald · Springer · IEEE' },
];

const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=70',
    alt: 'Server infrastructure',
    label: 'Infrastructure',
  },
  {
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=70',
    alt: 'Data pipelines',
    label: 'Data pipelines',
  },
  {
    src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=70',
    alt: 'Cloud architecture',
    label: 'Cloud',
  },
];

export default function Impact() {
  return (
    <SectionShell id="impact">
      <p className="tp-kicker">
        <span className="tp-kicker__num">02</span>
        Impact
      </p>
      <h2 className="tp-title">
        Measurable outcomes <span className="tp-title__glow">from real systems.</span>
      </h2>
      <p className="tp-intro">
        Production reliability, latency wins, national food supply on trains and fleet scale, Gen AI on vendor and procurement
        flows, and research — summarized for recruiters scanning fast.
      </p>

      <div className="tp-impact__grid">
        {METRICS.map((m) => (
          <div key={m.key} className="tp-impact__cell">
            <div className="tp-impact__n">
              {m.display != null ? m.display : (
                <>
                  {m.target}
                  {m.suffix}
                </>
              )}
            </div>
            <div className="tp-impact__l">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="tp-impact__gallery">
        {GALLERY.map((item) => (
          <div key={item.src} className="tp-impact__shot">
            <img src={item.src} alt={item.alt} loading="lazy" width={600} height={200} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
