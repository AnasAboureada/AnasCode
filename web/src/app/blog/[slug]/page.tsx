import '@/i18next';

import https from 'https';

import axios from 'axios';

import HotjarWrapper from '@/components/libs/Hotjar';
import { CustomMDX } from '@/components/molecules/MDX/MdxComponents';
import Navbar from '@/components/organisms/Navbar/Navbar';
import { Analytics } from '@vercel/analytics/react';

const fetchArticle = async (url) => {
  try {
    const response = await axios.get(url, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch article');
  }
};

const Post = async ({ params }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const url = `${baseUrl}/api/blog/article?slug=${params.slug}`;
    const data = await fetchArticle(url);
    console.log(data);

    return (
      <>
        <HotjarWrapper >
          <main className='mx-auto max-w-screen-l bg-white'>
            <Navbar />
            <CustomMDX source={data.content} />
          </main>
          <Analytics />
        </HotjarWrapper >
      </>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading article</div>;
  }
};

export default Post;
