import React from 'react';
import { motion } from 'framer-motion';
import { SectionShell } from './SectionShell';
import { Reveal } from './Reveal';

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

const ease = [0.22, 1, 0.36, 1];

export default function Impact() {
  return (
    <SectionShell id="impact" invert parallax={60}>
      <Reveal from="down" delay={0}>
        <p className="tp-kicker">
          <span className="tp-kicker__num">02</span>
          Impact
        </p>
      </Reveal>
      <Reveal from="down" delay={0.08}>
        <h2 className="tp-title">
          Measurable outcomes <span className="tp-title__glow">from real systems.</span>
        </h2>
      </Reveal>
      <Reveal from="down" delay={0.16}>
        <p className="tp-intro">
          Production reliability, latency wins, national food supply on trains and fleet scale, Gen AI on vendor and procurement
          flows, and research — summarized for recruiters scanning fast.
        </p>
      </Reveal>

      <div className="tp-impact__grid">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.key}
            className="tp-impact__cell"
            initial={{ opacity: 0, y: i % 2 === 0 ? 40 : -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some', margin: '0px 0px -8% 0px' }}
            transition={{ delay: i * 0.08, duration: 0.55, ease }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="tp-impact__n">
              {m.display != null ? m.display : (
                <>
                  {m.target}
                  {m.suffix}
                </>
              )}
            </div>
            <div className="tp-impact__l">{m.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="tp-impact__gallery">
        {GALLERY.map((item, i) => (
          <motion.div
            key={item.src}
            className="tp-impact__shot"
            initial={{ opacity: 0, y: i % 2 === 0 ? -28 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some', margin: '0px' }}
            transition={{ delay: i * 0.12, duration: 0.52, ease }}
            whileHover={{ y: -6, transition: { duration: 0.22 } }}
          >
            <img src={item.src} alt={item.alt} loading="lazy" width={600} height={200} />
            <span>{item.label}</span>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
