import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { WobbleContainer } from "./wobble-container"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-20 md:py-32 bg-aurora">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
            <div className="flex flex-col-reverse items-center justify-between gap-8 text-center md:flex-row md:gap-16 lg:gap-20 xl:gap-24">
              <div className="flex animate-fade-up flex-col items-center gap-4 text-center glass p-8 md:p-10 rounded-2xl">
                <WobbleContainer>
                  <div className="space-y-4">
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl xl:text-7xl">
                      Sohan Karfa
                    </h1>
                    <p className="max-w-md text-lg text-primary sm:text-xl md:text-2xl">
                      Full-Stack Software Developer
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row justify-center">
                      <Button asChild size="lg" className="rounded-full neu-button-dark bg-primary text-primary-foreground">
                        <Link href="#projects">
                          View My Work <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className={cn("rounded-full neu-button-dark inset")}>
                        <Link href="#contact">Get in Touch</Link>
                      </Button>
                    </div>
                  </div>
                </WobbleContainer>
              </div>
              <div className="relative flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="absolute inset-0 -m-4 rounded-full bg-primary/10 blur-3xl" />
                <Image
                  src="https://sxldi6vsg8pc7vjq.public.blob.vercel-storage.com/PIVduhep_400x400.jpg"
                  alt="Sohan Karfa professional headshot"
                  width={400}
                  height={400}
                  className="relative h-64 w-64 rounded-full border-4 border-card object-cover shadow-lg sm:h-80 sm:w-80 lg:h-96 lg:w-96"
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
