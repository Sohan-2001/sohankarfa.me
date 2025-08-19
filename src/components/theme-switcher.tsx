"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Switch } from "@/components/ui/switch"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <div className="flex items-center gap-2">
      <Sun className={`h-5 w-5 transition-colors ${!isDark ? 'text-primary' : 'text-muted-foreground'}`} />
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon className={`h-5 w-5 transition-colors ${isDark ? 'text-primary' : 'text-muted-foreground'}`} />
    </div>
  )
}
