"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const router = useRouter()
  const [currentLang, setCurrentLang] = useState("en")

  useEffect(() => {
    // Get current path to determine language
    const path = window.location.pathname
    if (path.startsWith("/de")) {
      setCurrentLang("de")
    } else {
      setCurrentLang("en")
    }
  }, [])

  const switchLanguage = (lang: string) => {
    if (lang === "de") {
      router.push("/de")
    } else {
      router.push("/")
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-4 w-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage("en")} className={currentLang === "en" ? "bg-muted" : ""}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("de")} className={currentLang === "de" ? "bg-muted" : ""}>
          Deutsch
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
