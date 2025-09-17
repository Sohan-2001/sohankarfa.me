import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Lock } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "News Odia",
    description: "A comprehensive news portal featuring automated content aggregation via GitHub Actions cron jobs, secure user authentication with Google OAuth, and real-time data management using Firestore. Built with Next.js, Tailwind CSS, and a REST API for a seamless user experience.",
    image: "https://sxldi6vsg8pc7vjq.public.blob.vercel-storage.com/Screenshot%202025-09-13%20195906.png",
    alt: "Screenshot of News Odia website",
    imageHint: "news website homepage",
    stack: ["Next.js", "Tailwind CSS", "Firebase", "Google OAuth", "GitHub Actions"],
    demoUrl: "https://newsodia.com/",
    repoUrl: null, // Private repo
  },
  {
    title: "SMATE",
    description: "A powerful content creation tool with real-time editing, AI-powered writing assistance (grammar correction, tone change, summarization), and a chat-based AI assistant for brainstorming and content generation.",
    image: "https://sxldi6vsg8pc7vjq.public.blob.vercel-storage.com/smate-gamma.vercel.app_.png",
    alt: "Screenshot of the SMATE application",
    imageHint: "AI writing assistant application",
    stack: ["Next.js", "Tailwind CSS", "Firestore", "Google OAuth", "Razorpay"],
    demoUrl: "https://smate-gamma.vercel.app/",
    repoUrl: "https://github.com/Sohan-2001/smate",
  },
]

const techColorMap: { [key: string]: string } = {
    "Next.js": "bg-black text-white border-gray-700",
    "TypeScript": "bg-blue-600 text-white border-blue-500",
    "PostgreSQL": "bg-indigo-400 text-white border-indigo-300",
    "Genkit AI": "bg-green-500 text-white border-green-400",
    "Flask": "bg-gray-700 text-white border-gray-600",
    "FastAPI": "bg-teal-500 text-white border-teal-400",
    "Python": "bg-yellow-400 text-black border-yellow-300",
    "Pydantic": "bg-pink-500 text-white border-pink-400",
    "Uvicorn": "bg-purple-500 text-white border-purple-400",
    "Tailwind CSS": "bg-cyan-500 text-white border-cyan-400",
    "Firebase": "bg-yellow-500 text-black border-yellow-400",
    "Google OAuth": "bg-red-500 text-white border-red-400",
    "GitHub Actions": "bg-blue-800 text-white border-blue-700",
    "Firestore": "bg-orange-400 text-white border-orange-300",
    "Razorpay": "bg-blue-500 text-white border-blue-400"
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={400}
                  className="rounded-t-lg w-full h-auto"
                  data-ai-hint={project.imageHint}
                />
                <CardTitle className="pt-4">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className={cn("border", techColorMap[tech] || "bg-secondary text-secondary-foreground")}>{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-4">
                {project.repoUrl ? (
                    <Button variant="outline" asChild className="rounded-none">
                      <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                ) : (
                    <Button variant="outline" disabled className="rounded-none">
                      <Lock className="mr-2 h-4 w-4" /> Private Repo
                    </Button>
                )}
                {project.demoUrl && (
                  <Button asChild className="rounded-none">
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
