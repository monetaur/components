import React from 'react';
import Button from './Button';
import { Sizes } from '../../prop-types/size';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
};

export const withDefaults = (args) => (
  <Button {...args} />
);

withDefaults.args = {
  block: false,
  children: 'Hello Button',
  disabled: false,
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
