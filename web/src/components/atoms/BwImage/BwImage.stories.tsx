// BWImage.stories.tsx

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import BWImage, { BWImageProps } from './BwImage';

export default {
  title: 'Components/Atoms/BWImage',
  component: BWImage,
} as Meta;

const Template: StoryFn<BWImageProps> = (args) => <BWImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '/assets/anasPhoto.jpg',
  alt: 'Alt text',
  width: 200,
  height: 100,
};
