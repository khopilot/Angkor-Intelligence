'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Node {
  x: number;
  y: number;
  id: number;
  connections: Node[];
}

export default function NeuralNetwork() {
  const [nodes] = useState(() => {
    // Generate a network of nodes
    const nodeCount = 20;
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * 300 + 50,
        y: Math.random() * 200 + 50,
        id: i,
        connections: []
      });
    }
    
    // Create connections between nearby nodes
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + 
            Math.pow(node.y - otherNode.y, 2)
          );
          if (distance < 80 && node.connections.length < 3) {
            node.connections.push(otherNode);
          }
        }
      });
    });
    
    return nodes;
  });

  return (
    <div className="relative w-full h-full opacity-30">
      <svg viewBox="0 0 400 300" className="w-full h-full">
        {/* Connections */}
        {nodes.map((node, i) =>
          node.connections.map((connection, j) => (
            <motion.line
              key={`${i}-${j}`}
              x1={node.x}
              y1={node.y}
              x2={connection.x}
              y2={connection.y}
              stroke="#D4AF7C"
              strokeWidth="1"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                duration: 2, 
                delay: (i + j) * 0.1,
                ease: "easeInOut"
              }}
            />
          ))
        )}
        
        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill="#D4AF7C"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: [0, 1, 0.8]
              }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.05,
                ease: "backOut"
              }}
            />
            {/* Pulsing effect for some nodes */}
            {i % 4 === 0 && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="6"
                fill="none"
                stroke="#D4AF7C"
                strokeWidth="1"
                opacity="0.3"
                animate={{
                  r: [6, 10, 6],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
          </motion.g>
        ))}
        
        {/* Floating data particles */}
        {[...Array(8)].map((_, i) => (
          <motion.rect
            key={`particle-${i}`}
            x={50 + i * 40}
            y={100 + (i % 2) * 80}
            width="2"
            height="2"
            fill="#D4AF7C"
            opacity="0.6"
            animate={{
              x: [50 + i * 40, 70 + i * 40, 50 + i * 40],
              y: [100 + (i % 2) * 80, 120 + (i % 2) * 80, 100 + (i % 2) * 80],
              opacity: [0.6, 0.2, 0.6]
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </svg>
    </div>
  );
}