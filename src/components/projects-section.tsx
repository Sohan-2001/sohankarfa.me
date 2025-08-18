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
    alt: "Screenshot of the AssesMint AI-Powered Exam Platform",
    imageHint: "AI exam platform",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Genkit AI", "Flask"],
    demoUrl: "https://assessmint-seven.vercel.app/",
    repoUrl: "https://github.com/Sohan-2001/assessmint",
  },
  {
    title: "Email Sending API – FastAPI-based Email Service",
    description: "A robust and secure email sending API built with FastAPI, designed for easy integration into any application. It provides a scalable solution for handling transactional emails, complete with attachment support and secure credential management.",
    image: "https://sxldi6vsg8pc7vjq.public.blob.vercel-storage.com/Gemini_Generated_Image_6hatvy6hatvy6hat.png",
    alt: "Code snippet illustrating the Email Sending API",
    imageHint: "API code",
    stack: ["FastAPI", "Python", "Pydantic", "Uvicorn"],
    demoUrl: null,
    repoUrl: "https://github.com/Sohan-2001/email-send",
  },
  {
    title: "TruthSleuth - AI-Powered News Verification Platform",
    description: "An AI-powered platform designed to combat misinformation by delivering instant truthfulness scores for news text, images, and URLs. TruthSleuth fosters a community of fact-checkers and gamifies contributions with a leaderboard, making it an essential tool for verifying media integrity.",
    image: "https://scontent.fccu1-2.fna.fbcdn.net/v/t39.30808-6/522388819_122120903408917572_6616502891986461463_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=51lR94neCKwQ7kNvwEjNx-z&_nc_oc=AdlhCAxjT0VzP-ofYm8HMuz7FUPOb8Q3YK9A-kQ-4k9-ojCdRAjjwSghiqBbsO3E9lA&_nc_zt=23&_nc_ht=scontent.fccu1-2.fna&_nc_gid=5ElI_MwVWZSy250nh8EBIQ&oh=00_AfWkcMeYr7MFvqlJGkzieGlLyr4U8lMdsrwuXabKIF-m-A&oe=68A017B4",
    alt: "Screenshot of the TruthSleuth News Verification Platform",
    imageHint: "fact checking news verification",
    stack: ["Next.js", "Genkit AI", "Tailwind CSS", "PostgreSQL"],
    demoUrl: "https://truthsleuth.vercel.app/",
    repoUrl: "https://github.com/Sohan-2001/TruthSleuth",
  },
  {
    title: "WhisperWire - Safe Chat Application",
    description: "WhisperWire is an enterprise-grade secure chat application designed to foster safe and productive conversations. It leverages real-time AI moderation to proactively filter toxic language, ensuring a respectful communication environment. With a scalable architecture built on Firebase and a responsive UI, it's the ideal solution for teams and individuals who prioritize professional and secure collaboration.",
    image: "https://sxldi6vsg8pc7vjq.public.blob.vercel-storage.com/Gemini_Generated_Image_630r5d630r5d630r.png",
    alt: "Screenshot of the WhisperWire Safe Chat Application",
    imageHint: "secure chat application",
    stack: ["Next.js", "Firebase", "Genkit AI", "Tailwind CSS"],
    demoUrl: "https://whisper-wire-eight.vercel.app/",
    repoUrl: "https://github.com/Sohan-2001/WhisperWire",
  },
]

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
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-4">
                <Button variant="outline" asChild>
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
                {project.demoUrl && (
                  <Button asChild>
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
