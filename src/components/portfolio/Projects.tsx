import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { Package, TrendingUp, Users, FileCheck, ArrowUpRight, Sparkles } from 'lucide-react';
import { useRandomTitleColor } from '@/lib/randomColor';

const projects = [
  {
    title: 'ERP System Implementation',
    description: 'Led the implementation and optimization of ERP-based inventory systems, resulting in significant improvement in supply chain efficiency and real-time tracking capabilities.',
    icon: Package,
    tags: ['ERP', 'Inventory', 'Supply Chain', 'Automation'],
    stats: '40%',
    statsLabel: 'Efficiency Gain',
    color: 'from-primary to-[hsl(190,70%,55%)]',
  },
  {
    title: 'Stock Level Optimization',
    description: 'Developed strategic inventory management protocols that dramatically reduced stock discrepancies and improved accuracy through data-driven forecasting.',
    icon: TrendingUp,
    tags: ['Analytics', 'Optimization', 'Data-Driven'],
    stats: '60%',
    statsLabel: 'Error Reduction',
    color: 'from-[hsl(190,70%,55%)] to-[hsl(200,80%,50%)]',
  },
  {
    title: 'Team Leadership Initiative',
    description: 'Successfully led and coordinated a large team, implementing training programs and performance frameworks that significantly boosted productivity.',
    icon: Users,
    tags: ['Leadership', 'Training', 'Team Building'],
    stats: '50+',
    statsLabel: 'Team Members',
    color: 'from-[hsl(200,80%,50%)] to-glow-purple',
  },
  {
    title: 'Documentation System Overhaul',
    description: 'Redesigned documentation processes for goods tracking, implementing digital systems that ensure near-perfect accuracy in packing lists and invoices.',
    icon: FileCheck,
    tags: ['Documentation', 'Process', 'Quality Control'],
    stats: '99.5%',
    statsLabel: 'Accuracy Rate',
    color: 'from-glow-purple to-primary',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
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
            &lt;Achievements /&gt;
          </motion.span>
          <h2 className="section-heading">
            Key <span className="gradient-text neon-text">Achievements</span>
          </h2>
          <p className="section-subheading">Highlights and impact from my professional journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15, type: 'spring' }}
              className="group relative"
            >
              {/* Animated border gradient */}
              <motion.div 
                className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}
              />
              
              <div className="glass-card relative rounded-2xl p-8 h-full overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 tech-grid" />
                </div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} p-0.5`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                        <project.icon size={28} className="text-primary" />
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="text-right"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    >
                      <div className={`text-4xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                        {project.stats}
                      </div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        {project.statsLabel}
                      </div>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors flex items-center gap-2">
                    {project.title}
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="text-primary"
                    >
                      <ArrowUpRight size={20} />
                    </motion.span>
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1.5 text-xs rounded-lg bg-secondary/50 text-secondary-foreground border border-border hover:border-primary/50 hover:text-primary transition-all cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative element */}
                <motion.div 
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-transparent"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 text-muted-foreground"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={18} className="text-primary" />
            <span>More achievements coming soon</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
