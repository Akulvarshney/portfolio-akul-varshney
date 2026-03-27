import React from 'react';
import resume from '../assets/resume.pdf';
import me from '../assets/me.PNG';

export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-content">
                <div className="hero-eyebrow">
                    <div className="hero-dot"></div>
                    <span className="hero-status">OPEN TO SDE-2 / BACKEND / FULL-STACK ROLES</span>
                </div>
                
                <h1 className="hero-name">
                    AKUL <br />
                    <span className="line2">VARSHNEY</span>
                </h1>
                
                <p className="hero-title">
                    Backend Engineer / <span>Node.js</span> / Distributed Systems
                </p>
                
                <p className="hero-desc">
                    I build reliable backend systems used in production. 
                    Most recent work includes national-scale supply chain workflows handling <strong>100K+ daily transactions</strong>.
                </p>

                <div className="hero-stats">
                    <div className="h-stat">
                        <div className="h-stat-n">3<span className="u">+</span></div>
                        <div className="h-stat-l">Years Prod</div>
                    </div>
                    <div className="h-stat">
                        <div className="h-stat-n">100<span className="u">K</span></div>
                        <div className="h-stat-l">Daily Txns</div>
                    </div>
                    <div className="h-stat">
                        <div className="h-stat-n">300<span className="u">+</span></div>
                        <div className="h-stat-l">Live Nodes</div>
                    </div>
                    <div className="h-stat">
                        <div className="h-stat-n">40<span className="u">%</span></div>
                        <div className="h-stat-l">Latency Cut</div>
                    </div>
                </div>

                <div className="hero-btns">
                    <a className="btn-primary" href="mailto:akulv.work@gmail.com">Contact Me →</a>
                    <a className="btn-ghost" href={resume} download="Akul_Varshney_Resume.pdf">Resume ↓</a>
                    <a className="btn-ghost" href="https://github.com/akulvarshney" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>

            <div className="hero-img-wrap">
                <div className="hero-img-frame">
                    <img src={me} alt="Akul Varshney" />
                    <div className="hero-img-overlay">
                        <div className="hero-img-label">current focus</div>
                        <div className="hero-img-val">Backend systems for supply chain and enterprise workflows</div>
                    </div>
                </div>
            </div>

            <div className="scroll-ind">
                <div className="scroll-txt">explore</div>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}
