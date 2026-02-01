import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Calendar, Droplet } from 'lucide-react';

const infoItems = [
  { icon: Mail, label: 'Email', value: 'himelhossain111@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+8801791360590' },
  { icon: MapPin, label: 'Location', value: 'Badalgachi, Naogaon, Bangladesh' },
  { icon: Calendar, label: 'DOB', value: '1 January 1998' },
  { icon: Droplet, label: 'Blood Group', value: 'A+' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About <span className="gradient-text">Me</span></h2>
          <p className="section-subheading">Get to know me better</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              An energetic, dynamic, and self-motivated professional seeking challenging opportunities 
              where I can utilize my adaptability and skills to innovate and grow. With over 7 years 
              of experience in store management, I excel at managing complex operations under pressure.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I bring expertise in inventory management, ERP systems, and supply chain optimization, 
              combined with strong leadership and problem-solving abilities. Always eager to learn 
              new technologies and take on responsibilities that drive organizational success.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '7+', label: 'Years Experience' },
                { number: '100+', label: 'Projects Handled' },
                { number: '50+', label: 'Team Members Led' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-card border border-border"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {infoItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <item.icon size={24} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="text-foreground font-medium">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
