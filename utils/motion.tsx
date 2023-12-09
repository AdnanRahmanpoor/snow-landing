'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useInView,
  useAnimation,
  useSpring,
  useTransform,
} from 'framer-motion';
import '@/app/globals.css';

interface Props {
  children: JSX.Element;
  opacity?: 0 | 1;
}

export function OnScrollReveal({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    >
      {children}
    </motion.div>
  );
}

export const LoadReveal = ({ children, opacity = 1 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ opacity }}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
