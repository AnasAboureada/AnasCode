import React from 'react';

import { faker } from '@faker-js/faker';

import { SideListWrapper } from './BlogSideList';

export default {
  title: 'Components/Organisms/BlogSideList',
  component: SideListWrapper,
  argTypes: {
    viewport: {
      defaultValue: 'desktop',
    },
  },
};

const sideLists = Array.from({ length: 100 }, (_, id) => ({
  id,
  name: faker.lorem.word(),
  slug: faker.helpers.slugify(faker.lorem.word()),
  count: faker.number.int(100),
}));

const Template = (args) => <SideListWrapper {...args} />;

const args = {
  title: 'Categories',
  listItems: sideLists,
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
