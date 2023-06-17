import type { FC } from 'react';

import { GitHub as GitHubIcon } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/types';

interface Props {
  IconComponent?: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>>;
  number: string;
  description: string;
}

export const StatCard: FC<Props> = ({ IconComponent = GitHubIcon, number, description }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Box display="flex" alignItems="center" justifyContent="center" className="mb-2" p={1} borderRadius="10%">
        <IconComponent sx={{ fontSize: '3em' }} className="text-dark-shade" />
      </Box>
      <Typography variant="h4" className={'text-dark-accent font-sans'}>
        {number}
      </Typography>
      <Typography variant="subtitle1" component='div' align='center' className={'text-dark-shade  font-sans'}>
        {description}
      </Typography>
    </Box>
  );
};

export default StatCard;
