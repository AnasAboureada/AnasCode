import React from 'react';
import AchievementsSection from './AchievementsSection';

export default {
  title: 'Components/Organisms/AchievementsSection',
  component: AchievementsSection,
  argTypes: {
    viewport: {
      defaultValue: 'desktop',
    },
  },
};

const Template = (args) => <AchievementsSection {...args} />;

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
