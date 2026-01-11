"use client"

import { useState, useEffect } from "react"
import { Zap, CheckCircle } from "lucide-react"

const initialLogs = [
  { time: "14:32:01", message: "Katin Protocol ML-024 deployed.", type: "system" },
  { time: "14:32:04", message: "Anticipated resilience increase: +14.2%.", type: "system" },
  { time: "14:32:07", message: "Verification: Purity >99.9% (GMP Certified).", type: "success" },
  { time: "14:33:12", message: "NAD+ supplementation sequence initiated.", type: "system" },
  { time: "14:33:45", message: "Batch ML-024 synthesis complete.", type: "success" },
  { time: "14:34:22", message: "Deploying to Node_Helsinki...", type: "system" },
]

export function KatinConsole() {
  const [logs, setLogs] = useState(initialLogs)

  useEffect(() => {
    const newMessages = [
      "Monitoring cellular uptake rates...",
      "Telomere stability check: PASSED.",
      "Optimizing mitochondrial flux...",
      "Cross-referencing Norvoc predictions...",
      "Batch integrity: 100%.",
    ]

    const interval = setInterval(() => {
      const now = new Date()
      const time = `${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")}`

      const randomMessage = newMessages[Math.floor(Math.random() * newMessages.length)]

      setLogs((prev) => [
        ...prev.slice(-8),
        { time, message: randomMessage, type: Math.random() > 0.3 ? "system" : "success" },
      ])
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="stat-card rounded-xl overflow-hidden">
      <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
        <span className="font-mono text-[10px] text-primary uppercase font-bold">Katin_Protocol Console</span>
        <div className="flex items-center gap-2">
          <Zap className="w-3 h-3 text-primary" />
          <span className="text-[9px] font-mono text-terminal-green">LIVE</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Batch Verification */}
        <div className="bg-background border border-primary/10 rounded p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono text-muted-foreground uppercase">Active Batch</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3 h-3 text-terminal-green" />
              <span className="text-[9px] font-mono text-terminal-green">VERIFIED</span>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-mono font-bold text-foreground">ML-024</span>
            <span className="text-[10px] font-mono text-muted-foreground">Helsinki Node</span>
          </div>
          <div className="mt-3 pt-3 border-t border-white/5 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[9px] font-mono text-muted-foreground block">Purity</span>
              <span className="text-sm font-mono font-bold text-terminal-green">{">"}99.9%</span>
            </div>
            <div>
              <span className="text-[9px] font-mono text-muted-foreground block">Certification</span>
              <span className="text-sm font-mono font-bold text-foreground">GMP</span>
            </div>
          </div>
        </div>

        {/* Intervention Log */}
        <div>
          <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block mb-3">
            Intervention_Log
          </span>
          <div className="bg-background rounded border border-white/5 p-3 h-48 overflow-y-auto font-mono text-[10px] space-y-1.5 scrollbar-thin">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-muted-foreground/50">[{log.time}]</span>
                <span className={log.type === "success" ? "text-terminal-green" : "text-muted-foreground"}>
                  {log.message}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
