import React from 'react';
import { action } from '@storybook/addon-actions';
import Dropdown from './Dropdown';
import { Sizes } from '../../prop-types/size';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const withSimpleOptions = (args) => (
  <Dropdown {...args} />
);

withSimpleOptions.args = {
  block: false,
  onChange: action('Dropdown Value Changed'),
  options: [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ],
  placeholer: 'Select One',
  raised: false,
};

withSimpleOptions.argTypes = {
  size: {
    control: {
      type: 'select',
    },
    options: Object.values(Sizes),
  },
};

export const withComplexOptions = withSimpleOptions.bind({});

withComplexOptions.args = {
  ...withSimpleOptions.args,
  options: [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 },
    { label: 'Option 5', value: 5 },
  ],
};

withComplexOptions.argTypes = withSimpleOptions.argTypes;
