import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, we would submit the form data to a backend API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

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

  const contactLinks = [
    {
      icon: <FaEnvelope className="text-xl" />,
      label: "Email",
      value: "Lakshyash5@gmail.com",
      href: "mailto:Lakshyash5@gmail.com"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      label: "LinkedIn",
      value: "lakshay-sharma2653",
      href: "https://www.linkedin.com/in/lakshay-sharma2653/"
    },
    {
      icon: <FaGithub className="text-xl" />,
      label: "GitHub",
      value: "Laksii-fr",
      href: "https://github.com/Laksii-fr"
    }
  ];

  return (
    <section 
      id="contact" 
      className="section relative"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1588336443962-49d88df004a1")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"></div>
      
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-light-100 mb-3">Get In Touch</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="bg-dark-800/60 backdrop-blur-sm p-8 rounded-2xl border border-dark-600/50 shadow-xl">
                <h3 className="text-2xl font-bold text-light-100 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactLinks.map((contact, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary/10 p-3 rounded-full text-primary mr-4">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="text-light-400 text-sm">{contact.label}</p>
                        <a 
                          href={contact.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-light-100 hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <h4 className="text-xl font-semibold text-light-100 mb-4">Connect with me</h4>
                  <p className="text-light-300 mb-6">
                    I'm always open to discussing new projects, opportunities, or tech ideas.
                  </p>
                  
                  <div className="flex space-x-4">
                    {contactLinks.map((contact, index) => (
                      <a 
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark-700 hover:bg-primary text-light-100 p-3 rounded-full transition-colors"
                        aria-label={contact.label}
                      >
                        {contact.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="bg-dark-800/60 backdrop-blur-sm p-8 rounded-2xl border border-dark-600/50 shadow-xl">
                <h3 className="text-2xl font-bold text-light-100 mb-6">Send Me a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="text-xl font-semibold text-light-100 mb-2">Message Sent!</h4>
                    <p className="text-light-300">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-light-300 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-light-300 mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-light-300 mb-2">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-light-100"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-full py-4"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;