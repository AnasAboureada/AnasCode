import React from 'react';

import SubscribeForm from './SubscribeForm';

export default {
  title: 'Components/Organisms/SubscribeForm',
  component: SubscribeForm,
  argTypes: {
    viewport: {
      defaultValue: 'desktop',
    },
  },
};

const Template = (args) => <SubscribeForm {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {};
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};

export const Mobile = Template.bind({});
Mobile.args = {};
Mobile.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
