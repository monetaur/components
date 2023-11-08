import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { Sizes } from '../../prop-types/size';

export default {
  title: 'Button',
  component: Button,
};

export const withDefaults = (args) => (
  <Button {...args} />
);

withDefaults.args = {
  block: false,
  children: 'Hello Button',
  disabled: false,
  onClick: action('clicked'),
  primary: false,
  raised: false,
  secondary: false,
  size: undefined,
};

withDefaults.argTypes = {
  size: {
    control: {
      type: 'select',
    },
    options: Object.values(Sizes),
  },
};
