import { useRef } from 'react';
import { useReducedMotion, useScroll, useTransform } from 'framer-motion';

/**
 * Scroll-linked vertical motion for a section: inner content and a decorative glow
 * move in opposite directions as the section crosses the viewport.
 */
export function useSectionParallax({ invert = false, parallax = 52 } = {}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const innerRange = reduceMotion ? [0, 0] : invert ? [parallax, -parallax] : [-parallax, parallax];
  const floatRange = reduceMotion
    ? [0, 0]
    : invert
      ? [-parallax * 1.45, parallax * 1.45]
      : [parallax * 1.45, -parallax * 1.45];

  const yInner = useTransform(scrollYProgress, [0, 1], innerRange);
  const yFloat = useTransform(scrollYProgress, [0, 1], floatRange);
  const opacityFloat = useTransform(
    scrollYProgress,
    [0, 0.12, 0.88, 1],
    reduceMotion ? [0.35, 0.35, 0.35, 0.35] : [0.15, 0.5, 0.5, 0.15]
  );

  return { ref, scrollYProgress, yInner, yFloat, opacityFloat };
}
