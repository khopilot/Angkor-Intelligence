'use client';

import { useEffect, useState } from 'react';

export function CustomFavicon() {
  // Use a state to track if we're on the client side
  const [isMounted, setIsMounted] = useState(false);
  
  // Only run once the component is mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Only run the favicon creation logic on the client side
  useEffect(() => {
    if (!isMounted) return;
    
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Fill background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, 32, 32);
      
      // Draw temple silhouette
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(16, 4);  // Top of temple
      ctx.lineTo(6, 12);  // Left side
      ctx.lineTo(8, 12);  // Left door
      ctx.lineTo(8, 28);  // Left wall
      ctx.lineTo(24, 28); // Bottom
      ctx.lineTo(24, 12); // Right wall
      ctx.lineTo(26, 12); // Right door
      ctx.lineTo(16, 4);  // Back to top
      ctx.stroke();
      
      // Draw middle line
      ctx.beginPath();
      ctx.moveTo(16, 12);
      ctx.lineTo(16, 28);
      ctx.stroke();
      
      // Draw horizontal line
      ctx.beginPath();
      ctx.moveTo(12, 20);
      ctx.lineTo(20, 20);
      ctx.stroke();
      
      // Add Khmer character
      ctx.fillStyle = '#10B981';
      ctx.font = '10px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('ខ្មែរ', 16, 16);
      
      // Convert canvas to favicon
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.setAttribute('type', 'image/x-icon');
      link.setAttribute('rel', 'shortcut icon');
      link.setAttribute('href', canvas.toDataURL('image/x-icon'));
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }, [isMounted]);
  
  return null;
} 