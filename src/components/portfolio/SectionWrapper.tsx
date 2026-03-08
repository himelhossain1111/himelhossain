import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className = '' }: SectionWrapperProps) => {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
