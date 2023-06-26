import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import useSWR from 'swr';

import { registerGaEvent } from '@/components/libs/GoogleAnalytics';
import BlogCard, { BlogCardSkeleton, BlogCardSkeletonSecondary, BlogPost } from '@/components/molecules/BlogCard/BlogCard';
import SectionTitle from '@/components/molecules/SectionTitle/SectionTitle';
import SectionWrapper from '@/components/templates/SectionWrapper/SectionWrapper';
import { Box, Button, Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const BlogSection = () => {
  const { t } = useTranslation();
  const { data: mainArticles } = useSWR('/api/blog/article/main', fetcher);
  const { data: secondaryArticles } = useSWR('/api/blog/article/secondary', fetcher);


  return (
    <SectionWrapper id="blog">
      <SectionTitle
        sectionShortTitle={t('home.blog.shortTitle')}
        sectionLongTitle={t('home.blog.longTitle')}
        sectionDescription={t('home.blog.description')}
      />
      <Grid container justifyContent='center' alignItems='center'>
        <Grid sm={12} md={8}>
          {!mainArticles ? (
            <>
              <BlogCardSkeleton />
              <BlogCardSkeleton />
            </>
          ) : (
            mainArticles.map((blog: BlogPost, index: number) => (
              <BlogCard key={`${blog.title}_${index}`} title={blog.title}
                description={blog.description} category={blog.category} image={blog.image}
                url={blog.url}
              />
            ))
          )}
        </Grid>

        <Grid sm={12} md={4}>
          {!secondaryArticles ? (
            <>
              <BlogCardSkeletonSecondary />
              <Divider />
              <BlogCardSkeletonSecondary />
            </>
          ) : (
            secondaryArticles.map((blog: BlogPost, index: number) => (
              <Fragment key={`${blog.title}_${index}`}>
                <BlogCard title={blog.title} description={blog.description} category={blog.category} url={blog.url} />
                <Divider />
              </Fragment>
            ))
          )}
        </Grid>
      </Grid>
      <Box className="flex justify-center py-8">
        <Button
          variant="outlined"
          color="primary"
          size="large"
          href="https://medium.com/@anas-aboureada"
          target="_blank"
          rel="noopener noreferrer"
          className={'font-sans text-brand-color'}
          onClick={() => registerGaEvent({ action: 'click', category: 'blog', label: 'visit my blog', value: 1 })}
          aria-label={t('home.blog.readMore') || 'Visit My Blog'}
        >
          {t('home.blog.readMore')}
        </Button>
      </Box>
    </SectionWrapper >
  );
};

export default BlogSection;
