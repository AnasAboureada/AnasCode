import React from 'react';

import { PortfolioCard } from './PortfolioCard';

export default {
  title: 'Components/Molecules/PortfolioCard',
  component: PortfolioCard,
  argTypes: {
    viewport: {
      defaultValue: 'desktop',
    },
  },
};

const Template = (args) => <PortfolioCard {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
  imgSrc: '/assets/portfolio-1.jpg',
  category: 'Branding',
  title: 'Branding Design',
};
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};

export const Mobile = Template.bind({});
Mobile.args = {
  imgSrc: '/assets/portfolio-1.jpg',
  category: 'Branding',
  title: 'Branding Design',
};
Mobile.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
