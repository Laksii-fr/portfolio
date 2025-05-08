"use client"

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Experience = {
  company: string
  position: string
  period: string
  achievements: string[]
  letterUrl: string
}

export function ExperienceSection() {
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

  const experiences: Experience[] = [
    {
      company: "Tryzentt Pvt. Ltd.",
      position: "AI/ML Developer & Full Stack Intern",
      period: "Jun 2024 - Apr 2024",
      achievements: [
        "Built and deployed 5+ production-grade REST APIs that automated repetitive workflows in client applications, resulting in a 40% reduction in manual backend tasks.",
        "Integrated OpenAI GPT-3.5 into internal tools to generate smart suggestions, improving automation accuracy by 35% and enabling faster decision-making for users.",
        "Conducted backend profiling and implemented code-level optimizations that reduced average API response time by 27%, leading to a smoother user experience.",
        "Collaborated with frontend teams to implement seamless AI functionality via iframe/API, ensuring high availability and ease of integration."
      ],
      letterUrl: "https://drive.google.com/file/d/13FaAIsA_48MuzWm8zAmHR0jykwF-0wKW/view"
    },
    {
      company: "ABSAX Technologies Pvt. Ltd.",
      position: "Backend Developer Intern",
      period: "Jun 2023 - Aug 2023",
      achievements: [
        "Revamped the Two-Factor Authentication (2FA) system using cryptographic techniques, improving authentication security and reducing vulnerability risk by 43%.",
        "Redesigned and optimized the User Authentication System (UAS), cutting down login processing time by 52% through efficient backend logic and database queries.",
        "Worked in a cross-functional engineering team of 5 to ensure robust cloud deployment using AWS, contributing to a stable and secure user access pipeline."
      ],
      letterUrl: "https://drive.google.com/file/d/1S-Acnk2B53LRy8iSrtBlGjvKAaai93Pg/view"
    }
  ];
  

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20"
    >
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-white to-neutral-500">
            Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neutral-300 via-white to-neutral-500"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.company}
              className={cn(
                "border border-gray-800 bg-black/50 shadow-md transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                { "transition-delay-300": index === 1 }
              )}
            >
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="text-xl font-bold text-white">
                      {exp.position}
                    </CardTitle>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="md:self-start text-gray-400 border-gray-700 w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex gap-2">
                      <span>•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="mt-2 border-gray-700 text-gray-300 hover:text-white"
                  asChild
                >
                  <a 
                    href={exp.letterUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Completion Letter
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}