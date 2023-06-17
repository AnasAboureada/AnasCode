// BWImage.stories.tsx

import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import BWImage from './ScrollDownButton';

export default {
  title: 'Components/Atoms/ScrollDownButton',
  component: BWImage,
} as Meta;

const Template: StoryFn = (args) => <BWImage {...args} />;

export const Default = Template.bind({});
Default.args = {};
