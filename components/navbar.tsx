"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 border-b border-white/5 bg-background/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/" className="flex items-center gap-2 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-primary rounded-lg flex items-center justify-center">
              <span className="text-primary font-black text-lg sm:text-xl tracking-tighter">M</span>
            </div>
            <div>
              <h1 className="text-foreground font-extrabold text-base sm:text-xl tracking-tighter leading-none">
                MONUMENT_LABS
              </h1>
              <p className="text-[8px] sm:text-[9px] text-primary font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-0.5 sm:mt-1">
                Institutional Longevity OS v1.0
              </p>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex gap-8 text-[10px] font-mono uppercase tracking-widest font-bold text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Node_Helsinki: Active
          </span>
          <span className="text-muted-foreground/50">|</span>
          <a href="#science" className="hover:text-primary transition-colors">
            VDR_Access
          </a>
        </div>

        <Link
          href="/login"
          className="hidden sm:block bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 py-2 rounded-sm text-[10px] sm:text-xs font-bold font-mono uppercase tracking-widest transition-all"
        >
          Partner_Portal
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest font-bold text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Node_Helsinki: Active
            </div>
            <a
              href="#science"
              className="text-[10px] font-mono uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              VDR_Access
            </a>
            <Link
              href="/roadmap"
              className="text-[10px] font-mono uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              href="/login"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-sm text-xs font-bold font-mono uppercase tracking-widest transition-all text-center"
              onClick={() => setIsOpen(false)}
            >
              Partner_Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
