'use client';

import { motion } from 'framer-motion';

export default function CircuitPattern() {
  return (
    <motion.svg
      viewBox="0 0 400 300"
      className="absolute inset-0 w-full h-full opacity-20"
      preserveAspectRatio="xMidYMid slice"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 2 }}
    >
      {/* Circuit lines */}
      <motion.path
        d="M50 50 L150 50 L150 100 L250 100 L250 150 L350 150"
        stroke="#D4AF7C"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      <motion.path
        d="M50 200 L100 200 L100 250 L200 250 L200 200 L350 200"
        stroke="#D4AF7C"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M200 50 L200 100 L300 100 L300 200"
        stroke="#D4AF7C"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
      />
      
      {/* Circuit nodes */}
      {[
        { x: 150, y: 50 },
        { x: 150, y: 100 },
        { x: 250, y: 100 },
        { x: 250, y: 150 },
        { x: 100, y: 200 },
        { x: 200, y: 250 },
        { x: 200, y: 200 },
        { x: 200, y: 100 },
        { x: 300, y: 100 }
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="4"
          fill="#D4AF7C"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 1],
            opacity: [0, 1, 0.8]
          }}
          transition={{ 
            duration: 0.6, 
            delay: 1.5 + i * 0.1,
            ease: "backOut"
          }}
        />
      ))}
      
      {/* Pulsing connections */}
      <motion.circle
        cx="150"
        cy="100"
        r="8"
        fill="none"
        stroke="#D4AF7C"
        strokeWidth="2"
        opacity="0.6"
        animate={{
          r: [8, 12, 8],
          opacity: [0.6, 0.2, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.circle
        cx="250"
        cy="150"
        r="8"
        fill="none"
        stroke="#D4AF7C"
        strokeWidth="2"
        opacity="0.6"
        animate={{
          r: [8, 12, 8],
          opacity: [0.6, 0.2, 0.6]
        }}
        transition={{
          duration: 2,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.svg>
  );
}