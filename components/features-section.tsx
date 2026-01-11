import { Brain, Layers, Globe, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Norvoc_Core",
    description: "Predictive AI discovery engine. We identify systemic decay 24 months before clinical manifestation.",
  },
  {
    icon: Layers,
    title: "Katin_Synthesis",
    description: "Proprietary molecular manufacturing. Modular delivery of bio-available interventions at scale.",
  },
  {
    icon: Globe,
    title: "Global_Nodes",
    description:
      "Decentralized synthesis facilities in Irvine, Monument, Helsinki and Singapore ensuring absolute supply chain integrity.",
  },
  {
    icon: BarChart3,
    title: "Unit_Economics",
    description: "75% Gross Margins through vertical integration. $100M ARR roadmap for 2027.",
  },
]

export function FeaturesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="stat-card p-8 space-y-6">
            <feature.icon className="text-primary w-8 h-8" />
            <h3 className="text-foreground font-bold font-mono text-xs uppercase tracking-widest">{feature.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
