import React from 'react';

import ArticleMetaSection from './ArticleMetaSection';

export default {
  title: 'Components/molecules/ArticleMetaSection',
  component: ArticleMetaSection,
  argTypes: {
    isFollowing: {
      control: { type: 'boolean' },
    },
    name: {
      control: 'text',
    },
    profileImage: {
      control: 'text',
    },
    bio: {
      control: 'text',
    },
    followHandler: { action: 'followed' },
  },
};

const Template = (args) => <ArticleMetaSection {...args} />;

const args = {
  authName: 'John Doe',
  profileImage: 'https://randomuser.me/api/portraits/men/45.jpg',
  minRead: '5 min read',
  isFollowing: false,
  createdAt: 'June 17, 2023',
  likesCount: 100,
  commentsCount: 20,
  showFollow: false,
  title: 'This is a dummy title for the article meta section component to test the component.',
};

export const Desktop = Template.bind({});
Desktop.args = args;

export const Mobile = Template.bind({});
Mobile.args = args;

Mobile.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
