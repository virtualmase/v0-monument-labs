export function Navbar() {
  return (
    <nav className="fixed w-full z-50 border-b border-white/5 bg-background/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border-2 border-primary rounded-lg flex items-center justify-center">
            <span className="text-primary font-black text-xl tracking-tighter">M</span>
          </div>
          <div>
            <h1 className="text-foreground font-extrabold text-xl tracking-tighter leading-none">MONUMENT_LABS</h1>
            <p className="text-[9px] text-primary font-mono tracking-[0.3em] uppercase mt-1">
              Institutional Longevity OS v1.0
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-widest font-bold text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Node_Helsinki: Active
          </span>
          <span className="text-muted-foreground/50">|</span>
          <a href="#science" className="hover:text-primary transition-colors">
            VDR_Access
          </a>
        </div>

        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-sm text-xs font-bold font-mono uppercase tracking-widest transition-all">
          Partner_Portal
        </button>
      </div>
    </nav>
  )
}
