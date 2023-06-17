import Image from 'next/image';
import type { FC } from 'react';

import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import grey from '@mui/material/colors/grey';

interface Props {
  imgSrc: string;
  category: string;
  title: string;
}

export const PortfolioCard: FC<Props> = ({ imgSrc, category, title }) => {
  return (
    <Box className="flex flex-col items-center justify-center p-4 max-w-sm">
      <Image src={imgSrc} alt={title} width={350} height={350} />
      <Card elevation={3} sx={{ backgroundColor: grey[200] }} className='flex flex-col justify-center items-center p-2 mx-4 -mt-10 relative'>
        <CardContent>
          <Typography variant="subtitle1" component="div" className={'text-dark-accent text-center font-sans'}>
            {category}
          </Typography>
          <Typography variant="h6" component="p" className={'text-brand-color text-center  font-sans'}>
            {title}
          </Typography>
        </CardContent>
        <Button variant="outlined" className={'text-brand-color  font-sans'}>
          View Details
        </Button>
      </Card>
    </Box>
  );
};
