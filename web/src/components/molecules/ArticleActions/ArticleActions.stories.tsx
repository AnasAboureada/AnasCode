import React from 'react';

import ArticleActions, { ArticleActionsProps, StickyActionsContainer } from './ArticleActions';

export default {
  title: 'Components/molecules/ArticleActions',
  component: ArticleActions,
  argTypes: {
  },
};

const sticky = (args) => <StickyActionsContainer {...args} />;

const Template = (args) => <ArticleActions {...args} />;

const args: ArticleActionsProps = {
  likes: 10,
  views: 100,
  slug: 'this-is-a-dummy-title-for-the-blog-list-card-component-to-test-the-component',
  showViews: true,
};

export const Desktop = Template.bind({});
export const StickyDesktop = sticky.bind({});
Desktop.args = args;
StickyDesktop.args = args;

export const Mobile = Template.bind({});
export const StickyMobile = sticky.bind({});
Mobile.args = args;
StickyMobile.args = args;

Mobile.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
StickyMobile.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
