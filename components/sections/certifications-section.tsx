"use client"

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type Certification = {
  title: string
  issuer: string
  year: string
}

export function CertificationsSection() {
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

  const certifications: Certification[] = [
    {
      title: "Python Certification",
      issuer: "Kaggle",
      year: "2023"
    },
    {
      title: "Cloud Computing",
      issuer: "Google Developer Student Club",
      year: "2022"
    },
    {
      title: "AI & ML",
      issuer: "IIT Roorkee",
      year: "2022"
    },
    {
      title: "Javascript Bootcamp",
      issuer: "Microsoft Learn Student Ambassador",
      year: "2022"
    },
    {
      title: "Advance Python Programming",
      issuer: "Udemy",
      year: "2025"
    },
    {
      title: "Global Employability Test",
      issuer: "Wheebox ETS",
      year: "2024"
    }
  ]

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20"
    >
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-white to-neutral-500">
            Certifications
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neutral-300 via-white to-neutral-500"></div>
        </div>

        <Card 
          className={cn(
            "border border-gray-800 bg-black/50 shadow-md transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <CardContent className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.title}
                className="flex items-start gap-3 p-4 rounded-lg border border-gray-800 bg-gray-900/20"
              >
                <CheckCircle2 className="h-5 w-5 text-gray-400 mt-1" />
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-white">{cert.title}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-400">{cert.issuer}</p>
                    <Badge variant="outline" className="border-gray-700 text-gray-400">
                      {cert.year}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}