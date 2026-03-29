import { useEffect, useRef, useState } from 'react';

/**
 * Native IntersectionObserver: set visible once when the element enters the viewport.
 * @param {{ threshold?: number, rootMargin?: string }} [opts]
 */
export function useInViewOnce(opts = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = opts;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { root: null, rootMargin, threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return [ref, visible];
}
