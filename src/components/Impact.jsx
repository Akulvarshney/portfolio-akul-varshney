import React from 'react';

export default function Impact() {
  return (
    <>
      <section id="impact">
        <div className="s-inner">
            <div className="s-head reveal">
                <span className="s-num">02</span>
                <span className="s-title">measurable impact</span>
                <div className="s-line"></div>
            </div>
            <div className="impact-grid reveal">
                <div className="imp-cell">
                    <div className="imp-n">0↓</div>
                    <div className="imp-l">Data loss incidents<br />under peak meal-rush</div>
                </div>
                <div className="imp-cell">
                    <div className="imp-n">40%</div>
                    <div className="imp-l">API latency reduced<br />independently profiled</div>
                </div>
                <div className="imp-cell">
                    <div className="imp-n">500+</div>
                    <div className="imp-l">Vehicles managed<br />Ethiopian Electric Power</div>
                </div>
                <div className="imp-cell">
                    <div className="imp-n">3×</div>
                    <div className="imp-l">Research published<br />Emerald · Springer · IEEE</div>
                </div>
            </div>

            {/* Tech image strip */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px'}} className="reveal">
                <div style={{borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--line)', position: 'relative'}}>
                    <img src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=70"
                        alt="Server infrastructure"
                        style={{width: '100%', height: '200px', objectFit: 'cover', filter: 'saturate(0.4) brightness(0.55)', display: 'block'}} />
                    <div
                        style={{position: 'absolute', bottom: '14px', left: '14px', fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em', color: 'var(--c1)', textTransform: 'uppercase'}}>
                        Infrastructure</div>
                </div>
                <div style={{borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--line)', position: 'relative'}}>
                    <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=70" alt="Data pipeline"
                        style={{width: '100%', height: '200px', objectFit: 'cover', filter: 'saturate(0.4) brightness(0.55)', display: 'block'}} />
                    <div
                        style={{position: 'absolute', bottom: '14px', left: '14px', fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em', color: 'var(--c3)', textTransform: 'uppercase'}}>
                        Data Pipelines</div>
                </div>
                <div style={{borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--line)', position: 'relative'}}>
                    <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=70"
                        alt="Cloud architecture"
                        style={{width: '100%', height: '200px', objectFit: 'cover', filter: 'saturate(0.4) brightness(0.55)', display: 'block'}} />
                    <div
                        style={{position: 'absolute', bottom: '14px', left: '14px', fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em', color: 'var(--c4)', textTransform: 'uppercase'}}>
                        Cloud Architecture</div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
