import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate Full-Stack Developer with over 5 years of experience in creating dynamic, user-friendly web applications. My journey in tech started with a fascination for how things work, which led me to master both frontend and backend technologies. I thrive on challenges, love to learn continuously, and I'm dedicated to writing clean, efficient, and maintainable code. When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.
          </p>
          <Button asChild>
            <a href="/resume.pdf" download>
              Download Resume <Download className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
