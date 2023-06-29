import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { IArticle } from '@/app/models/Article';
import { Box, Divider, Skeleton, Typography } from '@mui/material';

import ArticleMetaActions from '../ArticleMetaActions/ArticleMetaAction';

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
  const { category, claps, views, slug, readTime, createdDate, title, description, bannerImage } = data;

  const publishDate = moment(createdDate).format('MMM DD, YYYY');

  return (
    <Box className='max-h-screen min-w-full'>
      <Divider className='w-full' />
      <Box className='flex flex-col-reverse md:flex-row justify-between items-center space-y-2'>

        <Box className='flex flex-col justify-start space-y-4 py-4'>

          <Box className='flex flex-col items-start space-y-2 flex-wrap w-full flex-grow'>
            <Link
              href={`/blog/${slug}`}
              aria-label='Read more about the article'
            >
              <Typography variant='h5' component='h2' className='font-sans text-brand-color'>
                {title}
              </Typography>
              <Typography variant='subtitle1' component='div' className='font-sans text-gray-4'>
                {description}
              </Typography>
            </Link>
            <ArticleMetaActions
              category={category}
              createdDate={publishDate}
              likes={claps}
              views={views}
              slug={slug}
              readTime={readTime}
              showViews={false}
            />
          </Box>
        </Box>

        <Box className='md:w-1/4'>
          <Image src={bannerImage} alt={title} width={350} height={350} />
        </Box>
      </Box>
    </Box>
  );
};

export default ArticleCard;
