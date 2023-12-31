"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { setTheme, theme } = useTheme();
    const toggleMode = () => {
        theme == "light" ? setTheme('dark') : setTheme('light');
    }
    return (
        <Button size="sm" onClick={toggleMode} variant={"ghost"} className="bg-transparent hover:bg-transparent focus-visible:ring-0 ring-offset-0 p-0">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    )
}
