'use client';

import { useEffect, useRef, useState } from 'react';

export function GlobalMatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Use a state to track if we're on the client side
  const [isMounted, setIsMounted] = useState(false);
  
  // Only run once the component is mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run the matrix animation on the client side
    if (!isMounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();

    // Resize on window resize
    window.addEventListener('resize', resizeCanvas);

    // Khmer Unicode range: 0x1780 to 0x17FF
    const getRandomKhmerChar = () => {
      const charCode = Math.floor(Math.random() * (0x17FF - 0x1780 + 1)) + 0x1780;
      return String.fromCodePoint(charCode);
    };

    // Create drops
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height);
    }

    // Drawing animation
    const draw = () => {
      // Add semi-transparent black background to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color and font
      ctx.fillStyle = '#0f0'; // Matrix green
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Get random Khmer character
        const text = getRandomKhmerChar();

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Move the drop down
        drops[i]++;

        // Random reset to top when drop reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    };

    // Animation loop
    const interval = setInterval(draw, 50);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isMounted]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 size-full -z-10"
      style={{ opacity: 0.15 }} // Lower opacity for the global background
    />
  );
} 