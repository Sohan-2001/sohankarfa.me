"use client"

import Link from "next/link"
import * as React from "react"
import { Code, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetClose, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ThemeSwitcher } from "./theme-switcher"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-white/20 bg-white/20 shadow-inner backdrop-blur-lg")}>
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2" aria-label="Homepage">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold">Me</span>
          </Link>
        </div>
        <nav className="hidden flex-1 items-center space-x-4 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <ThemeSwitcher />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>
                  Navigate to different sections of the page.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col pt-8">
                {navLinks.map((link) => (
                   <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="py-2 text-lg font-medium"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
