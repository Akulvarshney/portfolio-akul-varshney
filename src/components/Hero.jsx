import React from 'react';

export default function Hero() {
  return (
    <>
      <section id="hero">
        <div className="hero-content">
            <div className="hero-eyebrow">
                <div className="hero-dot"></div>
                <span className="hero-status">Available for SDE-2 · Backend · Full-Stack roles</span>
            </div>
            <h1 className="hero-name">
                AKUL<br />
                <span className="line2">VARSHNEY</span>
            </h1>
            <p className="hero-title">Backend Engineer  /  <span>Distributed Systems</span>  /  Node.js
                 /  AWS</p>
            <p className="hero-desc">
                Sole architect of IRCTC's national food supply chain — a distributed, multi-tenant system deployed
                across 300+ trains handling 100K+ daily transactions. I design systems that scale, fail gracefully, and
                ship fast.
            </p>
            <div className="hero-stats">
                <div className="h-stat">
                    <div className="h-stat-n">3<span className="u">+</span></div>
                    <div className="h-stat-l">years prod</div>
                </div>
                <div className="h-stat">
                    <div className="h-stat-n">100<span className="u">K</span></div>
                    <div className="h-stat-l">daily txns</div>
                </div>
                <div className="h-stat">
                    <div className="h-stat-n">300<span className="u">+</span></div>
                    <div className="h-stat-l">trains live</div>
                </div>
                <div className="h-stat">
                    <div className="h-stat-n">40<span className="u">%</span></div>
                    <div className="h-stat-l">latency cut</div>
                </div>
            </div>
            <div className="hero-btns">
                <a className="btn-primary" href="mailto:akulv.work@gmail.com">Get In Touch →</a>
                <a className="btn-ghost" href="https://github.com/akulvarshney" target="_blank">github.com/akulvarshney
                    ↗</a>
            </div>
        </div>

        {/* Hero floating image */}
        <div className="hero-img-wrap">
            <div className="hero-img-frame">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80" alt="Code" />
                <div className="hero-img-overlay">
                    <div className="hero-img-label">// currently working on</div>
                    <div className="hero-img-val">IRCTC Food Supply Chain v2.0</div>
                </div>
            </div>
        </div>

        <div className="scroll-ind">
            <div className="scroll-txt">scroll</div>
            <div className="scroll-line"></div>
        </div>
    </section>
    </>
  );
}
