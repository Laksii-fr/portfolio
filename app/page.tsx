import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { CertificationsSection } from '@/components/sections/certifications-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navigation />
      <div className="container px-11 md:px-13 mx-auto max-w-7xl">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}