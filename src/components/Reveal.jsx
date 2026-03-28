import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { revealFrom } from '../lib/motionVariants';

export function Reveal({
  children,
  className,
  from = 'up',
  delay = 0,
  variants,
  once = false,
  viewport,
  ...props
}) {
  const resolved = useMemo(() => {
    if (variants) return variants;
    return revealFrom(from, delay);
  }, [variants, from, delay]);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{
        once,
        margin: '-90px 0px -140px 0px',
        amount: 0.12,
        ...viewport,
      }}
      variants={resolved}
      {...props}
    >
      {children}
    </motion.div>
  );
}
