import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Package, TrendingUp, Users, FileCheck } from 'lucide-react';

const projects = [
  {
    title: 'ERP System Implementation',
    description: 'Led the implementation and optimization of ERP-based inventory systems, resulting in 40% improvement in supply chain efficiency.',
    icon: Package,
    tags: ['ERP', 'Inventory', 'Supply Chain'],
    stats: '40% efficiency gain',
  },
  {
    title: 'Stock Level Optimization',
    description: 'Developed strategic inventory management protocols that reduced stock discrepancies by 60% and improved accuracy.',
    icon: TrendingUp,
    tags: ['Analytics', 'Optimization', 'Management'],
    stats: '60% error reduction',
  },
  {
    title: 'Team Leadership Initiative',
    description: 'Successfully led and coordinated a team of 50+ members, implementing training programs that boosted productivity.',
    icon: Users,
    tags: ['Leadership', 'Training', 'Team Building'],
    stats: '50+ team members',
  },
  {
    title: 'Documentation System Overhaul',
    description: 'Redesigned documentation processes for goods tracking, ensuring 99.5% accuracy in packing lists and invoices.',
    icon: FileCheck,
    tags: ['Documentation', 'Process', 'Quality'],
    stats: '99.5% accuracy',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Key <span className="gradient-text">Achievements</span></h2>
          <p className="section-subheading">Highlights from my professional journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group p-6 rounded-xl bg-background border border-border card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <project.icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-primary font-semibold">{project.stats}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
