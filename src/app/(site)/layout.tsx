import '@/styles/tailwind.css';

import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Donald Studer — Front-End Developer',
  description:
    'Portfolio of Donald Studer, a front-end developer building accessible, responsive web interfaces with React, Next.js, and TypeScript.',
  icons: {
    icon: '/favicon.png?v=2',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={plusJakarta.className}>
      <body>
        <div className='isolate'>
          <NextTopLoader
            color='var(--color-pacific-cyan)'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <Header />
          {children}
          <Footer />
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}
