import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Samrat | Portfolio',
  description: 'A modern portfolio website built with Next.js and Framer Motion',
  icons: {
    icon: ['/favicon.ico']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}