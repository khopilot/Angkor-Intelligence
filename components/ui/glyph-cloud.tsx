'use client';

import { motion } from 'framer-motion';

export default function GlyphCloud() {
  const glyphs = [
    '✦', '◆', '◇', '◈', '◉', '◎', '●', '○', '◯', '⬟', '⬢', '⬡',
    '△', '▲', '▽', '▼', '◁', '▷', '◀', '▶', '⧨', '⧩', '⧪', '⧫'
  ];

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {glyphs.map((glyph, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20 select-none pointer-events-none"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            fontSize: `${Math.random() * 20 + 12}px`,
          }}
          initial={{ 
            opacity: 0, 
            scale: 0,
            rotate: 0
          }}
          animate={{ 
            opacity: [0, 0.3, 0.1],
            scale: [0, 1.2, 1],
            rotate: [0, 180, 360],
            y: [0, -10, 0],
            x: [0, Math.random() * 20 - 10, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: i * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {glyph}
        </motion.div>
      ))}
      
      {/* Floating AI/Tech symbols */}
      {['AI', 'ML', 'NLP', 'LLM', 'RAG', 'GPT'].map((term, i) => (
        <motion.div
          key={`tech-${i}`}
          className="absolute text-xs font-mono text-primary/15 select-none pointer-events-none"
          style={{
            left: `${Math.random() * 70 + 15}%`,
            top: `${Math.random() * 70 + 15}%`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 0.4, 0.2],
            y: [20, -5, 10],
            rotate: [0, 5, -5]
          }}
          transition={{
            duration: 3 + Math.random(),
            delay: 2 + i * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {term}
        </motion.div>
      ))}
      
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="#D4AF7C"
            strokeWidth="0.5"
            opacity="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 4,
              delay: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
}