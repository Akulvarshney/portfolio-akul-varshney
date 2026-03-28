import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Reveal } from './Reveal';
import { useSectionParallax } from '../hooks/useSectionParallax';

const METRICS = [
  // { key: 'loss', suffix: '↓', target: null, label: 'Data loss incidents under peak meal-rush', display: '0↓' },
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

function CountUp({ target, suffix, active }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active || target == null) return;
    let start = null;
    const dur = 1400;
    let frame;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const ease = 1 - (1 - p) ** 3;
      setVal(Math.floor(target * ease));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return (
    <div className="tp-impact__n">
      {val}
      {suffix}
    </div>
  );
}

export default function Impact() {
  const { ref, yInner, yFloat, opacityFloat } = useSectionParallax({ invert: true, parallax: 60 });
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: false, margin: '-80px', amount: 0.3 });

  return (
    <section ref={ref} id="impact" className="tp-section scroll-section">
      <motion.div className="scroll-section__glow" style={{ y: yFloat, opacity: opacityFloat }} aria-hidden />
      <motion.div className="tp-inner scroll-section__parallax-inner" style={{ y: yInner }}>
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
            Production reliability, latency wins, national food supply on trains and fleet scale, Gen AI on vendor and
            procurement flows, and research — summarized for recruiters scanning fast.
          </p>
        </Reveal>

        <div ref={gridRef} className="tp-impact__grid">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.key}
              className="tp-impact__cell"
              initial={{ opacity: 0, y: i % 2 === 0 ? 56 : -56 }}
              animate={
                inView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: i % 2 === 0 ? 56 : -56 }
              }
              transition={{ delay: i * 0.1, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
            >
              {m.display != null ? (
                <div className="tp-impact__n">{m.display}</div>
              ) : (
                <CountUp
                  key={`${m.key}-${inView ? 'v' : 'h'}`}
                  target={m.target}
                  suffix={m.suffix}
                  active={inView}
                />
              )}
              <div className="tp-impact__l">{m.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="tp-impact__gallery">
          {GALLERY.map((item, i) => (
            <motion.div
              key={item.src}
              className="tp-impact__shot"
              initial={{ opacity: 0, y: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-60px', amount: 0.2 }}
              transition={{ delay: i * 0.14, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.28 } }}
            >
              <img src={item.src} alt={item.alt} loading="lazy" width={600} height={200} />
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
