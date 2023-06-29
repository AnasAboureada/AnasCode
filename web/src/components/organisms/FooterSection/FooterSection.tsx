import Image from 'next/image';

import SectionWrapper from '@/components/templates/SectionWrapper/SectionWrapper';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography } from '@mui/material';

export const SocialIcons = () => {
  return (
    <div className="flex space-x-2">
      <a href="https://twitter.com/AnasAboureada" target='_blank' aria-label='twitter'>
        <TwitterIcon />
      </a>
      <a href="https://github.com/AnasAboureada" target='_blank' aria-label='github'>
        <GitHubIcon />
      </a>
      <a href="https://www.linkedin.com/in/anasaboureada/" target='_blank' aria-label='linkedin'>
        <LinkedInIcon />
      </a>
    </div>
  );
};

export const Logo = () => {
  return (
    <div className="mb-2">
      <Image
        src="/assets/anascode/logos/anascode-logo-horizontal.jpg"
        alt="AnasCode Logo"
        width={200}
        height={200}
        className="object-cover"
      />
    </div>
  );
};

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 px-2">
      <Logo />
      <Typography variant="body1" className="font-sans text-brand-color my-4">
        © {currentYear} AnasCode.com - All Rights Reserved
      </Typography>
      <SocialIcons />
    </div>
  );
};

export default FooterSection;
