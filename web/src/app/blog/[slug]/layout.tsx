'use client';

import '@/i18next';

import theme, { montserrat } from '@/app/theme';
import HotjarWrapper from '@/components/libs/Hotjar';
import FooterSection from '@/components/organisms/FooterSection/FooterSection';
import Navbar from '@/components/organisms/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { Analytics } from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';

const Layout = ({ children }) => {
  return (
    <HotjarWrapper >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={`min-h-screen mx-auto w-screen max-w-screen-xl bg-white ${montserrat.variable}`}>
          <Navbar />
          {children}
          <FooterSection />
        </main>
        <Analytics />
      </ThemeProvider>
    </HotjarWrapper >
  );
};

export default Layout;
