import { motion } from 'framer-motion';

const SectionTransition = () => {
  return (
    <div className="relative h-24 overflow-hidden">
      {/* Gradient line */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-md h-px"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/60"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.4, delay: 0.4, type: 'spring' }}
      />

      {/* Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-8 bg-primary/5 rounded-full blur-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default SectionTransition;
