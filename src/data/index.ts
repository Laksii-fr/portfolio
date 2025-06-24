import emailClassifyImg from "../../public/email-classify.png";
import neuramailImg from "../../public/neuramail.png";
import agentsPortalImg from "../../public/agents-portal.png";
import tryzenttImg from "../../public/tryzentt.png";
import testGenImg from "../../public/test-generator.png";
import authImg from "../../public/auth.png";
import scraperImg from "../../public/scraper.png";
import portfolioImg from "../../public/portfolio.png";
import railmadadImg from "../../public/railmadad.png";
import flask from "../../public/flask.png";

export const projectList = [
  {
    id: 1,
    title: "NeuraMail – AI Email Assistant",
    tag: "top",
    category: "AI",
    image: neuramailImg,
    description:
      "Automated AI assistant for parsing, classifying, and responding to customer emails using LLMs. Built for modern support teams.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    ],
    github: "https://github.com/Laksii-fr/NeuraMail-API.git",
    features: [
      "Email parsing and category tagging",
      "GPT-based reply suggestions",
      "Smart draft generation for agents",
    ],
  },
  {
    id: 2,
    title: "AI Agents Portal",
    category: "AI",
    image: agentsPortalImg,
    description:
      "Centralized workspace to test, manage, and monitor AI agents with credit-based usage tracking and sandbox environments.",
    tech: [
      
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    ],
    url: "http://65.2.39.20:3001/",
    github: "undefined",
    features: [
      "Run multiple agents in parallel",
      "Credit/token-based usage system",
      "Real-time analytics and response logs",
    ],
  },
  {
    id: 3,
    title: "Tryzentt – No/Low Code Chatbot Builder",
    tag: "top",
    category: "AI",
    image: tryzenttImg,
    description:
      "No-code platform to design, train, and deploy AI chatbots on company-specific data. Easy iframe or API integration supported.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    ],
    url: "https://assistants.tryzent.com/",
    github: "https://assistants.tryzent.com/",
    features: [
      "Drag-and-drop chatbot setup",
      "Upload internal documents as training data",
      "Analytics dashboard to track user queries",
    ],
  },
  {
    id: 4,
    title: "AI-Powered Test Paper Generator",
    category: "AI",
    image: testGenImg,
    description:
      "Web-based tool to instantly generate customized test papers based on topics, difficulty levels, and question formats.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    ],
    url: "https://avatar.mashmari.in/",
    github: "https://avatar.mashmari.in/",
    features: [
      "Auto-generate questions based on subject & difficulty",
      "Export-ready test paper format",
      "Reduces manual workload by over 60%",
    ],
  },
  {
    id: 5,
    title: "Authentication Services",
    category: "backend",
    image: authImg,
    description:
      "API for authentication services including user registration, login, OTP confirmation, and password recovery.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    ],
    github: "https://github.com/Laksii-fr/Authentication-Services.git",
    features: [
      "Secure user registration and login",
      "OTP-based verification system",
      "Password recovery and management",
    ],
  },
  {
    id: 6,
    title: "AI Powered Web Scraper",
    category: "backend",
    image: scraperImg,
    description:
      "Versatile tool using AI to extract structured data from websites. Supports automated sub-link scraping.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    ],
    github: "https://github.com/Laksii-fr/AI-Web-Scraper.git",
    features: [
      "AI-driven data extraction",
      "Supports multiple websites and formats",
      "Automated sub-links scraping and data storage",
    ],
  },
  {
    id: 7,
    title: "Personal Portfolio",
    category: "frontend",
    image: portfolioImg,
    description:
      "Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ],
    url: "https://lakshay-sharma-dev.netlify.app/",
    github: "https://github.com/Laksii-fr/portfolio",
    features: ["Responsive design", "Smooth animations", "Easy to maintain"],
  },
  {
    id: 8,
    title: "Rail-Madad-SIH-Backend",
    category: "AI",
    image: railmadadImg,
    description:
      "AI-powered backend platform for helping railway passengers during emergencies.",
    tech: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    ],
    github: "https://github.com/Laksii-fr/Rail-Madad-SIH-Backend.git",
    features: [
      "AI-Powered Complaint Management",
      "Automated Multimedia Analysis",
      "Urgency Detection",
      "Real-Time Status Updates",
      "Smart Routing",
    ],
  },
];


