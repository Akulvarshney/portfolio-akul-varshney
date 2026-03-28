import React from 'react';
import { Card } from 'antd';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { useSectionParallax } from '../hooks/useSectionParallax';

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
  const { ref, yInner, yFloat, opacityFloat } = useSectionParallax({ invert: true, parallax: 46 });

  return (
    <section ref={ref} id="certs" className="tp-section scroll-section">
      <motion.div className="scroll-section__glow" style={{ y: yFloat, opacity: opacityFloat }} aria-hidden />
      <motion.div className="tp-inner scroll-section__parallax-inner" style={{ y: yInner }}>
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
          <p className="tp-intro">
            Formal training, networking foundations, and peer-reviewed publications alongside shipping software.
          </p>
        </Reveal>

        <div className="tp-cert-grid">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: i % 2 === 0 ? 48 : -48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-55px', amount: 0.15 }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
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
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className={`tp-pub-tag ${p.cls}`}>{p.tag}</span>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--tp-ink)' }}>{p.title}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
