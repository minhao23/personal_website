import type { ReactNode } from 'react';

import Image from 'next/image';
import type { Metadata } from 'next';

import stadiumBackground from './assets/backgroud/background.jpeg';
import './globals.css';

export const metadata: Metadata = {
  title: 'Minhao\'s personal website',
  description: 'FIFA-inspired personal portfolio built with Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed inset-0 -z-10">
          <Image
            src={stadiumBackground}
            alt="Football stadium background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,9,12,0.26)_0%,rgba(8,9,12,0.72)_34%,rgba(8,9,12,0.96)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,208,0,0.16),transparent_32%)]" />
        </div>
        {children}
      </body>
    </html>
  );
}
