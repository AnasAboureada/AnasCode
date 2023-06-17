'use client';

import './globals.css';

import GoogleAnalytics from '@/components/libs/GoogleAnalytics';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const metadata = {
  title: 'AnasCode',
  description: 'Software Engineer | Data Scientist',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/anascode/logos/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/anascode/logos/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/anascode/logos/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/assets/anascode/logos/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/assets/anascode/logos/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <UserProvider>
        <body id="__next">
          {children}
          <GoogleAnalytics />
        </body>
      </UserProvider>
    </html>
  );
}
