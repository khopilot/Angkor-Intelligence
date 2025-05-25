'use client';

import * as React from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  forcedTheme?: Theme;
}

export function ThemeProvider({ 
  children, 
  defaultTheme = 'dark',
  forcedTheme 
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(forcedTheme || defaultTheme);

  const setTheme = React.useCallback((newTheme: Theme) => {
    if (forcedTheme) return; // Don't allow theme changes if forced
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [forcedTheme]);

  React.useEffect(() => {
    if (forcedTheme) {
      setThemeState(forcedTheme);
      return;
    }

    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setThemeState(savedTheme);
    }
  }, [forcedTheme]);

  React.useEffect(() => {
    const currentTheme = forcedTheme || theme;
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme, forcedTheme]);

  const value = React.useMemo(() => ({
    theme: forcedTheme || theme,
    setTheme,
  }), [theme, setTheme, forcedTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
} 