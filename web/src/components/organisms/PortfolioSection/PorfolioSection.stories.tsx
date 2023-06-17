import React from 'react';

import PortfolioSection from './PortfolioSection';

export default {
  title: 'Components/Organisms/PortfolioSection',
  component: PortfolioSection,
  argTypes: {
    viewport: {
      defaultValue: 'desktop',
    },
  },
};

const Template = (args) => <PortfolioSection {...args} />;

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
