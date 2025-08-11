import Link from "next/link"
import { Code, Github, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold">DevCard</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sohan Karfa. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-primary">About</Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/sohan-2001" target="_blank" aria-label="GitHub" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/sohan-karfa-72819521b/" target="_blank" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://x.com/SohanKarfa" target="_blank" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
