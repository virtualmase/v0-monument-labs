"use client"

import { useState, useEffect } from "react"

const metabolicMarkers = [
  { name: "NAD+", value: 72, target: 95, status: "optimizing" },
  { name: "Inflammation", value: 88, target: 95, status: "stable" },
  { name: "Glucose", value: 91, target: 95, status: "stable" },
  { name: "Mito_Efficiency", value: 94.8, target: 98, status: "optimizing" },
]

export function BiologicalMap() {
  const [gapDetected, setGapDetected] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setGapDetected((prev) => !prev)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="stat-card rounded-xl overflow-hidden glow-primary relative scanner">
      <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
        <span className="font-mono text-[10px] text-primary uppercase font-bold">Live_Module // Biological_Map</span>
        <div className="flex items-center gap-3">
          <span className="text-[9px] font-mono text-terminal-green">INTERACTIVE</span>
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Metabolic Audit Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span className="text-[10px] font-mono text-primary">METABOLIC_AUDIT // ML-024</span>
          <span className="text-[9px] px-2 py-0.5 bg-terminal-green/10 text-terminal-green border border-terminal-green/20 font-bold font-mono">
            STATUS: OPTIMIZING
          </span>
        </div>

        {/* Live Marker Bars */}
        <div className="space-y-4">
          {metabolicMarkers.map((marker) => (
            <div key={marker.name} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-muted-foreground uppercase">{marker.name}</span>
                <span
                  className={`text-[10px] font-mono font-bold ${
                    marker.status === "stable" ? "text-terminal-green" : "text-amber-500"
                  }`}
                >
                  {marker.value}%
                </span>
              </div>
              <div className="h-1.5 bg-background rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    marker.status === "stable" ? "bg-terminal-green" : "bg-amber-500"
                  }`}
                  style={{ width: `${marker.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Gap Detection Alert */}
        {gapDetected && (
          <div className="bg-destructive/10 border border-destructive/30 rounded p-3 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            <div>
              <span className="text-[10px] font-mono font-bold text-destructive uppercase block">Gap_Detected</span>
              <span className="text-[9px] font-mono text-destructive/80">
                Biological Maintenance Gap: NAD+ Depletion
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
