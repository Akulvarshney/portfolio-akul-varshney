import React from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { Button, Space } from 'antd';
import { DownloadOutlined, MailOutlined } from '@ant-design/icons';
import { useTheme } from '../hooks/useTheme';
import resume from '../assets/resume.pdf';
import me from '../assets/me.PNG';

const MARQUEE_ITEMS = [
  'BACKEND',
  'NODE.JS',
  'GEN AI',
  'ANTHROPIC',
  'DISTRIBUTED SYSTEMS',
  'AWS',
  'API DESIGN',
  'SUPPLY CHAIN',
  'PROCUREMENT',
  'FULL-STACK',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

function makeItem(instant) {
  return {
    hidden: { opacity: instant ? 1 : 0, y: instant ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: instant ? 0 : 0.52, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

function HeroCopy({ instant = false }) {
  const item = makeItem(instant);
  const containerVariants = instant
    ? {
        hidden: { opacity: 1 },
        show: { opacity: 1, transition: { staggerChildren: 0, delayChildren: 0 } },
      }
    : container;

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show">
      <motion.p className="tp-hero__kicker" variants={item}>
        Open to SDE-2 · backend · full-stack · freelance
      </motion.p>
      <motion.h1 className="tp-hero__headline" variants={item}>
        Hi, I&apos;m <span className="tp-hero__name">Akul</span>. A full-stack engineer building production systems at scale.
      </motion.h1>
      <motion.p className="tp-hero__tags" variants={item}>
        Node.js · APIs · AWS · Gen AI · React Native · React.js
      </motion.p>
      <motion.div variants={item}>
        <Space size={14} wrap>
          <Button type="primary" size="large" icon={<DownloadOutlined />} href={resume} download="Akul_Varshney_Resume.pdf">
            View resume
          </Button>
          <Button size="large" icon={<MailOutlined />} href="mailto:akulv.work@gmail.com">
            Let&apos;s talk
          </Button>
        </Space>
      </motion.div>
    </motion.div>
  );
}

function HeroLite({ reduceMotion }) {
  return (
    <section id="hero" className="tp-hero">
      <div className="tp-inner">
        <div className="tp-hero__grid">
          <div>
            <HeroCopy instant={reduceMotion} />
          </div>
          <motion.div
            className="tp-hero__visual"
            initial={{ opacity: 0, x: reduceMotion ? 0 : 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.65, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.15 }}
          >
            <div className="tp-hero__photo-motion">
              <div className="tp-hero__photo-wrap">
                <img src={me} alt="Akul Varshney" width={560} height={700} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <HeroMarquee />
    </section>
  );
}

function HeroMarquee() {
  return (
    <div className="tp-hero__marquee" aria-hidden="true">
      <div className="tp-hero__marquee-track">
        {[0, 1].map((copy) => (
          <React.Fragment key={copy}>
            {MARQUEE_ITEMS.map((label) => (
              <span key={`${copy}-${label}`} className="tp-hero__marquee-item">
                <strong>{label}</strong>
              </span>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function HeroParallax() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const yCopy = useTransform(scrollY, [0, 420], [0, reduceMotion ? 0 : 85]);
  const yPhoto = useTransform(scrollY, [0, 420], [0, reduceMotion ? 0 : -55]);
  const yMarquee = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : -100]);
  const opCopy = useTransform(scrollY, [0, 320], [1, reduceMotion ? 1 : 0.82]);
  const scalePhoto = useTransform(scrollY, [0, 450], [1, reduceMotion ? 1 : 0.94]);
  const rotatePhoto = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : -2.5]);

  const scaleSpring = useSpring(scalePhoto, reduceMotion ? { stiffness: 400, damping: 40 } : { stiffness: 120, damping: 28 });
  const rotateSpring = useSpring(rotatePhoto, reduceMotion ? { stiffness: 400, damping: 40 } : { stiffness: 100, damping: 30 });

  return (
    <section id="hero" className="tp-hero">
      <div className="tp-inner">
        <div className="tp-hero__grid">
          <motion.div style={{ y: yCopy, opacity: opCopy }}>
            <HeroCopy />
          </motion.div>

          <motion.div
            className="tp-hero__visual"
            style={{ y: yPhoto }}
            initial={{ opacity: 0, x: reduceMotion ? 0 : 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.65, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.15 }}
          >
            <motion.div className="tp-hero__photo-motion" style={{ scale: scaleSpring, rotate: rotateSpring }}>
              <div className="tp-hero__photo-wrap">
                <img src={me} alt="Akul Varshney" width={560} height={700} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div className="tp-hero__marquee" style={{ y: yMarquee }} aria-hidden="true">
        <div className="tp-hero__marquee-track">
          {[0, 1].map((copy) => (
            <React.Fragment key={copy}>
              {MARQUEE_ITEMS.map((label) => (
                <span key={`${copy}-${label}`} className="tp-hero__marquee-item">
                  <strong>{label}</strong>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { mobileLite } = useTheme();

  if (mobileLite || reduceMotion) {
    return <HeroLite reduceMotion={Boolean(reduceMotion)} />;
  }

  return <HeroParallax />;
}
