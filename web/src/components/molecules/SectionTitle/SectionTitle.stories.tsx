import React from 'react';

import SectionTitle from './SectionTitle';

export default {
  title: 'Components/Molecules/SectionTitle',
  component: SectionTitle,
  argTypes: {
    viewport: {
      defaultValue: 'desktop',
    },
  },
};

const Template = (args) => <SectionTitle {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
  className: 'test-classname',
  sectionShortTitle: 'About Me',
  sectionLongTitle: 'Why do you choose me',
  sectionDescription: 'I am a Lead Software Engineer and data enthusiast who is self motivated, energized and good strategic planner',
};
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};

export const Mobile = Template.bind({});
Mobile.args = {
  className: 'test-classname',
  sectionShortTitle: 'About Me',
  sectionLongTitle: 'Why do you choose me',
  sectionDescription: 'I am a Lead Software Engineer and data enthusiast who is self motivated, energized and good strategic planner',
};
Mobile.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
