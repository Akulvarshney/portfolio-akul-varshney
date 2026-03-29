import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { revealFrom } from '../lib/motionVariants';
import { useTheme } from '../hooks/useTheme';

export function Reveal({
  children,
  className,
  from = 'up',
  delay = 0,
  variants,
  once = true,
  viewport,
  ...props
}) {
  const { mobileLite } = useTheme();

  const resolved = useMemo(() => {
    if (variants) return variants;
    return revealFrom(from, delay);
  }, [variants, from, delay]);

  const defaultViewport = useMemo(
    () =>
      mobileLite
        ? { once, margin: '0px', amount: 'some' }
        : { once, margin: '-90px 0px -140px 0px', amount: 0.12 },
    [once, mobileLite]
  );

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ ...defaultViewport, ...viewport }}
      variants={resolved}
      {...props}
    >
      {children}
    </motion.div>
  );
}
