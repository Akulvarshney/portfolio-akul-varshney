import React, { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll('.proj-card');
    
    const onMouseMove = (e) => {
        const card = e.currentTarget;
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-6px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg)`;
        card.style.boxShadow = `${-x * 24}px ${-y * 24}px 60px rgba(0,0,0,0.5),0 0 0 1px rgba(0,230,118,0.2)`;
    };

    const onMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = 'translateY(0) rotateY(0) rotateX(0)';
        card.style.boxShadow = 'none';
    };

    cards.forEach(card => {
        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
        cards.forEach(card => {
            card.removeEventListener('mousemove', onMouseMove);
            card.removeEventListener('mouseleave', onMouseLeave);
        });
    };
  }, []);

  return (
    <>
      <section id="projects">
        <div className="s-inner">
            <div className="s-head reveal">
                <span className="s-num">04</span>
                <span className="s-title">selected projects</span>
                <div className="s-line"></div>
            </div>
            <div className="proj-wrap">
                <div className="proj-card reveal delay-1" id="card1">
                    <img className="proj-img" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=75"
                        alt="Clinic ERP" />
                    <div className="proj-body">
                        <div className="proj-tag">SaaS · Multi-Tenant · Live in Production</div>
                        <div className="proj-name">Clinic ERP & Multi-Tenant SaaS Platform</div>
                        <div className="proj-desc">Dynamic RBAC configurable at runtime by Super-Admins without code
                            changes. Appointment orchestration with real-time conflict detection. Full financial
                            sub-system with custom PDF engine supporting thermal printers.</div>
                        <div className="proj-stack">
                            <span className="proj-chip">React</span><span className="proj-chip">Node.js</span><span
                                className="proj-chip">Prisma ORM</span><span className="proj-chip">PostgreSQL</span><span
                                className="proj-chip">JWT</span><span className="proj-chip">Recharts</span>
                        </div>
                    </div>
                </div>
                <div className="proj-card reveal delay-2" id="card2">
                    <img className="proj-img" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=75"
                        alt="Interview Platform" />
                    <div className="proj-body">
                        <div className="proj-tag">AI · Real-Time · WebSockets · Computer Vision</div>
                        <div className="proj-name">Real-Time Technical Interview Platform</div>
                        <div className="proj-desc">Live collaborative whiteboard + Monaco Editor IDE. CNN-based facial
                            emotion recognition via Flask REST API with WebSocket video streaming. Automated code
                            evaluation removing manual scoring entirely.</div>
                        <div className="proj-stack">
                            <span className="proj-chip">React</span><span className="proj-chip">Node.js</span><span
                                className="proj-chip">Flask</span><span className="proj-chip">WebSockets</span><span
                                className="proj-chip">Python CNN</span><span className="proj-chip">Monaco IDE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
