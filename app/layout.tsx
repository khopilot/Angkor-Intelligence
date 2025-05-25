import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-angkor.com'),
  title: 'AI Angkor Intelligence | Khmer-Native AI Solutions',
  description: 'Cambodia\'s first boutique AI consultancy building chatbots, LLM agent systems and bespoke automations for ASEAN SMEs and institutions.',
  icons: {
    icon: '/ai-logo-nobg-2.png',
    shortcut: '/ai-logo-nobg-2.png',
    apple: '/ai-logo-nobg-2.png',
  },
  openGraph: {
    title: 'AI Angkor Intelligence | Khmer-Native AI Solutions',
    description: 'Cambodia\'s first boutique AI consultancy building chatbots, LLM agent systems and bespoke automations for ASEAN SMEs and institutions.',
    url: 'https://ai-angkor.com',
    siteName: 'AI Angkor Intelligence',
    images: [
      {
        url: '/ai-logo-nobg-2.png',
        width: 1200,
        height: 630,
        alt: 'AI Angkor Intelligence Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Angkor Intelligence | Khmer-Native AI Solutions',
    description: 'Cambodia\'s first boutique AI consultancy building chatbots, LLM agent systems and bespoke automations for ASEAN SMEs and institutions.',
    images: ['/ai-logo-nobg-2.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider
          defaultTheme="dark"
          forcedTheme="dark"
        >
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
          <Toaster position="top-center" />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
} 