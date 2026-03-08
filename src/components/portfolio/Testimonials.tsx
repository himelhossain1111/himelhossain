import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import rashidulImg from '@/assets/testimonial-rashidul.jpg';
import nashimImg from '@/assets/testimonial-nashim.jpg';
import farhanaImg from '@/assets/testimonial-farhana.jpg';
import heroImg from '@/assets/testimonial-hero.jpg';

const testimonials = [
  {
    name: 'Md. Rashidul Islam',
    title: 'Senior Manager, Procurement',
    company: 'Step Media Ltd',
    quote:
      'Himel has been an invaluable asset to our store operations. His meticulous approach to inventory management and ERP systems has significantly reduced discrepancies and improved our supply chain efficiency.',
    rating: 5,
    image: rashidulImg,
  },
  {
    name: 'Nashim Alam',
    title: 'Assistant Professor of Political Science',
    company: 'Bangabundhu Govt. College',
    quote:
      'I have known Himel as a dedicated and hardworking individual. His ability to balance professional responsibilities with continuous learning is truly commendable. He brings sincerity to everything he does.',
    rating: 5,
    image: nashimImg,
  },
  {
    name: 'Farhana Akter',
    title: 'Logistics Coordinator',
    company: 'Step Media Ltd',
    quote:
      'Working with Himel has been a great experience. He is incredibly organized, always on top of documentation, and his coordination between procurement and logistics teams is seamless.',
    rating: 5,
    image: farhanaImg,
  },
  {
    name: 'Hero Mahmudul Hasan',
    title: 'Lecturer in Islamic History',
    company: 'Bangabundhu Govt. College',
    quote:
      'Himel is a person of strong character and determination. His problem-solving skills and leadership qualities make him stand out. I highly recommend him for any professional endeavor.',
    rating: 5,
    image: heroImg,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    },
    [],
  );

  // Auto-advance every 6s
  useEffect(() => {
    timerRef.current = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timerRef.current);
  }, [paginate]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => paginate(1), 6000);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[140px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-4"
            whileHover={{ scale: 1.05 }}
          >
            &lt;Testimonials /&gt;
          </motion.span>
          <h2 className="section-heading">
            What People <span className="gradient-text neon-text">Say</span>
          </h2>
          <p className="section-subheading">Recommendations from colleagues and mentors</p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          {/* Navigation arrows */}
          <motion.button
            onClick={() => { paginate(-1); resetTimer(); }}
            className="absolute -left-4 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-secondary/80 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            onClick={() => { paginate(1); resetTimer(); }}
            className="absolute -right-4 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-secondary/80 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="glass-card rounded-2xl p-8 md:p-12 relative"
              >
                {/* Decorative quote */}
                <motion.div
                  className="absolute top-6 right-8 text-primary/10"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <Quote size={64} />
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.08, type: 'spring' }}
                    >
                      <Star size={18} className="text-primary fill-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-foreground/90 text-lg leading-relaxed mb-8 italic relative z-10">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-[hsl(200,80%,50%)] p-0.5"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">{t.name}</h4>
                    <p className="text-sm text-primary">{t.title}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); resetTimer(); }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                whileHover={{ scale: 1.3 }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
