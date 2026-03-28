const ease = [0.22, 1, 0.36, 1];
const dist = 52;

/** Directional enter: feels like content is pushed by scroll (up / down / sideways). */
export function revealFrom(direction = 'up', delay = 0) {
  const transition = { duration: 0.62, ease, delay };
  switch (direction) {
    case 'down':
      return {
        hidden: { opacity: 0, y: -dist },
        show: { opacity: 1, y: 0, transition },
      };
    case 'left':
      return {
        hidden: { opacity: 0, x: dist },
        show: { opacity: 1, x: 0, transition },
      };
    case 'right':
      return {
        hidden: { opacity: 0, x: -dist },
        show: { opacity: 1, x: 0, transition },
      };
    case 'up':
    default:
      return {
        hidden: { opacity: 0, y: dist },
        show: { opacity: 1, y: 0, transition },
      };
  }
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease },
  },
};

export const stagger = {
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
};

/** Parent / child pair for staggered lists */
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.04 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
