import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Grok Portfolio | Salman Raza',
  description: 'AI-Powered Portfolio built with Grok',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
