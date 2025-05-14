import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="about" 
      className="section relative overflow-hidden"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1639322537231-2f206e06af84")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-[2px]"></div>
      
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={variants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-light-100 mb-3">About Me</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div 
            variants={variants}
            className="bg-dark-800/60 backdrop-blur-sm p-8 rounded-2xl border border-dark-600/50 shadow-xl"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg mb-6">
                A passionate backend developer currently pursuing a B.Tech in Information Technology at 
                Jaypee Institute of Information Technology (Class of 2026). With a solid foundation in 
                backend engineering, cloud architecture, and AI-driven systems, I aim to create intelligent, 
                scalable tools that solve real-world problems.
              </p>
              
              <p className="text-lg mb-6">
                I'm also learning Japanese (targeting JLPT N3 by Dec 2025) to build a meaningful tech 
                career in Japan and immerse myself in its innovative ecosystem. I believe in a developer's 
                ability to transform industries through code, and I'm constantly experimenting with the 
                latest technologies in AI and backend frameworks.
              </p>
              
              <div className="flex flex-col md:flex-row gap-8 mt-12">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-4">Education</h3>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2.5"></div>
                    <div>
                      <h4 className="text-lg font-medium text-light-100">B.Tech in Information Technology</h4>
                      <p className="text-light-300">Jaypee Institute of Information Technology</p>
                      <p className="text-sm text-light-400">Class of 2026</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-4">Languages</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2.5"></div>
                      <div>
                        <h4 className="text-lg font-medium text-light-100">English</h4>
                        <p className="text-sm text-light-400">Professional Proficiency</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2.5"></div>
                      <div>
                        <h4 className="text-lg font-medium text-light-100">Japanese</h4>
                        <p className="text-sm text-light-400">Learning (Target: JLPT N3 by Dec 2025)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;