"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, ArrowLeft, Shield, Lock } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    partnerId: "",
    accessKey: "",
  })
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate authentication delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // For demo purposes, accept any non-empty credentials
    if (formData.partnerId && formData.accessKey) {
      router.push("/sync")
    } else {
      setError("Invalid credentials. Please verify your Partner_ID and Access_Key.")
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background bg-grid flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-white/5 bg-background/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-primary rounded-lg flex items-center justify-center">
              <span className="text-primary font-black text-lg sm:text-xl tracking-tighter">M</span>
            </div>
            <div>
              <h1 className="text-foreground font-extrabold text-base sm:text-xl tracking-tighter leading-none">
                MONUMENT_LABS
              </h1>
              <p className="text-[8px] sm:text-[9px] text-primary font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-0.5 sm:mt-1">
                Partner_Authentication
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs font-mono"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Return_Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-card/60 backdrop-blur-xl border border-white/5 rounded-sm p-6 sm:p-8 glow-primary">
            {/* Card Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
              <div className="w-10 h-10 bg-primary/10 border border-primary/30 rounded-sm flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-foreground font-bold text-lg tracking-tight">Partner_Portal</h2>
                <p className="text-muted-foreground text-xs font-mono">Secure_VDR_Access</p>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 mb-6 px-3 py-2 bg-terminal-green/5 border border-terminal-green/20 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
              <span className="text-terminal-green text-xs font-mono">Node_Helsinki: Ready_For_Handshake</span>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 px-3 py-2 bg-destructive/10 border border-destructive/30 rounded-sm">
                <p className="text-destructive-foreground text-xs font-mono">{error}</p>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Partner ID Field */}
              <div className="space-y-2">
                <label htmlFor="partnerId" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Partner_ID
                </label>
                <div className="relative">
                  <input
                    id="partnerId"
                    type="text"
                    value={formData.partnerId}
                    onChange={(e) => setFormData({ ...formData, partnerId: e.target.value })}
                    placeholder="ML-XXXX-XXXX"
                    className="w-full bg-background/50 border border-white/10 rounded-sm px-4 py-3 text-foreground font-mono text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Access Key Field */}
              <div className="space-y-2">
                <label htmlFor="accessKey" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Access_Key
                </label>
                <div className="relative">
                  <input
                    id="accessKey"
                    type={showPassword ? "text" : "password"}
                    value={formData.accessKey}
                    onChange={(e) => setFormData({ ...formData, accessKey: e.target.value })}
                    placeholder="••••••••••••••••"
                    className="w-full bg-background/50 border border-white/10 rounded-sm px-4 py-3 pr-12 text-foreground font-mono text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-background border border-white/10 rounded-sm checked:bg-primary checked:border-primary focus:ring-primary/20"
                  />
                  <span className="text-muted-foreground font-mono">Remember_Device</span>
                </label>
                <a href="#" className="text-primary hover:text-primary/80 font-mono transition-colors">
                  Reset_Access
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground px-6 py-4 rounded-sm text-sm font-bold font-mono uppercase tracking-widest transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    Initialize_Handshake
                  </>
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-white/5 text-center">
              <p className="text-muted-foreground text-xs font-mono">
                Need access?{" "}
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  Request_Partner_Credentials
                </a>
              </p>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-6 flex items-center justify-center gap-4 text-[10px] font-mono text-muted-foreground/60">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3" />
              256-bit_Encryption
            </span>
            <span className="text-muted-foreground/30">|</span>
            <span>HIPAA_Compliant</span>
            <span className="text-muted-foreground/30">|</span>
            <span>SOC2_Type_II</span>
          </div>
        </div>
      </div>
    </main>
  )
}
