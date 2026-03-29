import React from 'react';
import { Tag } from 'antd';
import { SectionShell } from './SectionShell';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1400&q=80';

const FOCUS_AREAS = [
  'Distributed systems',
  'Event-driven APIs',
  'Multi-tenant SaaS',
  'Gen AI · Anthropic',
  'Document / invoice intelligence',
  'DB performance',
  'AWS · CI/CD',
];

export default function About() {
  return (
    <SectionShell id="about">
      <p className="tp-kicker">
        <span className="tp-kicker__num">01</span>
        About
      </p>
      <h2 className="tp-title">
        Backend engineer shipping <span className="tp-title__glow">systems that scale.</span>
      </h2>
      <p className="tp-intro">
        Noida, India · 3+ years on production backends and full-stack products for enterprise and national-scale logistics.
      </p>

      <div className="tp-about__banner">
        <img src={ABOUT_IMAGE} alt="Engineering workspace with laptop and code" width={1400} height={600} loading="lazy" />
      </div>

      <div className="tp-about__grid">
        <div>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--tp-muted)', marginBottom: 20 }}>
            I led architecture for high-volume supply chain workloads—orders, integrations, and reliability under peak load. I
            own the vertical from APIs and data modeling to queues, caching, and cloud deployment. On enterprise vendor
            portals I ship <strong style={{ color: 'var(--tp-ink)' }}>invoice text extraction</strong> using only the Anthropic
            SDK API, persisted and reconciled against <strong style={{ color: 'var(--tp-ink)' }}>purchase orders</strong>, plus
            an <strong style={{ color: 'var(--tp-ink)' }}>RFQ copilot</strong> built with the Anthropic SDK—prompt design and
            natural-language query generation so vendors get grounded assistance.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <li style={{ paddingLeft: 16, borderLeft: '2px solid var(--tp-cyan)', color: 'var(--tp-muted)' }}>
              IRCTC-adjacent food supply chain platform — multi-tenant, high daily volume
            </li>
            <li style={{ paddingLeft: 16, borderLeft: '2px solid var(--tp-violet)', color: 'var(--tp-muted)' }}>
              Vendor platforms — invoice → PO workflows, RFQ assistance, Gen AI integration
            </li>
            <li style={{ paddingLeft: 16, borderLeft: '2px solid var(--tp-cyan)', color: 'var(--tp-muted)' }}>
              Core stack: <strong style={{ color: 'var(--tp-ink)' }}>Node.js</strong>,{' '}
              <strong style={{ color: 'var(--tp-ink)' }}>React</strong>,{' '}
              <strong style={{ color: 'var(--tp-ink)' }}>React Native</strong>, MongoDB, Redis, BullMQ, AWS
            </li>
          </ul>
        </div>

        <aside aria-label="Focus areas">
          <p className="tp-kicker" style={{ marginTop: 0, marginBottom: 12 }}>
            Focus
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {FOCUS_AREAS.map((label) => (
              <Tag key={label} color="cyan" style={{ margin: 0, padding: '4px 10px', borderRadius: 8 }}>
                {label}
              </Tag>
            ))}
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}
