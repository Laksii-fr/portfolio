import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const projects = [
    {
      title: "AI-Powered Test Paper Generator",
      description: "A platform for educators to generate customized test papers using natural language prompts. Teachers can input subjects, difficulty levels, and question types, and the system auto-generates papers with minimal effort.",
      stack: ["FastAPI", "MongoDB", "AWS"],
      impact: ["Reduced manual effort by 60%", "Improved creation time for test papers"],
      link: "https://avatar.mashmari.in/"
    },
    {
      title: "Customer Care Chatbot Builder",
      description: "A no-code platform for creating AI-powered chatbots that can be embedded via iframe or API. Features include customizable AI agents, real-time response management, and user analytics dashboard.",
      stack: ["FastAPI", "MongoDB", "AWS", "OpenAI"],
      impact: ["Used by over 10 early-stage startups"],
      link: "https://assistants.leoqui.ai/"
    },
    {
      title: "NeuraMail – AI Email Assistant",
      description: "A web app that processes customer emails and generates AI-powered replies. It supports email parsing, intent detection, and reply generation using OpenAI.",
      stack: ["FastAPI", "SMTP", "MongoDB", "Python"],
      impact: ["In Production [Goal to complete by June 2025]"],
      link: null
    },
    {
      title: "AI Agents Portal",
      description: "Built a dynamic platform for testing, managing, and credit-tracking usage of AI agents. Includes agent credits, token-based access, and live analytics.",
      stack: ["Python", "FastAPI", "MongoDB", "AWS"],
      impact: [],
      link: "http://65.2.39.20:3001/"
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
    <section 
      id="projects" 
      className="section relative"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-sm"></div>
      
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
            <h2 className="text-3xl md:text-5xl font-bold text-light-100 mb-3">Featured Projects</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-800/60 backdrop-blur-sm p-8 rounded-2xl border border-dark-600/50 shadow-xl hover:border-primary/30 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              >
                <h3 className="text-xl md:text-2xl font-bold text-light-100 mb-3">{project.title}</h3>
                <p className="text-light-300 mb-6 flex-grow">{project.description}</p>
                
                <div className="space-y-4 mt-auto">
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, i) => (
                        <span 
                          key={i} 
                          className="inline-block bg-dark-700 text-light-200 text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {project.impact.length > 0 && (
                    <div>
                      <h4 className="text-primary font-semibold mb-2">Impact</h4>
                      <ul>
                        {project.impact.map((item, i) => (
                          <li key={i} className="text-light-300 flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-primary hover:text-secondary transition-colors font-medium"
                    >
                      View Project →
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

export default Projects;