"use client"

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function AboutSection() {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20"
    >
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-white to-neutral-500">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neutral-300 via-white to-neutral-500"></div>
        </div>

        <Card className={cn(
          "border border-gray-800 bg-black/50 shadow-md transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6 text-gray-300 text-lg">
              <p>
                A passionate Full Stack developer currently pursuing a B.Tech in CSE at Jaypee Institute of Information Technology (Class of 2026). 
              </p>
              <p>
                Skilled in backend architecture, AI integration, and cloud services. My expertise lies in building robust APIs, integrating AI models, and optimizing system performance for scalability.
              </p>
              <p>
                Looking ahead, I'm actively learning Japanese (aiming for JLPT N3 by Dec 2025) to work in Japan's innovation ecosystem. I'm fascinated by the intersection of AI and traditional systems, creating solutions that enhance human capabilities.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest in AI research, contributing to open-source projects, or immersing myself in Japanese language and culture.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}