import React from 'react';
import { Card } from 'antd';
import { SectionShell } from './SectionShell';

const CERTS = [
  { icon: '☁', name: 'AWS Academy Graduate — Cloud Foundations', org: 'Amazon Web Services' },
  { icon: '🔗', name: 'CCNAv7: Enterprise Networking, Security & Automation', org: 'Cisco' },
  { icon: '🤖', name: 'AI Coder: Vibe Coder to Agentic Engineer', org: 'Udemy' },
  { icon: '🏆', name: "Achiever's Award — Excellence in Knowledge Creation", org: 'Institutional Recognition' },
];

const PUBS = [
  { tag: 'Emerald', cls: 'tp-pub-tag--emerald', title: 'MSME Resilience — Published Research' },
  { tag: 'Springer', cls: 'tp-pub-tag--springer', title: 'AI & Cloud-Driven Software Development' },
  { tag: 'IEEE', cls: 'tp-pub-tag--ieee', title: 'Face Mask Detection & e-Challan Generation' },
];

export default function Certifications() {
  return (
    <SectionShell id="certs">
      <p className="tp-kicker">
        <span className="tp-kicker__num">06</span>
        Credentials
      </p>
      <h2 className="tp-title">
        Certs &amp; research <span className="tp-title__glow">signal</span>
      </h2>
      <p className="tp-intro">Formal training, networking foundations, and peer-reviewed publications alongside shipping software.</p>

      <div className="tp-cert-grid">
        {CERTS.map((c) => (
          <div key={c.name}>
            <Card className="tp-cert-card">
              <div className="tp-cert-icon">{c.icon}</div>
              <div className="tp-cert-name">{c.name}</div>
              <div className="tp-cert-org">{c.org}</div>
            </Card>
          </div>
        ))}
      </div>

      <h3 className="tp-title" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginTop: 48, marginBottom: 20 }}>
        Research publications
      </h3>
      <div className="tp-pub-row">
        {PUBS.map((p) => (
          <div key={p.title} className="tp-pub-item">
            <span className={`tp-pub-tag ${p.cls}`}>{p.tag}</span>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--tp-ink)' }}>{p.title}</div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
