import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover="hover"
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 text-primary opacity-0"
        variants={{
          hover: {
            opacity: [0, 0.8, 0, 0.6, 0],
            x: [0, -2, 2, -1, 0],
            transition: {
              duration: 0.3,
              repeat: Infinity,
              repeatType: 'loop',
            },
          },
        }}
        aria-hidden="true"
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-[hsl(200,80%,50%)] opacity-0"
        variants={{
          hover: {
            opacity: [0, 0.6, 0, 0.8, 0],
            x: [0, 2, -2, 1, 0],
            transition: {
              duration: 0.3,
              repeat: Infinity,
              repeatType: 'loop',
            },
          },
        }}
        aria-hidden="true"
      >
        {text}
      </motion.span>
    </motion.span>
  );
};

export default GlitchText;
