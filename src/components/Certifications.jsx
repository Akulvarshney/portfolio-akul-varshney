import React from 'react';

export default function Certifications() {
  return (
    <>
      <section id="certs">
        <div className="s-inner">
            <div className="s-head reveal">
                <span className="s-num">06</span>
                <span className="s-title">certifications & research</span>
                <div className="s-line"></div>
            </div>
            <div className="cert-grid">
                <div className="cert-card reveal delay-1">
                    <div className="cert-icon">☁</div>
                    <div className="cert-name">AWS Academy Graduate — Cloud Foundations</div>
                    <div className="cert-org">Amazon Web Services</div>
                </div>
                <div className="cert-card reveal delay-2">
                    <div className="cert-icon">🔗</div>
                    <div className="cert-name">CCNAv7: Enterprise Networking, Security & Automation</div>
                    <div className="cert-org">Cisco</div>
                </div>
                <div className="cert-card reveal delay-3">
                    <div className="cert-icon">🤖</div>
                    <div className="cert-name">AI Coder: Vibe Coder to Agentic Engineer</div>
                    <div className="cert-org">Udemy</div>
                </div>
                <div className="cert-card reveal delay-4">
                    <div className="cert-icon">🏆</div>
                    <div className="cert-name">Achiever's Award — Excellence in Knowledge Creation</div>
                    <div className="cert-org">Institutional Recognition</div>
                </div>
            </div>

            <div className="s-head reveal" style={{marginTop: '48px'}}>
                <span className="s-num"></span>
                <span className="s-title">research publications</span>
                <div className="s-line"></div>
            </div>
            <div className="pub-row">
                <div className="pub-item reveal delay-1">
                    <span className="pub-tag pub-emerald">Emerald</span>
                    <div className="pub-title">MSME Resilience — Published Research</div>
                </div>
                <div className="pub-item reveal delay-2">
                    <span className="pub-tag pub-springer">Springer</span>
                    <div className="pub-title">AI & Cloud-Driven Software Development</div>
                </div>
                <div className="pub-item reveal delay-3">
                    <span className="pub-tag pub-ieee">IEEE</span>
                    <div className="pub-title">Face Mask Detection & e-Challan Generation</div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
