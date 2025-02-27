import type { Metadata } from 'next';
import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/theme-provider';
import { GlobalMatrixBackground } from '@/components/global-matrix-background';
import { CustomFavicon } from '@/components/custom-favicon';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://chat.aiangkor.com'),
  title: 'AI Angkor Intelligence Chatbot',
  description: 'Advanced AI chatbot by AI Angkor Intelligence.',
};

export const viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

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
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_COLOR_SCRIPT,
          }}
        />
      </head>
      <body className="antialiased bg-black text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomFavicon />
          <GlobalMatrixBackground />
          <Toaster position="top-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
