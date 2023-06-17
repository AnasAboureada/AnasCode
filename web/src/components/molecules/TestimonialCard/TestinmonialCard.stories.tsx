import React from 'react';

import TestimonialCard from './TestimonialCard';

export default {
  title: 'Components/Molecules/TestimonialCard',
  component: TestimonialCard,
  argTypes: {
    viewport: {
      defaultValue: 'desktop',
    },
  },
};

const Template = (args) => <TestimonialCard {...args} />;

const args = {
  image: '/assets/testimonials/sven.jpg',
  content:
    'I really enjoy working with Anas. He is a very skilled backend and frontend developer who is always eager to learn new technologies and increase his knowledge. He puts his heart and soul into work and always delivers. Anas is also a great guy to have around with his international experience and interest in history and world politics. I really enjoy working with Anas. He is a very skilled backend and frontend developer who is always eager to learn new technologies and increase his knowledge. He puts his heart and soul into work and always delivers. Anas is also a great guy to have around with his international experience and interest in history and world politics.',
  name: 'Sven Emtell',
  position: 'Chief Executive Officer.',
};

export const Desktop = Template.bind({});
Desktop.args = args;
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};

export const Mobile = Template.bind({});
Mobile.args = args;
Mobile.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
