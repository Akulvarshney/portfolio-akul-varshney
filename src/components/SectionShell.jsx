import React from 'react';

/** Static section wrapper (replaces scroll-parallax shell). */
export function SectionShell({
  id,
  sectionClassName = 'tp-section scroll-section',
  innerClassName = 'tp-inner scroll-section__parallax-inner',
  children,
  footer = null,
}) {
  return (
    <section id={id} className={sectionClassName}>
      <div className="scroll-section__glow" style={{ opacity: 0.35 }} aria-hidden />
      <div className={innerClassName}>{children}</div>
      {footer}
    </section>
  );
}
