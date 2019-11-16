import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import Box from './Box';
import { Colors } from '../../prop-types/color';

export default {
  title: 'Box',
};

export const withDefaults = () => (
  <Box
    block={boolean('Block', true)}
    bordered={boolean('Bordered', true)}
    color={select('Color', { None: null, ...Colors })}
    filled={boolean('Filled', false)}
    padded={boolean('Padded', true)}
    raised={boolean('Raised', false)}
    stretch={boolean('Stretch', false)}
  >
    {text('Content', 'Box Content')}
  </Box>
);
