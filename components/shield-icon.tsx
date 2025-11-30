export function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9a227" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#c9a227" />
        </linearGradient>
        <linearGradient id="shieldInner" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>
      </defs>
      {/* Outer shield shape */}
      <path
        d="M50 5 L95 20 L95 55 C95 80 75 100 50 115 C25 100 5 80 5 55 L5 20 Z"
        fill="url(#shieldGradient)"
        stroke="#d4af37"
        strokeWidth="2"
      />
      {/* Inner shield */}
      <path d="M50 12 L88 25 L88 55 C88 76 70 93 50 106 C30 93 12 76 12 55 L12 25 Z" fill="url(#shieldInner)" />
      {/* Center emblem - A */}
      <text x="50" y="70" textAnchor="middle" fill="#d4af37" fontSize="40" fontWeight="bold" fontFamily="serif">
        A
      </text>
      {/* Decorative lines */}
      <path d="M30 45 L70 45" stroke="#d4af37" strokeWidth="1" opacity="0.6" />
      <path d="M35 85 L65 85" stroke="#d4af37" strokeWidth="1" opacity="0.6" />
    </svg>
  )
}
