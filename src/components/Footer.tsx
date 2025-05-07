import React from 'react'; 
import { Github, Linkedin, Mail} from 'lucide-react'; 
 
const Footer: React.FC = () => { 
  return ( 
    <footer className="bg-black text-white py-10"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="flex flex-col md:flex-row justify-between items-center"> 
          <div className="mb-6 md:mb-0"> 
            <p className="text-gray-400 text-sm"> 
              © 2025 Lakshay Sharma. Crafted with precision, powered by Python. 
            </p> 
          </div>
          <div className="flex space-x-6"> 
            <a  
              href="https://github.com/Laksii-fr"  
              target="_blank"  
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300" 
              aria-label="GitHub" 
            > 
              <Github size={20} /> 
            </a> 
            <a  
              href="https://www.linkedin.com/in/lakshay-sharma2653/"  
              target="_blank"  
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-300" 
              aria-label="LinkedIn" 
            > 
              <Linkedin size={20} /> 
            </a> 
            <a  
              href="mailto:Lakshyash5@gmail.com"  
              className="text-gray-400 hover:text-white transition-colors duration-300" 
              aria-label="Email" 
            > 
              <Mail size={20} /> 
            </a> 
          </div> 
        </div> 
      </div> 
    </footer> 
  ); 
}; 
 
export default Footer;