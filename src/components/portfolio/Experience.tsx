import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

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
    <section id="experience" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Experience & <span className="gradient-text">Education</span></h2>
          <p className="section-subheading">My professional journey and academic background</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Briefcase size={20} />
              </div>
              <h3 className="text-2xl font-heading font-bold">Work Experience</h3>
            </div>

            {workExperience.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-border">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary glow-border" />
                <div className="p-6 rounded-lg bg-background border border-border card-hover mb-6">
                  <span className="text-primary text-sm font-medium">{job.period}</span>
                  <h4 className="text-xl font-bold mt-2">{job.title}</h4>
                  <p className="text-muted-foreground mb-4">{job.company}</p>
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-2xl font-heading font-bold">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-border">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-0 top-6 w-4 h-4 -translate-x-[9px] rounded-full bg-primary glow-border" style={{ left: '-32px' }} />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="p-6 rounded-lg bg-background border border-border card-hover mb-6"
                  >
                    <span className="text-primary text-sm font-medium">{edu.year}</span>
                    <h4 className="text-lg font-bold mt-2">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-2">{edu.details}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
