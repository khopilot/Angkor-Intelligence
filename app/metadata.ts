import { Metadata } from 'next';

const APP_NAME = 'AI Angkor Intelligence';
const APP_DEFAULT_TITLE = 'AI Angkor Intelligence Chatbot';
const APP_TITLE_TEMPLATE = '%s - AI Angkor Intelligence';
const APP_DESCRIPTION = 'Experience the power of Cambodian-inspired AI with our advanced conversational chatbot. Featuring Apsara, Bayon, and Preah Vihear intelligence models.';

export const metadata: Metadata = {
  metadataBase: new URL('https://angkor-intelligence.vercel.app'),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  generator: 'Next.js',
  keywords: ['AI', 'Chatbot', 'Cambodia', 'Angkor', 'Intelligence', 'Apsara', 'Bayon', 'Preah Vihear'],
  authors: [{ name: 'AI Angkor Intelligence Team' }],
  creator: 'AI Angkor Intelligence',
  publisher: 'AI Angkor Intelligence',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: {
    icon: '/images/XtefoH71irGOB6ad-generated_image.jpg',
    apple: '/images/XtefoH71irGOB6ad-generated_image.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://angkor-intelligence.vercel.app',
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Angkor Intelligence Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    images: ['/og-image.jpg'],
    creator: '@aiangkor',
    site: '@aiangkor',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}; 