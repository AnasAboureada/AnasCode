import React from 'react';

import BlogCard from './BlogCard';

export default {
  title: 'Components/Molecules/BlogCard',
  component: BlogCard,
  argTypes: {
    viewport: {
      defaultValue: 'desktop',
    },
  },
};

const Template = (args) => <BlogCard {...args} />;

const args = {
  title: 'Demystifying Database Impedance Mismatch: A Simple, Straightforward Guide',
  description: 'Impedance mismatch is the difference between the relational model and the in-memory data structures. ',
  category: 'Database',
  image: '/assets/blogImage.jpg',
};

export const Desktop = Template.bind({});
Desktop.args = args;
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};

export const Mobile = Template.bind({});
Mobile.args = args;
Mobile.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
