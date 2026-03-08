import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Calendar, Award } from 'lucide-react';

const trainings = [
  {
    title: 'MS Office, Graphics Design',
    institution: 'TEQUB Yobo Unnoyon',
    year: '2017',
    duration: '40 Days',
    skills: ['Photoshop', 'Illustrator', 'Outsourcing'],
  },
  {
    title: 'Microsoft Office 2007',
    institution: 'MIC Computer Training',
    year: '2016',
    duration: '6 Months',
    skills: ['Excel', 'Word', 'PowerPoint'],
  },
  {
    title: 'Database Programming',
    institution: 'MIC Computer Training',
    year: '2016',
    duration: '6 Months',
    skills: ['DBMS', 'SQL'],
  },
];

const Training = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="training" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <motion.div
        className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-glow-purple/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6">
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
            &lt;Training /&gt;
          </motion.span>
          <h2 className="section-heading">
            Training <span className="gradient-text neon-text">Summary</span>
          </h2>
          <p className="section-subheading">Professional development and certifications</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trainings.map((training, index) => (
            <motion.div
              key={training.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15, type: 'spring' }}
              className="group relative"
            >
              {/* Hover glow */}
              <motion.div
                className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-[hsl(200,80%,50%)] opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
              />

              <div className="glass-card relative rounded-2xl p-8 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-6 group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <BookOpen size={26} />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                  {training.title}
                </h3>

                {/* Institution */}
                <p className="text-primary font-medium text-sm mb-4">{training.institution}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {training.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award size={12} />
                    {training.duration}
                  </span>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {training.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-lg bg-secondary/50 text-muted-foreground border border-border hover:border-primary/50 hover:text-primary transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
