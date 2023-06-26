import React from 'react';

import { withActions } from '@storybook/addon-actions/decorator';

import CustomizedSnackbar, { CustomizedSnackbarProps } from './CustomizedSnackbar';

export default {
  title: 'Components/Atoms/CustomizedSnackbar',
  component: CustomizedSnackbar,
  argTypes: {
    severity: {
      control: {
        type: 'select',
        options: ['success', 'info', 'warning', 'error'],
      },
    },
    onClose: { action: 'closed' },
  },
  decorators: [withActions],
};

const Template = (args: CustomizedSnackbarProps) => (
  <CustomizedSnackbar {...args} />
);

const args = {
  severity: 'success',
  message: 'Success',
};

export const Success = Template.bind({});
Success.args = {
  severity: 'success',
  message: 'Success',
};

export const Info = Template.bind({});
Info.args = {
  severity: 'info',
  message: 'Info',

};

export const Warning = Template.bind({});
Warning.args = {
  severity: 'warning',
  message: 'Warning',
};

export const Error = Template.bind({});
Error.args = {
  severity: 'error',
  message: 'Error',
};

export const Mobile = Template.bind({});
Mobile.args = args;

Mobile.parameters = {
  viewport: { defaultViewport: 'iphone6' },
};
