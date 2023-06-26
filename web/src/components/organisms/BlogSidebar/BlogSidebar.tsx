import Image from 'next/image';
import React from 'react';

import { Avatar, Box, Divider, Typography } from '@mui/material';

import BlogSideList from '../BlogSideList/BlogSideList';
import { SocialIcons } from '../FooterSection/FooterSection';
import SubscribeForm from '../SubscribeForm/SubscribeForm';

const BlogSidebar = () => {
  return (
    <aside className="min-h-full flex flex-col justify-start">
      <Box className="flex flex-col mt-8 items-start p-4">
        <Avatar
          src="/assets/anascode/anas-photos/anasPhoto.jpg"
          alt="Anas Aboreeda"
          sx={{ width: 64, height: 64 }}
        />
        <Typography variant="h6" className="text-brand-color">Anas Aboreeda</Typography>
        <Typography variant="body2" className="text-brand-color">Lead Software Engineer</Typography>
        <Typography variant="body2" className="my-4">
          I’m a software engineer who loves building products and sharing knowledge.
        </Typography>
        <SubscribeForm />
      </Box>
      <BlogSideList url="/api/blog/categories" title="categories" />
      <BlogSideList url="/api/blog/tags" title="tags" />
      <Box>
        <Divider />
        <Box className="flex justify-between p-4">
          <Image
            src="/assets/anascode/logos/anascode-logo-horizontal.jpg"
            alt="AnasCode Logo"
            width={150}
            height={100}
          />
          <SocialIcons />
        </Box>
      </Box>
    </aside>
  );
};

export default BlogSidebar;
