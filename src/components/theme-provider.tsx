"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// This is a custom hook to use the theme from next-themes
// We are not using the one from the library directly to avoid issues with 'use client'
// and to keep it consistent with the rest of the app.
export const useTheme = () => {
    const [theme, setTheme] = React.useState<"light" | "dark" | "system">("system");
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (storedTheme) {
            setTheme(storedTheme);
        } else if (prefersDark) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    const handleSetTheme = (newTheme: "light" | "dark" | "system") => {
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
        if (newTheme === 'system') {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
          document.documentElement.classList.remove('light', 'dark');
          document.documentElement.classList.add(systemTheme);
        } else {
          document.documentElement.classList.remove('light', 'dark');
          document.documentElement.classList.add(newTheme);
        }
    }

    React.useEffect(() => {
        if (mounted) {
            if (theme === 'system') {
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(systemTheme);
            } else {
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(theme);
            }
        }
    }, [theme, mounted]);


    return {
        theme: mounted ? theme : "light",
        setTheme: handleSetTheme,
    }
}