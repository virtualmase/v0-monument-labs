"use client"

import { Navbar } from "@/components/navbar"
import { PortalSidebar } from "@/components/portal/portal-sidebar"
import { BiologicalMap } from "@/components/portal/biological-map"
import { KatinConsole } from "@/components/portal/katin-console"
import { NorvocForecast } from "@/components/portal/norvoc-forecast"

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-background bg-grid">
      <Navbar />

      <div className="pt-20 flex">
        <PortalSidebar />

        <div className="flex-1 p-6 lg:p-8 ml-0 lg:ml-72">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold font-mono tracking-tight text-foreground">COMMAND_TERMINAL</h1>
                <p className="text-xs font-mono text-muted-foreground mt-1">
                  Partner Control Center // Institutional Access
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-muted-foreground uppercase">Session: Active</span>
                <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <BiologicalMap />
              <KatinConsole />
            </div>

            {/* Norvoc Forecast - Full Width */}
            <NorvocForecast />
          </div>
        </div>
      </div>
    </main>
  )
}
