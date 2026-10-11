"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Sun, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Learning Hub", href: "#learning-hub" },
  { label: "Solutions", href: "#solutions" },
  { label: "Impact", href: "#impact" },
  { label: "Team", href: "#team" },
  { label: "Events", href: "#events" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-navy-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal">
              <Sun className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white font-[family-name:var(--font-heading)]">
              IESO
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-teal/40 text-teal hover:bg-teal/10 bg-transparent"
            >
              <Zap className="mr-1.5 h-3.5 w-3.5" />
              Explore Solutions
            </Button>
          </div>

          <button
            className="lg:hidden text-white/80 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-navy-light">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-navy-light mt-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-teal/40 text-teal hover:bg-teal/10 bg-transparent"
              >
                <Zap className="mr-1.5 h-3.5 w-3.5" />
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
