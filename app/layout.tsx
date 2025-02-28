import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/react';

import { ThemeProvider } from '@/components/theme-provider';
import { GlobalMatrixBackground } from '@/components/global-matrix-background';
import { CustomFavicon } from '@/components/custom-favicon';
import { metadata, viewport } from './metadata';

import './globals.css';

export { metadata, viewport };

// Force dark mode script
const FORCE_DARK_MODE_SCRIPT = `
(function() {
  document.documentElement.classList.add('dark');
  document.documentElement.classList.remove('light');
  localStorage.setItem('theme', 'dark');
})();
`;

const THEME_COLOR = 'hsl(0 0% 0%)'; // Black theme color
const THEME_COLOR_SCRIPT = `\
(function() {
  var html = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', '${THEME_COLOR}');
})();`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      // `next-themes` injects an extra classname to the body element to avoid
      // visual flicker before hydration. Hence the `suppressHydrationWarning`
      // prop is necessary to avoid the React hydration mismatch warning.
      // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
      suppressHydrationWarning
      data-force-theme="dark" // Additional attribute to force dark theme
    >
      <head><script dangerouslySetInnerHTML={{__html: THEME_COLOR_SCRIPT}}/><script dangerouslySetInnerHTML={{__html: FORCE_DARK_MODE_SCRIPT}}/><meta name="color-scheme" content="dark"/></head>
      <body className="antialiased bg-black text-white dark">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomFavicon />
          <GlobalMatrixBackground />
          <Toaster position="top-center" toastOptions={{ style: { background: '#000', color: '#fff', border: '1px solid rgba(16, 185, 129, 0.3)' } }} />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
