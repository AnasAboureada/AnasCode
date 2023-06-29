import React from 'react';

import ArticleHeader, { ArticleHeaderProps } from './ArticleHeader';

export default {
  title: 'Components/molecules/ArticleHeader',
  component: ArticleHeader,
  argTypes: {
  },
};

const Template = (args) => <ArticleHeader {...args} />;

const args: ArticleHeaderProps = {
  authorName: 'John Doe',
  authorAvatar: 'https://picsum.photos/id/2884/200/300',
  readTime: '5 min read',
  publishDate: '2023-01-12T00:00:00.000Z',
  title: 'This is a dummy title for the blog list card component to test the component.',
  likes: 10,
  views: 100,
  slug: 'this-is-a-dummy-title-for-the-blog-list-card-component-to-test-the-component',
  category: 'Technology',
};

export const Desktop = Template.bind({});
Desktop.args = args;

export const Mobile = Template.bind({});
Mobile.args = args;

Mobile.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
