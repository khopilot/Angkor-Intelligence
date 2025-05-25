export default function AngkorOutline() {
  return (
    <svg
      viewBox="0 0 800 400"
      className="absolute inset-0 w-full h-full opacity-10"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Simplified Angkor Wat silhouette outline */}
      <path
        d="M100 350 L150 300 L200 350 L250 250 L300 350 L350 200 L400 150 L450 200 L500 350 L550 250 L600 350 L650 300 L700 350"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Central tower */}
      <path
        d="M350 200 L400 100 L450 200"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Side towers */}
      <path
        d="M250 250 L300 180 L350 250"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M450 250 L500 180 L550 250"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      {/* Base structure */}
      <rect
        x="200"
        y="320"
        width="400"
        height="30"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}