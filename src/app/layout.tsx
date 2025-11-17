import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Eiendomsanalyse - SiO',
    template: '%s | SiO',
  },
  description: 'Placeanalyser og eiendomsinformasjon for SiOs (Studentsamskipnaden i Oslo og Akershus) eiendomsportefølje',
  keywords: ['Oslo', 'eiendom', 'placeanalyse', 'SiO', 'Studentsamskipnaden'],
  authors: [{ name: 'Natural State' }, { name: 'SiO' }],
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    siteName: 'Eiendomsanalyse - SiO',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-lokka-light text-lokka-neutral antialiased">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
