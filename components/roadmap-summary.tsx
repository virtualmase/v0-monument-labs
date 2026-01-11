export function RoadmapSummary() {
  const summaryData = [
    {
      phase: "01 Infrastructure",
      objective: "Build the Base",
      output: "Precision Synthesis & OS v1.0",
      target: "2029",
    },
    { phase: "02 Intelligence", objective: "Enable Foresight", output: "Predictive Foresight Engine", target: "2031" },
    { phase: "03 Continuity", objective: "Ensure Stability", output: "Institutional-Grade Platform", target: "2034" },
    { phase: "04 Permanence", objective: "Define the Future", output: "Total Bio-Infrastructure", target: "2036+" },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight mb-4">Strategic Summary</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A decade-long commitment to redefining human infrastructure.
          </p>
        </div>

        <div className="bg-card border border-border rounded-sm overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 px-6 py-4 bg-secondary/50 border-b border-border">
            <p className="text-xs font-mono text-primary uppercase tracking-wider font-bold">Phase</p>
            <p className="text-xs font-mono text-primary uppercase tracking-wider font-bold">Strategic Objective</p>
            <p className="text-xs font-mono text-primary uppercase tracking-wider font-bold">Core Output</p>
            <p className="text-xs font-mono text-primary uppercase tracking-wider font-bold text-right">Target</p>
          </div>

          {/* Table Rows */}
          {summaryData.map((row, index) => (
            <div
              key={row.phase}
              className={`grid grid-cols-4 gap-4 px-6 py-5 ${index !== summaryData.length - 1 ? "border-b border-border/50" : ""} ${index === 0 ? "bg-primary/5" : ""}`}
            >
              <p className="text-sm font-mono text-foreground font-semibold">{row.phase}</p>
              <p className="text-sm text-muted-foreground">{row.objective}</p>
              <p className="text-sm text-foreground">{row.output}</p>
              <p className="text-sm font-mono text-primary text-right font-bold">{row.target}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
