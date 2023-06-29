import { Metadata } from 'next';

import { fetchArticle } from '@/components/libs/helpers';
import { StickyActionsContainer } from '@/components/molecules/ArticleActions/ArticleActions';
import ArticleHeader from '@/components/molecules/ArticleHeader/ArticleHeader';
import { CustomMDX } from '@/components/molecules/MDX/MdxComponents';

export async function generateMetadata({ params }): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const url = `${baseUrl}/api/blog/article?slug=${params.slug}`;
  const data = await fetchArticle(url);


  const { title, description } = data;

  return {
    title: `${title} | Anas Code | Anas Aboreeda`,
    description: `${description} | Anas Code | Anas Aboreeda’s Blog`,
  };
}

const Post = async ({ params }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const url = `${baseUrl}/api/blog/article?slug=${params.slug}`;
    const data = await fetchArticle(url);

    const { title, author, authorImage, readTime, createdDate, slug, claps, views, category } = data;

    return (
      <main className='max-w-screen-xl px-4 py-2 md:px-16 md:py-8'>
        <ArticleHeader
          authorAvatar={authorImage}
          authorName={author}
          title={title}
          readTime={readTime}
          publishDate={createdDate}
          likes={claps}
          views={views}
          slug={slug}
          category={category}
        />
        <CustomMDX source={data.content} />
        <StickyActionsContainer likes={claps} views={views} slug={slug} showViews={false} />
      </main>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading article</div>;
  }
};

export default Post;
