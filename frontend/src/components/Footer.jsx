import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Laksii-fr",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/lakshay-sharma2653/",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:Lakshyash5@gmail.com",
      label: "Email"
    }
  ];
  
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-dark-800 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-dark-600/30">
          <div>
            <a href="#hero" className="text-white font-heading font-bold text-3xl mb-4 inline-block">
              L<span className="text-primary">S</span>
            </a>
            <p className="text-light-300 mt-4 max-w-md">
              Backend Developer & AI Innovator passionate about creating intelligent, 
              scalable systems that solve real-world problems.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="bg-dark-700 hover:bg-primary text-light-100 p-2.5 rounded-full transition-colors"
                  whileHover={{ y: -3 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-light-100 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-light-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-light-100 mb-4">Contact</h3>
            <p className="text-light-300 mb-2">Feel free to reach out to me!</p>
            <a 
              href="mailto:Lakshyash5@gmail.com" 
              className="text-light-200 hover:text-primary transition-colors block mb-2"
            >
              Lakshyash5@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/lakshay-sharma2653/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-200 hover:text-primary transition-colors"
            >
              LinkedIn: lakshay-sharma2653
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-light-400 text-sm">
            &copy; {currentYear} Lakshay Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;