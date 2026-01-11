export function Footer() {
  return (
    <footer className="py-12 md:py-16 px-6 border-t border-white/5 text-center font-mono">
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 md:gap-12 mb-8 opacity-40 grayscale">
        <span className="text-[9px] font-bold tracking-[0.4em] text-muted-foreground">GMP_CERTIFIED</span>
        <span className="text-[9px] font-bold tracking-[0.4em] text-muted-foreground">ISO_9001</span>
        <span className="text-[9px] font-bold tracking-[0.4em] text-muted-foreground">SECURE_VDR</span>
      </div>
      <p className="text-[10px] text-muted-foreground/50 tracking-[0.2em] sm:tracking-[0.4em] uppercase font-bold">
        Monument Labs LLC // Advanced Human Infrastructure
      </p>
    </footer>
  )
}
