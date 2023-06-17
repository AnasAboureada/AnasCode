'use client';

import '../i18next';

import { Montserrat } from 'next/font/google';

import HotjarWrapper from '@/components/libs/Hotjar';
import AboutSection from '@/components/organisms/AboutSection/AboutSection';
import AchievementsSection from '@/components/organisms/AchievementsSection/AchievementsSection';
import BlogSection from '@/components/organisms/BlogSection/BlogSection';
import ContactSection from '@/components/organisms/ContactSection/ContactSection';
import FooterSection from '@/components/organisms/FooterSection/FooterSection';
import HeroSection from '@/components/organisms/HeroSection/HeroSection';
import Navbar from '@/components/organisms/Navbar/Navbar';
// import PortfolioSection from '@/components/organisms/PortfolioSection/PortfolioSection';
import ServicesSection from '@/components/organisms/ServicesSection/ServicesSection';
import TestimonialsSection from '@/components/organisms/TestimonialsSection/TestimonialsSection';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

import theme from './theme';

const montserrat = Montserrat({
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-montserrat',
  display: 'swap',
});

export default function Home() {

  return (
    <HotjarWrapper >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={`mx-auto max-w-screen-xl bg-white ${montserrat.variable}`}>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <AchievementsSection />
          {/* <PortfolioSection /> */}
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
          <FooterSection />
        </main>
      </ThemeProvider>
    </HotjarWrapper >
  );
}