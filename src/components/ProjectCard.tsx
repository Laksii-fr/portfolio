import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  outcomes: string[];
  demoLink?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tech,
  outcomes,
  demoLink
}) => {
  return (
    <div className="bg-black border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-900">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span 
                key={index}
                className="text-xs bg-black border border-gray-700 text-gray-300 px-2 py-1 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Outcomes</h4>
          <ul className="list-disc pl-5 text-gray-300 text-sm">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
        
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-300 hover:text-white mt-2 transition-all"
          >
            <span className="mr-1">Demo</span>
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;