import type { Metadata } from 'next';
import { Syne, Schibsted_Grotesk } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Studio',
  description: 'Strategy, branding, and digital experiences for ambitious brands.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${schibstedGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
