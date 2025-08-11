"use client"

import * as React from "react"
import { Code, Server, Database, Cog, Star } from "lucide-react"

import { cn } from "@/lib/utils"

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

const categoryIcons: { [key: string]: React.ReactNode } = {
  frontend: <Code />,
  backend: <Server />,
  databases: <Database />,
  tools: <Cog />,
  others: <Star />,
}

type Category = keyof typeof skillsData

export function SkillsSection() {
  const [activeTab, setActiveTab] = React.useState<Category>("frontend")

  const categories = Object.keys(skillsData) as Category[]

  return (
    <section id="skills" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">My Tech Stack</h2>
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-xl shadow-md bg-card">
          <nav>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  aria-current={activeTab === category ? "true" : "false"}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    activeTab === category
                      ? "bg-primary/20 text-primary font-semibold"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  <span className="capitalize">{category === "tools" ? "Tools/DevOps" : category}</span>
                </button>
              ))}
            </div>
          </nav>

          <div className="mt-6 space-y-6">
            {skillsData[activeTab].map((skill) => (
              <div key={skill.name} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary">{categoryIcons[activeTab]}</span>
                  <span className="font-medium">{skill.name}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${skill.level}%` }}
                    aria-label={`${skill.name} proficiency`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