export const skills = [
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    name: "Python",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    name: "C/C++",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    name: "SQL",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    name: "FastAPI",
  },
  {
    url: "https://www.pngfind.com/pngs/m/128-1286693_flask-framework-logo-svg-hd-png-download.png",
    name: "Flask",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    name: "Django",
  },
  {
    url: "https://netforemost.com/wp-content/uploads/2024/08/1646733543-1.webp",
    name: "Express.js",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "Next.js",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    name: "React.js",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    name: "HTML",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    name: "AWS",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    name: "Azure",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git/GitHub",
  },
  {
    url: "https://img.icons8.com/ios11/512/FFFFFF/github.png",
    name: "CI/CD",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    name: "Firebase",
  },
  {
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    name: "Google Cloud",
  },
  {
    url: "https://img.icons8.com/pulsar-line/512/FFFFFF/chatgpt.png",
    name: "OpenAI Assistant API",
  },
  {
    url: "https://learn.microsoft.com/favicon.ico",
    name: "Microsoft Azure Assistant API",
  },
  {
    url: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langchain.png",
    name: "Langchain",
  },
  {
    url: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langgraph-color.png",
    name: "LangGraph",
  },
  {
    url: "https://mintlify.s3.us-west-1.amazonaws.com/crewai/images/crew_only_logo.png",
    name: "CrewAI",
  }
];
export const socials = [
  {
    id: 1,
    name: "Twitter",
    username: "Siddanth6365",
    url: "https://x.com/Siddanth6365",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg",
  },
  {
    id: 2,
    name: "Github",
    username: "laksii-fr",
    url: "https://github.com/siddanth-6365",
    image:
      "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
  },
  {
    id: 3,
    name: "LinkedIn",
    username: "siddanth-reddy",
    url: "https://www.linkedin.com/in/lakshay-sharma2653/",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
  },
];

export const WorkExpcontents = [
  {
    title: "AI/ML Developer & Full Stack Intern",
    company: "Tryzentt Pvt. Ltd.",
    date: "Jun 2024 – Apr 2024",
    description: [
      "Built and deployed 5+ production-grade REST APIs that automated repetitive workflows in client applications, resulting in a 40% reduction in manual backend tasks.",
      "Integrated OpenAI GPT-3.5 into internal tools to generate smart suggestions, improving automation accuracy by 35% and enabling faster decision-making for users.",
      "Conducted backend profiling and implemented code-level optimizations that reduced average API response time by 27%, leading to a smoother user experience.",
      "Collaborated with frontend teams to implement seamless AI functionality via iframe/API, ensuring high availability and ease of integration.",
    ],
  },
  {
    title: "Backend Developer Intern",
    company: "ABSAX Technologies Pvt. Ltd.",
    date: "Jun 2023 – Aug 2023",
    description: [
      "Revamped the Two-Factor Authentication (2FA) system using cryptographic techniques, improving authentication security and reducing vulnerability risk by 43%.",
      "Redesigned and optimized the User Authentication System (UAS), cutting down login processing time by 52% through efficient backend logic and database queries.",
      "Worked in a cross-functional engineering team of 5 to ensure robust cloud deployment using AWS, contributing to a stable and secure user access pipeline.",
    ],
  },
];  

export const commandsAnswers = {
  whoami: "Lakshay Sharma",
  about:
    "Full-stack AI developer passionate about building AI-native systems, agentic workflows, and production-grade backend APIs to power intelligent applications.",
  education: "B.Tech. - CSE (Artificial Intelligence) at JIIT-Noida (2022–2026)",
  email: "lakshyash5@gmail.com",
  socials:
    "LinkedIn: https://www.linkedin.com/in/lakshay-sharma2653 \nGitHub: github.com/Laksii-fr\nPortfolio: lakshay-sharma-dev.netlify.app",
  skills:
    "Languages: Python, C++, JavaScript, SQL\nBackend: FastAPI, Flask, Django, Express.js\nFrontend: React.js, Next.js, HTML, CSS\nDatabases: MongoDB, Firebase, PostgreSQL\nCloud & DevOps: AWS, Azure, Google Cloud, Git/GitHub, CI/CD\nAI & Tools: OpenAI, LangChain, LangGraph, CrewAI, Prompt Engineering",
  experience:
    "AI/ML Developer Intern at Tryzentt (Jun 2024 – Apr 2024)\nBackend Developer Intern at ABSAX Technologies (Jun 2023 – Aug 2023)",
  help: "Available commands: whoami, about, education, email, socials, skills, experience",
};

export const resumeLink =
  "https://drive.google.com/file/d/1_GEBy_x6vv_OcnZCm3mjdkFdyqDQQzhx/view?usp=drive_link";
