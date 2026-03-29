import React from 'react';
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

export default function Hero() {
  return (
    <section id="hero" className="tp-hero">
      <div className="tp-inner">
        <div className="tp-hero__grid">
          <div>
            <p className="tp-hero__kicker">Open to SDE-2 · backend · full-stack · freelance</p>
            <h1 className="tp-hero__headline">
              Hi, I&apos;m <span className="tp-hero__name">Akul</span>. A full-stack engineer building production systems at
              scale.
            </h1>
            <p className="tp-hero__tags">Node.js · APIs · AWS · Gen AI · React Native · React.js</p>
            <Space size={14} wrap>
              <Button type="primary" size="large" icon={<DownloadOutlined />} href={resume} download="Akul_Varshney_Resume.pdf">
                View resume
              </Button>
              <Button size="large" icon={<MailOutlined />} href="mailto:akulv.work@gmail.com">
                Let&apos;s talk
              </Button>
            </Space>
          </div>

          <div className="tp-hero__visual">
            <div className="tp-hero__photo-motion">
              <div className="tp-hero__photo-wrap">
                <img src={me} alt="Akul Varshney" width={560} height={700} />
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </section>
  );
}
