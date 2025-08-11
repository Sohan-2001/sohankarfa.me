import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process. Built with Next.js for high performance.",
    image: "https://placehold.co/600x400.png",
    imageHint: "e-commerce online store",
    stack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Management Tool",
    description: "A collaborative tool to help teams manage tasks, track progress, and meet deadlines. Features real-time updates with websockets.",
    image: "https://placehold.co/600x400.png",
    imageHint: "dashboard project management",
    stack: ["React", "Node.js", "Socket.IO", "MongoDB"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Personal Blog",
    description: "A modern, fast, and SEO-friendly blog platform built with a headless CMS for easy content management and static site generation for speed.",
    image: "https://placehold.co/600x400.png",
    imageHint: "blog website",
    stack: ["Next.js", "Tailwind CSS", "GraphQL", "Contentful"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets, allowing users to filter, sort, and export data in various formats.",
    image: "https://placehold.co/600x400.png",
    imageHint: "data dashboard charts",
    stack: ["React", "D3.js", "Python", "Flask"],
    demoUrl: "#",
    repoUrl: "#",
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
                <CardDescription>{project.description}</CardDescription>
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
