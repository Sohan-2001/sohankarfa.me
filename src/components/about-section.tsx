import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-left sm:text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aspiring Software Engineer with strong proficiency in full-stack web development, AI integration, and secure
backend systems. Experienced in building scalable projects using Next.js, Python, Firebase, and TypeScript.
Proven problem-solver with achievements in competitive coding, hackathons, and real-world application
development. Quick to adapt, collaborative, and always eager to learn new technologies.
          </p>
          <Button asChild className="btn-hologram">
            <a href="https://sxldi6vsg8pc7vjq.public.blob.vercel-storage.com/SOHAN%20KARFA%20-%20Resume%20PE.pdf" download>
              Download Resume <Download className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
