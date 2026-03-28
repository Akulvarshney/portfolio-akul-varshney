import React from 'react';
import { Card, Tag, Space } from 'antd';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { useSectionParallax } from '../hooks/useSectionParallax';

const GROUPS = [
  {
    title: 'Core Backend',
    items: ['Node.js', 'Express.js', 'TypeScript', 'GraphQL', 'WebSockets', 'BullMQ', 'Flask'],
  },
  { title: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL', 'Prisma ORM'] },
  {
    title: 'Cloud & DevOps',
    items: ['AWS EC2', 'S3', 'Lambda', 'CloudWatch', 'Docker', 'GCP', 'GitHub Actions'],
  },
  { title: 'Frontend', items: ['React.js', 'Next.js', 'React Native', 'Redux', 'Tailwind CSS'] },
  {
    title: 'Architecture Patterns',
    items: ['Microservices', 'Event-Driven', 'Pub/Sub', 'ACID', 'RBAC', 'Message Queues'],
  },
  {
    title: 'AI & document automation',
    items: ['Anthropic SDK', 'LLM prompts', 'Query generation', 'Invoice / document extraction', 'Vendor copilots'],
  },
];

const STATS = [
  { n: '8+', l: 'languages' },
  { n: '15+', l: 'frameworks' },
  { n: '5+', l: 'databases' },
  { n: '3+', l: 'cloud platforms' },
];

export default function Skills() {
  const { ref, yInner, yFloat, opacityFloat } = useSectionParallax({ invert: false, parallax: 50 });

  return (
    <section ref={ref} id="skills" className="tp-section scroll-section">
      <motion.div className="scroll-section__glow" style={{ y: yFloat, opacity: opacityFloat }} aria-hidden />
      <motion.div className="tp-inner scroll-section__parallax-inner" style={{ y: yInner }}>
        <Reveal from="up" delay={0}>
          <p className="tp-kicker">
            <span className="tp-kicker__num">05</span>
            Stack
          </p>
        </Reveal>
        <Reveal from="up" delay={0.08}>
          <h2 className="tp-title">
            Tools &amp; patterns <span className="tp-title__glow">in production</span>
          </h2>
        </Reveal>
        <Reveal from="up" delay={0.16}>
          <p className="tp-intro">
            Languages, data stores, cloud, and how systems are structured — what I use day to day.
          </p>
        </Reveal>

        <div className="tp-skills__layout">
          <div className="tp-skills__groups">
            {GROUPS.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -48 : 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: '-50px', amount: 0.15 }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card size="small" className="tp-skill-card" title={g.title}>
                  <Space size={[8, 8]} wrap>
                    {g.items.map((t) => (
                      <Tag key={t} variant="filled" color="purple" style={{ margin: 0, borderRadius: 6 }}>
                        {t}
                      </Tag>
                    ))}
                  </Space>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 72 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-80px', amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="tp-skills__visual">
              <img
                src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80"
                alt="Tech stack visualization"
                loading="lazy"
              />
            </div>
            <div className="tp-skills__stats">
              {STATS.map((s) => (
                <div key={s.l} className="tp-skills__stat">
                  <div className="tp-skills__stat-n">{s.n}</div>
                  <div className="tp-skills__stat-l">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
