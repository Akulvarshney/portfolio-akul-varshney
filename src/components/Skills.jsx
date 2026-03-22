import React from 'react';

export default function Skills() {
    return (
        <>
            <section id="skills">
                <div className="s-inner">
                    <div className="s-head reveal">
                        <span className="s-num">05</span>
                        <span className="s-title">technical stack</span>
                        <div className="s-line"></div>
                    </div>
                    <div className="skills-scene">
                        <div className="skill-blocks">
                            <div className="skill-group reveal delay-1">
                                <div className="skill-g-name">Core Backend</div>
                                <div className="skill-chips"><span className="s-chip">Node.js</span><span
                                    className="s-chip">Express.js</span><span className="s-chip">TypeScript</span><span
                                        className="s-chip">GraphQL</span><span className="s-chip">WebSockets</span><span
                                            className="s-chip">BullMQ</span><span className="s-chip">Flask</span></div>
                            </div>
                            <div className="skill-group reveal delay-2">
                                <div className="skill-g-name">Databases</div>
                                <div className="skill-chips"><span className="s-chip">MongoDB</span><span
                                    className="s-chip">PostgreSQL</span><span className="s-chip">Redis</span><span
                                        className="s-chip">MySQL</span><span className="s-chip">Prisma ORM</span></div>
                            </div>
                            <div className="skill-group reveal delay-3">
                                <div className="skill-g-name">Cloud & DevOps</div>
                                <div className="skill-chips"><span className="s-chip">AWS EC2</span><span className="s-chip">S3</span><span
                                    className="s-chip">Lambda</span><span className="s-chip">CloudWatch</span><span
                                        className="s-chip">Docker</span><span className="s-chip">GCP</span><span className="s-chip">GitHub
                                            Actions</span></div>
                            </div>
                            <div className="skill-group reveal delay-4">
                                <div className="skill-g-name">Frontend</div>
                                <div className="skill-chips"><span className="s-chip">React.js</span><span
                                    className="s-chip">Next.js</span><span className="s-chip">React Native</span><span
                                        className="s-chip">Redux</span><span className="s-chip">Tailwind CSS</span></div>
                            </div>
                            <div className="skill-group reveal delay-5">
                                <div className="skill-g-name">Architecture Patterns</div>
                                <div className="skill-chips"><span className="s-chip">Microservices</span><span
                                    className="s-chip">Event-Driven</span><span className="s-chip">Pub/Sub</span><span
                                        className="s-chip">ACID</span><span className="s-chip">RBAC</span><span className="s-chip">Message
                                            Queues</span></div>
                            </div>
                        </div>
                        <div className="skills-visual reveal-r">
                            <div className="tech-img-main">
                                <img src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80"
                                    alt="Tech stack visualization" />
                            </div>
                            <div className="tech-stats-grid">
                                <div className="tech-stat-card">
                                    <div className="tech-stat-card-n">8+</div>
                                    <div className="tech-stat-card-l">languages</div>
                                </div>
                                <div className="tech-stat-card">
                                    <div className="tech-stat-card-n">15+</div>
                                    <div className="tech-stat-card-l">frameworks</div>
                                </div>
                                <div className="tech-stat-card">
                                    <div className="tech-stat-card-n">5+</div>
                                    <div className="tech-stat-card-l">databases</div>
                                </div>
                                <div className="tech-stat-card">
                                    <div className="tech-stat-card-n">3+</div>
                                    <div className="tech-stat-card-l">cloud platforms</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
