import { Activity } from "lucide-react"
import { LiveModuleCard } from "./live-module-card"
import Link from "next/link"

export function HeroSection() {
  return (
    <main className="pt-32 md:pt-48 pb-20 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8 md:space-y-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-primary/20 bg-primary/5">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-mono uppercase text-primary font-bold tracking-widest">
              Powered by Norvoc Intelligence
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-[1.0] text-balance text-gradient">
            Infrastructure for
            <br />
            <span className="text-primary italic">Permanence.</span>
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            Monument Labs bridges the infrastructure gap in human biology, unifying predictive intelligence and
            precision synthesis into an institutional-grade operating system for human healthspan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/sync"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 md:px-10 md:py-5 rounded-sm font-bold font-mono uppercase tracking-widest transition-all shadow-lg shadow-primary/20 text-sm md:text-base text-center"
            >
              Initialize Sync
            </Link>
            <Link
              href="/roadmap"
              className="border border-border hover:border-primary px-8 py-4 md:px-10 md:py-5 rounded-sm font-bold font-mono uppercase tracking-widest text-foreground transition-all text-center text-sm md:text-base"
            >
              View Roadmap
            </Link>
          </div>
        </div>

        <LiveModuleCard />
      </div>
    </main>
  )
}
