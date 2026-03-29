const ease = [0.22, 1, 0.36, 1];
const dist = 52;

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
