export default function AngkorTexture() {
  return (
    <div className="absolute inset-0 opacity-10">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="stone-texture" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            {/* Stone-like rectangular blocks */}
            <rect x="0" y="0" width="38" height="18" fill="currentColor" opacity="0.1" />
            <rect x="0" y="20" width="18" height="18" fill="currentColor" opacity="0.15" />
            <rect x="20" y="20" width="18" height="18" fill="currentColor" opacity="0.08" />
            
            {/* Mortar lines */}
            <line x1="0" y1="19" x2="40" y2="19" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
            <line x1="19" y1="20" x2="19" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
            <line x1="0" y1="39" x2="40" y2="39" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
          </pattern>
          
          <pattern id="khmer-motif" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            {/* Simplified Khmer decorative pattern */}
            <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.06" />
            <path d="M25 40 Q40 25 55 40 Q40 55 25 40" fill="currentColor" opacity="0.04" />
            <path d="M40 25 L40 55 M25 40 L55 40" stroke="currentColor" strokeWidth="0.5" opacity="0.03" />
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#stone-texture)" />
        <rect width="100%" height="100%" fill="url(#khmer-motif)" />
      </svg>
    </div>
  );
}