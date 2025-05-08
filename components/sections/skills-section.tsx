"use client"

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { 
  Code2, Database, Cloud, BrainCircuit,
} from 'lucide-react'

type SkillCategory = {
  title: string
  icon: React.ReactNode
  skills: string[]
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
      icon: <Code2 className="h-5 w-5" />,
      skills: ["Python", "C/C++", "SQL", "JavaScript", "MongoDB"]
    },
    {
      title: "Frameworks & APIs",
      icon: <Database className="h-5 w-5" />,
      skills: ["FastAPI", "Flask", "REST API Development", "Express.js", "Django"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["AWS (S3, EC2, Lambda)", "Azure", "Git/GitHub", "CI/CD", "Docker"]
    },
    {
      title: "AI & Tools",
      icon: <BrainCircuit className="h-5 w-5" />,
      skills: ["OpenAI API", "Azure Assistant API", "Prompt Engineering", "Generative AI", "LLM Integration"]
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={cn(
                "border border-gray-800 bg-black/50 shadow-md hover:shadow-lg hover:border-gray-700 transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "transition-delay-300": index % 2 === 1 }
              )}
            >
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                {category.icon}
                <CardTitle className="text-xl font-bold text-white">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline"
                      className="bg-gray-900/60 hover:bg-gray-800 border-gray-700 text-gray-300 hover:text-white transition-colors"
                    >
                      {skill}
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