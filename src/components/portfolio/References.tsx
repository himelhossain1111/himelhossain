import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { Phone, UserCheck, Quote } from 'lucide-react';
import { useRandomTitleColor } from '@/lib/randomColor';

const references = [
  {
    name: 'Nashim Alam',
    title: 'Assistant Professor of Political Science',
    institution: 'Bangabundhu Govt. College',
    phone: '+8801715973900',
  },
  {
    name: 'Hero Mahmudul Hasan',
    title: 'Lecturer in Islamic History',
    institution: 'Bangabundhu Govt. College',
    phone: '+8801920801774',
  },
];

const References = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const titleColor = useMemo(() => useRandomTitleColor('references'), []);

  return (
    <section id="references" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 tech-grid opacity-10" />
      <motion.div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-4"
            whileHover={{ scale: 1.05 }}
          >
            &lt;References /&gt;
          </motion.span>
          <h2 className="section-heading">
            Professional <span style={{ color: titleColor }}>References</span>
          </h2>
          <p className="section-subheading">People who can vouch for my work and character</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {references.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2, type: 'spring' }}
              className="group relative"
            >
              <motion.div
                className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/50 to-[hsl(200,80%,50%)]/50 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
              />

              <div className="glass-card relative rounded-2xl p-8 h-full">
                {/* Quote icon */}
                <motion.div
                  className="absolute top-6 right-6 text-primary/10"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Quote size={48} />
                </motion.div>

                {/* Avatar placeholder */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-[hsl(200,80%,50%)] p-0.5 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <UserCheck size={28} className="text-primary" />
                  </div>
                </motion.div>

                {/* Info */}
                <h3 className="text-xl font-heading font-bold mb-1 group-hover:text-primary transition-colors">
                  {person.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-1">{person.title}</p>
                <p className="text-muted-foreground text-sm mb-4">{person.institution}</p>

                {/* Phone */}
                <motion.a
                  href={`tel:${person.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <Phone size={14} />
                  {person.phone}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
