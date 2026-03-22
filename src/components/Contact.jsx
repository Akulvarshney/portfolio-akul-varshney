import React from 'react';

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="contact-inner">
            <div className="contact-eyebrow reveal">// let's_build_together</div>
            <div className="contact-headline reveal">Ready to Ship<br /><em>Serious</em> Systems.</div>
            <div className="contact-sub reveal">Open to Backend · Full-Stack · SDE-2 roles. I bring architecture thinking,
                production experience, and an obsession with performance.</div>
            <div className="contact-links reveal">
                <a className="c-link primary" href="mailto:akulv.work@gmail.com">akulv.work@gmail.com →</a>
                <a className="c-link" href="tel:+918800252885">+91-880-025-2885</a>
                <a className="c-link" href="https://linkedin.com/in/akulvarshney" target="_blank">LinkedIn ↗</a>
                <a className="c-link" href="https://github.com/akulvarshney" target="_blank">GitHub ↗</a>
            </div>
        </div>
        <div className="footer-bar">
            <div className="footer-copy">© 2025 Akul Varshney · B.Tech IT · Amity University · CGPA 8.03</div>
            <div className="footer-tag">Backend Engineer · Node.js · AWS · Distributed Systems</div>
        </div>
    </section>
    </>
  );
}
