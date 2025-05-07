import React from 'react';
import Section from '../components/Section';
import SkillCard from '../components/SkillCard';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: "Languages & Databases",
      skills: ["Python (Primary language)", "C/C++", "SQL", "JavaScript", "MongoDB"]
    },
    {
      title: "Frameworks & APIs",
      skills: ["FastAPI", "Flask", "REST API Development"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (S3, EC2, Lambda)", "Azure", "Git & GitHub", "CI/CD Pipelines"]
    },
    {
      title: "AI & Tools",
      skills: ["OpenAI Assistant API", "Microsoft Azure Assistant API", "Prompt Engineering", "Generative AI"]
    }
  ];

  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, index) => (
          <SkillCard 
            key={index}
            title={group.title}
            skills={group.skills}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;