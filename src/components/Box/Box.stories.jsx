import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import Box from './Box';
import { Colors } from '../../prop-types/color';

export default {
  title: 'Box',
};

export const withDefaults = () => (
  <Box
    block={boolean('Block', false)}
    bordered={boolean('Bordered', true)}
    color={select('Color', { None: null, ...Colors })}
    filled={boolean('Filled', false)}
    padded={boolean('Padded', true)}
    raised={boolean('Raised', false)}
  >
    {text('Content', 'Box Content')}
  </Box>
);
