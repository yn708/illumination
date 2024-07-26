import BackgroundAnimation from '@/components/animations/BackgroundAnimation';
import ThemeToggleButton from '@/components/button/ThemeToggleButton';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/context/theme-provider';
import { DESCRIPTION, SITE_NAME, SITE_URL } from '@/utils/constants';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: DESCRIPTION,
  keywords: ['インスピレーション', '名言', 'モチベーション', 'イルミネーション'],
  robots: 'index, follow',
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: SITE_NAME,
  },
  openGraph: {
    title: SITE_NAME,
    siteName: SITE_NAME,
    description: DESCRIPTION,
    type: 'website',
    locale: 'ja_JP',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary',
    title: SITE_NAME,
    description: DESCRIPTION,
    // creator: , アカウント作成後
  },
  // 後々
  // verification: {
  //   google: 'your-google-verification-code',
  // },
};
export const viewport = 'width=device-width, initial-scale=1';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning className={clsx(notoSansJP.variable, 'font-sans')}>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeToggleButton />
          <Toaster />
          <Header />
          <BackgroundAnimation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
