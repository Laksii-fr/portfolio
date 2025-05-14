import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-dark-900 relative overflow-hidden"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1663787652609-57b525eb6ee6")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-900/70 backdrop-blur-[2px]"></div>
      
      {/* Content */}
      <div className="container relative z-10 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm mb-4">
              Hello, I'm Lakshay Sharma
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Backend Developer <br />
            <span className="text-primary">&</span> AI Innovator
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-light-200 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Designing scalable systems, crafting AI-powered tools, and building a future-proof tech career in Japan.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="#projects" 
              className="btn btn-primary py-4 px-8 text-lg font-medium"
            >
              Explore My Work
            </a>
            <a 
              href="#contact" 
              className="btn btn-outline py-4 px-8 text-lg font-medium"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.2,
              repeat: Infinity,
              repeatType: "reverse", 
              repeatDelay: 0.5
            }}
          >
            <div className="w-8 h-12 rounded-full border-2 border-light-300/30 flex justify-center items-start p-2">
              <div className="w-1.5 h-3 bg-light-300/50 rounded-full animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;