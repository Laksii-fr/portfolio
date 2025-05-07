import React from 'react';
import Section from '../components/Section';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      label: "Email",
      value: "Lakshyash5@gmail.com",
      href: "mailto:Lakshyash5@gmail.com",
      icon: <Mail className="mr-2" size={20} />
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/lakshay-sharma2653",
      href: "https://www.linkedin.com/in/lakshay-sharma2653/",
      icon: <Linkedin className="mr-2" size={20} />
    },
    {
      label: "GitHub",
      value: "github.com/Laksii-fr",
      href: "https://github.com/Laksii-fr",
      icon: <Github className="mr-2" size={20} />
    }
  ];

  return (
    <Section id="contact" title="Contact Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-300 mb-6">
            Feel free to reach out for collaboration opportunities, project inquiries, or just to connect. I'm always open to discussing new projects and ideas.
          </p>
          
          <ul className="space-y-4">
            {contactLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-white transition-all duration-300"
                >
                  {link.icon}
                  <span>{link.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Portfolio Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="https://avatar.mashmari.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-center"
            >
              <h4 className="font-medium text-white mb-1">Test Paper Generater</h4>
              <p className="text-gray-400 text-sm">Generate Test Paper</p>
            </a>
            
            <a 
              href="https://assistants.leoqui.ai/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-center"
            >
              <h4 className="font-medium text-white mb-1">Assistant Builder</h4>
              <p className="text-gray-400 text-sm">Create custom AI chatbots</p>
            </a>
            
            <a 
              href="http://65.2.39.20:3001/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-center sm:col-span-2"
            >
              <h4 className="font-medium text-white mb-1">AI-Agents Portal</h4>
              <p className="text-gray-400 text-sm">Portal to access AI agents deployed by users</p>
            </a>
            
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;