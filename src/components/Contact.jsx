import React from 'react';
import { motion } from 'framer-motion';
import {
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
  GithubOutlined,
  ArrowRightOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { SectionShell } from './SectionShell';
import { Reveal } from './Reveal';

const ease = [0.22, 1, 0.36, 1];

const CHANNELS = [
  {
    key: 'email',
    href: 'mailto:akulv.work@gmail.com',
    Icon: MailOutlined,
    title: 'Email',
    detail: 'akulv.work@gmail.com',
    external: false,
    primary: true,
  },
  {
    key: 'phone',
    href: 'tel:+918800252885',
    Icon: PhoneOutlined,
    title: 'Phone',
    detail: '+91 88002 52885',
    external: false,
    primary: false,
  },
  {
    key: 'linkedin',
    href: 'https://linkedin.com/in/akulvarshney',
    Icon: LinkedinOutlined,
    title: 'LinkedIn',
    detail: '/in/akulvarshney',
    external: true,
    primary: false,
  },
  {
    key: 'github',
    href: 'https://github.com/akulvarshney',
    Icon: GithubOutlined,
    title: 'GitHub',
    detail: '@akulvarshney',
    external: true,
    primary: false,
  },
];

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
};

export default function Contact() {
  return (
    <SectionShell
      id="contact"
      sectionClassName="tp-section tp-contact scroll-section"
      innerClassName="tp-contact__inner scroll-section__parallax-inner"
      invert={false}
      parallax={40}
      footer={
        <footer className="tp-footer">
          <div>© 2026 Akul Varshney · B.Tech IT · Amity University · CGPA 8.03</div>
          <div>Backend · Node.js · AWS · Distributed systems · Gen AI</div>
        </footer>
      }
    >
      <div className="tp-inner tp-contact__layout">
        <div className="tp-contact__intro">
          <Reveal from="up" delay={0}>
            <p className="tp-kicker tp-contact__kicker">
              <span className="tp-kicker__num">07</span>
              Contact
            </p>
          </Reveal>

          <Reveal from="up" delay={0.08}>
            <h2 className="tp-contact__headline">
              Let&apos;s build{' '}
              <span className="tp-contact__headline-gradient">reliable systems</span>
              <span className="tp-contact__headline-dot">.</span>
            </h2>
          </Reveal>

          <Reveal from="up" delay={0.14}>
            <p className="tp-contact__lead">
              Open to <strong>SDE-2</strong>, backend, and full-stack roles — plus selective freelance when there&apos;s a clear
              production scope. I care about ownership, communication, and shipping measurable outcomes.
            </p>
          </Reveal>

          <Reveal from="up" delay={0.2}>
            <ul className="tp-contact__badges" aria-label="Availability and location">
              <li>
                <ClockCircleOutlined aria-hidden />
                Typically responds within 24–48h
              </li>
              <li>
                <EnvironmentOutlined aria-hidden />
                Noida · India · Remote-friendly
              </li>
            </ul>
          </Reveal>
        </div>

        <motion.div
          className="tp-contact__panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some', margin: '0px' }}
          transition={{ duration: 0.55, ease, delay: 0.05 }}
        >
          <div className="tp-contact__panel-header">
            <span className="tp-contact__panel-eyebrow">Direct lines</span>
            <p className="tp-contact__panel-title">Pick a channel</p>
          </div>

          <motion.ul className="tp-contact__channels" variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {CHANNELS.map((c) => (
              <motion.li key={c.key} variants={rowVariants}>
                <a
                  href={c.href}
                  className={`tp-contact__channel${c.primary ? ' tp-contact__channel--primary' : ''}`}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="tp-contact__channel-icon" aria-hidden>
                    <c.Icon />
                  </span>
                  <span className="tp-contact__channel-text">
                    <span className="tp-contact__channel-title">{c.title}</span>
                    <span className="tp-contact__channel-detail">{c.detail}</span>
                  </span>
                  <ArrowRightOutlined className="tp-contact__channel-arrow" aria-hidden />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </SectionShell>
  );
}
