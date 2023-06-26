import React from 'react';

import BlogListCard from './BlogListCard';

export default {
  title: 'Components/molecules/BlogListCard',
  component: BlogListCard,
  argTypes: {
  },
};

const Template = (args) => <BlogListCard {...args} />;

const args = {
  author: 'John Doe',
  authorImage: 'https://randomuser.me/api/portraits/men/45.jpg',
  bannerImage: 'https://picsum.photos/640/640',
  title: 'This is a dummy title for the blog list card component to test the component.',
  description: 'This is a dummy description for the blog list card component to test the component.',
  category: 'Technology',
  readTime: '5 min',
  createdAt: '2023-01-12T00:00:00.000Z',
};

export const Desktop = Template.bind({});
Desktop.args = args;

export const Mobile = Template.bind({});
Mobile.args = args;

Mobile.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
