import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
              Alex Doe
            </h1>
            <p className="text-xl md:text-2xl font-medium text-[#00B4D8]">
              Full-Stack Software Developer
            </p>
            <p className="text-lg text-[#E0E0E0]">
              I build elegant, responsive, and scalable web applications. Turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-[#00B4D8] text-white hover:bg-[#0077B6] transition-all duration-300 ease-in-out">
                <Link href="#projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-[#0D1B2A] transition-all duration-300 ease-in-out">
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="p-2 rounded-full bg-[#F8F9FA]">
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
