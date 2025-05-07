import React from 'react';
import Section from '../components/Section';
import ExperienceCard from '../components/ExperienceCard';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "AI/ML Developer & Full Stack Intern",
      company: "Tryzentt Pvt. Ltd.",
      period: "June 2024 – April 2025",
      location: "Delhi, India",
      description: "At Tryzentt, I worked on designing and integrating AI automation pipelines into production-grade applications.",
      achievements: [
        "Built and integrated 5+ REST APIs, reducing manual processing time by 40%",
        "Integrated LLMs like GPT-3.5 into backend workflows, improving AI accuracy by 35%",
        "Optimized core backend services, reducing response latency by 27%",
        "Supported the front-end team in integrating AI flows via API and iframe"
      ],
      letterLink: "https://drive.google.com/file/d/13FaAIsA_48MuzWm8zAmHR0jykwF-0wKW/view"
    },
    {
      title: "Backend Developer Intern",
      company: "ABSAX Technologies Pvt. Ltd.",
      period: "June 2023 – August 2023",
      location: "Noida, India",
      description: "Worked on high-impact security architecture and system performance improvements.",
      achievements: [
        "Overhauled the 2FA system using secure token and cryptographic enhancements (43% security boost)",
        "Improved user login experience by reducing average authentication time by 52%",
        "Worked on AWS-based system deployment and infrastructure tuning"
      ],
      letterLink: "https://drive.google.com/file/d/1S-Acnk2B53LRy8iSrtBlGjvKAaai93Pg/view"
    }
  ];

  return (
    <Section id="experience" title="Experience">
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            location={exp.location}
            description={exp.description}
            achievements={exp.achievements}
            letterLink={exp.letterLink}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience;