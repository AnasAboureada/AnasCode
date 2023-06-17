'use client';

import Image from 'next/image';
import { FC, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { registerGaEvent } from '@/components/libs/GoogleAnalytics';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Unstable_Grid2';

export const cvDownloadLinkData = {
  label: 'home.nav.cvResume',
  href: '/assets/pdf/RESUME-AnasAboureada.pdf',
  pdfTitle: 'home.nav.cvResumeTitle',
};

const Navbar: FC = () => {
  const { t } = useTranslation();
  const [activeLink, setActiveLink] = useState('');

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: { currentTarget: SetStateAction<HTMLElement | null>; }) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleElClick = (label: string) => {
    setActiveLink(label);
    registerGaEvent({ action: 'gtm.linkClick', category: 'navbar', label: label, value: 1 });
    handleCloseNavMenu();
  };

  const navLinkClass = (label: string): string | undefined => {
    return `hover:text-dark-accent tracking-wide font-sans
    ${activeLink === label ? 'text-dark-accent' : 'text-brand-color'}`;
  };

  const navLinks = [
    {
      label: 'home.nav.about',
      href: '#about',
    },
    {
      label: 'home.nav.services',
      href: '#services',
    },
    {
      label: 'home.nav.blog',
      href: '#blog',
    },
    {
      label: 'home.nav.testimonials',
      href: '#testimonials',
    },
  ];

  const handleHireMe = () => {
    registerGaEvent({ action: 'conversion', category: 'navbar', label: 'home.nav.hireMe', value: 1 });
  };

  const DownloadCvLink = () => {
    return <Button
      component="a"
      href={cvDownloadLinkData.href}
      className={navLinkClass(cvDownloadLinkData.href)}
      onClick={() => handleElClick(cvDownloadLinkData.href)}
      aria-label={t(cvDownloadLinkData.label) || ''}
      data-testid={`navbar-mobile-menu-${cvDownloadLinkData.href}`}
      target="_blank"
    >
      {t(cvDownloadLinkData.label)}
    </Button>;
  };

  return (
    <nav className='px-4 py-2 md:px-16 md:py-8 '>
      <Grid container justifyContent="space-between" alignItems="center">
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Image
            className="min-w-256"
            src="/assets/anascode/logos/anascode-logo-horizontal.jpg"
            alt="AnasCode Logo"
            data-testid="navbar-logo"
            quality={100}
            width={160}
            height={128}
          />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Image
            className="min-w-256"
            src="/assets/anascode/logos/anascode-logo-horizontal.jpg"
            alt="AnasCode Logo"
            data-testid="navbar-logo-large"
            quality={100}
            width={256}
            height={128}
          />
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="Open navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="primary"
            data-testid="navbar-button-menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
            data-testid="navbar-menu"
          >
            {navLinks.map(({ label, href }) => (
              <Button
                component="a"
                key={label}
                href={href}
                className={navLinkClass(label)}
                onClick={() => handleElClick(label)}
                aria-label={t(label) || ''}
                data-testid={`navbar-mobile-menu-${label}`}
              >
                {t(label)}
              </Button>
            ))}

            <DownloadCvLink />

          </Menu>
        </Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map(({ label, href }) => (
            <Button
              component="a"
              href={href}
              className={navLinkClass(label)}
              key={label}
              onClick={() => handleElClick(label)}
              aria-label={t(label) || ''}
              data-testid={`navbar-button-${label}`}
            >
              {t(label)}
            </Button>
          ))}
          <DownloadCvLink />
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Button
            className={'text-white bg-brand-color rounded-md font-sans hover:bg-dark-accent'}
            onClick={handleHireMe}
            component="a"
            href="#contact"
            aria-label={t('home.nav.hireMe') || 'hire me'}
            data-testid="navbar-button-hireme"
          >
            {t('home.nav.hireMe')}
          </Button>
        </Box>
      </Grid>
    </nav>
  );


};

export default Navbar;
