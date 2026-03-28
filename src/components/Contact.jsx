import React from 'react';
import { Button, Space } from 'antd';
import { MailOutlined, PhoneOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { useSectionParallax } from '../hooks/useSectionParallax';

export default function Contact() {
  const { ref, yInner, yFloat, opacityFloat } = useSectionParallax({ invert: false, parallax: 40 });

  return (
    <section ref={ref} id="contact" className="tp-section tp-contact scroll-section">
      <motion.div className="scroll-section__glow" style={{ y: yFloat, opacity: opacityFloat }} aria-hidden />
      <motion.div className="tp-contact__inner scroll-section__parallax-inner" style={{ y: yInner }}>
        <Reveal from="down" delay={0}>
          <p className="tp-kicker" style={{ justifyContent: 'center' }}>
            <span className="tp-kicker__num">07</span>
            Contact
          </p>
        </Reveal>
        <Reveal from="down" delay={0.09}>
          <h2 className="tp-contact__headline">
            Let&apos;s talk <span className="tp-contact__accent">systems.</span>
          </h2>
        </Reveal>
        <Reveal from="down" delay={0.18}>
          <p className="tp-contact__sub">
            Open to backend, full-stack, and SDE-2 roles. Production ownership, clear communication, and
            performance-minded delivery.
          </p>
        </Reveal>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-60px', amount: 0.2 }}
          transition={{ duration: 0.58, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <Space className="tp-contact__links" size={14} wrap>
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <Button type="primary" size="large" icon={<MailOutlined />} href="mailto:akulv.work@gmail.com">
                Email
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <Button size="large" icon={<PhoneOutlined />} href="tel:+918800252885">
                Phone
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="large"
                icon={<LinkedinOutlined />}
                href="https://linkedin.com/in/akulvarshney"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="large"
                icon={<GithubOutlined />}
                href="https://github.com/akulvarshney"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            </motion.div>
          </Space>
        </motion.div>
      </motion.div>

      <footer className="tp-footer">
        <div>© 2026 Akul Varshney · B.Tech IT · Amity University · CGPA 8.03</div>
        <div>Backend · Node.js · AWS · Distributed systems · Gen AI</div>
      </footer>
    </section>
  );
}
