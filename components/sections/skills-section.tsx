"use client"

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { 
  Code2, Database, Cloud, BrainCircuit,
} from 'lucide-react'
import { 
  SiPython, SiCplusplus, SiJavascript, SiMongodb,
  SiFastapi, SiFlask, SiExpress, SiDjango,
  SiAmazon, SiGithub, SiDocker,
  SiOpenai, SiRobotframework,
  SiTensorflow, SiHuggingface, SiMysql
} from 'react-icons/si'

type SkillCategory = {
  title: string
  icon: React.ReactNode
  skills: Array<{
    name: string
    icon: React.ReactNode
  }>
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages & Databases",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: "Python", icon: <SiPython className="h-5 w-5" /> },
        { name: "C/C++", icon: <SiCplusplus className="h-5 w-5" /> },
        { name: "SQL", icon: <SiMysql className="h-5 w-5" /> },
        { name: "JavaScript", icon: <SiJavascript className="h-5 w-5" /> },
        { name: "MongoDB", icon: <SiMongodb className="h-5 w-5" /> }
      ]
    },
    {
      title: "Frameworks & APIs",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "FastAPI", icon: <SiFastapi className="h-5 w-5" /> },
        { name: "Flask", icon: <SiFlask className="h-5 w-5" /> },
        { name: "REST API Development", icon: <Code2 className="h-5 w-5" /> },
        { name: "Express.js", icon: <SiExpress className="h-5 w-5" /> },
        { name: "Django", icon: <SiDjango className="h-5 w-5" /> }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "AWS (S3, EC2, Lambda)", icon: <SiAmazon className="h-5 w-5" /> },
        { name: "Azure", icon: <Cloud className="h-5 w-5" /> },
        { name: "Git/GitHub", icon: <SiGithub className="h-5 w-5" /> },
        { name: "CI/CD", icon: <Cloud className="h-5 w-5" /> },
        { name: "Docker", icon: <SiDocker className="h-5 w-5" /> }
      ]
    },
    {
      title: "AI & Tools",
      icon: <BrainCircuit className="h-6 w-6" />,
      skills: [
        { name: "OpenAI API", icon: <SiOpenai className="h-5 w-5" /> },
        { name: "Azure Assistant API", icon: <Cloud className="h-5 w-5" /> },
        { name: "Prompt Engineering", icon: <SiRobotframework className="h-5 w-5" /> },
        { name: "Generative AI", icon: <SiTensorflow className="h-5 w-5" /> },
        { name: "LLM Integration", icon: <SiHuggingface className="h-5 w-5" /> }
      ]
    }
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20"
    >
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-white to-neutral-500">
            Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neutral-300 via-white to-neutral-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={cn(
                "border border-gray-800 bg-black/50 shadow-md hover:shadow-lg hover:border-gray-700 transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "transition-delay-300": index % 2 === 1 }
              )}
            >
              <CardHeader className="flex flex-row items-center gap-3 pb-4">
                {category.icon}
                <CardTitle className="text-2xl font-bold text-white">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill.name} 
                      variant="outline"
                      className="bg-gray-900/60 hover:bg-gray-800 border-gray-700 text-gray-300 hover:text-white transition-colors flex items-center gap-2 px-4 py-2 text-base"
                    >
                      {skill.icon}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}