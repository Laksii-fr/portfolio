import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const skillCategories = [
    {
      title: "Languages & Databases",
      skills: [
        { name: "Python", level: 90 },
        { name: "C/C++", level: 80 },
        { name: "SQL", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "MongoDB", level: 80 },
      ]
    },
    {
      title: "Frameworks & APIs",
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "Flask", level: 85 },
        { name: "REST API Development", level: 90 },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS (S3, EC2, Lambda)", level: 80 },
        { name: "Azure", level: 75 },
        { name: "Git & GitHub", level: 85 },
        { name: "CI/CD pipelines", level: 75 },
      ]
    },
    {
      title: "AI & Tools",
      skills: [
        { name: "OpenAI Assistant API", level: 85 },
        { name: "Microsoft Azure Assistant API", level: 80 },
        { name: "Prompt Engineering", level: 90 },
        { name: "Generative AI", level: 85 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="skills" 
      className="section relative bg-dark-900"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1515879218367-8466d910aaa4")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-900/85 backdrop-blur-sm"></div>
      
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-light-100 mb-3">Technical Skills</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-dark-800/60 backdrop-blur-sm p-8 rounded-2xl border border-dark-600/50 shadow-xl"
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-6">{category.title}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-light-200 font-medium">{skill.name}</span>
                        <span className="text-light-300 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-dark-600 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full rounded-full ${
                            skill.level > 85 ? 'bg-primary' : skill.level > 75 ? 'bg-blue-500' : 'bg-blue-400'
                          }`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;