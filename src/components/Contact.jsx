import React from 'react';
import { Button, Space } from 'antd';
import { MailOutlined, PhoneOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';
import { SectionShell } from './SectionShell';

export default function Contact() {
  return (
    <SectionShell
      id="contact"
      sectionClassName="tp-section tp-contact scroll-section"
      innerClassName="tp-contact__inner scroll-section__parallax-inner"
      footer={
        <footer className="tp-footer">
          <div>© 2026 Akul Varshney · B.Tech IT · Amity University · CGPA 8.03</div>
          <div>Backend · Node.js · AWS · Distributed systems · Gen AI</div>
        </footer>
      }
    >
      <p className="tp-kicker" style={{ justifyContent: 'center' }}>
        <span className="tp-kicker__num">07</span>
        Contact
      </p>
      <h2 className="tp-contact__headline">
        Let&apos;s talk <span className="tp-contact__accent">systems.</span>
      </h2>
      <p className="tp-contact__sub">
        Open to backend, full-stack, and SDE-2 roles. Production ownership, clear communication, and performance-minded
        delivery.
      </p>
      <Space className="tp-contact__links" size={14} wrap>
        <Button type="primary" size="large" icon={<MailOutlined />} href="mailto:akulv.work@gmail.com">
          Email
        </Button>
        <Button size="large" icon={<PhoneOutlined />} href="tel:+918800252885">
          Phone
        </Button>
        <Button
          size="large"
          icon={<LinkedinOutlined />}
          href="https://linkedin.com/in/akulvarshney"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
        <Button
          size="large"
          icon={<GithubOutlined />}
          href="https://github.com/akulvarshney"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      </Space>
    </SectionShell>
  );
}
