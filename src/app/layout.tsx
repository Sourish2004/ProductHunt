// src/app/layout.tsx
import { MantineProvider } from '@mantine/core';
import Head from 'next/head';
import ProductHuntCard from './ProductHuntCard';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Product Hunt UI Clone</title>
      </head>
      <body>
        <MantineProvider>
          <main className="min-h-screen flex items-center justify-center">
            {children}
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}
