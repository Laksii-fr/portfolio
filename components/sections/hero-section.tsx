"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center py-20 md:py-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-white to-neutral-500">
              Backend Developer & AI Innovator
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl text-gray-400">
              Designing scalable systems, crafting AI-powered tools, and building a future-proof tech career in Artifical Intelligence field.
            </h2>
          </div>
          
          <div className="pt-4">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 transition-colors"
            >
              Explore My Work
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative w-60 h-60 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neutral-300 via-white to-neutral-500 blur-md opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-2 border-gray-800 overflow-hidden">
              <Image
                src="/img/self.jpeg"
                alt="Lakshay Sharma"
                className="object-cover"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  )
}