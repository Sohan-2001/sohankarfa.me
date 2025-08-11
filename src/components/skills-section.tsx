"use client"

import * as React from "react"
import { Code, Server, Database, Cog, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const skillsData = {
  frontend: [
    { name: "React / Next.js", level: 95 },
    { name: "JavaScript / TypeScript", level: 90 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Tailwind CSS", level: 85 },
  ],
  backend: [
    { name: "Node.js / Express", level: 90 },
    { name: "Python / Django", level: 75 },
    { name: "REST & GraphQL APIs", level: 85 },
    { name: "Authentication (JWT)", level: 80 },
  ],
  databases: [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Firebase", level: 70 },
    { name: "SQL & NoSQL", level: 85 },
  ],
  tools: [
    { name: "Git & GitHub", level: 95 },
    { name: "Docker", level: 80 },
    { name: "Vercel / Netlify", level: 90 },
    { name: "CI/CD Pipelines", level: 75 },
  ],
  others: [
    { name: "Agile Methodologies", level: 90 },
    { name: "UI/UX Principles", level: 80 },
    { name: "Problem Solving", level: 95 },
    { name: "Communication", level: 95 },
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

const SkillCard = ({ category, skills }: { category: Category; skills: { name: string; level: number }[] }) => {
  const Icon = categoryIcons[category]
  const title = category === "tools" ? "Tools & DevOps" : category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div className="bg-card text-card-foreground rounded-xl shadow-md p-6 w-64 md:w-72 flex flex-col h-full">
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

export function SkillsSection() {
  const categories = Object.keys(skillsData) as Category[]
  const [activeIndex, setActiveIndex] = React.useState(0)
  const touchStartX = React.useRef(0)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === 0) return
    const touchEndX = e.touches[0].clientX
    const diff = touchStartX.current - touchEndX
    if (Math.abs(diff) > 50) { // Threshold to detect swipe
      if (diff > 0) {
        handleNext()
      } else {
        handlePrev()
      }
      touchStartX.current = 0 // Reset after swipe
    }
  }

  const cardAngle = 360 / categories.length
  // Adjust translateZ based on card width and number of cards to form a nice circle
  const radius = (200 / Math.tan(Math.PI / categories.length)) * 0.8 

  return (
    <section id="skills" className="py-20 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-16">My Tech Stack</h2>
        <div className="relative h-96 w-full flex items-center justify-center" style={{ perspective: '1000px' }}>
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
                  className="absolute top-1/2 left-1/2 -mt-40 -ml-32 md:-ml-36 transition-all duration-500 ease-in-out"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px) ${
                      activeIndex === index ? 'scale(1.05)' : 'scale(0.9)'
                    } ${activeIndex !== index ? 'translateY(10px)' : 'translateY(0)'}`,
                    opacity: activeIndex === index ? 1 : 0.7,
                    zIndex: activeIndex === index ? categories.length : categories.length - Math.abs(activeIndex - index),
                  }}
                >
                  <SkillCard category={category} skills={skillsData[category]} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 gap-4">
          <Button variant="outline" size="icon" onClick={handlePrev} aria-label="Previous skill category">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="flex gap-2">
             {categories.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveIndex(index)}
                  className={cn("w-2.5 h-2.5 rounded-full transition-all duration-300", 
                    activeIndex === index ? 'bg-primary scale-125' : 'bg-secondary'
                  )}
                  aria-label={`Go to category ${index + 1}`}
                />
              ))}
          </div>
          <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next skill category">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
