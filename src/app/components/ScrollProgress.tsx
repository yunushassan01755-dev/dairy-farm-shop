import { motion, useScroll } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2E6B3F] via-yellow-400 to-[#2E6B3F] origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
