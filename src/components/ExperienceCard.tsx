import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  letterLink?: string;
}

const ExperienceCard: React.FC<ExperienceProps> = ({
  title,
  company,
  period,
  location,
  description,
  achievements,
  letterLink
}) => {
  return (
    <div className="mb-12 last:mb-0 border-l-2 border-gray-800 pl-6 relative">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-800"></div>
      
      <div className="mb-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="flex flex-wrap items-center gap-x-2 text-gray-400 mt-1">
          <span className="font-medium text-gray-300">{company}</span>
          <span>•</span>
          <span>{period}</span>
          <span>•</span>
          <span>{location}</span>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4">{description}</p>
      
      <ul className="space-y-2 mb-4">
        {achievements.map((achievement, index) => (
          <li key={index} className="text-gray-400 flex items-start">
            <span className="text-gray-600 mr-2">-</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
      
      {letterLink && (
        <a
          href={letterLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-400 hover:text-white transition-all text-sm group"
        >
          <span className="mr-1 group-hover:underline">Completion Letter</span>
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
};

export default ExperienceCard;