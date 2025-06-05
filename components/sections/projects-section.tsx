"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from "framer-motion"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
}

type Project = {
  title: string
  description: string
  stack: string[]
  features?: string[]
  demoUrl?: string
  githubUrl?: string
  status?: string
  image: string
}

function TiltedProjectCard({ project, index, isVisible }: { project: Project, index: number, isVisible: boolean }) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), springValues)
  const rotateY = useSpring(useMotionValue(0), springValues)
  const scale = useSpring(1, springValues)
  const opacity = useSpring(0)

  const [lastY, setLastY] = useState(0)

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return

    const rect = (ref.current as HTMLElement).getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    const rotationX = (offsetY / (rect.height / 2)) * -50
    const rotationY = (offsetX / (rect.width / 2)) * 50

    rotateX.set(rotationX)
    rotateY.set(rotationY)

    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)

    const velocityY = offsetY - lastY
    setLastY(offsetY)
  }

  function handleMouseEnter() {
    scale.set(1.15)
    opacity.set(1)
    setIsHovered(true)
  }

  function handleMouseLeave() {
    opacity.set(0)
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    setIsHovered(false)
  }

  return (
    <div
      className={cn(
        "transition-all duration-1000",
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-20 scale-95"
      )}
    >
      <figure
        ref={ref}
        className={cn(
          "relative w-full h-[500px] perspective-[800px] flex flex-col items-center justify-center transition-all duration-300",
          isHovered ? "z-50" : "z-10"
        )}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative w-full h-full transform-gpu"
          style={{
            rotateX,
            rotateY,
            scale,
            transformStyle: "preserve-3d"
          }}
        >
          {/* Card Container */}
          <div className="absolute inset-0 bg-black/50 border border-gray-800 rounded-lg shadow-lg hover:border-gray-700 transition-colors duration-300 backdrop-blur-sm">
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-4 space-y-3 flex flex-col h-[calc(100%-12rem)]">
              <h3 className="text-lg font-bold text-white">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-xs leading-relaxed overflow-y-auto">
                {project.description}
              </p>
              
              {project.features && (
                <ul className="list-disc list-inside text-gray-400 text-xs space-y-1 flex-shrink-0">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-1 flex-shrink-0">
                {project.stack.slice(0, 4).map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="bg-gray-900/60 border-gray-700 text-gray-300 text-xs px-2 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action Button - Fixed at bottom */}
              <div className="mt-auto pt-2 flex gap-2">
                {project.demoUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800/50 text-xs h-8"
                    asChild
                  >
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      Live Demo
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800/50 text-xs h-8"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      GitHub
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                )}
                {!project.demoUrl && project.status && (
                  <Badge
                    variant="outline"
                    className="border-gray-700 bg-gray-800/50 text-gray-300 text-xs"
                  >
                    {project.status}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* 3D Overlay Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg pointer-events-none"
            style={{
              transform: "translateZ(10px)"
            }}
          />
        </motion.div>

        {/* Tooltip */}
        <motion.div
          className="pointer-events-none absolute left-0 top-0 rounded bg-white px-2 py-1 text-xs text-gray-900 z-10"
          style={{
            x,
            y,
            opacity,
          }}
        >
          {project.title}
        </motion.div>
      </figure>
    </div>
  )
}

export function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex(ref => ref === entry.target)
            if (index !== -1 && !visibleProjects.includes(index)) {
              setVisibleProjects(prev => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleProjects])

  const projects: Project[] = [
    {
      title: "NeuraMail – AI Email Assistant",
      description: "Automated AI assistant for parsing, classifying, and responding to customer emails using LLMs. Built for modern support teams.",
      stack: ["FastAPI", "MongoDB", "SMTP"],
      features: [
        "Email parsing and category tagging",
        "GPT-based reply suggestions",
        "Smart draft generation for agents"
      ],
      status: "In production, launching July 2025",
      githubUrl: "https://github.com/Laksii-fr/NeuraMail-API.git",
      image: "/img/Neuramail.png"
    },
    {
      title: "AI Agents Portal",
      description: "A centralized workspace to test, manage, and monitor AI agents with credit-based usage tracking and sandbox environments.",
      stack: ["Python", "FastAPI", "MongoDB", "AWS"],
      features: [
        "Run multiple agents in parallel",
        "Credit/token-based usage system",
        "Real-time analytics and response logs"
      ],
      demoUrl: "http://65.2.39.20:3001/",
      image: "/img/Agnets.png"
    },
    {
      title: "Customer Care Chatbot Builder",
      description: "No-code platform to design, train, and deploy AI chatbots on company-specific data. Easy iframe or API integration supported.",
      stack: ["FastAPI", "MongoDB", "OpenAI"],
      features: [
        "Drag-and-drop chatbot setup",
        "Upload internal documents as training data",
        "Analytics dashboard to track user queries"
      ],
      demoUrl: "https://assistants.leoqui.ai/",
      image: "/img/Customercare.png"
    },
    {
      title: "AI-Powered Test Paper Generator",
      description: "A web-based tool designed for educators to instantly generate customized test papers by specifying topics, difficulty levels, and question formats.",
      stack: ["FastAPI", "MongoDB", "AWS", "Langgraph"],
      features: [
        "Auto-generate questions based on subject & difficulty",
        "Export-ready test paper format",
        "Reduces manual workload by over 60%"
      ],
      demoUrl: "https://avatar.mashmari.in/",
      image: "/img/Testpaper.png"
    },
    {
      title: "Authentication Services",
      description: "Designed API for authentication services, including user registration, login, OTP Confirmation, and password recovery. Integrated with third-party services for enhanced security.",
      stack: ["FastAPI", "MongoDB", "AWS Cognito","JWT"],
      features: [
        "Secure user registration and login",
        "OTP-based verification system",
        "Password recovery and management"
      ],
      githubUrl: "https://github.com/Laksii-fr/Authentication-Services.git",
      image: "/img/Auth Service.png"
    },
    {
      title: "AI Powered Web Scraper",
      description: "A versatile web scraping tool that uses AI to extract structured data from websites, enabling users to gather insights and automate data collection.",
      stack: ["FastAPI", "MongoDB", "AWS Cognito", "BeautifulSoup", "Selenium", "CrewAI", "Multi Agent System"],
      features: [
        "AI-driven data extraction",
        "Supports multiple websites and formats",
        "Automated Sub links scraping and data storage",
        "Provides structured data output"
      ],
      githubUrl: "https://github.com/Laksii-fr/AI-Web-Scraper.git",
      image: "/img/AI Web Scraper.png"
    },
    {
      title: "Dev Connect",
      description: "A platform for developers to connect with each other and share their projects, Achievements, and skills. It's a social platform where developers can share their projects, startup ideas and get feedback from other developers.",
      stack: ["Express", "MongoDB", "JWT Auth", "CrewAI", "Multi Agent System"],
      features: [
        "User Authentication",
        "User can share their projects, startup ideas and get feedback from other developers",
        "User can follow other developers and see their projects and achievements",
        "User can comment on other developers' projects and ideas",
      ],
      githubUrl: "https://github.com/Laksii-fr/Dev-Connect-API.git",
      image: "/img/DevConnect.png"
    },
    {
      title: "Personal Portfolio",
      description: "My personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
      stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design",
        "Smooth animations",
        "Easy to maintain",
      ],
      githubUrl: "https://github.com/Laksii-fr/portfolio",
      demoUrl: "https://lakshay-sharma-dev.netlify.app/",
      image: "/img/Portfolio.png"
    },
    {
      title: "Rail-Madad-SIH-Backend ",
      description: "A AI Powered backend for a platform that helps railway passengers in case of emergencies. It provides a centralized system for passengers to report emergencies and get help from the railway authorities.",
      stack: ["FastAPI", "MongoDB", "AWS", "Langchain", "CrewAI", "Multi Agent System"],
      features: [
        "AI-Powered Complaint Management",
        "Automated Multimedia Analysis",
        "Urgency Detection",
        "Real-Time Status Updates",
        "Smart Routing"
      ],
      githubUrl: "https://github.com/Laksii-fr/Rail-Madad-SIH-Backend.git",
      image: "/img/RailMadad.png"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-white to-neutral-500">
            Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neutral-300 via-white to-neutral-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={el => projectRefs.current[index] = el}
            >
              <TiltedProjectCard 
                project={project} 
                index={index} 
                isVisible={visibleProjects.includes(index)}
              />
            </div>
          ))}
        </div>

        {/* Mobile Warning */}
        <div className="block sm:hidden text-center text-gray-400 text-sm">
          For the best experience, view on desktop to see the 3D tilt effects.
        </div>
      </div>
    </section>
  )
}