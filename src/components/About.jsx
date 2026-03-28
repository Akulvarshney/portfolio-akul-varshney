import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'antd';
import { Reveal } from './Reveal';
import { fadeUp } from '../lib/motionVariants';
import { useSectionParallax } from '../hooks/useSectionParallax';

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
  const { ref, yInner, yFloat, opacityFloat } = useSectionParallax({ invert: false, parallax: 56 });

  return (
    <section ref={ref} id="about" className="tp-section scroll-section">
      <motion.div className="scroll-section__glow" style={{ y: yFloat, opacity: opacityFloat }} aria-hidden />
      <motion.div className="tp-inner scroll-section__parallax-inner" style={{ y: yInner }}>
        <Reveal from="up" delay={0}>
          <p className="tp-kicker">
            <span className="tp-kicker__num">01</span>
            About
          </p>
        </Reveal>
        <Reveal from="up" delay={0.08}>
          <h2 className="tp-title">
            Backend engineer shipping <span className="tp-title__glow">systems that scale.</span>
          </h2>
        </Reveal>
        <Reveal from="up" delay={0.16}>
          <p className="tp-intro">
            Noida, India · 3+ years on production backends and full-stack products for enterprise and national-scale
            logistics.
          </p>
        </Reveal>

        <Reveal variants={fadeUp}>
          <motion.div
            className="tp-about__banner"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.35 }}
            style={{ transformOrigin: 'center center' }}
          >
            <img src={ABOUT_IMAGE} alt="Engineering workspace with laptop and code" width={1400} height={600} loading="lazy" />
          </motion.div>
        </Reveal>

        <div className="tp-about__grid">
          <div>
            <Reveal from="right" delay={0}>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--tp-muted)', marginBottom: 20 }}>
                I led architecture for high-volume supply chain workloads—orders, integrations, and reliability under peak
                load. I own the vertical from APIs and data modeling to queues, caching, and cloud deployment. On
                enterprise vendor portals I ship <strong style={{ color: 'var(--tp-ink)' }}>invoice text extraction</strong>{' '}
                using only the Anthropic SDK API, persisted and reconciled against{' '}
                <strong style={{ color: 'var(--tp-ink)' }}>purchase orders</strong>, plus
                an <strong style={{ color: 'var(--tp-ink)' }}>RFQ copilot</strong> built with the Anthropic SDK—prompt
                design and natural-language query generation so vendors get grounded assistance.
              </p>
            </Reveal>
            <Reveal from="right" delay={0.1}>
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
            </Reveal>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 56 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-80px', amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            aria-label="Focus areas"
          >
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
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
