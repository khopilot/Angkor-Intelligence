import React from 'react';

export function AngkorLogo({ size = 32 }: { size?: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Temple silhouette */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0"
      >
        <path
          d="M12 2L3 9H5V20H19V9H21L12 2Z"
          fill="none"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 20V9H15V20"
          fill="none"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 14H15"
          stroke="#10B981"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      
      {/* Matrix-style overlay */}
      <div className="absolute top-0 left-0 size-full flex items-center justify-center overflow-hidden">
        <span className="text-green-400 font-bold text-xs" style={{ fontSize: size * 0.3 }}>
          ខ្មែរ
        </span>
      </div>
    </div>
  );
} 