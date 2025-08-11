import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection } from '@/components/experience-section';
import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sohan Karfa",
  "url": "https://your-portfolio-url.com", // Replace with your actual domain
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
