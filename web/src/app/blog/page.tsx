'use client';

import '../../i18next';

import FooterSection from '@/components/organisms/FooterSection/FooterSection';
import Navbar from '@/components/organisms/Navbar/Navbar';

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Blog</h1>
      <FooterSection />
    </div >
  );
};

export default BlogPage;