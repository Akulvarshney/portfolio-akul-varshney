import React from 'react';

export default function About() {
    return (
        <>
            <section id="about">
                <div className="s-inner">
                    <div className="s-head reveal">
                        <span className="s-num">01</span>
                        <span className="s-title">about me</span>
                        <div className="s-line"></div>
                    </div>
                    <div className="about-grid">
                        <div className="about-img-col reveal-l">
                            <div className="about-img-main">
                                <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80"
                                    alt="Backend engineering" />
                                <div className="about-img-tag">// Node.js · MongoDB · Redis · AWS</div>
                            </div>
                            <div className="about-badge">
                                <div className="about-badge-n">8.03</div>
                                <div className="about-badge-l">CGPA</div>
                            </div>
                        </div>
                        <div className="about-text reveal-r">
                            <div className="s-big" style={{ marginBottom: '32px' }}>Engineering systems<br />that <em>actually scale.</em>
                            </div>
                            <p>I'm a <strong>backend-first full-stack engineer</strong> based in Noida, India. For the past 3+
                                years I've been independently designing, building, and shipping production-grade distributed
                                systems — not prototypes, real systems handling real load.</p>
                            <p>My biggest undertaking: being the <strong>sole architect of RK Group (IRCTC Vendor)'s national food supply chain
                                platform</strong> — a greenfield, multi-tenant system covering order management, vendor
                                coordination, and logistics across 300+ trains and 100K+ daily transactions. Zero prior
                                blueprint. All key decisions mine.</p>
                            <p>I'm comfortable owning the full vertical: system design → database optimization → cloud
                                deployment → team onboarding. I don't just write code, I think in <strong>systems</strong>.</p>
                            <div className="spec-row">
                                <span className="spec-tag">Distributed Systems</span>
                                <span className="spec-tag">Event-Driven Architecture</span>
                                <span className="spec-tag">API Performance</span>
                                <span className="spec-tag">Multi-Tenant SaaS</span>
                                <span className="spec-tag">Real-Time Systems</span>
                                <span className="spec-tag">Database Optimization</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
