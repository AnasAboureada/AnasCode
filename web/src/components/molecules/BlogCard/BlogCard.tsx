import Image from 'next/image';

import { registerGaEvent } from '@/components/libs/GoogleAnalytics';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Skeleton, Typography } from '@mui/material';
import { styled } from '@mui/system';

export type BlogPost = {
  title: string;
  description: string;
  category: string;
  url: string;
  image?: string;
};

const InnerWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export const BlogCardSkeleton: React.FC = () => (
  <Box className="flex p-2">
    <Box className="flex p-2">
      <Skeleton variant="rectangular" width={200} height={200} />
    </Box>

    <Box className="flex flex-col p-2 w-64 justify-center">
      <Skeleton variant="text" />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="40%" />
    </Box>
  </Box>
);

export const BlogCardSkeletonSecondary: React.FC = () => (
  <Box className="flex-col p-2 items-center justify-center w-64 ">
    <Skeleton variant="text" />
    <Skeleton variant="text" width="60%" />
    <Skeleton variant="text" width="80%" />
    <Skeleton variant="text" width="40%" />
  </Box>
);


const BlogCard: React.FC<BlogPost> = (blog) => (
  <InnerWrapper >

    {blog.image ?
      <Box className="flex p-2">
        <Image src={blog.image} alt={blog.title} height={300} width={300} />
      </Box>
      :
      null}

    <Box className="flex-col p-2">
      <Typography variant="subtitle1" component="div" className={'font-sans text-dark-accent'}>{blog.category}</Typography>
      <Typography variant="h4" component="div" className={'font-sans text-brand-color'}>{blog.title}</Typography>
      <Typography variant="subtitle2" className={'font-sans text-dark-shade'}>{blog.description}</Typography>
      <Button
        component="a"
        href={blog.url}
        target='_blank'
        variant="text"
        className={'font-sans text-dark-shade mt-2 self-end'}
        endIcon={<ArrowForwardIcon />}
        aria-label={`visit article ${blog.category} - ${blog.title}`}
        onClick={() => registerGaEvent({ action: 'click', category: 'blog-article', label: `visit article ${blog.category} - ${blog.title}`, value: 1 })}
      >
        Read More
      </Button>
    </Box>
  </InnerWrapper>
);

export default BlogCard;
