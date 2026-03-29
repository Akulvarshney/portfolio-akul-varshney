import React from 'react';
import { Card, Tag, Space } from 'antd';
import { SectionShell } from './SectionShell';

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
  return (
    <SectionShell id="skills">
      <p className="tp-kicker">
        <span className="tp-kicker__num">05</span>
        Stack
      </p>
      <h2 className="tp-title">
        Tools &amp; patterns <span className="tp-title__glow">in production</span>
      </h2>
      <p className="tp-intro">Languages, data stores, cloud, and how systems are structured — what I use day to day.</p>

      <div className="tp-skills__layout">
        <div className="tp-skills__groups">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <Card size="small" className="tp-skill-card" title={g.title}>
                <Space size={[8, 8]} wrap>
                  {g.items.map((t) => (
                    <Tag key={t} variant="filled" color="purple" style={{ margin: 0, borderRadius: 6 }}>
                      {t}
                    </Tag>
                  ))}
                </Space>
              </Card>
            </div>
          ))}
        </div>

        <div>
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
        </div>
      </div>
    </SectionShell>
  );
}
