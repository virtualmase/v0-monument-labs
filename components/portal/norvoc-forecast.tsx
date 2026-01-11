"use client"

const forecastData = [
  { month: "Now", risk: 15, intervention: "Active", status: "protected" },
  { month: "+6mo", risk: 22, intervention: "Scheduled", status: "protected" },
  { month: "+12mo", risk: 35, intervention: "Predicted", status: "monitoring" },
  { month: "+18mo", risk: 48, intervention: "Predicted", status: "monitoring" },
  { month: "+24mo", risk: 62, intervention: "Recommended", status: "alert" },
]

const decayPoints = [
  { time: "+8mo", type: "NAD+ Decline", severity: "moderate" },
  { time: "+14mo", type: "Mitochondrial Stress", severity: "moderate" },
  { time: "+20mo", type: "Inflammatory Spike", severity: "high" },
]

export function NorvocForecast() {
  return (
    <div className="stat-card rounded-xl overflow-hidden">
      <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
        <span className="font-mono text-[10px] text-primary uppercase font-bold">
          Norvoc Intelligence // 24-Month Forecast
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[9px] px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 font-bold font-mono">
            PREDICTIVE AI
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Timeline Visualization */}
          <div className="lg:col-span-2">
            <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block mb-4">
              Systemic Decay Timeline
            </span>
            <div className="relative">
              {/* Timeline bar */}
              <div className="h-2 bg-background rounded-full overflow-hidden flex">
                {forecastData.map((point, i) => (
                  <div
                    key={i}
                    className={`flex-1 ${
                      point.status === "protected"
                        ? "bg-terminal-green"
                        : point.status === "monitoring"
                          ? "bg-amber-500"
                          : "bg-destructive"
                    }`}
                    style={{ opacity: 1 - i * 0.15 }}
                  />
                ))}
              </div>

              {/* Timeline labels */}
              <div className="flex justify-between mt-2">
                {forecastData.map((point, i) => (
                  <div key={i} className="text-center">
                    <span className="text-[9px] font-mono text-muted-foreground block">{point.month}</span>
                    <span
                      className={`text-[10px] font-mono font-bold ${
                        point.status === "protected"
                          ? "text-terminal-green"
                          : point.status === "monitoring"
                            ? "text-amber-500"
                            : "text-destructive"
                      }`}
                    >
                      {point.risk}%
                    </span>
                  </div>
                ))}
              </div>

              {/* Intervention markers */}
              <div className="mt-6 space-y-2">
                {forecastData.slice(0, 3).map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-background/50 rounded px-3 py-2 border border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          point.status === "protected"
                            ? "bg-terminal-green"
                            : point.status === "monitoring"
                              ? "bg-amber-500"
                              : "bg-destructive"
                        }`}
                      />
                      <span className="text-[10px] font-mono text-foreground">{point.month}</span>
                    </div>
                    <span className="text-[9px] font-mono text-muted-foreground uppercase">{point.intervention}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decay Points */}
          <div>
            <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider block mb-4">
              Predicted Decay Points
            </span>
            <div className="space-y-3">
              {decayPoints.map((point, i) => (
                <div
                  key={i}
                  className={`p-3 rounded border ${
                    point.severity === "high"
                      ? "bg-destructive/10 border-destructive/30"
                      : "bg-amber-500/10 border-amber-500/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold text-foreground">{point.type}</span>
                    <span
                      className={`text-[9px] font-mono uppercase ${
                        point.severity === "high" ? "text-destructive" : "text-amber-500"
                      }`}
                    >
                      {point.severity}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-muted-foreground">Predicted: {point.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-primary/5 rounded border border-primary/10">
              <span className="text-[9px] font-mono text-primary block mb-1">NORVOC_STATUS</span>
              <span className="text-[10px] font-mono text-muted-foreground">
                Actively neutralizing 3 predicted decay events
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
