import { motion } from 'framer-motion';

const SectionTransition = () => {
  return (
    <div className="relative h-16 sm:h-24 overflow-hidden">
      {/* Gradient line */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-xs sm:max-w-md h-px"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-10px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/50"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-10px' }}
        transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}
      />

      {/* Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-6 sm:h-8 bg-primary/5 rounded-full blur-xl"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
    </div>
  );
};

export default SectionTransition;
