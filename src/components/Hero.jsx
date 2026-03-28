import React from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { Button, Space } from 'antd';
import { DownloadOutlined, MailOutlined } from '@ant-design/icons';
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
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const yCopy = useTransform(scrollY, [0, 420], [0, reduceMotion ? 0 : 85]);
  const yPhoto = useTransform(scrollY, [0, 420], [0, reduceMotion ? 0 : -55]);
  const yMarquee = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : -100]);
  const opCopy = useTransform(scrollY, [0, 320], [1, reduceMotion ? 1 : 0.82]);
  const scalePhoto = useTransform(scrollY, [0, 450], [1, reduceMotion ? 1 : 0.94]);
  const rotatePhoto = useTransform(scrollY, [0, 500], [0, reduceMotion ? 0 : -2.5]);

  const scalePhotoSpring = useSpring(scalePhoto, { stiffness: 120, damping: 28 });
  const rotatePhotoSpring = useSpring(rotatePhoto, { stiffness: 100, damping: 30 });

  return (
    <section id="hero" className="tp-hero">
      <div className="tp-inner">
        <div className="tp-hero__grid">
          <motion.div style={{ y: yCopy, opacity: opCopy }}>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25, margin: '0px 0px -20% 0px' }}
            >
              <motion.p className="tp-hero__kicker" variants={item}>
                Open to SDE-2 · backend · full-stack · freelance
              </motion.p>
              <motion.h1 className="tp-hero__headline" variants={item}>
                Hi, I&apos;m <span className="tp-hero__name">Akul</span>. A full-stack engineer building production
                systems at scale.
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
          </motion.div>

          <motion.div
            className="tp-hero__visual"
            style={{ y: yPhoto }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.div
              style={{ scale: scalePhotoSpring, rotate: rotatePhotoSpring }}
              className="tp-hero__photo-motion"
            >
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
