"use client"

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github, FileDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type ContactLink = {
  label: string
  icon: React.ReactNode
  href: string
}

export function ContactSection() {
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

  const contactLinks: ContactLink[] = [
    {
      label: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:Lakshyash5@gmail.com"
    },
    {
      label: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/lakshay-sharma2653/"
    },
    {
      label: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Laksii-fr"
    }
  ]

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = 'https://drive.google.com/uc?export=download&id=1_GEBy_x6vv_OcnZCm3mjdkFdyqDQQzhx'
    link.download = 'Lakshay_Sharma_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20"
    >
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-white to-neutral-500">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neutral-300 via-white to-neutral-500"></div>
        </div>

        <Card 
          className={cn(
            "border border-gray-800 bg-black/50 shadow-md transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <CardContent className="p-6 md:p-8">
            <div className="text-center space-y-6">
              <h3 className="text-xl font-medium text-gray-200">
                Let's connect and explore opportunities together
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                {contactLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
                    asChild
                  >
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
                  onClick={handleDownloadResume}
                >
                  <FileDown className="h-5 w-5 mr-2" />
                  Download Resume
                </Button>
              </div>
              
              <p className="text-gray-400 pt-4">
                I'm currently open to new opportunities and collaborations.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}