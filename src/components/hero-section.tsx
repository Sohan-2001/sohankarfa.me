import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 bg-background dark:bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-foreground dark:text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter dark:text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
              Alex Doe
            </h1>
            <p className="text-xl md:text-2xl font-medium text-primary dark:text-[#00B4D8]">
              Full-Stack Software Developer
            </p>
            <p className="text-lg text-secondary-foreground dark:text-[#E0E0E0]">
              I build elegant, responsive, and scalable web applications. Turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="dark:bg-[#00B4D8] dark:text-background dark:hover:bg-[#0077B6] transition-all duration-300 ease-in-out">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#0D1B2A] transition-all duration-300 ease-in-out">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <div className="p-2 rounded-full bg-white/80 dark:bg-[#F8F9FA]">
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
      </div>
    </section>
  )
}
