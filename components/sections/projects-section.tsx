"use client"

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type Project = {
  title: string
  description: string
  stack: string[]
  features?: string[]
  demoUrl?: string
  status?: string
  image: string
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
      status: "In production, launching June 2025",
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
      title: "Authentication Services",
      description: "Designed API for authentication services, including user registration, login, OTP Confirmation, and password recovery. Integrated with third-party services for enhanced security.",
      stack: ["FastAPI", "MongoDB", "AWS Cognito","JWT"],
      features: [
        "Drag-and-drop chatbot setup",
        "Upload internal documents as training data",
        "Analytics dashboard to track user queries"
      ],
      demoUrl: "https://assistants.leoqui.ai/",
      image: "/img/Customercare.png"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-white to-neutral-500">
            Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neutral-300 via-white to-neutral-500" />
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={el => projectRefs.current[index] = el}
              className={cn(
                "transition-all duration-1000",
                visibleProjects.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-20 scale-95"
              )}
            >
              <Card className="border border-gray-800 bg-black/50 shadow-md hover:shadow-lg hover:border-gray-700 transition-all duration-500">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-white">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-300">{project.description}</p>

                  {project.features && (
                    <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-gray-900/60 border-gray-700 text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  {project.demoUrl ? (
                    <Button
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:text-white"
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Live Demo
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                    <Badge
                      variant="outline"
                      className="border-gray-700 bg-gray-800/50 text-gray-300"
                    >
                      {project.status}
                    </Badge>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
