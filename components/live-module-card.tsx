import { Zap } from "lucide-react"

export function LiveModuleCard() {
  return (
    <div className="stat-card rounded-xl overflow-hidden glow-primary relative scanner">
      <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
        <span className="font-mono text-[10px] text-primary uppercase font-bold">Live_Module // Biological_Map</span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>

      <div className="p-8 space-y-8">
        <div className="bg-background p-6 border border-primary/10 rounded">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
            <span className="text-[10px] font-mono text-primary">METABOLIC_AUDIT // ML-024</span>
            <span className="text-[9px] px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 font-bold">
              STATUS: OPTIMIZING
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6 font-mono text-[11px]">
            <div>
              <span className="text-muted-foreground/60 uppercase block mb-1">Mito_Efficiency</span>
              <span className="text-foreground text-lg font-bold">94.8%</span>
            </div>
            <div className="border-l border-white/5 pl-6">
              <span className="text-muted-foreground/60 uppercase block mb-1">Gap_Detected</span>
              <span className="text-amber-500 font-bold">NAD+ DEPLETION</span>
            </div>
          </div>

          <div className="mt-6 text-[10px] text-muted-foreground border-t border-white/5 pt-4 leading-relaxed italic">
            System Note: Katin Protocol ML-024 deployed. Anticipated cellular resilience increase of 14.2% within
            72-hour cycle.
          </div>
        </div>

        <div className="flex items-center gap-4 bg-primary/5 p-4 rounded border border-primary/10">
          <Zap className="w-4 h-4 text-primary" />
          <span className="font-mono text-[11px] text-primary tracking-tight">
            Katin Node: Batch ML-024 Synthesis Verified...
          </span>
        </div>
      </div>
    </div>
  )
}
