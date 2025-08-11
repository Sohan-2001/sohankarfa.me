import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-md dark:shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl">Get In Touch</CardTitle>
                  <CardDescription>
                    Have a project in mind or just want to say hi? Fill out the form or email me directly.
                  </CardDescription>
                </CardHeader>
                <ContactForm />
              </div>
              <div className="bg-secondary text-secondary-foreground p-8 rounded-r-lg flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-secondary-foreground">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:alex.doe@example.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                    <span>alex.doe@example.com</span>
                  </a>
                  <div className="flex space-x-4 mt-6">
                    <Button variant="outline" size="icon" className="bg-transparent dark:border-secondary-foreground/50 hover:bg-secondary-foreground/10" asChild>
                      <Link href="https://github.com/sohan-2001" target="_blank" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" className="bg-transparent dark:border-secondary-foreground/50 hover:bg-secondary-foreground/10" asChild>
                      <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" className="bg-transparent dark:border-secondary-foreground/50 hover:bg-secondary-foreground/10" asChild>
                      <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
