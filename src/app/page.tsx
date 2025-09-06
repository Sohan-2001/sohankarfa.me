"use client";

import { useState, useEffect } from 'react';
import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';
import { Preloader } from '@/components/preloader';
import { cn } from '@/lib/utils';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sohan Karfa",
  "url": "https://sohankarfa.me", // Replace with your actual domain
  "image": "https://sxldi6vsg8pc7vjq.public.blob.vercel-storage.com/PIVduhep_400x400.jpg",
  "jobTitle": "Full-Stack Software Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Accenture"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Lovely Professional University"
  },
  "knowsAbout": ["Next.js", "React", "TypeScript", "Python", "Genkit AI", "Firebase", "PostgreSQL", "Tailwind CSS", "SAP ABAP"],
  "sameAs": [
    "https://github.com/sohan-2001",
    "https://www.linkedin.com/in/sohan-karfa-72819521b/",
    "https://x.com/SohanKarfa"
  ]
};

const sections = [
  { Component: AboutSection, key: 'about' },
  { Component: SkillsSection, key: 'skills' },
  { Component: ProjectsSection, key: 'projects' },
  { Component: ExperienceSection, key: 'experience' },
  { Component: ContactSection, key: 'contact' },
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const heroTimer = setTimeout(() => setHeroLoaded(true), 100); // Short delay for fade-in
      return () => clearTimeout(heroTimer);
    }, 1500); // Simulate preloading time

    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (heroLoaded) {
      const sectionTimers = sections.map((_, index) => 
        setTimeout(() => {
          setVisibleSections(prev => prev + 1);
        }, index * 300) // Stagger the appearance of each section
      );
      return () => sectionTimers.forEach(clearTimeout);
    }
  }, [heroLoaded]);


  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {loading && <Preloader />}

      <div className={cn("transition-opacity duration-500", loading ? "opacity-0" : "opacity-100")}>
        <SiteHeader />
        <main className="flex-grow">
          <div className={cn("transition-opacity duration-700", heroLoaded ? "opacity-100" : "opacity-0")}>
            <HeroSection />
          </div>
          
          {sections.map(({ Component, key }, index) => (
            <div key={key} className={cn("transition-opacity duration-700 ease-in", visibleSections > index ? "opacity-100" : "opacity-0")}>
              {visibleSections > index && <Component />}
            </div>
          ))}
        </main>
        <div className={cn("transition-opacity duration-700 ease-in", visibleSections > sections.length ? "opacity-100" : "opacity-0")}>
            {visibleSections > sections.length && <SiteFooter />}
        </div>
      </div>
    </div>
  );
}
