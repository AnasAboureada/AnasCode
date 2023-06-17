import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import { Card, CardContent, Typography } from '@mui/material';

interface Props {
  className?: string;
  icon?: ReactNode;
  title: string;
  description: string;
}

export const ServiceCard: FC<Props> = memo(function ServiceCard({ className, title, description, icon }: Props) {

  return (
    <Card className={`${className || 'bg-gray-2'}`}>
      <CardContent className="flex justify-center items-center">
        {icon}
        <CardContent>
          <Typography variant="h5" gutterBottom className={'text-dark-accent font-sans'}>
            {title}
          </Typography>
          <Typography variant="body2" className={'text-brand-color font-sans'}>
            {description}
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
});
