import React from 'react';
import Input from './Input';
import { Colors } from '../../prop-types/color';
import { Sizes } from '../../prop-types/size';

export default {
  title: 'Input',
  component: Input,
};

export const withDefaults = (args) => (
  <Input {...args} />
);

withDefaults.args = {
  block: false,
  placeholder: 'Enter some text...',
  raised: false,
};

withDefaults.argTypes = {
  color: {
    control: {
      type: 'select',
    },
    options: Object.values(Colors),
  },
  size: {
    control: {
      type: 'select',
    },
    options: Object.values(Sizes),
  },
};
