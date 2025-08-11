import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AssesMint – AI-Powered Exam Platform",
    description: `
      <ul class="list-disc list-inside space-y-2 text-sm text-muted-foreground">
        <li>Built a full-stack exam system using Next.js, TypeScript, PostgreSQL, and Flask API for secure email-based authentication via OTP.</li>
        <li>Enabled exam creation with MCQs, essay, and custom questions, with targeted access through email filtering.</li>
        <li>Integrated Genkit AI for syllabus-based question generation, reducing exam setup effort by 50%.</li>
        <li>Implemented auto-evaluation to cut grading time by 95%, and enforced exam integrity with fullscreen lock, copy-paste restrictions, and Jitsi proctoring.</li>
      </ul>
    `,
    image: "https://assessmint-seven.vercel.app/_next/image?url=https%3A%2F%2Fsw0u7owaczjz29lf.public.blob.vercel-storage.com%2FGemini_Generated_Image_k1wslck1wslck1ws.png&w=1920&q=75",
    imageHint: "AI exam platform",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Genkit AI", "Flask"],
    demoUrl: "https://assessmint-seven.vercel.app/",
    repoUrl: "https://github.com/Sohan-2001/assessmint",
  },
  {
    title: "Project Management Tool",
    description: "A collaborative tool to help teams manage tasks, track progress, and meet deadlines. Features real-time updates with websockets.",
    image: "https://placehold.co/600x400.png",
    imageHint: "dashboard project management",
    stack: ["React", "Node.js", "Socket.IO", "MongoDB"],
    demoUrl: "#",
    repoUrl: "https://github.com/sohan-2001",
  },
  {
    title: "Personal Blog",
    description: "A modern, fast, and SEO-friendly blog platform built with a headless CMS for easy content management and static site generation for speed.",
    image: "https://placehold.co/600x400.png",
    imageHint: "blog website",
    stack: ["Next.js", "Tailwind CSS", "GraphQL", "Contentful"],
    demoUrl: "#",
    repoUrl: "https://github.com/sohan-2001",
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets, allowing users to filter, sort, and export data in various formats.",
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
                <Button asChild>
                  <Link href={project.demoUrl} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
