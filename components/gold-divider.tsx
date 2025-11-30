export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent md:w-24" />
      <div className="h-2 w-2 rotate-45 bg-accent" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent md:w-24" />
    </div>
  )
}
