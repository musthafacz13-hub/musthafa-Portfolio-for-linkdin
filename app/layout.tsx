import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Muhammed Musthafa — Junior Web & Mobile App Developer',
  description:
    'Personal portfolio of Muhammed Musthafa, a degree student and junior developer from Kerala, India specializing in AI-assisted application development.',
  authors: [{ name: 'Muhammed Musthafa' }],
  creator: 'Muhammed Musthafa',
  keywords: [
    'Muhammed Musthafa',
    'Developer Portfolio',
    'Junior Web Developer',
    'Mobile App Developer',
    'Kerala India',
    'AI-assisted development',
    'React',
    'Next.js',
    'TypeScript',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Muhammed Musthafa — Junior Web & Mobile App Developer',
    description:
      'Personal portfolio of Muhammed Musthafa, a degree student and junior developer from Kerala, India specializing in AI-assisted application development.',
    siteName: 'Muhammed Musthafa Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Muhammed Musthafa — Junior Web & Mobile App Developer',
    description:
      'Personal portfolio of Muhammed Musthafa, a degree student and junior developer from Kerala, India specializing in AI-assisted application development.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="min-h-screen bg-white text-[#111111] antialiased selection:bg-[#D9FF3A] selection:text-[#111111]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
