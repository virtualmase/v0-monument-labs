"use client"

import { useState, useEffect, useRef, useCallback } from "react"

interface SyncPhase {
  name: string
  message: string
  duration: number
  endProgress: number
}

const SYNC_PHASES: SyncPhase[] = [
  { name: "Authentication", message: "Authenticating Partner_VDR...", duration: 800, endProgress: 20 },
  { name: "Handshake", message: "Establishing Global_Node_Handshake...", duration: 600, endProgress: 30 },
  { name: "Epigenetic", message: "Ingesting Epigenetic_Clock_Data...", duration: 1800, endProgress: 50 },
  { name: "Metabolic", message: "Processing Metabolic_Markers...", duration: 1200, endProgress: 65 },
  { name: "Inflammation", message: "Analyzing Inflammation_Panel...", duration: 1000, endProgress: 75 },
  { name: "Calibration", message: "Calibrating Katin_Protocol_ML-024...", duration: 1400, endProgress: 90 },
  { name: "Finalization", message: "Norvoc_Engine: Finalizing_Predictive_Map...", duration: 600, endProgress: 100 },
]

const CONSOLE_LOGS = [
  { progress: 5, message: "Node_Helsinki_v1.0: Connection_Established" },
  { progress: 15, message: "VDR_Authentication: [VERIFIED]" },
  { progress: 25, message: "Mito_Efficiency: Scan_Initialized" },
  { progress: 40, message: "DNAm_Clock: 847_CpG_Sites_Mapped" },
  { progress: 55, message: "Gap_Detected: Cellular_Resilience_Lag" },
  { progress: 70, message: "Protocol_ML-024: Matching_Sequence..." },
  { progress: 85, message: "Norvoc_Forecast: 24_Month_Projection_Ready" },
  { progress: 95, message: "Integrity_Hash: 0x7f3a...b2c1" },
  { progress: 100, message: "Sync_Complete: All_Systems_Nominal" },
]

interface InitializeSyncProps {
  onComplete: () => void
}

