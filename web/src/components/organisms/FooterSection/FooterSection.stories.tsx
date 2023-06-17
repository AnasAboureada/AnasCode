import React from 'react';

import FooterSection from './FooterSection';

export default {
  title: 'Components/Organisms/FooterSection',
  component: FooterSection,
  argTypes: {
    viewport: {
      defaultValue: 'desktop',
    },
  },
};

const Template = (args) => <FooterSection {...args} />;

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
