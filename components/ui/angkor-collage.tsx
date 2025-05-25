'use client';

import { motion } from 'framer-motion';

export default function AngkorCollage() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sepia Angkor Wat silhouette */}
      <motion.div 
        className="absolute left-0 top-0 w-1/2 h-full opacity-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full filter sepia"
          preserveAspectRatio="xMinYMid slice"
        >
          {/* Simplified Angkor Wat temple outline */}
          <defs>
            <linearGradient id="templeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B4513" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4AF7C" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Main temple structure */}
          <path
            d="M50 250 L80 200 L120 250 L160 150 L200 100 L240 150 L280 250 L320 200 L350 250 L350 280 L50 280 Z"
            fill="url(#templeGradient)"
            stroke="#8B4513"
            strokeWidth="1"
            opacity="0.4"
          />
          
          {/* Central towers */}
          <path
            d="M160 150 L180 80 L200 60 L220 80 L240 150"
            fill="url(#templeGradient)"
            stroke="#8B4513"
            strokeWidth="1"
            opacity="0.5"
          />
          
          {/* Side towers */}
          <path
            d="M80 200 L100 160 L120 200"
            fill="url(#templeGradient)"
            stroke="#8B4513"
            strokeWidth="1"
            opacity="0.4"
          />
          <path
            d="M280 200 L300 160 L320 200"
            fill="url(#templeGradient)"
            stroke="#8B4513"
            strokeWidth="1"
            opacity="0.4"
          />
          
          {/* Reflection in water */}
          <path
            d="M50 280 L350 280 L350 300 L50 300 Z"
            fill="url(#templeGradient)"
            opacity="0.1"
          />
        </svg>
      </motion.div>
      
      {/* Polygonal transition */}
      <motion.div 
        className="absolute left-1/4 top-0 w-1/2 h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <svg
          viewBox="0 0 200 300"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Polygonal blend shapes */}
          {[...Array(12)].map((_, i) => (
            <motion.polygon
              key={i}
              points={`${20 + i * 15},${50 + i * 20} ${40 + i * 15},${30 + i * 20} ${60 + i * 15},${70 + i * 20} ${30 + i * 15},${90 + i * 20}`}
              fill="#D4AF7C"
              opacity="0.1"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 0.1, 0.05],
                scale: [0, 1, 1.1],
                rotate: [0, 5, -5]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>
      
      {/* Neural network overlay on right */}
      <motion.div 
        className="absolute right-0 top-0 w-1/2 h-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <svg
          viewBox="0 0 200 300"
          className="w-full h-full"
          preserveAspectRatio="xMaxYMid slice"
        >
          {/* Neural network nodes */}
          {[
            { x: 50, y: 50 }, { x: 120, y: 40 }, { x: 180, y: 70 },
            { x: 30, y: 120 }, { x: 100, y: 110 }, { x: 150, y: 140 },
            { x: 70, y: 190 }, { x: 140, y: 200 }, { x: 180, y: 220 },
            { x: 40, y: 260 }, { x: 110, y: 250 }, { x: 170, y: 270 }
          ].map((node, i) => (
            <motion.g key={i}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="4"
                fill="#D4AF7C"
                opacity="0.6"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.5 + i * 0.1,
                  ease: "backOut"
                }}
              />
              {/* Connections */}
              {i < 11 && (
                <motion.line
                  x1={node.x}
                  y1={node.y}
                  x2={[
                    { x: 50, y: 50 }, { x: 120, y: 40 }, { x: 180, y: 70 },
                    { x: 30, y: 120 }, { x: 100, y: 110 }, { x: 150, y: 140 },
                    { x: 70, y: 190 }, { x: 140, y: 200 }, { x: 180, y: 220 },
                    { x: 40, y: 260 }, { x: 110, y: 250 }, { x: 170, y: 270 }
                  ][i + 1].x}
                  y2={[
                    { x: 50, y: 50 }, { x: 120, y: 40 }, { x: 180, y: 70 },
                    { x: 30, y: 120 }, { x: 100, y: 110 }, { x: 150, y: 140 },
                    { x: 70, y: 190 }, { x: 140, y: 200 }, { x: 180, y: 220 },
                    { x: 40, y: 260 }, { x: 110, y: 250 }, { x: 170, y: 270 }
                  ][i + 1].y}
                  stroke="#D4AF7C"
                  strokeWidth="1"
                  opacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ 
                    duration: 1, 
                    delay: 2 + i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
}