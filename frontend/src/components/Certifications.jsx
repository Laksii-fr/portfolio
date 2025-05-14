import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const certifications = [
    {
      title: "Python Certification",
      organization: "Kaggle",
      description: "Demonstrated practical programming knowledge by building data analysis and machine learning workflows.",
      date: "February 2023"
    },
    {
      title: "Cloud Computing",
      organization: "Google Developer Student Club",
      description: "Learned hands-on deployment on cloud services (GCP), architecture models, and best practices.",
      date: "November 2023"
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
    <section id="certifications" className="section bg-dark-900 bg-gradient-to-b from-dark-900 to-dark-800">
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
            <h2 className="text-3xl md:text-5xl font-bold text-light-100 mb-3">Certifications</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-800 p-8 rounded-2xl border border-dark-600/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-light-100">{cert.title}</h3>
                  <span className="text-light-400 text-sm">{cert.date}</span>
                </div>
                <p className="text-primary font-medium mb-4">{cert.organization}</p>
                <p className="text-light-300">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;