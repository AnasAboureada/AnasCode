import './globals.css';

import { Metadata } from 'next';
import Head from 'next/head';

import GoogleAnalytics from '@/components/libs/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'Anas Code | Software Engineering',
  description: 'I am a software engineer with a passion for building web applications and solving problems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body id="__next">
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/anascode/logos/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/anascode/logos/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/anascode/logos/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/assets/anascode/logos/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/assets/anascode/logos/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
