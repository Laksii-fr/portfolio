import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const experiences = [
    {
      role: "AI/ML Developer & Full Stack Intern",
      company: "Tryzentt Pvt. Ltd.",
      duration: "June 2024 – April 2025",
      location: "Delhi, India",
      description: [
        "Developed 5+ REST APIs that automated core workflows and reduced manual processing time by 40%.",
        "Integrated LLMs into backend pipelines to increase automation accuracy by 35%.",
        "Conducted backend optimization, leading to a 27% improvement in API response time.",
        "Assisted the front-end integration team to deploy AI features seamlessly into production environments."
      ],
      complianceLink: "https://drive.google.com/file/d/13FaAIsA_48MuzWm8zAmHR0jykwF-0wKW/view"
    },
    {
      role: "Backend Developer Intern",
      company: "ABSAX Technologies Pvt. Ltd.",
      duration: "June 2023 – August 2023",
      location: "Noida, India",
      description: [
        "Revamped the Two-Factor Authentication (2FA) system using cryptographic hashing and secure token generation, boosting security resilience by 43%.",
        "Refined the User Authentication System (UAS) to reduce average login time by 52% through backend logic restructuring.",
        "Collaborated with a 5-member engineering team to ensure backend and cloud compatibility using AWS services."
      ],
      complianceLink: "https://drive.google.com/file/d/1S-Acnk2B53LRy8iSrtBlGjvKAaai93Pg/view"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="section bg-dark-900 bg-hero-pattern">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-light-100 mb-3">Experience</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="relative space-y-12 pl-6 before:absolute before:inset-y-0 before:left-0 before:ml-[7px] before:w-0.5 before:bg-primary/30">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-6 mt-1.5 h-4 w-4 rounded-full border-2 border-primary bg-dark-900"></div>
                
                <div className="bg-dark-800/60 backdrop-blur-sm p-8 rounded-2xl border border-dark-600/50 shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-light-100">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <p className="text-light-300">{exp.duration}</p>
                      <p className="text-light-400 text-sm">{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mt-4 text-light-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {exp.complianceLink && (
                    <a 
                      href={exp.complianceLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-6 text-primary hover:text-secondary transition-colors text-sm"
                    >
                      View Completion Letter →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;