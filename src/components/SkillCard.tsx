import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className="bg-black border border-gray-800 p-6 rounded-lg transition-all duration-300 hover:bg-gray-900">
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li 
            key={index} 
            className="text-gray-300 flex items-center"
          >
            <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;