export function InitializeSync({ onComplete }: InitializeSyncProps) {
  const [progress, setProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [consoleLogs, setConsoleLogs] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)
  const [isStarted, setIsStarted] = useState(false)

  const addedLogsRef = useRef<Set<string>>(new Set())
  const phaseIndexRef = useRef(0)
  const currentProgressRef = useRef(0)
  const isRunningRef = useRef(false)

  const generateBlocks = (percent: number) => {
    const totalBlocks = 20
    const filledBlocks = Math.floor((percent / 100) * totalBlocks)
    const filled = "█".repeat(filledBlocks)
    const empty = "░".repeat(totalBlocks - filledBlocks)
    return `[${filled}${empty}]`
  }

  const addConsoleLog = useCallback((message: string) => {
    if (!addedLogsRef.current.has(message)) {
      addedLogsRef.current.add(message)
      setConsoleLogs((prev) => [...prev, message].slice(-6))
    }
  }, [])

  const checkConsoleLogs = useCallback(
    (currentProg: number) => {
      CONSOLE_LOGS.forEach((log) => {
        if (currentProg >= log.progress) {
          addConsoleLog(log.message)
        }
      })
    },
    [addConsoleLog],
  )

  useEffect(() => {
    if (!isStarted || isRunningRef.current) return

    isRunningRef.current = true

    const runPhase = () => {
      if (phaseIndexRef.current >= SYNC_PHASES.length) {
        setIsComplete(true)
        setTimeout(onComplete, 1200)
        return
      }

      const phase = SYNC_PHASES[phaseIndexRef.current]
      setCurrentPhase(phaseIndexRef.current)

      const startProgress = currentProgressRef.current
      const progressDiff = phase.endProgress - startProgress
      const steps = 20
      const stepDuration = phase.duration / steps
      let step = 0

      const progressInterval = setInterval(() => {
        step++
        const jitter = phaseIndexRef.current >= 2 && phaseIndexRef.current <= 4 ? Math.random() * 0.3 : 0
        const newProgress = startProgress + progressDiff * (step / steps) * (1 - jitter)
        currentProgressRef.current = Math.min(newProgress, phase.endProgress)
        const roundedProgress = Math.round(currentProgressRef.current)
        setProgress(roundedProgress)
        checkConsoleLogs(roundedProgress)

        if (step >= steps) {
          clearInterval(progressInterval)
          currentProgressRef.current = phase.endProgress
          setProgress(phase.endProgress)
          checkConsoleLogs(phase.endProgress)
          phaseIndexRef.current++
          setTimeout(runPhase, 150)
        }
      }, stepDuration)
    }

    const startDelay = setTimeout(runPhase, 500)
    return () => clearTimeout(startDelay)
  }, [isStarted, onComplete, checkConsoleLogs])

  const handleStartSync = () => {
    setIsStarted(true)
  }

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="w-full max-w-xl mx-4">
        {/* Terminal Window */}
        <div className="bg-black/80 border border-terminal-green/30 rounded-sm p-6 font-mono backdrop-blur-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-terminal-green/20">
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${isStarted ? "bg-terminal-green animate-pulse" : "bg-terminal-green/50"}`}
              />
              <span className="text-terminal-green text-sm">MONUMENT_LABS</span>
            </div>
            <span className="text-terminal-green/60 text-xs">Initialize_Sync: Node_Helsinki_v1.0</span>
          </div>

          {!isStarted ? (
            <div className="py-8 text-center space-y-6">
              <div className="space-y-2">
                <p className="text-terminal-green text-sm">Partner_VDR Ready</p>
                <p className="text-terminal-green/60 text-xs">Awaiting authorization to initialize sync sequence...</p>
              </div>
              <button
                onClick={handleStartSync}
                className="px-6 py-3 bg-terminal-green/10 border border-terminal-green/50 text-terminal-green text-sm font-mono 
                         hover:bg-terminal-green/20 hover:border-terminal-green transition-all duration-200 
                         focus:outline-none focus:ring-2 focus:ring-terminal-green/50"
              >
                {">"} INITIALIZE_SYNC
              </button>
              <p className="text-terminal-green/40 text-[10px]">Click to establish secure handshake</p>
            </div>
          ) : (
            <>
              {/* Progress Section */}
              <div className="space-y-3">
                <div className="text-terminal-green text-sm">
                  {isComplete ? "Sync_Finalized" : SYNC_PHASES[currentPhase]?.message}
                  {!isComplete && <span className="animate-pulse">_</span>}
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-900 h-4 border border-terminal-green/30 relative overflow-hidden">
                  <div
                    className="bg-terminal-green/80 h-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminal-green/10 to-transparent animate-pulse" />
                </div>

                {/* Block Progress */}
                <div className="flex justify-between text-xs">
                  <span className="text-terminal-green/70">{generateBlocks(progress)}</span>
                  <span className="text-terminal-green">{progress}% Calibrated</span>
                </div>
              </div>

              {/* Console Output */}
              <div className="mt-6 pt-4 border-t border-terminal-green/20">
                <div className="text-[10px] text-terminal-green/50 mb-2 uppercase tracking-wider">System_Log</div>
                <div className="space-y-1 h-32 overflow-hidden">
                  {consoleLogs.map((log, i) => (
                    <p
                      key={i}
                      className={`text-xs transition-opacity duration-300 ${
                        i === consoleLogs.length - 1 ? "text-terminal-green" : "text-terminal-green/60"
                      }`}
                    >
                      {">"} {log} {i === consoleLogs.length - 1 && !isComplete && "[IN_PROGRESS]"}
                      {i === consoleLogs.length - 1 && isComplete && "[OK]"}
                    </p>
                  ))}
                  {consoleLogs.length === 0 && (
                    <p className="text-xs text-terminal-green/60">{">"} Initializing_Connection...</p>
                  )}
                  {consoleLogs.length > 0 && !isComplete && (
                    <p className="text-xs text-terminal-green animate-pulse">{">"} Awaiting_Next_Packet...</p>
                  )}
                </div>
              </div>

              {/* Success State */}
              {isComplete && (
                <div className="mt-4 pt-4 border-t border-terminal-green/20 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-terminal-green/10 border border-terminal-green/30 rounded-sm">
                    <span className="w-2 h-2 rounded-full bg-terminal-green" />
                    <span className="text-terminal-green text-sm font-medium">HANDSHAKE_COMPLETE</span>
                  </div>
                  <p className="text-terminal-green/60 text-xs mt-2">Entering Command_Terminal...</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Ambient Glow */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-terminal-green/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  )
}
