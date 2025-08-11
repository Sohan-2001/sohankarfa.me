import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 bg-background dark:bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] text-foreground dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
          <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] p-2 rounded-full bg-white/80 dark:bg-[#F8F9FA] order-1 md:order-2">
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
          <div className="space-y-6 text-center order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter dark:text-white font-headline" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
              Sohan Karfa
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-primary dark:text-[#00B4D8]">
              Full-Stack Software Developer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
