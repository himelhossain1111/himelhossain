import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Brain, FileSpreadsheet, Mail, Database, Package, 
  Users, Clock, MessageSquare, Lightbulb, Target
} from 'lucide-react';

const technicalSkills = [
  { name: 'AI Prompt Engineering', level: 85, icon: Brain },
  { name: 'Microsoft Office Suite', level: 95, icon: FileSpreadsheet },
  { name: 'ERP Systems', level: 90, icon: Database },
  { name: 'Inventory Management', level: 92, icon: Package },
  { name: 'Email Management', level: 88, icon: Mail },
  { name: 'Database Management', level: 80, icon: Database },
];

const softSkills = [
  { name: 'Leadership', icon: Users },
  { name: 'Time Management', icon: Clock },
  { name: 'Communication', icon: MessageSquare },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Critical Thinking', icon: Brain },
  { name: 'Goal Oriented', icon: Target },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">My <span className="gradient-text">Skills</span></h2>
          <p className="section-subheading">Technical expertise and personal strengths</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills with Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="text-primary" size={18} />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-8">Personal Strengths</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-6 rounded-lg bg-card border border-border card-hover flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <skill.icon size={28} />
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8 p-6 rounded-lg bg-card border border-border">
              <h4 className="font-bold mb-4">Languages</h4>
              <div className="flex gap-4">
                <div className="flex-1 text-center">
                  <div className="text-2xl font-bold gradient-text">Bengali</div>
                  <div className="text-sm text-muted-foreground">Native</div>
                </div>
                <div className="w-px bg-border" />
                <div className="flex-1 text-center">
                  <div className="text-2xl font-bold gradient-text">English</div>
                  <div className="text-sm text-muted-foreground">Good</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
