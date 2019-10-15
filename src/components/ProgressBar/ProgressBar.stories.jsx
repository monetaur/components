import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import ProgressBar from './ProgressBar';

export default {
  title: 'ProgressBar',
};

export const withDefaults = () => (
  <ProgressBar
    percent={number('Percent', 10)}
  >
    {text('Content', '')}
  </ProgressBar>
);
