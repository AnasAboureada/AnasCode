import React from 'react';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { ServiceCard } from './ServiceCard';

export default {
  title: 'Components/Molecules/ServiceCard',
  component: ServiceCard,
  argTypes: {
    viewport: {
      defaultValue: 'desktop',
    },
  },
};

const Template = (args) => <ServiceCard {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
  title: 'Software Engineering Solutions',
  description: 'Custom software development tailored to your business needs. Experience in designing and implementing scalable, distributed systems that power up your operations and enrich the user experience.',
  icon: <AddCircleOutlineIcon sx={{ fontSize: '3em' }} className="text-brand-color" />,
};
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};

export const Mobile = Template.bind({});
Mobile.args = {
  title: 'Software Engineering Solutions',
  description: 'Custom software development tailored to your business needs. Experience in designing and implementing scalable, distributed systems that power up your operations and enrich the user experience.',
  icon: <AddCircleOutlineIcon sx={{ fontSize: '3em' }} className="text-brand-color" />,
};
Mobile.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
