import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Alex Doe
            </h1>
            <p className="text-xl md:text-2xl font-medium text-primary">
              Full-Stack Software Developer
            </p>
            <p className="text-lg text-muted-foreground">
              I build elegant, responsive, and scalable web applications. Turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Alex Doe Headshot"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
              data-ai-hint="professional headshot"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
