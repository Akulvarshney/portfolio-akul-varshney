import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'antd';
import { SectionShell } from './SectionShell';
import { Reveal } from './Reveal';

const ease = [0.22, 1, 0.36, 1];

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
    <SectionShell id="certs" invert parallax={46}>
      <Reveal from="right" delay={0}>
        <p className="tp-kicker">
          <span className="tp-kicker__num">06</span>
          Credentials
        </p>
      </Reveal>
      <Reveal from="right" delay={0.08}>
        <h2 className="tp-title">
          Certs &amp; research <span className="tp-title__glow">signal</span>
        </h2>
      </Reveal>
      <Reveal from="right" delay={0.16}>
        <p className="tp-intro">Formal training, networking foundations, and peer-reviewed publications alongside shipping software.</p>
      </Reveal>

      <div className="tp-cert-grid">
        {CERTS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: i % 2 === 0 ? 36 : -36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some', margin: '0px' }}
            transition={{ delay: i * 0.07, duration: 0.5, ease }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <Card className="tp-cert-card">
              <div className="tp-cert-icon">{c.icon}</div>
              <div className="tp-cert-name">{c.name}</div>
              <div className="tp-cert-org">{c.org}</div>
            </Card>
          </motion.div>
        ))}
      </div>

      <Reveal from="left" delay={0}>
        <h3 className="tp-title" style={{ fontSize: 'clamp(20px, 3vw, 28px)', marginTop: 48, marginBottom: 20 }}>
          Research publications
        </h3>
      </Reveal>
      <div className="tp-pub-row">
        {PUBS.map((p, i) => (
          <motion.div
            key={p.title}
            className="tp-pub-item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 'some', margin: '0px' }}
            transition={{ delay: i * 0.1, duration: 0.5, ease }}
          >
            <span className={`tp-pub-tag ${p.cls}`}>{p.tag}</span>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--tp-ink)' }}>{p.title}</div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
