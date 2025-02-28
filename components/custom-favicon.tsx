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
    
    // Create a link element for the favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.setAttribute('type', 'image/jpeg');
    link.setAttribute('rel', 'shortcut icon');
    link.setAttribute('href', '/images/XtefoH71irGOB6ad-generated_image.jpg');
    document.getElementsByTagName('head')[0].appendChild(link);
    
  }, [isMounted]);
  
  return null;
} 