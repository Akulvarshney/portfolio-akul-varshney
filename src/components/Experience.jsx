import React, { useState } from 'react';

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      role: "Lead Backend Engineer — National Food Supply Chain",
      company: "Orane Consulting Pvt. Ltd. · RKG Group",
      date: "Mar 2023 – Jan 2026 · Noida, India",
      points: [
        "Led backend architecture for a <strong>multi-tenant platform</strong> using Node.js, MongoDB, Redis, BullMQ, and AWS S3",
        "Built async SAP ERP integrations with resilient queue workflows to keep operations stable during peak traffic",
        "Improved API performance with query/index tuning and Redis caching, achieving a <strong>40% latency reduction</strong>"
      ],
      images: [
        { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=70", label: "Supply Chain" },
        { url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=70", label: "Backend Infra" },
        { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=70", label: "Dashboard" }
      ]
    },
    {
      role: "Full-Stack Engineer — Corporate Fleet Management System",
      company: "Ethiopian Electric Power · Orane Consulting Pvt. Ltd.",
      date: "Feb 2024 – Mar 2025",
      points: [
        "Built an internal transport platform for a <strong>500+ vehicle fleet</strong> covering booking, approvals, dispatch, and fuel tracking",
        "Implemented real-time vehicle tracking with Google Maps and GCP APIs to improve pickup reliability",
        "Added role-based access (JWT) and automated allocation workflows to reduce manual dispatch effort"
      ],
      images: [
        { url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=70", label: "Fleet Mgmt" },
        { url: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=70", label: "Live Tracking" },
        { url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=70", label: "React Native" }
      ]
    },
    {
      role: "Backend Engineer — Real-Time Reverse Auction Engine",
      company: "Enterprise Procurement Platform · Orane Consulting Pvt. Ltd.",
      date: "Nov 2025 – Jan 2026",
      points: [
        "Developed a low-latency <strong>WebSocket (Socket.io) bidding engine</strong> with automated winner selection",
        "Implemented server-side validation and concurrency controls for reliable transaction handling",
        "Wrote unit tests for critical bid-state transitions and edge cases"
      ],
      images: [
        { url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=70", label: "Auctions" },
        { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=70", label: "Real-time" }
      ]
    },
    {
      role: "Full-Stack Engineer — Enterprise Vendor Management",
      company: "BlackBerry · BIBA · Avaada · Orane Consulting Pvt. Ltd.",
      date: "Mar 2023 – Present",
      points: [
        "Delivered MERN applications with Docker on AWS EC2, monitoring via CloudWatch, and CI/CD through GitHub Actions",
        "Integrated compliance services (Aadhaar eSign, eStamp, IFSC/MCA checks) and WhatsApp notifications via Twilio",
        "Built invoice extraction/PO matching workflows and improved API response times by <strong>40%</strong>"
      ],
      images: [
        { url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=70", label: "Enterprise" },
        { url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=70", label: "AWS Cloud" }
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="s-inner">
        <div className="s-head reveal">
          <span className="s-num">03</span>
          <span className="s-title">work experience</span>
          <div className="s-line"></div>
        </div>

        <div className="timeline-wrap">
          {experiences.map((exp, idx) => (
            <article
              key={idx}
              className={`timeline-item reveal visible ${activeIndex === idx ? 'is-active' : ''}`}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {idx < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="timeline-content">
                <div className="exp-card">
                  <button
                    type="button"
                    className="exp-card-toggle"
                    onClick={() => setActiveIndex((prev) => (prev === idx ? -1 : idx))}
                    aria-expanded={activeIndex === idx}
                    aria-controls={`experience-panel-${idx}`}
                  >
                    <div className="exp-card-header">
                      <h3 className="exp-card-role">{exp.role}</h3>
                      <div className="exp-card-co">{exp.company}</div>
                      <div className="exp-card-date">{exp.date}</div>
                    </div>
                    <span className="exp-card-toggle-icon" aria-hidden="true">+</span>
                  </button>

                  <div
                    id={`experience-panel-${idx}`}
                    className={`exp-card-body ${activeIndex === idx ? 'expanded' : ''}`}
                  >
                    <div className="exp-card-body-inner">
                      <ul className="exp-points">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} dangerouslySetInnerHTML={{ __html: pt }}></li>
                        ))}
                      </ul>

                      <div className="exp-img-strip">
                        {exp.images.map((img, iIdx) => (
                          <div key={iIdx} className="exp-img-card">
                            <img src={img.url} alt={img.label} className="parallax-img" />
                            <div className="exp-img-card-label">{img.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
