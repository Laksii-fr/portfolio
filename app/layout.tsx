import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';

const GradientBackground = dynamic(
  () => import('@/components/gradient-background'),
  { ssr: false }
);

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lakshay Sharma | Backend Developer & AI Innovator',
  description: 'Designing scalable systems, crafting AI-powered tools, and building a future-proof tech career in Japan.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/img/favicon.png" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={cn('min-h-screen bg-black text-white antialiased', inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <GradientBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}