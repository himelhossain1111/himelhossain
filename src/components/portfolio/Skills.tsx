import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { 
  Brain, FileSpreadsheet, Mail, Database, Package, 
  Users, Clock, MessageSquare, Lightbulb, Target, Zap, Globe
} from 'lucide-react';
import { useRandomTitleColor } from '@/lib/randomColor';

const technicalSkills = [
  { name: 'AI Prompt Engineering', level: 85, icon: Brain, description: 'ChatGPT, Claude, Automation' },
  { name: 'Microsoft Office Suite', level: 95, icon: FileSpreadsheet, description: 'Excel, Word, PowerPoint' },
  { name: 'ERP Systems', level: 90, icon: Database, description: 'SAP, Oracle, Custom ERPs' },
  { name: 'Inventory Management', level: 92, icon: Package, description: 'Stock Control, Forecasting' },
  { name: 'Email Management', level: 88, icon: Mail, description: 'Outlook, Gmail, Scheduling' },
  { name: 'Database Management', level: 80, icon: Database, description: 'SQL, Data Analysis' },
];

const softSkills = [
  { name: 'Leadership', icon: Users, description: 'Team Management' },
  { name: 'Time Management', icon: Clock, description: 'Prioritization' },
  { name: 'Communication', icon: MessageSquare, description: 'Clear & Effective' },
  { name: 'Problem Solving', icon: Lightbulb, description: 'Analytical Thinking' },
  { name: 'Critical Thinking', icon: Brain, description: 'Strategic Decisions' },
  { name: 'Goal Oriented', icon: Target, description: 'Results Driven' },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const titleColor = useMemo(() => useRandomTitleColor('skills'), []);

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <motion.div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity }}
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
            &lt;Skills /&gt;
          </motion.span>
          <h2 className="section-heading">
            My <span style={{ color: titleColor }}>Expertise</span>
          </h2>
          <p className="section-subheading">Technical proficiency and professional competencies</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills with Animated Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Zap className="text-primary" size={20} />
              </div>
              <h3 className="text-2xl font-heading font-bold">Technical Skills</h3>
            </div>
            
            <div className="space-y-8">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <skill.icon size={20} />
                      </motion.div>
                      <div>
                        <span className="font-semibold block">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.description}</span>
                      </div>
                    </div>
                    <motion.span 
                      className="text-primary font-bold text-lg font-mono"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  
                  <div className="skill-bar h-3 rounded-full bg-secondary/50 overflow-hidden">
                    <motion.div
                      className="skill-bar-fill h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.5 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Users className="text-primary" size={20} />
              </div>
              <h3 className="text-2xl font-heading font-bold">Personal Strengths</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: 'spring' }}
                  className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group cursor-default"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-4 group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon size={28} />
                  </motion.div>
                  <span className="font-semibold mb-1">{skill.name}</span>
                  <span className="text-xs text-muted-foreground">{skill.description}</span>
                </motion.div>
              ))}
            </div>

            {/* Languages Card */}
            <motion.div 
              className="mt-8 glass-card rounded-2xl p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Globe className="text-primary" size={20} />
                </div>
                <h4 className="font-bold text-lg">Languages</h4>
              </div>
              
              <div className="flex gap-6 relative z-10">
                {[
                  { lang: 'Bengali', level: 'Native', percentage: 100 },
                  { lang: 'English', level: 'Professional', percentage: 85 },
                ].map((item, index) => (
                  <motion.div 
                    key={item.lang}
                    className="flex-1 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <motion.div 
                      className="text-3xl font-bold gradient-text mb-1"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 1 + index * 0.1, type: 'spring' }}
                    >
                      {item.lang}
                    </motion.div>
                    <div className="text-sm text-muted-foreground mb-2">{item.level}</div>
                    <div className="h-2 rounded-full bg-secondary/50 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(200,80%,50%)]"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
