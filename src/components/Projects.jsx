import React from 'react';
import { Card, Tag, Space } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { SectionShell } from './SectionShell';

const PROJECTS = [
  {
    id: '1',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=75',
    alt: 'Clinic ERP',
    tag: 'SaaS · Multi-Tenant · Live in Production',
    name: 'Clinic ERP & Multi-Tenant SaaS Platform',
    desc: 'Dynamic RBAC configurable at runtime by Super-Admins without code changes. Appointment orchestration with real-time conflict detection. Full financial sub-system with custom PDF engine supporting thermal printers.',
    stack: ['React', 'Node.js', 'Prisma ORM', 'PostgreSQL', 'JWT', 'Recharts'],
  },
  {
    id: 'elaria',
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=75',
    alt: 'Elaria Esthetique wellness and aesthetic care',
    tag: 'Freelance · Landing page · Live',
    name: 'Elaria Esthetique — Wellness & aesthetic care',
    desc: 'Public site for a wellness and aesthetic care center in Gurgaon. The clinic also runs on Clinic ERP for day-to-day operations.',
    stack: ['Landing page', 'Responsive layout', 'SEO'],
    liveUrl: 'https://www.elariaesthetique.in',
  },
  {
    id: 'lumivolt',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=75',
    alt: 'Solar module manufacturing',
    tag: 'Freelance · Landing page · Live',
    name: 'Lumivolt Tech Solar — Solar module manufacturing',
    desc: 'Landing page for a next-generation solar module manufacturing facility in Ghaziabad.',
    stack: ['Landing page', 'Responsive layout', 'SEO'],
    liveUrl: 'https://www.lumivolt.co.in',
  },
  {
    id: '2',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=75',
    alt: 'Interview Platform',
    tag: 'AI · Real-Time · WebSockets · Computer Vision',
    name: 'Real-Time Technical Interview Platform',
    desc: 'Live collaborative whiteboard + Monaco Editor IDE. CNN-based facial emotion recognition via Flask REST API with WebSocket video streaming. Automated code evaluation removing manual scoring entirely.',
    stack: ['React', 'Node.js', 'Flask', 'WebSockets', 'Python CNN', 'Monaco IDE'],
  },
  {
    id: '3',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=75',
    alt: 'Vendor portal and procurement',
    tag: 'Enterprise · Vendor Portal · Gen AI · Live',
    name: 'Invoice intelligence & RFQ copilot',
    desc: 'Extract and structure invoice text with the Anthropic SDK API only, persist extractions, and tie them to purchase orders for reconciliation. RFQ-side AI copilot for vendors using the Anthropic SDK—prompt engineering and natural-language → structured query generation for safer, context-aware assistance.',
    stack: ['Anthropic SDK', 'Node.js', 'MERN', 'AWS', 'Prompt design'],
  },
];

export default function Projects() {
  return (
    <SectionShell id="projects">
      <p className="tp-kicker">
        <span className="tp-kicker__num">04</span>
        Projects
      </p>
      <h2 className="tp-title">
        Selected builds <span className="tp-title__glow">that shipped</span>
      </h2>
      <p className="tp-intro">
        Multi-tenant SaaS, production freelance landing pages, real-time interview tooling, and enterprise vendor intelligence
        (invoice → PO, RFQ copilot)—backend, integrations, and Gen AI owned end to end.
      </p>

      <div className="tp-proj__grid">
        {PROJECTS.map((p) => (
          <div key={p.id}>
            <Card className="tp-proj-card" cover={<img alt={p.alt} src={p.img} />}>
              <div className="tp-proj-tag">{p.tag}</div>
              <div className="tp-proj-name">{p.name}</div>
              <p className="tp-proj-desc">{p.desc}</p>
              {p.liveUrl ? (
                <a className="tp-proj-live" href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                  <LinkOutlined aria-hidden />
                  Live site
                </a>
              ) : null}
              <Space size={[8, 8]} wrap>
                {p.stack.map((s) => (
                  <Tag key={s} color="processing" style={{ margin: 0, borderRadius: 6 }}>
                    {s}
                  </Tag>
                ))}
              </Space>
            </Card>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
