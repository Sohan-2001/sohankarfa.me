import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AssesMint – AI-Powered Exam Platform",
    description: "An intelligent exam platform designed to streamline assessments with AI-driven question generation and automated grading. AssesMint enhances exam security with advanced proctoring features while providing a seamless experience for both educators and students.",
    image: "https://assessmint-seven.vercel.app/_next/image?url=https%3A%2F%2Fsw0u7owaczjz29lf.public.blob.vercel-storage.com%2FGemini_Generated_Image_k1wslck1wslck1ws.png&w=1920&q=75",
    imageHint: "AI exam platform",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Genkit AI", "Flask"],
    demoUrl: "https://assessmint-seven.vercel.app/",
    repoUrl: "https://github.com/Sohan-2001/assessmint",
  },
  {
    title: "Email Sending API – FastAPI-based Email Service",
    description: "A robust and secure email sending API built with FastAPI, designed for easy integration into any application. It provides a scalable solution for handling transactional emails, complete with attachment support and secure credential management.",
    image: "https://sxldi6vsg8pc7vjq.public.blob.vercel-storage.com/Gemini_Generated_Image_6hatvy6hatvy6hat.png",
    imageHint: "API code",
    stack: ["FastAPI", "Python", "Pydantic", "Uvicorn"],
    demoUrl: null,
    repoUrl: "https://github.com/Sohan-2001/email-send",
  },
  {
    title: "Headless CMS Blog",
    description: "A modern, high-performance blog platform engineered for exceptional speed and SEO. By leveraging a headless CMS, it offers a seamless content management experience while delivering a lightning-fast static front-end.",
    image: "https://placehold.co/600x400.png",
    imageHint: "blog website",
    stack: ["Next.js", "Tailwind CSS", "GraphQL", "Contentful"],
    demoUrl: "#",
    repoUrl: "https://github.com/sohan-2001",
  },
  {
    title: "Interactive Data Dashboard",
    description: "An advanced data visualization dashboard that transforms complex datasets into actionable insights. It provides powerful filtering, sorting, and exporting capabilities to empower data-driven decision-making.",
    image: "https://placehold.co/600x400.png",
    imageHint: "data dashboard charts",
    stack: ["React", "D3.js", "Python", "Flask"],
    demoUrl: "#",
    repoUrl: "https://github.com/sohan-2001",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-t-lg"
                  data-ai-hint={project.imageHint}
                />
                <CardTitle className="pt-4">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div dangerouslySetInnerHTML={{ __html: project.description }} />
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-4">
                <Button variant="outline" asChild>
                  <Link href={project.repoUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
                {project.demoUrl && (
                  <Button asChild>
                    <Link href={project.demoUrl} target="_blank">
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
