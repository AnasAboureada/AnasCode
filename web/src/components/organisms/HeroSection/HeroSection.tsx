import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

import BWImage from '@/components/atoms/BwImage/BwImage';
import ScrollDownButton from '@/components/atoms/ScrollDownButton/ScrollDownButton';
import { registerGaEvent } from '@/components/libs/GoogleAnalytics';
import SectionWrapper from '@/components/templates/SectionWrapper/SectionWrapper';
import GetAppIcon from '@mui/icons-material/GetApp';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { cvDownloadLinkData } from '../Navbar/Navbar';

const HeroSection = () => {

  const companyLogos = [
    { src: '/assets/companies-logos/elsevier_scopus.jpg', alt: 'Elsevier Scopus', url: 'https://scopus.com/' },
    { src: '/assets/companies-logos/engineering_village.jpg', alt: 'Engineering Village', url: 'http://engineeringvillage.com/' },
    { src: '/assets/companies-logos/zoover.jpg', alt: 'Zoover', url: 'https://www.zoover.nl/' },
    { src: '/assets/companies-logos/doremir.jpeg', alt: 'Doremir', url: 'https://doremir.com/' },
    { src: '/assets/companies-logos/glomo.jpeg', alt: 'GloMo', url: 'https://www.linkedin.com/company/glomo/' },
    { src: '/assets/companies-logos/madarsoft.jpeg', alt: 'MadarSoft', url: 'http://www.madarsoft.com/' },
    { src: '/assets/companies-logos/nodejs.jpg', alt: 'Node.js', url: 'https://nodejs.org/en/blog/release/v12.9.0' },
  ];

  const { t } = useTranslation();

  return (
    <SectionWrapper id="hero" className="bg-gray-1 md:h-screen flex flex-col items-center justify-around">
      <Grid container className="flex items-center justify-center">
        <Grid container spacing={2}>
          <Grid xs={12} md={9}>
            <Typography variant="h2" className={'text-brand-color mb-8 font-bold font-sans'}>
              {t('home.hero.titleText')}
              <span className="text-dark-accent">{t('home.hero.highlightedTitleText')}</span>
            </Typography>
            <Typography variant="h5" component="div" className={'text-brand-color py-4 font-sans'}>
              {t('home.hero.subText')}
            </Typography>
            <Typography variant='subtitle2' component="div" className={'text-dark-accent mb-8 py-4 font-medium font-sans'}>
              {t('home.hero.endText')}
            </Typography>
            <Box className="flex gap-4 items-center mb-4">
              <Button
                onClick={() => registerGaEvent({ action: 'conversion', category: 'hero', label: 'home.hero.hireMe', value: 1 })}
                component="a"
                href="#contact"
                aria-label={t('home.hero.hireMe') || 'hire me'}
                data-testid="hero-button-hireme"
                className={'text-white bg-brand-color rounded-md font-sans hover:bg-dark-accent'}>
                {t('home.hero.hireMe')}
              </Button>
              <Button
                variant="text"
                component="a"
                target="_blank"
                href={cvDownloadLinkData.href}
                onClick={() => registerGaEvent({ action: 'download', category: 'hero', label: 'home.hero.downloadCV', value: 1 })}
                aria-label={t('home.hero.downloadCV') || 'download cv'}
                data-testid="hero-button-downloadcv"
                startIcon={<GetAppIcon />}
                className={'text-brand-color font-medium font-sans'}>
                {t('home.hero.downloadCV')}
              </Button>
            </Box>
            <Typography variant="subtitle2" component='p' className={'text-brand-color my-8 font-sans'}>
              {t('home.hero.clientsText')}
            </Typography>
            <Box className="flex md:gap-8 gap-2 items-center flex-wrap md:flex-nowrap">
              {companyLogos.map((logo, index) => (
                <Button component="a" href={logo.url} aria-label={logo.alt} key={`${index}-${logo.alt}`} target='_blank'>
                  <BWImage src={logo.src} alt={logo.alt} width={75} height={50} />
                </Button>
              ))}
            </Box>
          </Grid>

          <Grid xs={12} md={3} className="justify-center items-center" sx={{ display: { sm: 'none', xs: 'none', md: 'flex' } }}>
            <Box className="bg-brand-color rounded-full p-1">
              <Image src="/assets/anascode/anas-photos/anasPhoto.jpg" alt="Anas Photo" width={200} height={200} className="rounded-full" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <ScrollDownButton className="pt-16 justify-self-end" />
    </SectionWrapper >
  );
};

export default HeroSection;
