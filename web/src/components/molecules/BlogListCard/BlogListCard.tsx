import moment from 'moment';
import Image from 'next/image';
import { FC } from 'react';

import { IArticle } from '@/app/models/Article';
import { Bookmark, Share } from '@mui/icons-material';
import { Avatar, Box, Chip, Divider, IconButton, Skeleton, Typography } from '@mui/material';

export interface ArticleData {
  updatedDate?: string;
  createdDate: string;
  id?: string;
  articleId?: string;
  authorName: string;
  authorImage: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  bannerImage: string;
}

export const ArticleCardSkeleton: FC = () => {
  return (
    <Box className='max-h-screen'>
      <Divider className='w-full' />
      <Box className='flex flex-col-reverse md:flex-row justify-center items-center space-y-2'>
        <Box className='flex flex-col justify-start space-y-4 md:p-6 '>
          <Box className='flex justify-start items-center space-x-2 pt-2'>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton width="80%" />
            <div className='font-sans'>·</div>
            <Skeleton width="30%" />
          </Box>
          <Box className='flex flex-col items-start space-y-2 flex-wrap max-w-full'>
            <Skeleton width="60%" />
            <Skeleton width="80%" />
            <Box className="flex justify-between w-full mt-8">
              <Box className='flex items-center space-x-2'>
                <Skeleton width="20%" />
                <div className='text-gray-500 text-base leading-5 font-sans'>·</div>
                <Skeleton width="15%" />
              </Box>
              <Box>
                <Skeleton variant="circular" width={40} height={40} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className='md:w-1/4'>
          <Skeleton variant="rectangular" width={350} height={350} />
        </Box>
      </Box>
    </Box>
  );
};

const ArticleCard: FC<Partial<IArticle>> = (data) => {
  const shareArticle = () => {
    if (navigator.share) {
      navigator
        .share({
          title: data.title,
          text: data.description,
          url: window.location.href,
        })
        .then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(console.error);
    } else {
      console.log('web share not supported');
    }
  };

  const bookmark = () => {
    console.log('bookmarking...', window.location.href);
    // Add bookmarking logic here
  };

  const createdDate = moment(data.createdDate).format('MMM DD, YYYY');

  return (
    <Box className='max-h-screen min-w-full'>
      <Divider className='w-full' />
      <Box className='flex flex-col-reverse md:flex-row justify-between items-center space-y-2'>

        <Box className='flex flex-col justify-start space-y-4 md:p-6 '>

          <Box className='flex justify-start items-center space-x-2 pt-2'>
            <Avatar alt={data.author} src={data.authorImage} />
            <Typography className='font-sans'>{data.author}</Typography>
            <div className='font-sans'>·</div>
            <Typography className='leading-5 font-sans'>{createdDate}</Typography>
          </Box>

          <Box className='flex flex-col items-start space-y-2 flex-wrap max-w-full'>
            <Typography variant='h5' component='h2' className='font-sans text-brand-color'>
              {data.title}
            </Typography>
            <Typography variant='subtitle1' component='div' className='font-sans text-gray-4'>
              {data.description}
            </Typography>

            <Box className="flex justify-between w-full mt-8">
              <Box className='flex items-center space-x-2'>
                <Chip label={data.category} component="a" href={`/category/${data.category}`} clickable className='text-dark-accent' />
                <div className='text-gray-500 text-base leading-5 font-sans'>·</div>
                <Typography className='text-base leading-5 font-sans'>{data.readTime} read</Typography>
              </Box>
              <Box>
                <IconButton
                  onClick={bookmark}
                  color="primary"
                  aria-label="Add to bookmarks"
                  data-testid="bookmark-button"
                >
                  <Bookmark />
                </IconButton>

                <IconButton
                  onClick={shareArticle}
                  color="primary"
                  aria-label="Share article"
                  data-testid="share-button"
                >
                  <Share />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className='md:w-1/4'>
          <Image src={data.bannerImage} alt={data.title} width={350} height={350} />
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleCard;
