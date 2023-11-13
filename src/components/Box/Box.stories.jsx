import React from 'react';
import Box from './Box';
import { Colors } from '../../prop-types/color';

export default {
  title: 'Box',
  component: Box,
};

export const withDefaults = (args) => (
  <Box {...args} />
);

withDefaults.args = {
  block: true,
  bordered: true,
  children: 'Box Content',
  filled: false,
  padded: true,
  raised: false,
};

withDefaults.argTypes = {
  color: {
    control: {
      type: 'select',
    },
    options: Object.values(Colors),
  },
};
