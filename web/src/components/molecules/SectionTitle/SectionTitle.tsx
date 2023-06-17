import { FC } from 'react';

import { Box, Typography } from '@mui/material';

interface Props {
  className?: string;
  sectionShortTitle: string;
  sectionLongTitle: string;
  sectionDescription: string;
}

const SectionTitle: FC<Props> = ({ className = '', sectionShortTitle, sectionLongTitle, sectionDescription }) => (
  <Box className={`${className} flex flex-col items-center mb-16 text-center`}>
    <Typography variant="subtitle1" component="h3" className={'text-dark-accent font-semibold font-sans'}>
      {sectionShortTitle}
    </Typography>
    <Typography variant="h3" className={'text-brand-color font-sans'}>
      {sectionLongTitle}
    </Typography>
    <Typography variant="subtitle2" component="h4" className={'text-dark-shade font-sans'}>
      {sectionDescription}
    </Typography>
  </Box>
);

export default SectionTitle;
