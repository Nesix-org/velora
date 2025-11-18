import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Velora - E-Commerce Store',
  description: 'Modern e-commerce website built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
