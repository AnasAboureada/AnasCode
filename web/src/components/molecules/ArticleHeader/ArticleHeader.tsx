'use client';

import moment from 'moment';
import { FC, useEffect, useState } from 'react';

import { callArticleEditApi, convertToTitleCase } from '@/components/libs/helpers';
import ArticleMetaActions from '@/components/molecules/ArticleMetaActions/ArticleMetaAction';
import { Box, Button, Divider, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export interface ArticleHeaderProps {
  authorAvatar: string;
  authorName: string;
  title: string;
  readTime: string;
  publishDate: string;
  likes: number;
  views: number;
  slug: string;
  category: string;
}

const ArticleHeader: FC<ArticleHeaderProps> = ({ authorAvatar, authorName, title, readTime, publishDate, likes, slug, views, category }) => {

  const [isViewed, setIsViewed] = useState(false);
  const createdDate = moment(publishDate).format('MMM DD, YYYY');

  useEffect(() => {
    let isMounted = true;

    if (!isViewed && isMounted) {
      callArticleEditApi(slug, 'view');
      setIsViewed(true);
    }

    return () => {
      isMounted = false;
    };
  }, [slug, isViewed]);

  const handleFollow = () => {
    // TODO: Logic for following
  };

  return (
    <Box className="my-8">
      <Box className="flex justify-center items-center min-w-full">
        <Typography variant="h1" className='text-brand-color font-sans font-extrabold text-center text-7xl mb-8'>
          {convertToTitleCase(title)}
        </Typography>
      </Box>
      <Box className="flex items-center">
        <Avatar alt="Author Avatar" src={authorAvatar} sx={{ width: 44, height: 44 }} className='mr-2' />
        <Typography variant="subtitle1" className='text-brand-color font-sans'>
          {authorName}
        </Typography>
        <Button variant="text" aria-label='follow' onClick={handleFollow} className="font-sans">Follow</Button>
      </Box>
      <ArticleMetaActions category={category} createdDate={createdDate} likes={likes} views={views} slug={slug} readTime={readTime} showViews />
      <Divider className="mt-4" />
    </Box>
  );
};

export default ArticleHeader;



