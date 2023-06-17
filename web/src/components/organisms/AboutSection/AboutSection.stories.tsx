import React from 'react';

import AboutSection from './AboutSection';

export default {
  title: 'Components/Organisms/AboutSection',
  component: AboutSection,
  argTypes: {
    viewport: {
      defaultValue: 'desktop',
    },
  },
};

const Template = (args) => <AboutSection {...args} />;

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
