import React from 'react';
import Select from './Select';
import { Sizes } from '../../prop-types/size';
import { Colors } from '../../prop-types/color';

export default {
  title: 'Select',
  component: Select,
};

export const withDefaults = (args) => (
  <Select defaultValue="" {...args}>
    <option disabled hidden value="">{args.placeholder}</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
    <option value="4">Option 4</option>
    <option value="5">Option 5</option>
  </Select>
);

withDefaults.args = {
  block: false,
  placeholder: 'Select One',
  raised: false,
  required: true,
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
