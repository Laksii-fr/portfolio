"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    )}>
      <div className="container px-12 md:px-14 mx-auto max-w-8xl">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="#hero" 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-white to-neutral-500"
          >
            Lakshay Sharma
          </Link>
          
          <nav className="hidden md:flex gap-6">
            {sections.map((section) => (
              <Link 
                key={section.name}
                href={section.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-white/30 px-2 py-1 rounded-md"
              >
                {section.name}
              </Link>
            ))}
          </nav>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-gray-800">
          <div className="container px-4 py-4 flex flex-col gap-4">
            {sections.map((section) => (
              <Link 
                key={section.name}
                href={section.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-white/30 py-2 px-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}