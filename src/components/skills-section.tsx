import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Server, Database, Cog, Star } from "lucide-react"

const skillsData = {
  frontend: [
    { name: "React / Next.js", level: 95, icon: <Code /> },
    { name: "JavaScript / TypeScript", level: 90, icon: <Code /> },
    { name: "HTML5 & CSS3", level: 95, icon: <Code /> },
    { name: "Tailwind CSS", level: 85, icon: <Code /> },
  ],
  backend: [
    { name: "Node.js / Express", level: 90, icon: <Server /> },
    { name: "Python / Django", level: 75, icon: <Server /> },
    { name: "REST & GraphQL APIs", level: 85, icon: <Server /> },
    { name: "Authentication (JWT)", level: 80, icon: <Server /> },
  ],
  databases: [
    { name: "PostgreSQL", level: 85, icon: <Database /> },
    { name: "MongoDB", level: 80, icon: <Database /> },
    { name: "Firebase", level: 70, icon: <Database /> },
    { name: "SQL & NoSQL", level: 85, icon: <Database /> },
  ],
  tools: [
    { name: "Git & GitHub", level: 95, icon: <Cog /> },
    { name: "Docker", level: 80, icon: <Cog /> },
    { name: "Vercel / Netlify", level: 90, icon: <Cog /> },
    { name: "CI/CD Pipelines", level: 75, icon: <Cog /> },
  ],
  others: [
    { name: "Agile Methodologies", level: 90, icon: <Star /> },
    { name: "UI/UX Principles", level: 80, icon: <Star /> },
    { name: "Problem Solving", level: 95, icon: <Star /> },
    { name: "Communication", level: 95, icon: <Star /> },
  ],
};

const SkillCategory = ({ skills }: { skills: { name: string; level: number; icon: React.ReactNode }[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
    {skills.map((skill) => (
      <div key={skill.name} className="flex flex-col space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-primary">{skill.icon}</span>
          <p className="font-medium">{skill.name}</p>
        </div>
        <Progress value={skill.level} aria-label={`${skill.name} skill level`} />
      </div>
    ))}
  </div>
);

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">My Tech Stack</h2>
        <Card className="max-w-4xl mx-auto shadow-md dark:shadow-lg">
          <CardContent className="p-6">
            <Tabs defaultValue="frontend">
              <TabsList className="flex flex-wrap h-auto sm:grid sm:w-full sm:grid-cols-2 lg:grid-cols-5 mb-6">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="databases">Databases</TabsTrigger>
                <TabsTrigger value="tools">Tools/DevOps</TabsTrigger>
                <TabsTrigger value="others">Others</TabsTrigger>
              </TabsList>
              <TabsContent value="frontend">
                <SkillCategory skills={skillsData.frontend} />
              </TabsContent>
              <TabsContent value="backend">
                <SkillCategory skills={skillsData.backend} />
              </TabsContent>
              <TabsContent value="databases">
                <SkillCategory skills={skillsData.databases} />
              </TabsContent>
              <TabsContent value="tools">
                <SkillCategory skills={skillsData.tools} />
              </TabsContent>
              <TabsContent value="others">
                <SkillCategory skills={skillsData.others} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
