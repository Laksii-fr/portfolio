import React from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI-Powered Test Paper Generator",
      description:
        "A smart web-based tool that enables educators to generate question papers tailored to subjects, difficulty levels, and formats using natural language input. It uses AI to recommend questions, shuffle formats, and structure papers automatically, streamlining the entire process.",
      tech: ["FastAPI", "MongoDB", "AWS"],
      outcomes: [
        "Reduced manual workload by 60%",
        "Improved test creation speed and flexibility",
        "Helped educators focus on teaching instead of formatting"
      ],
      demoLink: "https://avatar.mashmari.in/"
    },
    {
      title: "Customer Care Chatbot Builder",
      description:
        "A no-code platform to create, configure, and deploy AI-powered customer support chatbots. Users can define chatbot behavior, customize agent personalities, and integrate the bots via iframe or API for real-time support in websites or platforms.",
      tech: ["FastAPI", "MongoDB", "OpenAI", "AWS"],
      outcomes: [
        "Drag-and-drop no-code chatbot interface",
        "Customizable AI agents with NLP capabilities",
        "Real-time dashboard and analytics panel",
        "Adopted by 10+ early-stage startups to automate customer interactions"
      ],
      demoLink: "https://assistants.leoqui.ai/"
    },
    {
      title: "NeuraMail — AI Email Assistant",
      description:
        "A powerful AI-integrated email automation tool that scans incoming customer emails, understands the context using LLMs, and generates intelligent replies. Designed for scalability and minimal manual intervention for help desks and support teams.",
      tech: ["FastAPI", "SMTP", "Python", "MongoDB"],
      outcomes: [
        "Intelligent email parsing and categorization",
        "Intent recognition using natural language models",
        "Automated draft replies based on context",
        "Currently in production, targeting full launch by June 2025"
      ]
    },
    {
      title: "AI Agents Portal",
      description:
        "A centralized platform where users can experiment with AI agents using a credits system. Features include agent selection, real-time result viewing, credit tracking, and token-based secure access for sandbox testing of LLM capabilities.",
      tech: ["Python", "FastAPI", "MongoDB", "AWS"],
      outcomes: [
        "Token-authenticated AI sandbox environment",
        "Usage-based credit system with backend logic",
        "Real-time analytics for tracking agent performance and usage"
      ],
      demoLink: "http://65.2.39.20:3001/"
    }
  ];

  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            outcomes={project.outcomes}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;