import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useMemo, useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Droplet, User, Target, Award, Sparkles } from 'lucide-react';
import { useRandomTitleColor } from '@/lib/randomColor';

const infoItems = [
  { icon: Mail, label: 'Email', value: 'himelhossain111@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+8801791360590' },
  { icon: MapPin, label: 'Location', value: 'Badalgachi, Naogaon, Bangladesh' },
  { icon: Calendar, label: 'DOB', value: '1 January 1998' },
  { icon: Droplet, label: 'Blood Group', value: 'A+' },
];

const stats = [
  { icon: Award, value: '8+', label: 'Years Experience', color: 'from-primary to-[hsl(190,70%,55%)]' },
  { icon: User, value: '10+', label: 'Team Experience', color: 'from-[hsl(190,70%,55%)] to-[hsl(200,80%,50%)]' },
  { icon: Target, value: '90%', label: 'Accuracy', color: 'from-[hsl(200,80%,50%)] to-glow-purple' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const titleColor = useMemo(() => useRandomTitleColor('about'), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      <motion.div 
        className="absolute top-1/2 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span 
              className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-4"
              whileHover={{ scale: 1.05 }}
            >
              &lt;About Me /&gt;
            </motion.span>
            <h2 className="section-heading">
              Discover My <span style={{ color: titleColor }}>Story</span>
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">Get to know me better</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* About Text */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div 
                className="glass-card rounded-2xl p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(45deg, transparent, hsl(174 72% 56% / 0.1), transparent)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold mb-4 flex items-center gap-3">
                    <Sparkles className="text-primary" size={24} />
                    Who I Am
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    An energetic, dynamic, and self-motivated professional seeking challenging opportunities 
                    where I can utilize my adaptability and skills to innovate and grow. With over 
                    <span className="text-primary font-semibold"> 8 years of experience</span> in store management, 
                    I excel at managing complex operations under pressure.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I bring expertise in inventory management, ERP systems, and supply chain optimization, 
                    combined with strong leadership and problem-solving abilities. Always eager to learn 
                    new technologies and take on responsibilities that drive organizational success.
                  </p>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="glass-card rounded-xl p-4 text-center relative overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <motion.div 
                      className="text-3xl font-bold gradient-text mb-1"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
                {['ERP Systems', 'AI/ML Tools', 'MS Office Suite', 'Team Leadership', 'Supply Chain'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card flex items-center gap-4 p-5 rounded-xl group"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon size={22} />
                  </motion.div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
