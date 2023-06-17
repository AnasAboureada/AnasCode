import React from 'react';

import { GitHub as GitHubIcon } from '@mui/icons-material';

import { StatCard } from './StatCard';

export default {
  title: 'Components/Molecules/StatCard',
  component: StatCard,
  argTypes: {
    viewport: {
      defaultValue: 'desktop',
    },
  },
};

const Template = (args) => <StatCard {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
  IconComponent: GitHubIcon,
  number: 550,
  description: 'GitHub Stars',
};
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};

export const Mobile = Template.bind({});
Mobile.args = {
  IconComponent: GitHubIcon,
  number: 550,
  description: 'GitHub Stars',
};
Mobile.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
