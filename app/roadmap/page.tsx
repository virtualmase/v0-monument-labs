import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RoadmapHero } from "@/components/roadmap-hero"
import { RoadmapPhases } from "@/components/roadmap-phases"
import { RoadmapSummary } from "@/components/roadmap-summary"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-grid">
      <Navbar />
      <RoadmapHero />
      <RoadmapPhases />
      <RoadmapSummary />
      <Footer />
    </div>
  )
}
