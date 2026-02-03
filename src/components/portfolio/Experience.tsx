import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar, ChevronRight } from 'lucide-react';

const workExperience = [
  {
    title: 'Executive – Store Management',
    company: 'Step Media Ltd',
    period: 'Nov 2017 - Present',
    description: [
      'Supervise daily store operations, ensuring seamless inventory flow and maintaining accurate stock levels',
      'Administer and update ERP-based inventory systems to optimize supply chain efficiency',
      'Coordinate with procurement and logistics teams for strategic order planning',
      'Manage comprehensive documentation for goods received and dispatched',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Social Science (Honours)',
    institution: 'National University',
    year: '2021',
    details: 'Political Science | CGPA: 2.69/4.00',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Rajshahi Board',
    year: '2017',
    details: 'Humanities | CGPA: 4.08/5.00',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Madrasha Board',
    year: '2015',
    details: 'Science | CGPA: 4.50/5.00',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <motion.div 
        className="absolute -left-40 top-1/3 w-96 h-96 bg-glow-purple/10 rounded-full blur-[120px]"
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
            &lt;Experience /&gt;
          </motion.span>
          <h2 className="section-heading">
            Experience & <span className="gradient-text neon-text">Education</span>
          </h2>
          <p className="section-subheading">My professional journey and academic background</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Briefcase size={24} />
              </motion.div>
              <h3 className="text-2xl font-heading font-bold">Work Experience</h3>
            </div>

            {workExperience.map((job, index) => (
              <motion.div 
                key={index} 
                className="relative pl-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {/* Timeline line */}
                <motion.div 
                  className="absolute left-[18px] top-0 w-0.5 h-full"
                  style={{ background: 'linear-gradient(to bottom, hsl(174 72% 56%), hsl(174 72% 56% / 0.1))' }}
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
                
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-0 top-0 w-10 h-10 rounded-xl bg-primary/20 border-2 border-primary flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5, type: 'spring' }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                </motion.div>

                <motion.div 
                  className="glass-card rounded-2xl p-6 mb-6 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div 
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar size={14} />
                    {job.period}
                  </motion.div>
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{job.title}</h4>
                  <p className="text-primary font-medium mb-4">{job.company}</p>
                  <ul className="space-y-3">
                    {job.description.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="text-sm text-muted-foreground flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + i * 0.1 }}
                      >
                        <ChevronRight size={14} className="text-primary mt-1 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div 
                className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <GraduationCap size={24} />
              </motion.div>
              <h3 className="text-2xl font-heading font-bold">Education</h3>
            </div>

            <div className="relative pl-12">
              {/* Timeline line */}
              <motion.div 
                className="absolute left-[18px] top-0 w-0.5 h-full"
                style={{ background: 'linear-gradient(to bottom, hsl(174 72% 56%), hsl(174 72% 56% / 0.1))' }}
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="relative mb-6 last:mb-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15 }}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute -left-12 top-6 w-10 h-10 rounded-xl bg-primary/20 border-2 border-primary flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                  >
                    <GraduationCap size={18} className="text-primary" />
                  </motion.div>

                  <motion.div 
                    className="glass-card rounded-2xl p-6 group"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <motion.span 
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar size={14} />
                      {edu.year}
                    </motion.span>
                    <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-2">{edu.details}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
