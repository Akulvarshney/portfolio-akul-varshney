import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

/**
 * Section with optional scroll-linked parallax on the glow + inner shell.
 * Disabled when `mobileLite` or `prefers-reduced-motion`.
 */
export function SectionShell({
  id,
  sectionClassName = 'tp-section scroll-section',
  innerClassName = 'tp-inner scroll-section__parallax-inner',
  invert = false,
  parallax = 52,
  children,
  footer = null,
}) {
  const reduceMotion = useReducedMotion();
  const { mobileLite } = useTheme();
  const lite = reduceMotion || mobileLite;

  if (lite) {
    return (
      <section id={id} className={sectionClassName}>
        <div className="scroll-section__glow" style={{ opacity: 0.35 }} aria-hidden />
        <div className={innerClassName}>{children}</div>
        {footer}
      </section>
    );
  }

  return (
    <ParallaxSectionActive
      id={id}
      sectionClassName={sectionClassName}
      innerClassName={innerClassName}
      invert={invert}
      parallax={parallax}
      footer={footer}
    >
      {children}
    </ParallaxSectionActive>
  );
}

function ParallaxSectionActive({ id, sectionClassName, innerClassName, invert, parallax, children, footer = null }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const innerRange = invert ? [parallax, -parallax] : [-parallax, parallax];
  const floatRange = invert
    ? [-parallax * 1.45, parallax * 1.45]
    : [parallax * 1.45, -parallax * 1.45];

  const yInner = useTransform(scrollYProgress, [0, 1], innerRange);
  const yFloat = useTransform(scrollYProgress, [0, 1], floatRange);
  const opacityFloat = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.15, 0.5, 0.5, 0.15]);

  return (
    <section ref={ref} id={id} className={sectionClassName}>
      <motion.div className="scroll-section__glow" style={{ y: yFloat, opacity: opacityFloat }} aria-hidden />
      <motion.div className={innerClassName} style={{ y: yInner }}>
        {children}
      </motion.div>
      {footer}
    </section>
  );
}
