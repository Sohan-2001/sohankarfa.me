"use client"

import * as React from "react"
import { Code, Server, Database, Cog, Star, ChevronLeft, ChevronRight, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const skillsData = {
  frontend: [
    { name: "React / Next.js", level: 95, description: "Building dynamic, high-performance web applications." },
    { name: "JavaScript / TypeScript", level: 90, description: "Core of my web projects, for both client and server-side logic." },
    { name: "HTML5 & CSS3", level: 95, description: "Fundamental for all web development and email templates." },
    { name: "Tailwind CSS", level: 85, description: "My go-to for rapidly building modern, responsive UIs." },
  ],
  backend: [
    { name: "Node.js / Express", level: 90, description: "Creating RESTful APIs and scalable microservices." },
    { name: "Python / Django", level: 75, description: "Used for data-driven backends and web applications." },
    { name: "REST & GraphQL APIs", level: 85, description: "Designing and consuming both REST and GraphQL APIs." },
    { name: "Authentication (JWT)", level: 80, description: "Implementing secure authentication for web and mobile." },
  ],
  databases: [
    { name: "PostgreSQL", level: 85, description: "My primary choice for relational database management." },
    { name: "MongoDB", level: 80, description: "Expertise in NoSQL databases for flexible data models." },
    { name: "Firebase", level: 70, description: "Leveraging for real-time data and authentication services." },
    { name: "SQL & NoSQL", level: 85, description: "Proficient in both relational and non-relational database design." },
  ],
  tools: [
    { name: "Git & GitHub", level: 95, description: "Essential for version control and collaborative development." },
    { name: "Docker", level: 80, description: "Containerizing applications for consistent deployments." },
    { name: "Vercel / Netlify", level: 90, description: "Deploying and managing modern frontend applications." },
    { name: "CI/CD Pipelines", level: 75, description: "Automating build, test, and deployment workflows." },
  ],
  others: [
    { name: "Agile Methodologies", level: 90, description: "Working in Scrum and Kanban environments for efficient delivery." },
    { name: "UI/UX Principles", level: 80, description: "Applying user-centric design and research principles." },
    { name: "Problem Solving", level: 95, description: "Expertise in algorithms and system architecture design." },
    { name: "Communication", level: 95, description: "Collaborating effectively with team members and clients." },
  ],
}

const categoryIcons: { [key: string]: React.ElementType } = {
  frontend: Code,
  backend: Server,
  databases: Database,
  tools: Cog,
  others: Star,
}

type Category = keyof typeof skillsData

const SkillCard = ({ category, skills }: { category: Category; skills: (typeof skillsData)[Category] }) => {
  const Icon = categoryIcons[category]
  const title = category === "tools" ? "Tools & DevOps" : category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div className="bg-card text-card-foreground rounded-2xl shadow-md p-6 w-64 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="h-6 w-6 text-primary" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <span className="font-medium text-sm">{skill.name}</span>
            <div className="w-full h-2 rounded-full bg-secondary mt-1">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${skill.level}%` }}
                aria-label={`${skill.name} proficiency ${skill.level}%`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const UsageDetails = ({ category, isVisible }: { category: Category, isVisible: boolean }) => {
  const skills = skillsData[category];
  const title = category === "tools" ? "Tools & DevOps" : category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className={cn(
      "bg-card text-card-foreground rounded-2xl shadow-md p-6 w-full max-w-md transition-all duration-500",
      isVisible ? 'animate-fade-up' : 'opacity-0'
    )}>
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Info className="h-6 w-6 text-primary" /> {title} Usage</h3>
      <ul className="space-y-3 text-muted-foreground">
        {skills.map(skill => (
          <li key={skill.name} className="flex gap-2">
            <span className="font-semibold text-foreground">{skill.name}:</span>
            <span>{skill.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}


export function SkillsSection() {
  const categories = Object.keys(skillsData) as Category[]
  const [activeIndex, setActiveIndex] = React.useState(0)
  const touchStartX = React.useRef(0)

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % categories.length)
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length)

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === 0) return
    const touchEndX = e.touches[0].clientX
    const diff = touchStartX.current - touchEndX
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext()
      else handlePrev()
      touchStartX.current = 0
    }
  }

  const cardAngle = 360 / categories.length
  
  const [radius, setRadius] = React.useState(220);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(180); // Smaller radius for mobile
      } else {
        setRadius(220); // Default radius for larger screens
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeCategory = categories[activeIndex]

  return (
    <section id="skills" className="py-20 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">My Tech Stack</h2>
        <div className="flex justify-center mb-12">
            <div className="inline-flex items-center justify-center gap-4 bg-secondary p-2 rounded-full">
                <Button variant="outline" size="icon" onClick={handlePrev} aria-label="Previous skill category" className="rounded-full">
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <div className="flex gap-2">
                    {categories.map((_, index) => (
                        <button 
                        key={index} 
                        onClick={() => setActiveIndex(index)}
                        className={cn("w-2.5 h-2.5 rounded-full transition-all duration-300", 
                            activeIndex === index ? 'bg-primary scale-125' : 'bg-muted'
                        )}
                        aria-label={`Go to category ${index + 1}`}
                        />
                    ))}
                </div>
                <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next skill category" className="rounded-full">
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center px-4 sm:px-0">
          <div className="relative h-80 sm:h-96 w-full flex items-center justify-center" style={{ perspective: '1000px' }}>
            <div
              className="absolute w-full h-full transition-transform duration-500 ease-in-out"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${-activeIndex * cardAngle}deg)`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {categories.map((category, index) => {
                const angle = index * cardAngle
                return (
                  <div
                    key={category}
                    className="absolute top-1/2 left-1/2 -mt-40 -ml-32 transition-all duration-500 ease-in-out"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${radius}px) ${
                        activeIndex === index ? 'scale(1)' : 'scale(0.85)'
                      } ${activeIndex !== index ? 'translateY(10px)' : 'translateY(0)'}`,
                      opacity: activeIndex === index ? 1 : 0.6,
                      zIndex: activeIndex === index ? categories.length : categories.length - Math.abs(activeIndex - index),
                    }}
                  >
                    <SkillCard category={category} skills={skillsData[category]} />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="w-full max-w-md mx-auto mt-8 lg:mt-0 hidden lg:block">
            <UsageDetails category={activeCategory} isVisible={true} />
          </div>
        </div>
      </div>
    </section>
  )
}
