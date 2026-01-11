import { Activity, Database, FileKey, Globe, Shield } from "lucide-react"

const nodes = [
  { name: "Node_Helsinki", status: "active", batch: "ML-024" },
  { name: "Node_Irvine", status: "initializing", batch: "ML-031" },
  { name: "Node_Singapore", status: "standby", batch: "—" },
]

export function PortalSidebar() {
  return (
    <aside className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-72 border-r border-white/5 bg-card/50 backdrop-blur-xl hidden lg:block">
      <div className="p-6 space-y-8">
        {/* Global Pulse Header */}
        <div>
          <h2 className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest mb-1">Global_Pulse</h2>
          <p className="text-[9px] font-mono text-muted-foreground">Real-time node infrastructure status</p>
        </div>

        {/* Active Nodes */}
        <div className="space-y-3">
          <h3 className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            <Globe className="w-3 h-3" />
            Active Nodes
          </h3>
          <div className="space-y-2">
            {nodes.map((node) => (
              <div key={node.name} className="bg-background/50 border border-white/5 rounded px-3 py-2.5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold text-foreground">{node.name}</span>
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      node.status === "active"
                        ? "bg-terminal-green animate-pulse"
                        : node.status === "initializing"
                          ? "bg-amber-500 animate-pulse"
                          : "bg-muted-foreground/30"
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-muted-foreground uppercase">{node.status}</span>
                  <span className="text-[9px] font-mono text-primary">{node.batch}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VDR Access */}
        <div className="space-y-3">
          <h3 className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            <FileKey className="w-3 h-3" />
            VDR_Access
          </h3>
          <div className="space-y-2">
            <button className="w-full bg-background/50 border border-white/5 rounded px-3 py-2.5 text-left hover:border-primary/30 transition-colors group">
              <div className="flex items-center gap-2">
                <Database className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-[10px] font-mono text-foreground">Institutional Records</span>
              </div>
            </button>
            <button className="w-full bg-background/50 border border-white/5 rounded px-3 py-2.5 text-left hover:border-primary/30 transition-colors group">
              <div className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-[10px] font-mono text-foreground">Purity Certifications</span>
              </div>
            </button>
          </div>
        </div>

        {/* System Status */}
        <div className="pt-4 border-t border-white/5">
          <div className="flex items-center gap-2 text-[9px] font-mono text-muted-foreground">
            <Activity className="w-3 h-3" />
            <span>System Integrity: 99.97%</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
