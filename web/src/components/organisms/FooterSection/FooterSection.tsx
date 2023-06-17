import Image from 'next/image';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, IconButton, Typography } from '@mui/material';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent='space-between'
      py={4}
      px={2}
    >
      <Box mb={2}>
        <Image
          src="/assets/anascode/logos/anascode-logo-horizontal.jpg"
          alt="AnasCode Logo"
          width={200}
          height={200}
        />
      </Box>
      <Typography variant="body1" color="text.primary" className='font-sans'>
        © {currentYear} AnasCode - All Rights Reserved
      </Typography>
      <Box>
        <IconButton color="primary" component="a" href="https://twitter.com/AnasAboureada" target='_blank' aria-label='twitter'>
          <TwitterIcon />
        </IconButton>
        <IconButton color="primary" component="a" href="https://github.com/AnasAboureada" target='_blank' aria-label='github'>
          <GitHubIcon />
        </IconButton>
        <IconButton color="primary" component="a" href="https://www.linkedin.com/in/anasaboureada/" target='_blank' aria-label='linkedin'>
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FooterSection;
