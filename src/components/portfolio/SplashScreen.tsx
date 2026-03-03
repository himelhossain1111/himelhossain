import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Scan lines */}
          <div className="absolute inset-0 scan-line opacity-30" />
          
          {/* Grid background */}
          <div className="absolute inset-0 tech-grid opacity-20" />

          {/* Glowing orbs */}
          <motion.div
            className="absolute w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1 }}
            className="relative mb-8"
          >
            <span className="font-heading text-6xl md:text-8xl font-bold gradient-text neon-text">
              MH.
            </span>
          </motion.div>

          {/* INITIALIZING text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <span className="font-mono text-primary text-sm tracking-[0.5em] uppercase">
              Initializing
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                ...
              </motion.span>
            </span>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '280px' }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="w-[280px] h-1 bg-secondary/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  width: `${Math.min(progress, 100)}%`,
                  background: 'linear-gradient(90deg, hsl(174 72% 56%), hsl(200 80% 50%))',
                  boxShadow: '0 0 20px hsl(174 72% 56% / 0.5)',
                }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <motion.span
              className="block text-center mt-3 font-mono text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.span>
          </motion.div>

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/30" />
          <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-primary/30" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-primary/30" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/30" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
