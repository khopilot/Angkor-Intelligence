'use client';

import { useEffect, useState } from 'react';

export function MatrixLoading() {
  const [characters, setCharacters] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state once on client
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    // Only run on client side
    if (!isMounted) return;
    
    // Khmer Unicode range: 0x1780 to 0x17FF
    const getRandomKhmerChar = () => {
      const charCode = Math.floor(Math.random() * (0x17FF - 0x1780 + 1)) + 0x1780;
      return String.fromCodePoint(charCode);
    };
    
    // Create initial characters
    const initialChars = Array(10).fill('').map(() => getRandomKhmerChar());
    setCharacters(initialChars);
    
    // Update characters periodically
    const interval = setInterval(() => {
      setCharacters(prev => 
        prev.map((_, i) => 
          Math.random() > 0.7 ? getRandomKhmerChar() : prev[i]
        )
      );
    }, 100);
    
    return () => clearInterval(interval);
  }, [isMounted]);
  
  // Return empty array during SSR to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div className="flex justify-center items-center my-4">
        <div className="flex space-x-1">
          {Array(10).fill(0).map((_, index) => (
            <span key={index} className="text-green-400 opacity-0">ក</span>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex justify-center items-center my-4">
      <div className="flex space-x-1">
        {characters.map((char, index) => (
          <span 
            key={index} 
            className="text-green-400 animate-pulse"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              opacity: 0.5 + (0.5 * (index / characters.length))
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
} 