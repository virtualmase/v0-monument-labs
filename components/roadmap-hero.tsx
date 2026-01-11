import { MapIcon } from "lucide-react"

export function RoadmapHero() {
  return (
    <section className="pt-48 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-primary/20 bg-primary/5">
          <MapIcon className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-mono uppercase text-primary font-bold tracking-widest">2026 Revision</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter leading-[1.0] text-balance text-gradient">
          Engineering Human
          <br />
          <span className="text-primary italic">Permanence.</span>
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          <strong className="text-foreground">Project:</strong> Monument Healthspan Operating System
          <br />
          <strong className="text-foreground">Strategic Thesis:</strong> Addressing aging as a treatable infrastructure
          deficit via a full-stack Bio-AI platform.
        </p>
      </div>
    </section>
  )
}
