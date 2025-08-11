"use client"

import * as React from "react"
import { Code, Server, Database, Cog, Star, ChevronLeft, ChevronRight, BarChart3, LineChart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const skillsData = {
  frontend: [
    { name: "React / Next.js", level: 95, usage: { web: 80, mobile: 15, desktop: 5 } },
    { name: "JavaScript / TypeScript", level: 90, usage: { web: 70, backend: 25, scripting: 5 } },
    { name: "HTML5 & CSS3", level: 95, usage: { web: 98, email: 2 } },
    { name: "Tailwind CSS", level: 85, usage: { web: 100 } },
  ],
  backend: [
    { name: "Node.js / Express", level: 90, usage: { api: 70, microservices: 30 } },
    { name: "Python / Django", level: 75, usage: { data: 60, web: 40 } },
    { name: "REST & GraphQL APIs", level: 85, usage: { rest: 65, graphql: 35 } },
    { name: "Authentication (JWT)", level: 80, usage: { web: 90, mobile: 10 } },
  ],
  databases: [
    { name: "PostgreSQL", level: 85, usage: { relational: 100 } },
    { name: "MongoDB", level: 80, usage: { nosql: 100 } },
    { name: "Firebase", level: 70, usage: { realtime: 60, auth: 40 } },
    { name: "SQL & NoSQL", level: 85, usage: { sql: 50, nosql: 50 } },
  ],
  tools: [
    { name: "Git & GitHub", level: 95, usage: { versionControl: 100 } },
    { name: "Docker", level: 80, usage: { containerization: 80, deployment: 20 } },
    { name: "Vercel / Netlify", level: 90, usage: { frontend: 100 } },
    { name: "CI/CD Pipelines", level: 75, usage: { githubActions: 70, jenkins: 30 } },
  ],
  others: [
    { name: "Agile Methodologies", level: 90, usage: { scrum: 80, kanban: 20 } },
    { name: "UI/UX Principles", level: 80, usage: { design: 70, research: 30 } },
    { name: "Problem Solving", level: 95, usage: { algorithms: 60, architecture: 40 } },
    { name: "Communication", level: 95, usage: { team: 80, client: 20 } },
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
type Skill = { name: string; level: number; usage: { [key: string]: number } }

const SkillCard = ({ category, skills }: { category: Category; skills: Skill[] }) => {
  const Icon = categoryIcons[category]
  const title = category === "tools" ? "Tools & DevOps" : category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div className="bg-card text-card-foreground rounded-xl shadow-md p-6 w-64 flex flex-col h-full">
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

const UsageDetails = ({ category, skills, isVisible }: { category: Category; skills: Skill[]; isVisible: boolean }) => {
  const title = category === "tools" ? "Tools & DevOps" : category.charAt(0).toUpperCase() + category.slice(1);
  const usageColors = ['bg-sky-500', 'bg-emerald-500', 'bg-amber-500', 'bg-violet-500', 'bg-pink-500'];

  return (
    <div className={cn(
      "bg-card text-card-foreground rounded-xl shadow-md p-6 w-full max-w-md transition-all duration-500",
      isVisible ? 'animate-fade-up' : 'opacity-0'
    )}>
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><LineChart className="h-6 w-6 text-primary" /> Usage Details: {title}</h3>
      <div className="space-y-6">
        {skills.map(skill => (
          <div key={skill.name}>
            <h4 className="font-semibold">{skill.name}</h4>
            <div className="mt-2 space-y-2">
              {Object.entries(skill.usage).map(([use, percentage], index) => (
                <div key={use}>
                  <div className="flex justify-between text-sm text-muted-foreground mb-1">
                    <span>{use.charAt(0).toUpperCase() + use.slice(1)}</span>
                    <span>{percentage}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-secondary">
                    <div
                      className={cn("h-full rounded-full transition-all duration-500", usageColors[index % usageColors.length])}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
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
  const radius = (200 / Math.tan(Math.PI / categories.length)) * 0.8
  
  const activeCategory = categories[activeIndex]
  const activeSkills = skillsData[activeCategory]

  return (
    <section id="skills" className="py-20 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-16">My Tech Stack</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 w-full flex items-center justify-center lg:justify-start" style={{ perspective: '1000px' }}>
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

          <div className="w-full max-w-md mx-auto">
            {/* Desktop and Tablet view */}
            <div className="hidden md:block">
              <UsageDetails category={activeCategory} skills={activeSkills} isVisible={true} />
            </div>
            {/* Mobile view */}
            <div className="md:hidden">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h3 className="text-lg font-semibold flex items-center gap-2"><BarChart3 className="h-5 w-5" /> Usage Details</h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <UsageDetails category={activeCategory} skills={activeSkills} isVisible={true} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
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
