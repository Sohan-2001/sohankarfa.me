import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-10rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-[-15rem] left-[-15rem] h-[30rem] w-[30rem] rounded-full bg-accent/5 blur-3xl"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 xl:gap-20">
          <div className="flex flex-col items-center text-center space-y-6 animate-fade-up xl:items-start xl:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground font-headline">
              Sohan Karfa
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-primary">
              Full-Stack Software Developer
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
             <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative group transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                    src="https://sxldi6vsg8pc7vjq.public.blob.vercel-storage.com/PIVduhep_400x400.jpg"
                    alt="Sohan Karfa Headshot"
                    width={400}
                    height={400}
                    className="rounded-full shadow-lg object-cover w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] border-4 border-card"
                    data-ai-hint="professional headshot"
                    priority
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
