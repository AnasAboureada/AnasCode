import { FC } from 'react';

import ArticleActions from '@/components/molecules/ArticleActions/ArticleActions';
import { Box, Chip, Typography } from '@mui/material';

interface ArticleMetaActionsProps {
  category: string;
  readTime: string;
  createdDate: string;
  likes: number;
  views: number;
  slug: string;
  showViews?: boolean;
}
const ArticleMetaActions: FC<ArticleMetaActionsProps> = ({ category, readTime, createdDate, likes, views, slug, showViews }) => {
  return <Box className="flex md:justify-between justify-center items-center md:items-center flex-col md:flex-row">
    <Box className="flex md:flex-row items-center">
      <Chip
        label={category}
        component="a"
        href={`/category/${category}`}
        clickable
        variant='outlined'
        className='text-dark-accent capitalize mr-2 font-sans text-ellipsis max-w-xs' />
      <Typography className='text-gray-500 text-xl leading-5 font-sans w-2 mr-2'>·</Typography>
      <Typography className='text-base leading-5 font-sans mr-2'>{readTime}</Typography>
      <Typography className='text-gray-500 text-xl leading-5 font-sans w-2 mr-2'>·</Typography>
      <Typography className='text-base leading-5 font-sans'>{createdDate}</Typography>
    </Box>
    <ArticleActions likes={likes} views={views} slug={slug} showViews={showViews} className='justify-end ml-8' />
  </Box>;
};

export default ArticleMetaActions;