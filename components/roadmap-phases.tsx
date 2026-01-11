import { Cpu, Brain, Network, Infinity, CheckCircle2 } from "lucide-react"

const phases = [
  {
    number: "01",
    title: "Foundational Infrastructure",
    subtitle: "The Hardware Layer",
    description: "Establishing the biological baseline through high-fidelity synthesis.",
    timeline: "24–36 Months (Q1 2026 – Q1 2029)",
    rationale:
      "While Generative Bio-AI accelerates hit identification, the 'wet lab' validation of precision compounds and GMP facility setup remains a multi-year endeavor.",
    milestones: [
      {
        id: "1.1",
        title: "Generative Synthesis & Purity",
        description:
          "Deploy LLMs trained on protein sequences to design proprietary molecules (NAD+ variants, senolytics) with >99.5% purity.",
      },
      {
        id: "1.2",
        title: "Delivery Architecture",
        description:
          "Standardize non-invasive Lipid Nanoparticle (LNP) delivery for high bioavailability and systemic 'Architecture for Continuity.'",
      },
      {
        id: "1.3",
        title: "OS v1.0 & Multi-Omic Ingestion",
        description:
          "Launch the dashboard to ingest 'Deep Phenotype' data, including epigenetic clocks and metabolic flux.",
      },
      {
        id: "1.4",
        title: "CNPV Pilot Entry",
        description:
          "Secure entry into the FDA Commissioner's National Priority Voucher program to compress future review times from 12 months to 1–2 months.",
      },
    ],
    kpis: ["100% molecular fidelity", "80% user retention in initial 1,000-person beta cohort"],
    icon: Cpu,
    status: "active",
  },
  {
    number: "02",
    title: "Predictive Integration",
    subtitle: "The Intelligence Layer",
    description: "Activating the system to transition from reactive monitoring to proactive intervention.",
    timeline: "36–60 Months Cumulative (2029 – 2031)",
    rationale:
      "AI model development in healthspan takes ~2 years of longitudinal data collection from Phase 1 pilots and ethical AI validation.",
    milestones: [
      {
        id: "2.1",
        title: "The Foresight Engine",
        description:
          "Deploy ML models capable of forecasting 'Biological Lag' and biomarker decline 60 days before clinical onset.",
      },
      {
        id: "2.2",
        title: "Edge AI Monitoring",
        description:
          "Transition to privacy-first, on-device diagnostic models that process physiological patterns locally rather than in the cloud.",
      },
      {
        id: "2.3",
        title: "Closed-Loop Validation",
        description:
          "Launch adaptive regimens where the OS auto-modulates synthesis delivery based on real-time feedback loops.",
      },
    ],
    kpis: ["85% predictive accuracy", "20% improvement in objective healthspan metrics (e.g., DNAm PhenoAge, VO2 Max)"],
    icon: Brain,
    status: "upcoming",
  },
  {
    number: "03",
    title: "Systemic Optimization",
    subtitle: "Architecture for Continuity",
    description: "Scaling the OS for long-term stability via network effects and institutional integration.",
    timeline: "5–8 Years Cumulative (2031 – 2034)",
    rationale:
      "Scaling to multi-decade protocols and insurance-grade partnerships typically follows 5+ years of real-world stability data.",
    milestones: [
      {
        id: "3.1",
        title: "Continuity Blueprints",
        description: "Develop long-range protocols targeting mitochondrial health and protein homeostasis (autophagy).",
      },
      {
        id: "3.2",
        title: "Network Effect Activation",
        description:
          "Aggregate anonymized population data to enable 'Cohort Intelligence'—refining predictions for specific genetic profiles.",
      },
      {
        id: "3.3",
        title: "Institutional Grade Rollout",
        description:
          "Secure partnerships with insurance providers to categorize Monument as a 'Disease Interception' infrastructure.",
      },
    ],
    kpis: ["100,000+ active managed biologies", "90% of users maintaining markers within optimal ranges for 5+ years"],
    icon: Network,
    status: "upcoming",
  },
  {
    number: "04",
    title: "Biological Permanence",
    subtitle: "The Standard",
    description: "The ultimate realization of an autonomous, global infrastructure for human longevity.",
    timeline: "10+ Years (2034 and Beyond)",
    rationale:
      "Aligning with the 10–15 year lifecycle for true 'Standard of Care' status in the global longevity market.",
    milestones: [
      {
        id: "4.1",
        title: "Autonomous Maintenance",
        description:
          "Background-integrated delivery (e.g., bio-implantables) that corrects biological drift with zero user friction.",
      },
      {
        id: "4.2",
        title: "Full-Spectrum OS Integration",
        description: "Unified platform managing everything from molecular synthesis to cognitive/neuro-resilience.",
      },
      {
        id: "4.3",
        title: "Global Standard Setting",
        description:
          "Collaboration with the WHO and FDA to establish Monument as the benchmark for 'Human Infrastructure.'",
      },
    ],
    kpis: ["95% intervention autonomy", "25% projected extension of healthy lifespan across primary cohorts"],
    icon: Infinity,
    status: "upcoming",
  },
]

export function RoadmapPhases() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
        {phases.map((phase) => (
          <div key={phase.number} className="relative">
            {/* Phase Card */}
            <div
              className={`bg-card border rounded-sm p-5 md:p-8 glow-primary ${phase.status === "active" ? "border-primary/40" : "border-border"}`}
            >
              {/* Header */}
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6 mb-6 md:mb-8">
                <div
                  className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-sm ${phase.status === "active" ? "bg-primary/20" : "bg-secondary"}`}
                >
                  <phase.icon
                    className={`w-6 h-6 md:w-8 md:h-8 ${phase.status === "active" ? "text-primary" : "text-muted-foreground"}`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
                    <span className="text-xs font-mono text-primary font-bold tracking-widest">
                      PHASE_{phase.number}
                    </span>
                    {phase.status === "active" && (
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-primary/20 text-primary rounded-sm">
                        In Progress
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground tracking-tight">
                    {phase.title}
                  </h2>
                  <p className="text-sm font-mono text-muted-foreground italic">{phase.subtitle}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Timeline</p>
                  <p className="text-xs md:text-sm font-mono text-foreground">{phase.timeline}</p>
                </div>
              </div>

              {/* Description & Rationale */}
              <div className="mb-6 md:mb-8 space-y-4">
                <p className="text-sm md:text-base text-muted-foreground">{phase.description}</p>
                <div className="bg-secondary/50 border border-border rounded-sm p-3 md:p-4">
                  <p className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Strategic Rationale</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{phase.rationale}</p>
                </div>
              </div>

              {/* Milestones */}
              <div className="mb-6 md:mb-8">
                <p className="text-xs font-mono text-primary uppercase tracking-wider mb-3 md:mb-4">Key Milestones</p>
                <div className="space-y-3">
                  {phase.milestones.map((milestone) => (
                    <div
                      key={milestone.id}
                      className="flex gap-3 md:gap-4 p-3 md:p-4 bg-secondary/30 rounded-sm border border-border/50"
                    >
                      <div className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-sm bg-primary/10 shrink-0">
                        <span className="text-[10px] md:text-xs font-mono text-primary font-bold">{milestone.id}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm md:text-base text-foreground mb-1">{milestone.title}</p>
                        <p className="text-xs md:text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* KPIs */}
              <div>
                <p className="text-xs font-mono text-primary uppercase tracking-wider mb-3">Target KPIs</p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-3">
                  {phase.kpis.map((kpi, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 bg-primary/5 border border-primary/20 rounded-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-xs md:text-sm text-foreground">{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
