import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Muhammed Musthafa — Full-Stack AI Developer',
  description:
    'Personal portfolio of Muhammed Musthafa, Full-Stack AI Developer. Building clean, responsive web and mobile applications.',
  authors: [{ name: 'Muhammed Musthafa' }],
  creator: 'Muhammed Musthafa',
  keywords: [
    'Muhammed Musthafa',
    'Full-Stack AI Developer',
    'Developer Portfolio',
    'Web Developer',
    'Mobile App Developer',
    'React',
    'Next.js',
    'TypeScript',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Muhammed Musthafa — Full-Stack AI Developer',
    description:
      'Personal portfolio of Muhammed Musthafa, Full-Stack AI Developer. Building clean, responsive web and mobile applications.',
    siteName: 'Muhammed Musthafa Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Muhammed Musthafa — Full-Stack AI Developer',
    description:
      'Personal portfolio of Muhammed Musthafa, Full-Stack AI Developer. Building clean, responsive web and mobile applications.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#0a0a0a]" suppressHydrationWarning>
      <body
        className="min-h-screen bg-[#0a0a0a] text-white antialiased selection:bg-[#00d2ff] selection:text-[#0a0a0a] overflow-x-hidden font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
