import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 bg-background dark:bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-foreground dark:text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 p-2 rounded-full bg-white/80 dark:bg-[#F8F9FA]">
              <Image
                src="https://sxldi6vsg8pc7vjq.public.blob.vercel-storage.com/PIVduhep_400x400.jpg"
                alt="Sohan Karfa Headshot"
                width={400}
                height={400}
                className="rounded-full shadow-lg w-full h-full object-cover"
                data-ai-hint="professional headshot"
                priority
              />
            </div>
          </div>
          <div className="md:order-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold tracking-tighter dark:text-white font-headline" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
              Sohan Karfa
            </h1>
            <p className="text-xl md:text-2xl font-medium text-primary dark:text-[#00B4D8]">
              Full-Stack Software Developer
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
        </div>
      </div>
    </section>
  )
}
