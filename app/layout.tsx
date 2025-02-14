import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ProcessorMatch - Find Your Perfect Payment Processor',
  description: 'Match with the right payment processor for your business using our advanced AI technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-900 to-black text-white antialiased`}>
        {/* Decorative elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
        </div>

        {children}
      </body>
    </html>
  );
}
