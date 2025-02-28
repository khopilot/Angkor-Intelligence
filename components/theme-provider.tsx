'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import { useEffect } from 'react';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force dark mode
  useEffect(() => {
    // Set dark mode in localStorage to ensure persistence
    localStorage.setItem('theme', 'dark');
    
    // Add a class to ensure dark mode is always applied
    document.documentElement.classList.add('dark');
    
    // Remove any light mode classes if they exist
    document.documentElement.classList.remove('light');
  }, []);
  
  return (
    <NextThemesProvider 
      {...props} 
      forcedTheme="dark" // Force dark theme at the provider level
      enableSystem={false} // Disable system preference
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
