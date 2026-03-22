import React, { useState } from 'react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section id="experience">
        <div className="s-inner">
            <div className="s-head reveal">
                <span className="s-num">03</span>
                <span className="s-title">work experience</span>
                <div className="s-line"></div>
            </div>
            <div className="exp-grid reveal">
                <div className="exp-tabs">
                    <div className={`exp-tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)}>
                        <div className="exp-tab-title">IRCTC Food Supply Chain</div>
                        <div className="exp-tab-sub">Orane Consulting · RKG Group</div>
                        <span className="exp-badge-sm b-live">● Live at scale</span>
                    </div>
                    <div className={`exp-tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>
                        <div className="exp-tab-title">Fleet Management System</div>
                        <div className="exp-tab-sub">Ethiopian Electric Power</div>
                        <span className="exp-badge-sm b-scale">Enterprise</span>
                    </div>
                    <div className={`exp-tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>
                        <div className="exp-tab-title">Reverse Auction Engine</div>
                        <div className="exp-tab-sub">Enterprise Procurement</div>
                        <span className="exp-badge-sm b-rt">Real-time</span>
                    </div>
                    <div className={`exp-tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>
                        <div className="exp-tab-title">Vendor Management</div>
                        <div className="exp-tab-sub">BlackBerry · BIBA · Avaada</div>
                        <span className="exp-badge-sm b-scale">Multi-client</span>
                    </div>
                </div>
                <div id="exp-panels">
                    <div className={`exp-panel ${activeTab === 0 ? 'active' : ''}`}>
                        <div className="exp-panel-role">Lead Backend Engineer — IRCTC National Food Supply Chain</div>
                        <div className="exp-panel-co">Orane Consulting Pvt. Ltd. · RKG Group</div>
                        <div className="exp-panel-date">Mar 2023 – Present · Noida, India</div>
                        <ul className="exp-points">
                            <li>Sole architect of a <strong>greenfield multi-tenant platform</strong> with zero prior
                                blueprint — made all stack and schema decisions (Node.js, MongoDB, BullMQ, Redis, AWS
                                S3) within a 4–6 person team</li>
                            <li>Engineered <strong>fault-tolerant async processing</strong> via BullMQ + SAP ERP
                                integration — zero data loss under peak meal-rush loads, graceful degradation on
                                third-party failures</li>
                            <li>Designed <strong>Redis caching layer + event-driven schedulers</strong> eliminating
                                redundant DB hits during high-concurrency windows, significantly improving throughput
                            </li>
                            <li>Independently profiled MongoDB bottlenecks and applied advanced indexing — <strong>40%
                                    API latency reduction</strong> without escalation or schema redesign</li>
                        </ul>
                        <div className="exp-img-strip">
                            <div className="exp-img-card">
                                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=70"
                                    alt="Logistics" />
                                <div className="exp-img-card-label">Supply Chain</div>
                            </div>
                            <div className="exp-img-card">
                                <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=70"
                                    alt="Server" />
                                <div className="exp-img-card-label">Backend Infra</div>
                            </div>
                            <div className="exp-img-card">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=70"
                                    alt="Dashboard" />
                                <div className="exp-img-card-label">Dashboard</div>
                            </div>
                        </div>
                    </div>
                    <div className={`exp-panel ${activeTab === 1 ? 'active' : ''}`}>
                        <div className="exp-panel-role">Full-Stack Engineer — Corporate Fleet Management System</div>
                        <div className="exp-panel-co">Ethiopian Electric Power · Orane Consulting Pvt. Ltd.</div>
                        <div className="exp-panel-date">Mar 2023 – Present</div>
                        <ul className="exp-points">
                            <li>Architected a full internal transport platform for a <strong>500+ vehicle fleet</strong>
                                — trip booking, multi-level approvals (employee → manager → fleet manager), driver
                                assignment, and fuel management</li>
                            <li>Built <strong>real-time bus tracking</strong> using Google Maps + GCP APIs broadcasting
                                live location to passengers — reduced missed pickups and manual coordination</li>
                            <li>RBAC with JWT across 3 user roles — scoped permissions, approval authority, and
                                dedicated <strong>React Native</strong> UI flows per role</li>
                            <li>Automated vehicle allocation logic replacing error-prone manual dispatch — single
                                dashboard for fleet managers</li>
                        </ul>
                        <div className="exp-img-strip">
                            <div className="exp-img-card">
                                <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=70"
                                    alt="Fleet" />
                                <div className="exp-img-card-label">Fleet Mgmt</div>
                            </div>
                            <div className="exp-img-card">
                                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&q=70"
                                    alt="Maps" />
                                <div className="exp-img-card-label">Live Tracking</div>
                            </div>
                            <div className="exp-img-card">
                                <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=70"
                                    alt="Mobile" />
                                <div className="exp-img-card-label">React Native</div>
                            </div>
                        </div>
                    </div>
                    <div className={`exp-panel ${activeTab === 2 ? 'active' : ''}`}>
                        <div className="exp-panel-role">Backend Engineer — Real-Time Reverse Auction Engine</div>
                        <div className="exp-panel-co">Enterprise Procurement Platform · Orane Consulting Pvt. Ltd.</div>
                        <div className="exp-panel-date">Mar 2023 – Present</div>
                        <ul className="exp-points">
                            <li>Architected a <strong>WebSocket (Socket.io) Pub/Sub bidding engine</strong> —
                                low-latency bi-directional communication and automated winner determination for
                                enterprise procurement</li>
                            <li>Enforced <strong>ACID compliance</strong> via server-side validation and concurrency
                                control logic</li>
                            <li>Authored unit tests for all critical bid-state transitions and edge cases across sprint
                                delivery cycles</li>
                        </ul>
                        <div className="exp-img-strip">
                            <div className="exp-img-card">
                                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=70"
                                    alt="Auction" />
                                <div className="exp-img-card-label">Auctions</div>
                            </div>
                            <div className="exp-img-card">
                                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=70"
                                    alt="Real-time" />
                                <div className="exp-img-card-label">Real-time</div>
                            </div>
                        </div>
                    </div>
                    <div className={`exp-panel ${activeTab === 3 ? 'active' : ''}`}>
                        <div className="exp-panel-role">Full-Stack Engineer — Enterprise Vendor Management</div>
                        <div className="exp-panel-co">BlackBerry · BIBA · Avaada · Orane Consulting Pvt. Ltd.</div>
                        <div className="exp-panel-date">Mar 2023 – Present</div>
                        <ul className="exp-points">
                            <li>Built and deployed scalable MERN stack platforms using <strong>Docker microservices on
                                    AWS EC2</strong>, CloudWatch monitoring, and full CI/CD via GitHub Actions</li>
                            <li>Integrated Aadhaar eSign, eStamp, and IFSC/MCA validation — <strong>government-grade
                                    compliance stack</strong></li>
                            <li>Built <strong>Twilio WhatsApp API notification engine</strong> with webhook-driven user
                                actions + integration tests</li>
                            <li>Independently identified critical API bottleneck — offloaded computation to server-side
                                + Redis; <strong>40% latency drop</strong> with zero schema changes</li>
                        </ul>
                        <div className="exp-img-strip">
                            <div className="exp-img-card">
                                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=70"
                                    alt="Enterprise" />
                                <div className="exp-img-card-label">Enterprise</div>
                            </div>
                            <div className="exp-img-card">
                                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=70"
                                    alt="Cloud" />
                                <div className="exp-img-card-label">AWS Cloud</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
