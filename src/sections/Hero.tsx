import React, { useEffect, useRef } from 'react';
import Button from '../components/Button';
import { FileDown } from 'lucide-react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) {
      title.style.opacity = '0';
      title.style.transform = 'translateY(20px)';
      setTimeout(() => {
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 100);
    }

    if (subtitle) {
      subtitle.style.opacity = '0';
      subtitle.style.transform = 'translateY(20px)';
      setTimeout(() => {
        subtitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 300);
    }

    if (cta) {
      cta.style.opacity = '0';
      cta.style.transform = 'translateY(20px)';
      setTimeout(() => {
        cta.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        cta.style.opacity = '1';
        cta.style.transform = 'translateY(0)';
      }, 500);
    }
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 bg-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-6xl">
      <h1
        ref={titleRef}
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent"
      >
        Backend Developer & AI Innovator
      </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          Designing scalable systems, crafting AI-powered tools, and building a future-proof tech career in Japan.
        </p>
        
        <div 
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button 
            href="#projects" 
            variant="primary"
            className="text-lg px-8 py-4 bg-white hover:bg-gray-200 text-black border-none"
          >
            Explore My Work
          </Button>
          
          <a 
            href="https://drive.google.com/uc?export=download&id=1_GEBy_x6vv_OcnZCm3mjdkFdyqDQQzhx"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-lg px-8 py-4 bg-transparent hover:bg-gray-800 text-white border border-gray-600 rounded transition-all duration-300"
          >
            <FileDown size={20} />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;