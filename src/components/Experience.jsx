import React from 'react';
import { Carousel } from 'antd';
import { SectionShell } from './SectionShell';
import { useTheme } from '../hooks/useTheme';

const EXPERIENCES = [
  {
    role: 'Lead Backend Engineer — National Food Supply Chain',
    company: 'Orane Consulting Pvt. Ltd. · RKG Group',
    date: 'Mar 2023 – Jan 2026 · Noida, India',
    points: [
      'Led backend architecture for a <strong>multi-tenant platform</strong> using Node.js, MongoDB, Redis, BullMQ, and AWS S3',
      'Built async SAP ERP integrations with resilient queue workflows to keep operations stable during peak traffic',
      'Improved API performance with query/index tuning and Redis caching, achieving a <strong>40% latency reduction</strong>',
      'Platform live at national scale—in production for <strong>300+ trains</strong> as of now',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=70', label: 'Supply chain' },
      { url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=70', label: 'Backend' },
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=70', label: 'Dashboard' },
    ],
  },
  {
    role: 'Full-Stack Engineer — Corporate Fleet Management System',
    company: 'Ethiopian Electric Power · Orane Consulting Pvt. Ltd.',
    date: 'Feb 2024 – Mar 2025',
    points: [
      'Built an internal transport platform for a <strong>500+ vehicle fleet</strong> with a <strong>React Native</strong> mobile app and web clients—booking, approvals, dispatch, and fuel tracking on shared APIs',
      'Implemented real-time vehicle tracking with Google Maps and GCP APIs to improve pickup reliability',
      'Added role-based access (JWT) and automated allocation workflows to reduce manual dispatch effort',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=70', label: 'Fleet' },
      { url: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=70', label: 'Tracking' },
      { url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=70', label: 'React Native' },
    ],
  },
  {
    role: 'Backend Engineer — Real-Time Reverse Auction Engine',
    company: 'Enterprise Procurement Platform · Orane Consulting Pvt. Ltd.',
    date: 'Nov 2025 – Jan 2026',
    points: [
      'Developed a low-latency <strong>WebSocket (Socket.io) bidding engine</strong> with automated winner selection',
      'Implemented server-side validation and concurrency controls for reliable transaction handling',
      'Wrote unit tests for critical bid-state transitions and edge cases',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=70', label: 'Auctions' },
      { url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=70', label: 'Real-time' },
    ],
  },
  {
    role: 'Full-Stack Engineer — Enterprise Vendor Management',
    company: 'BlackBerry · BIBA · Avaada · Orane Consulting Pvt. Ltd.',
    date: 'Mar 2023 – Present',
    points: [
      'Delivered MERN applications with Docker on AWS EC2, monitoring via CloudWatch, and CI/CD through GitHub Actions',
      'Integrated compliance services (Aadhaar eSign, eStamp, IFSC/MCA checks) and WhatsApp notifications via Twilio',
      'Implemented <strong>invoice text extraction</strong> using only the <strong>Anthropic SDK API</strong>, normalized structured fields, and <strong>persisted matches against purchase orders</strong> for downstream finance and audit',
      'Shipped an <strong>RFQ copilot</strong> for the vendor portal using the <strong>Anthropic SDK</strong>—system prompts, tool-style query generation, and guardrails so answers stay grounded in RFQ and catalog context',
      'Improved API response times by <strong>40%</strong> through profiling, caching, and query tuning',
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=70', label: 'Enterprise' },
      { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=70', label: 'AWS' },
    ],
  },
];

function ExpSlide({ img }) {
  return (
    <div className="tp-exp-slide">
      <img src={img.url} alt="" loading="lazy" width={400} height={300} />
      <div className="tp-exp-slide-cap">{img.label}</div>
    </div>
  );
}

/** Stacked images — no carousel on small screens / touch. */
function ExpImagesStack({ images, label }) {
  if (!images?.length) return null;
  return (
    <div
      className="tp-exp-images-stack"
      aria-label={label ? `Images: ${label}` : 'Role images'}
    >
      {images.map((img) => (
        <ExpSlide key={img.url} img={img} />
      ))}
    </div>
  );
}

function ExpCarousel({ images, label }) {
  if (!images?.length) return null;
  return (
    <Carousel
      className="tp-exp-carousel"
      autoplay={false}
      dots={images.length > 1}
      arrows={images.length > 1}
      aria-label={label ? `Images: ${label}` : 'Role images'}
    >
      {images.map((img) => (
        <div key={img.url}>
          <ExpSlide img={img} />
        </div>
      ))}
    </Carousel>
  );
}

function ExpRoleImages({ images, label }) {
  const { mobileLite } = useTheme();
  if (mobileLite) {
    return <ExpImagesStack images={images} label={label} />;
  }
  return <ExpCarousel images={images} label={label} />;
}

export default function Experience() {
  return (
    <SectionShell id="experience">
      <p className="tp-kicker">
        <span className="tp-kicker__num">03</span>
        Work
      </p>
      <h2 className="tp-title">
        Experience <span className="tp-title__glow">chronicle</span>
      </h2>
      <p className="tp-intro">
        Supply chain, fleet, procurement, enterprise vendor platforms, and Gen AI–assisted workflows — full bullets, no
        accordions.
      </p>

      <div className="tp-exp__list">
        {EXPERIENCES.map((exp, idx) => (
          <article key={exp.role} className="tp-exp__article">
            <div>
              <span className="tp-exp__idx" aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p className="tp-exp__date">{exp.date}</p>
            </div>

            <div>
              <h3 className="tp-exp__role">{exp.role}</h3>
              <p className="tp-exp__company">{exp.company}</p>
              <ul className="tp-exp__points">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} dangerouslySetInnerHTML={{ __html: pt }} />
                ))}
              </ul>
            </div>

            <ExpRoleImages images={exp.images} label={exp.role} />
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
