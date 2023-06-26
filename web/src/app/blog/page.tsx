'use client';

import '../../i18next';

import { useEffect, useState } from 'react';

import { IArticle } from '@/app/models/Article';
import DataFetcher from '@/components/libs/DataFetcher';
import BlogListCard, { ArticleCardSkeleton } from '@/components/molecules/BlogListCard/BlogListCard';
import BlogSidebar from '@/components/organisms/BlogSidebar/BlogSidebar';
import Navbar from '@/components/organisms/Navbar/Navbar';
import { Box, Pagination, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { montserrat } from '../theme';

const BlogPage = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.history.replaceState({}, '', `${window.location.pathname}?page=${page}`);
  }, [page]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('page')) {
      setPage(parseInt(params.get('page') as string, 10));
    }
  }, []);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box className={`mx-auto max-w-screen-xl bg-white ${montserrat.variable}`}>
      <Navbar />
      <Box className="h-20 flex items-center justify-center text-brand-color" >
        <Typography variant="h4" component='h1'>Anas Aboreeda’s Blog</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid xs={12} md={9}>
          <main>
            <DataFetcher url={`/api/blog/articles?page=${page}`} Loader={ArticleCardSkeleton} errorMessage="Can not load articles">
              {(listItems: { articles: IArticle[], articlesCount: number }) => {
                return (
                  <Box className="flex flex-col justify-center items-center">
                    {listItems.articles.map((article: IArticle, index) => (
                      <BlogListCard
                        key={article.articleId}
                        author={article.author || 'Anas Aboreeda'}
                        authorImage={article.authorImage || '/assets/anascode/anas-photos/anasPhoto.jpg'}
                        title={article.title}
                        description={article.description}
                        category={article.category}
                        readTime={article.readTime}
                        bannerImage={article.bannerImage || `https://picsum.photos/300/200?random=${index}`}
                        createdDate={article.updatedDate || article.createdDate}
                      />
                    ))}
                    <Pagination
                      count={Math.ceil(listItems.articlesCount / 10)}
                      page={page}
                      onChange={handlePageChange}
                      className='text-brand-color my-8'
                      color="primary"
                      variant="outlined"
                    />
                  </Box>
                );
              }}
            </DataFetcher>
          </main>
        </Grid>
        <Grid xs={12} md={3}>
          <BlogSidebar />
        </Grid>
      </Grid>
    </Box >
  );
};

export default BlogPage;
